import { app } from '../../scripts/app.js'
import { createApp, h } from 'vue'
import ComfyGitPanel from '@/components/ComfyGitPanel.vue'

// Load component CSS
const cssLink = document.createElement('link')
cssLink.rel = 'stylesheet'
cssLink.href = new URL('./comfygit-panel.css', import.meta.url).href
document.head.appendChild(cssLink)

// Panel state
let panelOverlay: HTMLElement | null = null

function showPanel() {
  if (panelOverlay) {
    panelOverlay.remove()
  }

  // Create overlay
  panelOverlay = document.createElement('div')
  panelOverlay.className = 'comfygit-panel-overlay'

  // Create panel container
  const panelContainer = document.createElement('div')
  panelContainer.className = 'comfygit-panel-container'
  panelOverlay.appendChild(panelContainer)

  // Close on overlay click
  panelOverlay.addEventListener('click', (e) => {
    if (e.target === panelOverlay) {
      closePanel()
    }
  })

  // Close on Escape
  const escHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePanel()
      document.removeEventListener('keydown', escHandler)
    }
  }
  document.addEventListener('keydown', escHandler)

  // Mount Vue app
  const vueApp = createApp({
    render: () => h('div', { class: 'comfygit-panel-wrapper' }, [
      h(ComfyGitPanel),
      h('button', {
        class: 'panel-close-btn',
        onClick: closePanel
      }, '×')
    ])
  })

  vueApp.mount(panelContainer)

  document.body.appendChild(panelOverlay)
}

function closePanel() {
  if (panelOverlay) {
    panelOverlay.remove()
    panelOverlay = null
  }
}

// Inject styles
const styles = document.createElement('style')
styles.textContent = `
  .comfygit-panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comfygit-panel-container {
    width: 600px;
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
  }

  .comfygit-panel-wrapper {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    background: var(--comfy-menu-bg, #353535);
    border: 1px solid var(--border-color, #4a4a4a);
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }

  .panel-close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    color: var(--input-text, #ddd);
    font-size: 24px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    line-height: 1;
  }

  .panel-close-btn:hover {
    background: var(--comfy-input-bg, #222);
  }

  .comfygit-toolbar-btn {
    background: #3b82f6 !important;
    color: white !important;
    border: none !important;
  }

  .comfygit-toolbar-btn:hover {
    background: #2563eb !important;
  }
`
document.head.appendChild(styles)

// Register extension
app.registerExtension({
  name: 'Comfy.ComfyGitPanel',

  async setup() {
    // Add ComfyGit button to the top menu bar
    const panelButton = document.createElement('button')
    panelButton.className = 'comfyui-button comfyui-menu-mobile-collapse comfygit-toolbar-btn'
    panelButton.textContent = 'ComfyGit'
    panelButton.title = 'ComfyGit Control Panel'

    panelButton.onclick = () => {
      showPanel()
    }

    // Insert before settings button
    if (app.menu?.settingsGroup?.element) {
      app.menu.settingsGroup.element.before(panelButton)
      console.log('[ComfyGit] Control Panel button added to toolbar')
    }
  }
})
