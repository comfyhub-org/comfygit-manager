import { ref } from 'vue'
import type {
  FullResolutionResult,
  NodeChoice,
  ModelChoice,
  AppliedResolutionResult,
  NodeSearchResult,
  ModelSearchResult
} from '@/types/comfygit'

declare global {
  interface Window {
    app?: {
      api: {
        fetchApi: (endpoint: string, options?: RequestInit) => Promise<Response>
      }
    }
  }
}

export function useWorkflowResolution() {
  const result = ref<FullResolutionResult | null>(null)
  const appliedResult = ref<AppliedResolutionResult | null>(null)
  const searchResults = ref<NodeSearchResult[]>([])
  const modelSearchResults = ref<ModelSearchResult[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (!window.app?.api) {
      throw new Error('ComfyUI API not available')
    }

    const response = await window.app.api.fetchApi(endpoint, options)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.error || errorData.message || `Request failed: ${response.status}`
      throw new Error(errorMessage)
    }

    return response.json()
  }

  async function analyzeWorkflow(workflowName: string): Promise<FullResolutionResult> {
    isLoading.value = true
    error.value = null

    try {
      const data = await fetchApi<FullResolutionResult>(
        `/v2/comfygit/workflow/${workflowName}/analyze`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        }
      )

      result.value = data
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function applyResolution(
    workflowName: string,
    nodeChoices: Map<string, NodeChoice>,
    modelChoices: Map<string, ModelChoice>
  ): Promise<AppliedResolutionResult> {
    isLoading.value = true
    error.value = null

    try {
      // Convert Map to plain object for JSON serialization
      const nodeChoicesObj = Object.fromEntries(nodeChoices)
      const modelChoicesObj = Object.fromEntries(modelChoices)

      const data = await fetchApi<AppliedResolutionResult>(
        `/v2/comfygit/workflow/${workflowName}/apply-resolution`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            node_choices: nodeChoicesObj,
            model_choices: modelChoicesObj
          })
        }
      )

      appliedResult.value = data
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function searchNodes(query: string, limit: number = 10): Promise<NodeSearchResult[]> {
    isLoading.value = true
    error.value = null

    try {
      const data = await fetchApi<{ results: NodeSearchResult[]; total: number }>(
        '/v2/comfygit/workflow/search-nodes',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, limit })
        }
      )

      searchResults.value = data.results
      return data.results
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function searchModels(query: string, limit: number = 10): Promise<ModelSearchResult[]> {
    isLoading.value = true
    error.value = null

    try {
      const data = await fetchApi<{ results: ModelSearchResult[]; total: number }>(
        '/v2/comfygit/workflow/search-models',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, limit })
        }
      )

      modelSearchResults.value = data.results
      return data.results
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = errorMessage
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    // State
    result,
    appliedResult,
    searchResults,
    modelSearchResults,
    isLoading,
    error,

    // Methods
    analyzeWorkflow,
    applyResolution,
    searchNodes,
    searchModels
  }
}
