<template>
  <BaseModal
    :title="`Resolve Dependencies: ${workflowName}`"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    @close="emit('close')"
  >
    <template #body>
      <!-- Loading State -->
      <div v-if="loading && !analysisResult" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Analyzing workflow dependencies...</p>
      </div>

      <!-- Wizard Content -->
      <div v-else-if="analysisResult" class="wizard-content">
        <!-- Wizard Stepper -->
        <ResolutionStepper
          :steps="wizardSteps"
          :current-step="currentStep"
          :completed-steps="completedSteps"
          @step-change="handleStepChange"
        />

        <!-- Analysis Step -->
        <div v-if="currentStep === 'analysis'" class="step-content">
          <div class="analysis-summary">
            <div class="analysis-header">
              <h3 class="summary-title">Analysis Complete</h3>
              <p class="summary-description">
                Found {{ analysisResult.stats.total_nodes }} nodes and {{ analysisResult.stats.total_models }} models in this workflow.
              </p>
            </div>

            <div class="stats-grid">
              <!-- Node Stats -->
              <div class="stat-card">
                <div class="stat-header">Nodes</div>
                <div class="stat-items">
                  <div class="stat-item success">
                    <span class="stat-icon">✓</span>
                    <span class="stat-count">{{ analysisResult.nodes.resolved.length }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.nodes.ambiguous.length > 0" class="stat-item warning">
                    <span class="stat-icon">?</span>
                    <span class="stat-count">{{ analysisResult.nodes.ambiguous.length }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="analysisResult.nodes.unresolved.length > 0" class="stat-item error">
                    <span class="stat-icon">✗</span>
                    <span class="stat-count">{{ analysisResult.nodes.unresolved.length }}</span>
                    <span class="stat-label">missing</span>
                  </div>
                </div>
              </div>

              <!-- Model Stats -->
              <div class="stat-card">
                <div class="stat-header">Models</div>
                <div class="stat-items">
                  <div class="stat-item success">
                    <span class="stat-icon">✓</span>
                    <span class="stat-count">{{ analysisResult.models.resolved.length }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.models.ambiguous.length > 0" class="stat-item warning">
                    <span class="stat-icon">?</span>
                    <span class="stat-count">{{ analysisResult.models.ambiguous.length }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="analysisResult.models.unresolved.length > 0" class="stat-item error">
                    <span class="stat-icon">✗</span>
                    <span class="stat-count">{{ analysisResult.models.unresolved.length }}</span>
                    <span class="stat-label">missing</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="needsUserInput" class="status-message warning">
              <span class="status-icon">⚠</span>
              <span class="status-text">{{ unresolvedAndAmbiguousNodes.length + unresolvedAndAmbiguousModels.length }} items need your input</span>
            </div>
            <div v-else class="status-message success">
              <span class="status-icon">✓</span>
              <span class="status-text">All dependencies are resolved!</span>
            </div>
          </div>
        </div>

        <!-- Node Resolution Step -->
        <NodeResolutionStep
          v-if="currentStep === 'nodes'"
          :nodes="unresolvedAndAmbiguousNodes"
          :current-index="nodeCurrentIndex"
          :node-choices="nodeChoices"
          :has-models="needsModelResolution"
          @next="handleNodeNext"
          @previous="handleNodePrevious"
          @complete="handleNodeComplete"
          @search="handleNodeSearch"
          @manual-entry="handleNodeManualEntry"
          @mark-optional="handleNodeMarkOptional"
          @skip="handleNodeSkip"
          @option-selected="handleNodeOptionSelected"
        />

        <!-- Model Resolution Step -->
        <ModelResolutionStep
          v-if="currentStep === 'models'"
          :models="unresolvedAndAmbiguousModels"
          :current-index="modelCurrentIndex"
          :model-choices="modelChoices"
          @next="handleModelNext"
          @previous="handleModelPrevious"
          @complete="handleModelComplete"
          @search="handleModelSearch"
          @download-url="handleModelDownloadUrl"
          @mark-optional="handleModelMarkOptional"
          @skip="handleModelSkip"
          @option-selected="handleModelOptionSelected"
        />

        <!-- Review Step -->
        <div v-if="currentStep === 'review'" class="step-content">
          <div class="review-summary">
            <div class="review-header">
              <h3 class="summary-title">Review Your Choices</h3>
              <p class="summary-description">
                Confirm the actions to take for resolving this workflow's dependencies.
              </p>
            </div>

            <!-- Summary Counts -->
            <div class="review-stats">
              <div class="review-stat">
                <span class="stat-value">{{ installCount }}</span>
                <span class="stat-label">to install</span>
              </div>
              <div class="review-stat">
                <span class="stat-value">{{ downloadCount }}</span>
                <span class="stat-label">to download</span>
              </div>
              <div class="review-stat">
                <span class="stat-value">{{ optionalCount }}</span>
                <span class="stat-label">marked optional</span>
              </div>
              <div class="review-stat">
                <span class="stat-value">{{ skipCount }}</span>
                <span class="stat-label">skipped</span>
              </div>
            </div>

            <!-- Node Choices Review -->
            <div v-if="nodeChoices.size > 0" class="review-section">
              <h4 class="section-title">Node Packages ({{ nodeChoices.size }})</h4>
              <div class="review-items">
                <div v-for="[nodeType, choice] in nodeChoices" :key="nodeType" class="review-item">
                  <code class="item-name">{{ nodeType }}</code>
                  <div class="item-choice">
                    <span v-if="choice.action === 'install'" class="choice-badge install">
                      {{ choice.package_id }}
                    </span>
                    <span v-else-if="choice.action === 'optional'" class="choice-badge optional">
                      Optional
                    </span>
                    <span v-else-if="choice.action === 'skip'" class="choice-badge skip">
                      Skip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Model Choices Review -->
            <div v-if="modelChoices.size > 0" class="review-section">
              <h4 class="section-title">Models ({{ modelChoices.size }})</h4>
              <div class="review-items">
                <div v-for="[filename, choice] in modelChoices" :key="filename" class="review-item">
                  <code class="item-name">{{ filename }}</code>
                  <div class="item-choice">
                    <span v-if="choice.action === 'select'" class="choice-badge install">
                      {{ choice.selected_model?.filename }}
                    </span>
                    <span v-else-if="choice.action === 'download'" class="choice-badge download">
                      Download
                    </span>
                    <span v-else-if="choice.action === 'optional'" class="choice-badge optional">
                      Optional
                    </span>
                    <span v-else-if="choice.action === 'skip'" class="choice-badge skip">
                      Skip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="nodeChoices.size === 0 && modelChoices.size === 0" class="no-choices">
              No dependencies need resolution.
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Cancel
      </BaseButton>

      <!-- Analysis Step Footer -->
      <BaseButton
        v-if="currentStep === 'analysis'"
        variant="primary"
        :disabled="loading"
        @click="handleContinueFromAnalysis"
      >
        {{ needsUserInput ? 'Continue' : 'Apply' }}
      </BaseButton>

      <!-- Review Step Footer -->
      <BaseButton
        v-if="currentStep === 'review'"
        variant="secondary"
        :disabled="applying"
        @click="goToPreviousStep"
      >
        ← Back
      </BaseButton>
      <BaseButton
        v-if="currentStep === 'review'"
        variant="primary"
        :disabled="applying"
        :loading="applying"
        @click="handleApply"
      >
        Apply Resolution
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useWorkflowResolution } from '@/composables/useWorkflowResolution'
import type {
  FullResolutionResult,
  UnresolvedNode,
  AmbiguousNode,
  UnresolvedModel,
  AmbiguousModel,
  NodeChoice,
  ModelChoice
} from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ResolutionStepper from './base/molecules/ResolutionStepper.vue'
import NodeResolutionStep from './base/organisms/NodeResolutionStep.vue'
import ModelResolutionStep from './base/organisms/ModelResolutionStep.vue'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  install: []
  refresh: []
}>()

const { analyzeWorkflow, applyResolution } = useWorkflowResolution()

// State
const analysisResult = ref<FullResolutionResult | null>(null)
const loading = ref(false)
const applying = ref(false)
const error = ref<string | null>(null)

// Wizard state
type WizardStep = 'analysis' | 'nodes' | 'models' | 'review'
const currentStep = ref<WizardStep>('analysis')
const completedSteps = ref<WizardStep[]>([])
const nodeCurrentIndex = ref(0)
const modelCurrentIndex = ref(0)

// User choices
const nodeChoices = ref<Map<string, NodeChoice>>(new Map())
const modelChoices = ref<Map<string, ModelChoice>>(new Map())

// Wizard steps configuration
const wizardSteps = computed(() => {
  const steps = [
    { id: 'analysis', label: 'Analysis' }
  ]

  if (needsNodeResolution.value) {
    steps.push({ id: 'nodes', label: 'Nodes' })
  }

  if (needsModelResolution.value) {
    steps.push({ id: 'models', label: 'Models' })
  }

  steps.push({ id: 'review', label: 'Review' })

  return steps
})

// Computed properties
const needsUserInput = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.stats.needs_user_input
})

const needsNodeResolution = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.nodes.unresolved.length > 0 ||
         analysisResult.value.nodes.ambiguous.length > 0
})

const needsModelResolution = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.models.unresolved.length > 0 ||
         analysisResult.value.models.ambiguous.length > 0
})

const unresolvedAndAmbiguousNodes = computed(() => {
  if (!analysisResult.value) return []

  // Transform unresolved nodes
  const unresolved = analysisResult.value.nodes.unresolved.map(node => ({
    node_type: node.reference.node_type,
    reason: node.reason,
    is_unresolved: true
  }))

  // Transform ambiguous nodes
  const ambiguous = analysisResult.value.nodes.ambiguous.map(node => ({
    node_type: node.reference.node_type,
    has_multiple_options: true,
    options: node.options.map(opt => ({
      package_id: opt.package.package_id,
      title: opt.package.title,
      match_confidence: opt.match_confidence,
      match_type: opt.match_type,
      is_installed: opt.is_installed
    }))
  }))

  return [...unresolved, ...ambiguous]
})

const unresolvedAndAmbiguousModels = computed(() => {
  if (!analysisResult.value) return []

  // Transform unresolved models
  const unresolved = analysisResult.value.models.unresolved.map(model => ({
    filename: model.reference.widget_value,
    reference: model.reference,
    reason: model.reason,
    is_unresolved: true
  }))

  // Transform ambiguous models
  const ambiguous = analysisResult.value.models.ambiguous.map(model => ({
    filename: model.reference.widget_value,
    reference: model.reference,
    has_multiple_options: true,
    options: model.options.map(opt => ({
      model: opt.model,
      match_confidence: opt.match_confidence,
      match_type: opt.match_type,
      has_download_source: opt.has_download_source
    }))
  }))

  return [...unresolved, ...ambiguous]
})

// Review step computed counts
const installCount = computed(() => {
  let count = 0
  for (const choice of nodeChoices.value.values()) {
    if (choice.action === 'install') count++
  }
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'select') count++
  }
  return count
})

const downloadCount = computed(() => {
  let count = 0
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'download') count++
  }
  return count
})

const optionalCount = computed(() => {
  let count = 0
  for (const choice of nodeChoices.value.values()) {
    if (choice.action === 'optional') count++
  }
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'optional') count++
  }
  return count
})

const skipCount = computed(() => {
  let count = 0
  for (const choice of nodeChoices.value.values()) {
    if (choice.action === 'skip') count++
  }
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'skip') count++
  }
  return count
})

// Methods
async function loadAnalysis() {
  loading.value = true
  error.value = null

  try {
    analysisResult.value = await analyzeWorkflow(props.workflowName)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to analyze workflow'
  } finally {
    loading.value = false
  }
}

function handleContinueFromAnalysis() {
  completedSteps.value.push('analysis')

  if (needsNodeResolution.value) {
    currentStep.value = 'nodes'
  } else if (needsModelResolution.value) {
    currentStep.value = 'models'
  } else {
    currentStep.value = 'review'
  }
}

function handleStepChange(stepId: string) {
  currentStep.value = stepId as WizardStep
}

function goToPreviousStep() {
  const currentIndex = wizardSteps.value.findIndex(s => s.id === currentStep.value)
  if (currentIndex > 0) {
    currentStep.value = wizardSteps.value[currentIndex - 1].id as WizardStep
  }
}

// Node resolution handlers
function handleNodeNext() {
  nodeCurrentIndex.value++
}

function handleNodePrevious() {
  if (nodeCurrentIndex.value > 0) {
    nodeCurrentIndex.value--
  } else {
    // Go back to analysis
    currentStep.value = 'analysis'
  }
}

function handleNodeComplete() {
  completedSteps.value.push('nodes')

  if (needsModelResolution.value) {
    currentStep.value = 'models'
  } else {
    currentStep.value = 'review'
  }
}

function handleNodeSearch(nodeType: string) {
  // Handle node search - to be implemented with search panel
  console.log('Node search:', nodeType)
  // For now, just allow continuing
  nodeChoices.value.set(nodeType, {
    action: 'skip'
  })
}

function handleNodeManualEntry(nodeType: string) {
  // Handle manual node entry - to be implemented with manual entry panel
  console.log('Manual entry for:', nodeType)
  // For now, mark as skipped so user can continue
  nodeChoices.value.set(nodeType, {
    action: 'skip'
  })
}

function handleNodeMarkOptional(nodeType: string) {
  console.log('[WorkflowResolveModal] handleNodeMarkOptional called with:', nodeType)
  nodeChoices.value.set(nodeType, {
    action: 'optional'
  })
  console.log('[WorkflowResolveModal] nodeChoices after optional:', Array.from(nodeChoices.value.entries()))
}

function handleNodeSkip(nodeType: string) {
  console.log('[WorkflowResolveModal] handleNodeSkip called with:', nodeType)
  nodeChoices.value.set(nodeType, {
    action: 'skip'
  })
  console.log('[WorkflowResolveModal] nodeChoices after skip:', Array.from(nodeChoices.value.entries()))
}

function handleNodeOptionSelected(nodeType: string, index: number) {
  const currentNode = unresolvedAndAmbiguousNodes.value.find(n => n.node_type === nodeType)
  if (currentNode && currentNode.options && currentNode.options[index]) {
    const selectedOption = currentNode.options[index]
    nodeChoices.value.set(nodeType, {
      action: 'install',
      package_id: selectedOption.package_id
    })
  }
}

// Model resolution handlers
function handleModelNext() {
  modelCurrentIndex.value++
}

function handleModelPrevious() {
  if (modelCurrentIndex.value > 0) {
    modelCurrentIndex.value--
  } else {
    // Go back to nodes or analysis
    currentStep.value = needsNodeResolution.value ? 'nodes' : 'analysis'
  }
}

function handleModelComplete() {
  completedSteps.value.push('models')
  currentStep.value = 'review'
}

function handleModelSearch(filename: string) {
  // Handle model search - to be implemented
  console.log('Model search:', filename)
  // For now, just allow continuing
  modelChoices.value.set(filename, {
    action: 'skip'
  })
}

function handleModelDownloadUrl(filename: string, url: string, targetPath?: string) {
  modelChoices.value.set(filename, {
    action: 'download',
    url,
    target_path: targetPath
  })
}

function handleModelMarkOptional(filename: string) {
  modelChoices.value.set(filename, {
    action: 'optional'
  })
}

function handleModelSkip(filename: string) {
  modelChoices.value.set(filename, {
    action: 'skip'
  })
}

function handleModelOptionSelected(filename: string, index: number) {
  const currentModel = unresolvedAndAmbiguousModels.value.find(m => m.filename === filename)
  if (currentModel && currentModel.options && currentModel.options[index]) {
    const selectedOption = currentModel.options[index]
    modelChoices.value.set(filename, {
      action: 'select',
      selected_model: selectedOption.model
    })
  }
}

async function handleApply() {
  applying.value = true
  error.value = null

  try {
    await applyResolution(props.workflowName, nodeChoices.value, modelChoices.value)
    emit('install')
    emit('refresh')
    emit('close')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to apply resolution'
  } finally {
    applying.value = false
  }
}

onMounted(loadAnalysis)
</script>

<style scoped>
/* Loading State */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--cg-space-8);
  gap: var(--cg-space-3);
  color: var(--cg-color-text-muted);
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--cg-color-border);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Wizard Content */
.wizard-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.step-content {
  padding: var(--cg-space-4);
}

/* Analysis Summary */
.analysis-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.analysis-header,
.review-header {
  margin-bottom: var(--cg-space-2);
}

.summary-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0 0 var(--cg-space-1) 0;
}

.summary-description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--cg-space-3);
}

.stat-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  padding: var(--cg-space-3);
}

.stat-header {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin-bottom: var(--cg-space-2);
}

.stat-items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.stat-item.success {
  color: var(--cg-color-success);
}

.stat-item.warning {
  color: var(--cg-color-warning);
}

.stat-item.error {
  color: var(--cg-color-error);
}

.stat-icon {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-bold);
}

.stat-count {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
}

.stat-label {
  color: inherit;
  opacity: 0.8;
}

/* Status Messages */
.status-message {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
}

.status-message.warning {
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  color: var(--cg-color-warning);
}

.status-message.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  color: var(--cg-color-success);
}

.status-icon {
  font-size: var(--cg-font-size-lg);
}

/* Review Summary */
.review-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.review-stats {
  display: flex;
  gap: var(--cg-space-4);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-lg);
}

.review-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.review-stat .stat-value {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
  color: var(--cg-color-text-primary);
}

.review-stat .stat-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.review-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-title {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
  padding-bottom: var(--cg-space-1);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.review-items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.review-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.item-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-accent);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
}

.item-choice {
  display: flex;
  gap: var(--cg-space-2);
}

.choice-badge {
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  border-radius: var(--cg-radius-sm);
}

.choice-badge.install,
.choice-badge.download {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.choice-badge.optional {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.choice-badge.skip {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
}

.no-choices {
  padding: var(--cg-space-4);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
}
</style>
