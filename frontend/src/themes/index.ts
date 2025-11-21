/**
 * ComfyGit Panel Theme System
 *
 * Supports multiple themes with easy switching.
 * Default: comfy (ComfyUI-inspired modern design)
 * Alternative: phosphor (CRT terminal aesthetic)
 */

export type ThemeName = 'comfy' | 'phosphor'

// Theme CSS imports (will be bundled)
import './base.css'
import comfyCss from './comfy.css?inline'
import phosphorCss from './phosphor.css?inline'

const THEME_CSS_MAP: Record<ThemeName, string> = {
  comfy: comfyCss,
  phosphor: phosphorCss
}

const DEFAULT_THEME: ThemeName = 'comfy'
const STORAGE_KEY = 'comfygit-theme'

let themeStyleElement: HTMLStyleElement | null = null
let currentTheme: ThemeName = DEFAULT_THEME

/**
 * Get the initial theme from storage or use default
 */
export function getInitialTheme(): ThemeName {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && (stored === 'comfy' || stored === 'phosphor')) {
      return stored
    }
  } catch {
    // localStorage not available or failed
  }
  return DEFAULT_THEME
}

/**
 * Apply a theme by injecting its CSS
 */
export function applyTheme(theme: ThemeName = DEFAULT_THEME): void {
  // Remove existing theme styles
  if (themeStyleElement) {
    themeStyleElement.remove()
  }

  // Create new style element
  themeStyleElement = document.createElement('style')
  themeStyleElement.id = 'comfygit-theme-styles'
  themeStyleElement.setAttribute('data-theme', theme)

  // Set theme CSS
  themeStyleElement.textContent = THEME_CSS_MAP[theme]
  document.head.appendChild(themeStyleElement)

  // Set data attribute on body for theme-specific selectors
  document.body.setAttribute('data-comfygit-theme', theme)

  // Update current theme
  currentTheme = theme

  // Persist to storage
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // localStorage not available
  }

  console.log(`[ComfyGit] Applied theme: ${theme}`)
}

/**
 * Get the current theme
 */
export function getCurrentTheme(): ThemeName {
  return currentTheme
}

/**
 * Switch to a different theme
 */
export function switchTheme(theme: ThemeName): void {
  applyTheme(theme)
}
