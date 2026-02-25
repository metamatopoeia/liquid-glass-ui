# Theming Guide

Liquid Glass UI ships a CSS-variable-driven theme engine that works in three layers:

1. **Static CSS variables** — sensible defaults injected via `variables.css` (loaded automatically when you import the library stylesheet).
2. **`createTheme()`** — a factory function that deep-merges your overrides with the defaults and produces a fully resolved `LiquidGlassTheme` object.
3. **`<ThemeProvider>`** — a React context provider that injects the resolved theme as scoped CSS variables and exposes it to hooks.

You can use any layer independently. Override a few CSS variables in plain CSS, build a full theme object with `createTheme`, or combine both.

---

## Table of Contents

- [Quick Start](#quick-start)
- [ThemeProvider](#themeprovider)
  - [Props](#themeprovider-props)
  - [How It Works](#how-it-works)
- [createTheme](#createtheme)
  - [Theme Input Shape](#theme-input-shape)
  - [Color Schemes](#color-schemes)
  - [The Resolved Theme Object](#the-resolved-theme-object)
- [Hooks](#hooks)
  - [useTheme](#usetheme)
  - [useColorScheme](#usecolorscheme)
  - [useComponentOverrides](#usecomponentoverrides)
- [Component Overrides](#component-overrides)
  - [styleOverrides](#styleoverrides)
  - [variants](#variants)
  - [defaultProps](#defaultprops)
  - [Slot Reference](#slot-reference)
- [The vars Mirror](#the-vars-mirror)
- [CSS Variable Reference](#css-variable-reference)
- [Spacing Utility](#spacing-utility)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Recipes](#recipes)
  - [Brand Palette](#recipe-brand-palette)
  - [Dark-Only Overrides](#recipe-dark-only-overrides)
  - [Toggle Light / Dark at Runtime](#recipe-toggle-light--dark-at-runtime)
  - [Plain CSS Override (No Provider)](#recipe-plain-css-override-no-provider)

---

## Quick Start

```tsx
import "liquid-glass-ui/styles.css";
import { ThemeProvider, createTheme, Button, Card, CardContent } from "liquid-glass-ui";

const theme = createTheme({
  palette: {
    primary: { main: "#6366f1", dark: "#4338ca", light: "#818cf8" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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

`ThemeProvider` accepts either a pre-built theme (from `createTheme`) or a raw partial input object — it will call `createTheme` for you internally.

---

## ThemeProvider

Wrap your application (or any subtree) in `ThemeProvider` to scope CSS variable overrides and expose the theme via React context.

```tsx
import { ThemeProvider } from "liquid-glass-ui";

function App() {
  return (
    <ThemeProvider theme={myTheme} mode="system">
      {children}
    </ThemeProvider>
  );
}
```

### ThemeProvider Props

| Prop       | Type                                                              | Default    | Description                                                                                      |
| :--------- | :---------------------------------------------------------------- | :--------- | :----------------------------------------------------------------------------------------------- |
| `theme`    | `LiquidGlassTheme \| DeepPartial<LiquidGlassThemeInput>`         | _defaults_ | A pre-built theme from `createTheme()`, or a raw partial input. Omit to use the default theme.   |
| `mode`     | `'light' \| 'dark' \| 'system'`                                  | `'system'` | Color scheme mode. `'system'` follows `prefers-color-scheme`.                                    |
| `children` | `ReactNode`                                                       | —          | Required.                                                                                        |
| `ref`      | `Ref<HTMLDivElement>`                                             | —          | Forwarded to the wrapper `<div>`.                                                                |
| `...rest`  | `HTMLAttributes<HTMLDivElement>`                                  | —          | Any additional HTML attributes are spread onto the wrapper `<div>`.                              |

### How It Works

1. Resolves the theme (calls `createTheme` if you passed a raw partial).
2. Resolves the color mode (`light`, `dark`, or auto-detected from `prefers-color-scheme`).
3. Calls `theme.getCssVars(mode)` to produce a flat `Record<string, string>` of CSS variables.
4. Injects those variables into a scoped `<style>` tag targeting a unique `data-lg-theme` attribute on the wrapper `<div>`.
5. Wraps children in a `ThemeContext.Provider` so hooks can access `theme`, `mode`, and `setMode`.

---

## createTheme

```ts
import { createTheme } from "liquid-glass-ui";

const theme = createTheme({
  palette: {
    primary: { main: "#6366f1", dark: "#4338ca", light: "#818cf8" },
  },
  glass: {
    blur: "24px",
  },
});
```

`createTheme` accepts a `DeepPartial<LiquidGlassThemeInput>`. Every field is optional — unspecified values fall back to the built-in defaults.

### Theme Input Shape

```ts
interface LiquidGlassThemeInput {
  palette: ThemePalette;
  glass: GlassTokens;
  typography: ThemeTypography;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  spacing: ThemeSpacing;        // { unit: number } — default 8
  zIndex: ThemeZIndex;
  components?: Partial<Record<ComponentName, ComponentStyleOverride>>;
  colorSchemes?: {
    light?: DeepPartial<...>;   // light-specific overrides
    dark?: DeepPartial<...>;    // dark-specific overrides
  };
  cssVarPrefix?: string;        // default "--lg"
}
```

All sub-interfaces are detailed below.

#### ThemePalette

```ts
interface ThemePalette {
  primary: PaletteColor;              // { main, dark, light, contrastText? }
  error: PaletteColor & StatusColor;  // adds { bg, text }
  warning: StatusColor;               // { bg, text }
  info: StatusColor;
  success: StatusColor;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    onSurface: string;
    onSurfaceSecondary: string;
  };
  background: { default: string; paper: string; fallback: string };
  action: { hover: string };
  divider: string;
  chip: { filled: string };
}
```

#### GlassTokens

```ts
interface GlassTokens {
  blur: string;               // backdrop-filter blur radius
  bgOpacity: string;          // surface background opacity
  borderOpacity: string;      // border opacity
  surface: string;            // surface background color
  border: string;             // border color
  reflection: string;         // specular highlight gradient
  easing: string;             // spring easing curve
  transitionDuration: string; // global transition duration
  transition: string;         // shorthand (auto-derived if omitted)
  shadowSoft: string;         // soft drop shadow
  shadowSharp: string;        // sharp drop shadow
}
```

> **Note:** If you override `transitionDuration` or `easing` but not `transition`, it is automatically recomputed.

#### Other Groups

| Interface          | Keys                                      |
| :----------------- | :---------------------------------------- |
| `ThemeTypography`  | `fontFamily`                              |
| `ThemeRadius`      | `sm`, `md`, `lg`                          |
| `ThemeShadows`     | `sm`, `md`, `lg`                          |
| `ThemeTransitions` | `fast`, `normal`                          |
| `ThemeSpacing`     | `unit` (number — default `8`)             |
| `ThemeZIndex`      | `appBar`, `drawer`, `modal`, `popover`, `tooltip` |

### Color Schemes

Use `colorSchemes.light` and `colorSchemes.dark` to set mode-specific overrides. These are deep-merged on top of the base tokens when `getCssVars('light')` or `getCssVars('dark')` is called.

```ts
const theme = createTheme({
  palette: {
    primary: { main: "#6366f1", dark: "#4338ca", light: "#818cf8" },
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#a5b4fc", dark: "#818cf8", light: "#c7d2fe" },
        background: { default: "#09090b", paper: "#18181b", fallback: "..." },
      },
    },
  },
});
```

Built-in dark overrides (applied automatically unless you override them):

| Token                      | Dark Value                     |
| :------------------------- | :----------------------------- |
| `glass.surface`            | `rgba(0, 0, 0, 0.35)`         |
| `glass.border`             | `rgba(255, 255, 255, 0.1)`    |
| `glass.bgOpacity`          | `0.35`                         |
| `palette.text.primary`     | `#f4f4f5` (zinc-100)          |
| `palette.text.secondary`   | `#a1a1aa` (zinc-400)          |

### The Resolved Theme Object

`createTheme` returns a `LiquidGlassTheme`:

```ts
interface LiquidGlassTheme {
  palette: ThemePalette;
  glass: GlassTokens;
  typography: ThemeTypography;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  spacing: CallableSpacing;    // callable: spacing(2) → "16px"
  zIndex: ThemeZIndex;
  components?: Partial<Record<ComponentName, ComponentStyleOverride>>;
  vars: ThemeVars;             // mirror of token paths as var() references
  getCssVars: (mode?: 'light' | 'dark') => Record<string, string>;
}
```

---

## Hooks

### useTheme

Returns the current `ThemeContextValue` from the nearest `ThemeProvider`. Falls back to the default theme if no provider is found.

```tsx
import { useTheme } from "liquid-glass-ui";

function MyComponent() {
  const { theme, mode, setMode } = useTheme();

  return (
    <div style={{ color: theme.palette.text.primary }}>
      Current mode: {mode}
    </div>
  );
}
```

**Return value:**

| Property  | Type                                          | Description                         |
| :-------- | :-------------------------------------------- | :---------------------------------- |
| `theme`   | `LiquidGlassTheme`                           | The fully resolved theme object.    |
| `mode`    | `'light' \| 'dark'`                          | The currently active color mode.    |
| `setMode` | `(mode: 'light' \| 'dark' \| 'system') => void` | Switch color mode at runtime.   |

### useColorScheme

A lower-level hook that resolves the current color mode from the OS `prefers-color-scheme` media query. Used internally by `ThemeProvider`, but available if you need standalone mode detection.

```tsx
import { useColorScheme } from "liquid-glass-ui";

function ModeIndicator() {
  const { mode, setMode, systemMode } = useColorScheme("system");
  // mode: resolved 'light' | 'dark'
  // systemMode: what the OS reports
  // setMode: override the preference
}
```

**Parameters:**

| Param         | Type                            | Default    |
| :------------ | :------------------------------ | :--------- |
| `initialMode` | `'light' \| 'dark' \| 'system'` | `'system'` |

### useComponentOverrides

Resolves `styleOverrides`, `variants`, and `defaultProps` for a given component name against the current theme. Used internally by every component, but exposed for building custom components that participate in the override system.

```tsx
import { useComponentOverrides } from "liquid-glass-ui";
import type { ComponentName } from "liquid-glass-ui";

function CustomCard(props: { variant?: string; className?: string; style?: CSSProperties }) {
  const ownerState = { variant: props.variant };
  const { className, style, resolvedProps } = useComponentOverrides(
    "Card" as ComponentName,
    ownerState,
    props,
  );

  return <div className={className} style={style} />;
}
```

**Parameters:**

| Param           | Type                                        | Description                                            |
| :-------------- | :------------------------------------------ | :----------------------------------------------------- |
| `componentName` | `ComponentName`                             | The component to look up in `theme.components`.        |
| `ownerState`    | `Record<string, unknown>`                   | Current prop/state values used to match `variants`.    |
| `props`         | `{ className?: string; style?: CSSProperties }` | Incoming props — merged last so consumer wins.     |

**Return value:**

| Property        | Type                        | Description                                        |
| :-------------- | :-------------------------- | :------------------------------------------------- |
| `className`     | `string`                    | Resolved className (from `defaultProps` or input).  |
| `style`         | `CSSProperties`             | Merged style: `styleOverrides` → `variants` → input. |
| `resolvedProps` | `Record<string, unknown>`   | Input props merged with `defaultProps`.             |

---

## Component Overrides

The `components` key in your theme input lets you customize any component globally without touching its source code. Each entry supports three mechanisms: `styleOverrides`, `variants`, and `defaultProps`.

```ts
const theme = createTheme({
  components: {
    Button: {
      styleOverrides: { /* ... */ },
      variants: [ /* ... */ ],
      defaultProps: { /* ... */ },
    },
  },
});
```

### styleOverrides

Apply static or theme-aware styles to a component's named slots.

```ts
const theme = createTheme({
  components: {
    Button: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          textTransform: "none",
        },
      },
    },
    Card: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
  },
});
```

Each slot value is either a `CSSProperties` object or a function `({ theme }) => CSSProperties`.

### variants

Conditionally apply styles based on a component's props.

```ts
const theme = createTheme({
  components: {
    Button: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: { background: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
        },
        {
          props: (p) => p.size === "large",
          style: ({ theme }) => ({
            padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
          }),
        },
      ],
    },
  },
});
```

- **`props`** — An object of key/value pairs that must all match, or a predicate function `(props) => boolean`.
- **`style`** — A `CSSProperties` object or `({ theme }) => CSSProperties`.

Multiple matching variants are merged in array order.

### defaultProps

Inject default prop values into every instance of a component.

```ts
const theme = createTheme({
  components: {
    Button: {
      defaultProps: { variant: "outlined" },
    },
  },
});
```

### Slot Reference

Each component exposes named slots for targeting with `styleOverrides`:

| Component      | Slots                                                   |
| :------------- | :------------------------------------------------------ |
| `Button`       | `root`, `startIcon`                                     |
| `Card`         | `root`, `content`, `media`                              |
| `AppBar`       | `root`                                                  |
| `Paper`        | `root`                                                  |
| `Dialog`       | `overlay`, `content`, `title`, `description`, `actions` |
| `AlertDialog`  | `overlay`, `content`, `title`, `description`, `actions` |
| `Select`       | `trigger`, `content`, `item`                            |
| `TextField`    | `root`, `label`, `input`, `helper`                      |
| `Chip`         | `root`                                                  |
| `Avatar`       | `root`, `image`, `fallback`                             |
| `Fab`          | `root`                                                  |
| `IconButton`   | `root`                                                  |
| `Separator`    | `root`                                                  |
| `Skeleton`     | `root`                                                  |
| `Spinner`      | `root`                                                  |
| `DropdownMenu` | `content`, `item`                                       |

---

## The vars Mirror

Every resolved theme includes a `vars` object that mirrors the token tree with `var()` references. This is useful when you need to reference CSS variables from inline styles or component override functions.

```tsx
const { theme } = useTheme();

// theme.vars.palette.primary.main → "var(--lg-palette-primary-main)"
// theme.vars.glass.blur            → "var(--lg-glass-blur)"
// theme.vars.radius.md             → "var(--lg-radius-md)"

<div style={{ color: theme.vars.palette.text.primary }} />
```

The mirror covers: `palette`, `glass`, `typography`, `radius`, `shadows`, and `transitions`.

---

## CSS Variable Reference

All tokens are namespaced under `--lg-{group}-{token}` using kebab-case. These are set on `:root` via the static stylesheet and scoped per-provider via `<style>` tags.

<details>
<summary>Full variable list</summary>

### Glass Physics

| Variable                          | Default                                                 |
| :-------------------------------- | :------------------------------------------------------ |
| `--lg-glass-blur`                 | `20px`                                                  |
| `--lg-glass-bg-opacity`           | `0.12`                                                  |
| `--lg-glass-border-opacity`       | `0.2`                                                   |
| `--lg-glass-surface`              | `rgba(255, 255, 255, var(--lg-glass-bg-opacity))`       |
| `--lg-glass-border`               | `rgba(255, 255, 255, var(--lg-glass-border-opacity))`   |
| `--lg-glass-reflection`           | linear-gradient (specular highlight)                    |
| `--lg-glass-easing`               | `cubic-bezier(0.32, 0.72, 0, 1)`                       |
| `--lg-glass-transition-duration`  | `400ms`                                                 |
| `--lg-glass-transition`           | `400ms cubic-bezier(0.32, 0.72, 0, 1)`                 |
| `--lg-glass-shadow-soft`          | `0 20px 50px rgba(0, 0, 0, 0.1)`                       |
| `--lg-glass-shadow-sharp`         | `0 1px 2px rgba(0, 0, 0, 0.05)`                        |

### Palette

| Variable                                  | Default              |
| :---------------------------------------- | :------------------- |
| `--lg-palette-primary-main`               | `#18181b`            |
| `--lg-palette-primary-dark`               | `#09090b`            |
| `--lg-palette-primary-light`              | `#3f3f46`            |
| `--lg-palette-error-main`                 | `#d32f2f`            |
| `--lg-palette-error-dark`                 | `#c62828`            |
| `--lg-palette-error-light`                | `#ef5350`            |
| `--lg-palette-error-bg`                   | `#fdeded`            |
| `--lg-palette-error-text`                 | `#5f2120`            |
| `--lg-palette-warning-bg`                 | `#fff4e5`            |
| `--lg-palette-warning-text`               | `#663c00`            |
| `--lg-palette-info-bg`                    | `#e5f6fd`            |
| `--lg-palette-info-text`                  | `#014361`            |
| `--lg-palette-success-bg`                 | `#edf7ed`            |
| `--lg-palette-success-text`               | `#1e4620`            |
| `--lg-palette-text-primary`               | `#18181b`            |
| `--lg-palette-text-secondary`             | `#52525b`            |
| `--lg-palette-text-disabled`              | `rgba(0,0,0,0.38)`  |
| `--lg-palette-text-on-surface`            | `#fff`               |
| `--lg-palette-text-on-surface-secondary`  | `#d4d4d8`            |
| `--lg-palette-background-default`         | `#fff`               |
| `--lg-palette-background-paper`           | `#fff`               |
| `--lg-palette-background-fallback`        | zinc gradient        |
| `--lg-palette-action-hover`               | `rgba(0,0,0,0.04)`  |
| `--lg-palette-divider`                    | `rgba(0,0,0,0.12)`  |
| `--lg-palette-chip-filled`                | `#e4e4e7`            |

### Typography, Radius, Shadows, Transitions

| Variable                     | Default                                  |
| :--------------------------- | :--------------------------------------- |
| `--lg-typography-font-family`| `system-ui, -apple-system, sans-serif`   |
| `--lg-radius-sm`             | `4px`                                    |
| `--lg-radius-md`             | `8px`                                    |
| `--lg-radius-lg`             | `16px`                                   |
| `--lg-shadows-sm`            | composite box-shadow (sm)                |
| `--lg-shadows-md`            | composite box-shadow (md)                |
| `--lg-shadows-lg`            | composite box-shadow (lg)                |
| `--lg-transitions-fast`      | `150ms cubic-bezier(0.4, 0, 0.2, 1)`    |
| `--lg-transitions-normal`    | `250ms cubic-bezier(0.4, 0, 0.2, 1)`    |

</details>

---

## Spacing Utility

The resolved theme's `spacing` property is a callable function:

```ts
const theme = createTheme({ spacing: { unit: 8 } });

theme.spacing(1);   // "8px"
theme.spacing(2);   // "16px"
theme.spacing(0.5); // "4px"
theme.spacing.unit;  // 8
```

Use it in component overrides:

```ts
style: ({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
})
```

---

## Dark Mode

Dark mode works at two levels:

1. **Static CSS** — `variables.css` includes a `@media (prefers-color-scheme: dark)` block that overrides glass surface, border, opacity, and text color variables on `:root`.
2. **ThemeProvider** — when `mode` is `'system'` (default), the provider listens to the OS media query and re-renders with the dark token set. When `mode` is `'dark'` or `'light'`, it forces that mode regardless of OS preference.

To toggle at runtime:

```tsx
const { setMode } = useTheme();

<button onClick={() => setMode("dark")}>Dark</button>
<button onClick={() => setMode("light")}>Light</button>
<button onClick={() => setMode("system")}>Auto</button>
```

---

## Accessibility

The static stylesheet includes automatic accessibility adjustments:

- **`prefers-reduced-motion`** — sets `--lg-glass-transition-duration: 0ms`, disabling all glass transitions.
- **`prefers-reduced-transparency`** — sets `--lg-glass-bg-opacity: 0.98` and `--lg-glass-blur: 0px`, rendering surfaces as near-opaque with no blur.

These apply globally via `@media` queries and require no configuration.

---

## Recipes

### Recipe: Brand Palette

```ts
const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1",   // indigo-500
      dark: "#4338ca",   // indigo-700
      light: "#818cf8",  // indigo-400
    },
  },
});
```

### Recipe: Dark-Only Overrides

```ts
const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#a5b4fc", dark: "#818cf8", light: "#c7d2fe" },
        background: {
          default: "#09090b",
          paper: "#18181b",
          fallback: "linear-gradient(135deg, #020617, #0f172a, #1e1b4b)",
        },
      },
      glass: {
        bgOpacity: "0.4",
      },
    },
  },
});
```

### Recipe: Toggle Light / Dark at Runtime

```tsx
import { ThemeProvider, useTheme, Button } from "liquid-glass-ui";

function ModeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      Switch to {mode === "dark" ? "Light" : "Dark"}
    </Button>
  );
}

function App() {
  return (
    <ThemeProvider mode="system">
      <ModeToggle />
    </ThemeProvider>
  );
}
```

### Recipe: Plain CSS Override (No Provider)

If you don't need runtime theming, override any variable in plain CSS:

```css
:root {
  --lg-palette-primary-main: #6366f1;
  --lg-palette-primary-dark: #4338ca;
  --lg-glass-blur: 24px;
  --lg-radius-md: 12px;
}
```

This works because components consume the CSS variables directly. No `ThemeProvider` required.
