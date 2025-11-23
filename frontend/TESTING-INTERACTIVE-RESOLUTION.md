# Testing Interactive Workflow Resolution - Mock Data Guide

This guide explains how to test the new interactive workflow resolution UI with comprehensive mock data scenarios.

## Setup

### Enable Mock API Mode

Mock API mode is enabled by default. The panel will automatically use mock data when running in development or when the backend is unavailable.

To explicitly control mock mode, set the environment variable in `.env`:

```bash
VITE_USE_MOCK_API=true   # Use mock data (default)
# or
VITE_USE_MOCK_API=false  # Connect to real backend
```

### Build and Run

```bash
npm run build
```

The panel will be available in ComfyUI after the build completes.

---

## Test Scenarios

The mock API provides 6 different test scenarios. Each scenario demonstrates different UI states and resolution flows.

### How to Test

1. Open the ComfyUI panel
2. Navigate to a workflow that needs resolution
3. Click "Resolve Dependencies" (or similar button)
4. The workflow name determines which scenario is loaded

### Scenario 1: Unresolved Nodes Only
**Workflow Name:** `test-unresolved-nodes.json`

**What it demonstrates:**
- ✅ 1 resolved node (KSampler - builtin)
- ❌ 2 unresolved nodes (CustomUpscaler, MagicNode)
- ✅ 1 resolved model (flux1-dev.safetensors)
- No ambiguous matches

**Expected UI:**
- Analysis step shows: 1 resolved, 2 unresolved nodes
- Node resolution step appears (models step skipped - all resolved)
- Unresolved nodes show "Search", "Download URL", "Optional", "Skip" buttons
- Review step shows user's choices

**Use this to test:**
- Unresolved node display
- Search panel for nodes
- Manual URL entry
- Mark as optional functionality
- Skip functionality

---

### Scenario 2: Unresolved Models Only
**Workflow Name:** `test-unresolved-models.json`

**What it demonstrates:**
- ✅ 1 resolved node (LoadCheckpoint - builtin)
- ❌ 2 unresolved models (super_rare_model.safetensors, custom_vae.safetensors)
- No ambiguous matches

**Expected UI:**
- Analysis step shows: 1 resolved node, 0 unresolved, 2 unresolved models
- Node step skipped (all nodes resolved)
- Model resolution step appears
- Unresolved models show download URL entry, search, optional, skip

**Use this to test:**
- Model resolution flow without node issues
- Model download URL entry
- Model search functionality
- Model optional marking

---

### Scenario 3: Ambiguous Nodes (Multiple Options)
**Workflow Name:** `test-ambiguous-nodes.json`

**What it demonstrates:**
- ⚡ 2 ambiguous nodes (FluxLoader, ImageEnhancer)
- Each has 2-3 package options to choose from
- ✅ 1 resolved model (sdxl_base.safetensors)
- Confidence scores: 95%, 90%, 88%, 85%, 82%

**Expected UI:**
- Analysis step shows: 2 ambiguous nodes
- Node resolution step shows radio button selection
- Each node displays 2-3 options with confidence badges
- Confidence badges color-coded (high/medium/low)
- Optional checkbox available for ambiguous nodes

**Use this to test:**
- Ambiguous node selection UI
- Radio button groups
- Confidence badge display (high: green, medium: yellow, low: red)
- Package title and description display
- Option selection tracking

---

### Scenario 4: Ambiguous Models (Multiple Options)
**Workflow Name:** `test-ambiguous-models.json`

**What it demonstrates:**
- ✅ 1 resolved node (CheckpointLoader - builtin)
- ⚡ 1 ambiguous model (sdxl_model.safetensors)
- 3 model options: sdxl_base, sdxl_refiner, sdxl_turbo
- Confidence scores: 95%, 85%, 75%
- Download source availability varies

**Expected UI:**
- Analysis step shows: 1 ambiguous model
- Model resolution step shows radio cards
- Each model option shows size (GB), confidence, download availability
- File size formatted (6.5 GB, 6.1 GB, 6.7 GB)

**Use this to test:**
- Ambiguous model selection UI
- Model radio cards
- File size formatting
- Download source indicators
- Model metadata display

---

### Scenario 5: Complex Mixed (Everything!)
**Workflow Name:** `test-mixed-complex.json`

**What it demonstrates:**
- ✅ 1 resolved node
- ❌ 1 unresolved node (UltraUpscaler)
- ⚡ 1 ambiguous node (FluxSampler - 2 options)
- ✅ 1 resolved model
- ❌ 1 unresolved model (flux_vae.safetensors)
- ⚡ 1 ambiguous model (sdxl.safetensors - 2 options)

**Expected UI:**
- Analysis shows mix of all states
- Both node and model resolution steps appear
- Wizard navigates through all phases
- Review step shows comprehensive summary

**Use this to test:**
- Full wizard flow (Analysis → Nodes → Models → Review → Apply)
- Navigation between steps (Next, Previous, Back)
- Completed steps tracking (checkmarks in stepper)
- Mixed resolution types in single workflow
- Review summary with all choice types

---

### Scenario 6: All Resolved (Perfect!)
**Workflow Name:** `test-all-resolved.json`

**What it demonstrates:**
- ✅ 3 resolved nodes (all builtin)
- ✅ 2 resolved models (both exact matches)
- ✨ No user input needed!

**Expected UI:**
- Analysis shows "All dependencies are resolved!" message
- Green success indicators
- No resolution steps needed
- "Continue" button leads directly to review
- Review shows "No actions selected"

**Use this to test:**
- Success state UI
- Step skipping logic (nodes and models skipped)
- Empty review state
- Close/cancel flow

---

## Default Scenario
**Workflow Name:** Any other name (e.g., `my-workflow.json`)

**What it demonstrates:**
- ✅ 1 resolved node (KSampler)
- ❌ 1 unresolved node (CustomNode1)
- ⚡ 1 ambiguous node (FluxNode - 2 options)
- ❌ 1 unresolved model (test_model.safetensors)

**Use this to test:**
- Standard mixed scenario
- General navigation flow

---

## Testing Node Search

When you click "Search" on an unresolved node, the mock API returns:

```
Results (sorted by confidence):
1. comfyui-flux-official (95%) - Official FLUX support
2. flux-advanced-toolkit (88%) - Advanced tools
3. comfyui-upscaler-pack (82%) - Upscaling collection
4. ultimate-image-tools (75%) - Image processing toolkit
5. comfyui-controlnet-aux (70%) - ControlNet preprocessors
```

**Use this to test:**
- Search panel UI
- Search results display
- Result selection and application
- Search result confidence badges

---

## Testing Model Search

When you click "Search" on an unresolved model, the mock API returns:

```
Results (sorted by confidence):
1. flux1-dev-fp8.safetensors (11.7 GB) - 95%
2. sdxl_base_1.0.safetensors (6.5 GB) - 90%
3. sdxl_refiner_1.0.safetensors (6.1 GB) - 85%
4. flux_vae.safetensors (335 MB) - 80%
5. controlnet_openpose.safetensors (1.45 GB) - 75%
```

**Use this to test:**
- Model search panel UI
- File size formatting
- Category display
- Download source availability indicators

---

## Apply Resolution Testing

When you click "Apply" in the review step, the mock API:

1. Processes your node choices
2. Processes your model choices
3. Returns installation plan with:
   - List of nodes to install
   - List of models to download (with URLs, sizes, paths)
   - Estimated time (30s per node + 120s per model)

**Console output:**
The mock API logs all actions to the browser console, so you can verify:
- Which choices were processed
- What installation plan was generated
- Any errors or edge cases

---

## UI States to Test

### Wizard Navigation
- ✅ Analysis → Nodes → Models → Review flow
- ✅ Skip nodes step if all resolved
- ✅ Skip models step if all resolved
- ✅ Previous/Back button navigation
- ✅ Completed steps tracking (green checkmarks)

### Node Resolution
- ✅ Unresolved node display with action buttons
- ✅ Ambiguous node display with radio selection
- ✅ Confidence badges (high/medium/low colors)
- ✅ Optional checkbox functionality
- ✅ Search panel integration
- ✅ Manual URL entry
- ✅ Progress tracking (1 of 2, 2 of 2)

### Model Resolution
- ✅ Unresolved model display with action buttons
- ✅ Ambiguous model display with radio cards
- ✅ File size formatting (GB/MB display)
- ✅ Download URL entry panel
- ✅ Search panel integration
- ✅ Progress tracking

### Review Step
- ✅ Node choices summary
- ✅ Model choices summary
- ✅ Choice badges (Install/Optional/Skip)
- ✅ Back to edit functionality
- ✅ Apply button

### Error Handling
- ✅ Analysis failure display
- ✅ Apply failure display
- ✅ Error messages in modal

---

## Theme & Styling to Verify

All components use CSS variables from `comfy.css`:

**Colors:**
- `--cg-color-success` (green) - Resolved items, high confidence
- `--cg-color-warning` (yellow/orange) - Medium confidence, ambiguous
- `--cg-color-error` (red) - Unresolved, low confidence
- `--cg-color-info` (blue) - Information, links
- `--cg-color-text-primary` - Main text
- `--cg-color-text-muted` - Secondary text
- `--cg-color-bg-tertiary` - Card backgrounds
- `--cg-color-border` - Borders

**Spacing:**
- `--cg-space-2`, `--cg-space-3`, `--cg-space-4` - Consistent spacing

**Typography:**
- `--cg-font-mono` - Code/technical text
- `--cg-font-size-xs`, `-sm`, `-base`, `-lg` - Font sizes
- `--cg-letter-spacing-wide` - Uppercase labels

---

## Tips for Testing

1. **Use Browser DevTools** - Check console for mock API logs
2. **Test All Scenarios** - Try each workflow name to see different states
3. **Check Responsiveness** - Resize browser to test layout
4. **Verify Theme** - All colors should match comfy.css theme
5. **Test Navigation** - Go back and forth between steps
6. **Try Edge Cases** - Skip all items, mark all optional, etc.
7. **Check Performance** - Delays simulate real API (300-800ms)

---

## Next Steps

Once you're satisfied with the UI/UX:

1. Backend API implementation (Phase 1)
2. Search panel components (Phase 3)
3. Download queue system (Phase 4)
4. Real API integration testing
5. End-to-end workflow tests

---

## Questions or Issues?

If you find UI bugs or have UX suggestions, note them down and we can iterate on the design before building the real backend!
