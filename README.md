# Liquid Glass UI

A React component library for building interfaces with translucent, depth-aware surfaces inspired by Apple's Liquid Glass design language. Built on [Radix UI](https://www.radix-ui.com/) primitives, styled with CSS Variables and CSS Modules, and bundled with [tsup](https://tsup.egoist.dev/).

[![npm version](https://badge.fury.io/js/liquid-glass-ui.svg)](https://badge.fury.io/js/liquid-glass-ui)
![No Pull Requests](https://img.shields.io/badge/PRs-not_accepted-red.svg)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- **Liquid Glass physics** — backdrop blur, refraction, specular reflections, and viscosity transitions driven entirely by CSS variables
- **Radix UI primitives** — accessible, unstyled foundations for Dialog, AlertDialog, Select, DropdownMenu, Tabs, and more
- **CSS variable theming** — override any design token at runtime via `ThemeProvider` or plain CSS
- **Dark mode** — automatic `prefers-color-scheme: dark` support out of the box
- **Accessibility** — respects `prefers-reduced-motion` and `prefers-reduced-transparency`
- **Tree-shakeable** — ESM and CJS outputs with full TypeScript declarations
- **Zero runtime CSS-in-JS** — all styles are static CSS Modules extracted at build time

## Installation

```bash
npm install liquid-glass-ui
```

**Peer dependencies:** `react >= 18` and `react-dom >= 18`.

## Quick Start

Import the stylesheet once at your app's entry point, then use any component:

```tsx
import "liquid-glass-ui/styles.css";
import { Button, Card, CardContent, ThemeProvider } from "liquid-glass-ui";

function App() {
  return (
    <ThemeProvider>
      <Card>
        <CardContent>
          <h2>Hello, Glass</h2>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
```

## Components

### Atoms

| Component    | Description                                                          |
| :----------- | :------------------------------------------------------------------- |
| `Avatar`     | Radix Avatar with glass fallback                                     |
| `Button`     | Contained, outlined, and text variants with glass hover/focus states |
| `Chip`       | Thin glass chip — `filled` or `outlined`                             |
| `Fab`        | Floating action button with thick glass blur                         |
| `IconButton` | Circular icon button with glass hover ring                           |
| `Separator`  | Radix Separator — horizontal or vertical divider                     |
| `Skeleton`   | Glass-pulsing placeholder — `text`, `circular`, or `rectangular`     |
| `Spinner`    | Animated SVG spinner                                                 |

### Molecules

| Component                            | Description                                                                                                                                                                                                              |
| :----------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertDialog`                        | Radix AlertDialog with thick glass overlay (`AlertDialogRoot`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogActions`, `AlertDialogCancel`, `AlertDialogAction`) |
| `Card` / `CardContent` / `CardMedia` | Glass card with media and content slots                                                                                                                                                                                  |
| `Dialog`                             | Radix Dialog with thick glass overlay (`DialogRoot`, `DialogTrigger`, `DialogContent`, `DialogTitle`, `DialogDescription`, `DialogActions`, `DialogClose`)                                                               |
| `DropdownMenu`                       | Radix DropdownMenu with glass content (`DropdownMenuRoot`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`)                                                                                             |
| `Select`                             | Radix Select with glass trigger and dropdown                                                                                                                                                                             |
| `TextField`                          | Input/textarea with glass stroke, floating label, and helper text                                                                                                                                                        |

### Layout

| Component | Description                                             |
| :-------- | :------------------------------------------------------ |
| `AppBar`  | Fixed top bar with glass blur                           |
| `Paper`   | Glass elevation surface — `thin`, `regular`, or `thick` |

## Theming

### CSS Variables

All design tokens are exposed as `--lg-*` CSS variables on `:root`. Override them globally or scope them to any element:

```css
:root {
  --lg-color-primary: #6366f1; /* indigo-500 */
  --lg-color-primary-dark: #4338ca; /* indigo-700 */
  --lg-blur: 24px;
  --lg-radius-md: 12px;
}
```

### ThemeProvider

For runtime overrides, wrap your app in `ThemeProvider` and pass a partial theme object. Values are injected as inline CSS variables on a wrapper `<div>`:

```tsx
import { ThemeProvider } from "liquid-glass-ui";
import type { LiquidGlassTheme } from "liquid-glass-ui";

const theme: Partial<LiquidGlassTheme> = {
  colorPrimary: "#6366f1",
  colorPrimaryDark: "#4338ca",
  blur: "24px",
  radiusMd: "12px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* components inherit overrides */}
    </ThemeProvider>
  );
}
```

### useTheme

Access the current theme context from any child component:

```tsx
import { useTheme } from "liquid-glass-ui";

function MyComponent() {
  const { theme } = useTheme();
  // theme.colorPrimary, theme.blur, etc.
}
```

### Glass Elevation Map

| Level   | Blur   | Opacity | Use Case                               |
| :------ | :----- | :------ | :------------------------------------- |
| Thin    | `8px`  | `0.05`  | Background toolbars, subtle separators |
| Regular | `20px` | `0.12`  | Standard cards, sidebar navigation     |
| Thick   | `40px` | `0.25`  | Modals, popovers, action menus         |

### Dark Mode

Dark mode tokens activate automatically via `prefers-color-scheme: dark`. The surface switches from white-alpha to black-alpha, and text colors invert to zinc-100/zinc-400.

### Accessibility

- **`prefers-reduced-motion`** — disables all transitions (`--lg-transition-duration: 0ms`)
- **`prefers-reduced-transparency`** — disables backdrop blur and sets surfaces to near-opaque (`--lg-bg-opacity: 0.98`)

## Token Reference

<details>
<summary>Full list of CSS variables</summary>

| Token                       | Default                                       | Description                 |
| :-------------------------- | :-------------------------------------------- | :-------------------------- |
| `--lg-blur`                 | `20px`                                        | Backdrop blur radius        |
| `--lg-bg-opacity`           | `0.12`                                        | Surface background opacity  |
| `--lg-border-opacity`       | `0.2`                                         | Border opacity              |
| `--lg-surface`              | `rgba(255,255,255, var(--lg-bg-opacity))`     | Surface background          |
| `--lg-border`               | `rgba(255,255,255, var(--lg-border-opacity))` | Border color                |
| `--lg-reflection`           | linear-gradient                               | Specular highlight gradient |
| `--lg-easing`               | `cubic-bezier(0.32, 0.72, 0, 1)`              | Spring easing curve         |
| `--lg-transition-duration`  | `400ms`                                       | Global transition duration  |
| `--lg-shadow-soft`          | `0 20px 50px rgba(0,0,0,0.1)`                 | Soft drop shadow            |
| `--lg-shadow-sharp`         | `0 1px 2px rgba(0,0,0,0.05)`                  | Sharp drop shadow           |
| `--lg-color-primary`        | `#18181b`                                     | Primary color (zinc-900)    |
| `--lg-color-primary-dark`   | `#09090b`                                     | Primary dark (zinc-950)     |
| `--lg-color-primary-light`  | `#3f3f46`                                     | Primary light (zinc-700)    |
| `--lg-color-text-primary`   | `#18181b`                                     | Primary text color          |
| `--lg-color-text-secondary` | `#52525b`                                     | Secondary text color        |
| `--lg-color-background`     | `#fff`                                        | Page background             |
| `--lg-font-family`          | `system-ui, -apple-system, sans-serif`        | Font stack                  |
| `--lg-radius-sm`            | `4px`                                         | Small border radius         |
| `--lg-radius-md`            | `8px`                                         | Medium border radius        |
| `--lg-radius-lg`            | `16px`                                        | Large border radius         |

</details>

## Development

```bash
# Install dependencies
npm install

# Build the library (CJS + ESM + DTS + CSS)
npm run build

# Output is written to dist/
#   dist/index.js       — CommonJS
#   dist/index.mjs      — ES Module
#   dist/index.d.ts     — TypeScript declarations
#   dist/index.css      — Extracted CSS
```

## Tech Stack

- **React 18+** — function components
- **Radix UI** — accessible primitives (Dialog, Select, Tabs, etc.)
- **CSS Modules** — scoped styles with `.module.css`
- **CSS Variables** — runtime theming via `--lg-*` tokens
- **tsup** — zero-config bundler powered by esbuild
- **TypeScript** — strict mode, full declaration output

## Community & Legal

To maintain the specific architectural and visual direction of this library, **this project does not accept Pull Requests.**

* **Found a bug?** Please open an [Issue](https://github.com/sds-smith/liquid-glass-ui/issues).
* **Want to contribute?** See our [Contributing Guide](.github/CONTRIBUTING.md).
* **Security Issues?** Please refer to our [Security Policy](.github/SECURITY.md).
* **Code of Conduct?** Read our [standards of behavior](.github/CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE) © [Shawn D Smith](https://github.com/sds-smith)