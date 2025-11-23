/**
 * Debug script to explore ComfyUI's structure
 * Add this temporarily to see what's available
 */

import { app } from '../../scripts/app.js'

app.registerExtension({
  name: 'Comfy.DebugStructure',

  async setup() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('[DEBUG] ===== ComfyUI Structure Debug =====')
    console.log('[DEBUG] window.app keys:', Object.keys(window.app || {}))
    console.log('[DEBUG] window.app.api keys:', Object.keys(window.app?.api || {}))
    console.log('[DEBUG] window keys (filtered):', Object.keys(window).filter(k =>
      k.toLowerCase().includes('workflow') ||
      k.toLowerCase().includes('store') ||
      k.toLowerCase().includes('pinia') ||
      k.toLowerCase().includes('vue')
    ))

    // Check Pinia
    console.log('[DEBUG] window.$pinia:', window.$pinia)
    console.log('[DEBUG] window.pinia:', window.pinia)

    // Check Vue
    console.log('[DEBUG] window.$vue:', window.$vue)
    console.log('[DEBUG] window.Vue:', window.Vue)

    // Check useWorkflowStore
    console.log('[DEBUG] window.useWorkflowStore:', window.useWorkflowStore)
    console.log('[DEBUG] typeof window.useWorkflowStore:', typeof window.useWorkflowStore)

    // Check app.workflowManager or similar
    const appKeys = Object.keys(window.app || {})
    console.log('[DEBUG] app properties that might be workflow-related:',
      appKeys.filter(k => k.toLowerCase().includes('work') || k.toLowerCase().includes('save'))
    )

    console.log('[DEBUG] ===== End Debug =====')
  }
})
