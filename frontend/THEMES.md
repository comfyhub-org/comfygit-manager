# ComfyGit Theme System

ComfyGit supports multiple visual themes with easy switching and extensibility.

## Available Themes

### `comfy` (Default)
Modern, professional design inspired by ComfyUI Manager.

**Characteristics:**
- Inter font family (clean sans-serif)
- Charcoal backgrounds (#2d2e32) with subtle depth
- Rounded corners (4-8px)
- Blue accents (#31b9f4)
- Semantic color system (green/yellow/red/blue)
- Subtle shadows for elevation
- Optimized for readability and productivity

**Best for:** Extended use, readability, professional appearance

### `phosphor`
CRT terminal aesthetic with green phosphor glow.

**Characteristics:**
- IBM Plex Mono (monospace everything)
- Pure black backgrounds (#0a0a0a)
- Sharp rectangular edges (0px radius)
- Phosphor green (#00ff41) with glow effects
- CRT scan lines and subtle flicker
- Terminal prefixes (>, #, ├─)
- Blinking cursor status indicator

**Best for:** Terminal enthusiasts, retro aesthetic, git-focused workflows

## Theme Architecture

### File Structure
```
frontend/src/themes/
├── index.ts           # Theme system (switching, persistence)
├── base.css           # CSS variable definitions (theme-agnostic)
├── comfy.css          # Comfy theme overrides
└── phosphor.css       # Phosphor theme overrides
```

### How It Works

1. **Base Variables** (`base.css`): Defines all CSS custom properties with default values
2. **Theme Files** (`comfy.css`, `phosphor.css`): Override variables with theme-specific values
3. **Theme System** (`index.ts`): Handles theme application and persistence
4. **Data Attributes**: Themes apply via `[data-comfygit-theme="themeName"]` selectors

### Usage in Code

```typescript
import { switchTheme, getCurrentTheme } from '@/themes'

// Switch theme
switchTheme('comfy')      // or 'phosphor'

// Get current theme
const current = getCurrentTheme()  // Returns 'comfy' | 'phosphor'
```

### Theme Persistence

The selected theme is automatically saved to `localStorage` under the key `comfygit-theme` and restored on next load.

## Adding a New Theme

To create a new theme:

1. **Create theme file:** `frontend/src/themes/my-theme.css`
   ```css
   [data-comfygit-theme="my-theme"] {
     --cg-color-bg-primary: #your-color;
     --cg-color-text-primary: #your-color;
     /* Override more variables as needed */
   }
   ```

2. **Import in index.ts:**
   ```typescript
   import myThemeCss from './my-theme.css?inline'

   export type ThemeName = 'comfy' | 'phosphor' | 'my-theme'

   const THEME_CSS_MAP: Record<ThemeName, string> = {
     comfy: comfyCss,
     phosphor: phosphorCss,
     'my-theme': myThemeCss
   }
   ```

3. **Update default if desired:**
   ```typescript
   const DEFAULT_THEME: ThemeName = 'my-theme'
   ```

4. **Rebuild:**
   ```bash
   cd frontend && npm run build
   ```

## CSS Variables Reference

See `frontend/src/themes/base.css` for the complete list of customizable variables:

### Typography
- `--cg-font-display`, `--cg-font-body`, `--cg-font-mono`
- `--cg-font-size-xs` through `--cg-font-size-2xl`
- `--cg-font-weight-normal` through `--cg-font-weight-bold`
- `--cg-letter-spacing-*`, `--cg-line-height-*`

### Colors
- **Backgrounds:** `--cg-color-bg-primary`, `--cg-color-bg-secondary`, etc.
- **Text:** `--cg-color-text-primary`, `--cg-color-text-secondary`, etc.
- **Borders:** `--cg-color-border`, `--cg-color-border-subtle`, etc.
- **Accent:** `--cg-color-accent`, `--cg-color-accent-hover`
- **Semantic:** `--cg-color-success`, `--cg-color-warning`, `--cg-color-error`, `--cg-color-info`

### Layout
- **Spacing:** `--cg-space-1` through `--cg-space-12`
- **Radius:** `--cg-radius-none` through `--cg-radius-full`
- **Shadows:** `--cg-shadow-sm` through `--cg-shadow-xl`
- **Panel:** `--cg-panel-width`, `--cg-panel-height`

### Effects
- **Transitions:** `--cg-transition-fast`, `--cg-transition-normal`, `--cg-transition-slow`
- **Blur:** `--cg-blur-sm`, `--cg-blur-md`, `--cg-blur-lg`

## Design Philosophy

### Comfy Theme
Follows ComfyUI Manager's design language:
- **Clean & Professional** - Minimal decoration, content-focused
- **High Readability** - Neutral backgrounds, high contrast
- **Semantic** - Colors convey meaning
- **Modern** - Rounded corners, subtle shadows
- **Functional** - Every element serves a purpose

### Phosphor Theme
Embraces terminal authenticity:
- **Unapologetic Functionality** - Every pixel serves a purpose
- **Monospace Everything** - Fixed-width typography
- **Green Phosphor Glow** - Unmistakable, memorable
- **Sharp Geometry** - Rectangles and right angles
- **Terminal Conventions** - CLI patterns and prefixes

## Best Practices

1. **Always use CSS variables** - Never hardcode values in components
2. **Test both themes** - Ensure components work with all themes
3. **Maintain semantic meaning** - Don't override semantic colors arbitrarily
4. **Keep themes minimal** - Only override what's necessary
5. **Document changes** - Update this file when adding themes or variables

## Future Considerations

Potential themes to add:
- **Light theme** - For bright environments
- **High contrast** - For accessibility
- **Custom branding** - Organization-specific colors
