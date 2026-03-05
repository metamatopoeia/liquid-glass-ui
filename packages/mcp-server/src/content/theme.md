# Theming Guide

Liquid Glass UI ships a CSS-variable-driven theme engine that works in three layers:

1. **Static CSS variables** — sensible defaults injected via `variables.css` (loaded automatically when you import the library stylesheet).
2. **`createTheme()`** — a factory function that deep-merges your overrides with the defaults and produces a fully resolved `LiquidGlassTheme` object.
3. **`<ThemeProvider>`** — a React context provider that injects the resolved theme as scoped CSS variables and exposes it to hooks.

You can use any layer independently. Override a few CSS variables in plain CSS, build a full theme object with `createTheme`, or combine both.

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

### ThemeProvider Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `theme` | `LiquidGlassTheme \| DeepPartial<LiquidGlassThemeInput>` | _defaults_ | A pre-built theme from `createTheme()`, or a raw partial input. |
| `mode` | `'light' \| 'dark' \| 'system'` | `'system'` | Color scheme mode. `'system'` follows `prefers-color-scheme`. |
| `children` | `ReactNode` | — | Required. |
| `ref` | `Ref<HTMLDivElement>` | — | Forwarded to the wrapper `<div>`. |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | — | Spread onto the wrapper `<div>`. |

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

Accepts a `DeepPartial<LiquidGlassThemeInput>`. Every field is optional — unspecified values fall back to built-in defaults.

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

| Property | Type | Description |
| :--- | :--- | :--- |
| `theme` | `LiquidGlassTheme` | The fully resolved theme object. |
| `mode` | `'light' \| 'dark'` | The currently active color mode. |
| `setMode` | `(mode: 'light' \| 'dark' \| 'system') => void` | Switch color mode at runtime. |

### useColorScheme

A lower-level hook that resolves the current color mode from the OS `prefers-color-scheme` media query.

```tsx
import { useColorScheme } from "liquid-glass-ui";

function ModeIndicator() {
  const { mode, setMode, systemMode } = useColorScheme("system");
}
```

| Param | Type | Default |
| :--- | :--- | :--- |
| `initialMode` | `'light' \| 'dark' \| 'system'` | `'system'` |

### useComponentOverrides

Resolves `styleOverrides`, `variants`, and `defaultProps` for a given component name against the current theme.

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

---

## Component Overrides

The `components` key in your theme input lets you customize any component globally.

```ts
const theme = createTheme({
  components: {
    Button: {
      styleOverrides: {
        root: { borderRadius: "9999px", textTransform: "none" },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: { background: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
        },
      ],
      defaultProps: { variant: "outlined" },
    },
  },
});
```

### Slot Reference

| Component | Slots |
| :--- | :--- |
| `Button` | `root`, `startIcon` |
| `Card` | `root`, `content`, `media` |
| `AppBar` | `root` |
| `Paper` | `root` |
| `Dialog` | `overlay`, `content`, `title`, `description`, `actions` |
| `AlertDialog` | `overlay`, `content`, `title`, `description`, `actions` |
| `Select` | `trigger`, `content`, `item` |
| `TextField` | `root`, `label`, `input`, `helper` |
| `Chip` | `root` |
| `Avatar` | `root`, `image`, `fallback` |
| `Fab` | `root` |
| `IconButton` | `root` |
| `Separator` | `root` |
| `Skeleton` | `root` |
| `Spinner` | `root` |
| `DropdownMenu` | `content`, `item` |

---

## The vars Mirror

Every resolved theme includes a `vars` object that mirrors the token tree with `var()` references:

```tsx
const { theme } = useTheme();

// theme.vars.palette.primary.main → "var(--lg-palette-primary-main)"
// theme.vars.glass.blur            → "var(--lg-glass-blur)"
// theme.vars.radius.md             → "var(--lg-radius-md)"

<div style={{ color: theme.vars.palette.text.primary }} />
```

---

## Color Schemes

Use `colorSchemes.light` and `colorSchemes.dark` to set mode-specific overrides:

```ts
const theme = createTheme({
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

Built-in dark overrides (applied automatically):

| Token | Dark Value |
| :--- | :--- |
| `glass.surface` | `rgba(0, 0, 0, 0.35)` |
| `glass.border` | `rgba(255, 255, 255, 0.1)` |
| `glass.bgOpacity` | `0.35` |
| `palette.text.primary` | `#f4f4f5` (zinc-100) |
| `palette.text.secondary` | `#a1a1aa` (zinc-400) |

---

## Spacing Utility

The resolved theme's `spacing` property is callable:

```ts
const theme = createTheme({ spacing: { unit: 8 } });

theme.spacing(1);   // "8px"
theme.spacing(2);   // "16px"
theme.spacing(0.5); // "4px"
theme.spacing.unit;  // 8
```

---

## Dark Mode

1. **Static CSS** — `variables.css` includes a `@media (prefers-color-scheme: dark)` block.
2. **ThemeProvider** — when `mode` is `'system'` (default), the provider auto-detects. When `'dark'` or `'light'`, it forces that mode.

Toggle at runtime:

```tsx
const { setMode } = useTheme();

<button onClick={() => setMode("dark")}>Dark</button>
<button onClick={() => setMode("light")}>Light</button>
<button onClick={() => setMode("system")}>Auto</button>
```

---

## Accessibility

The static stylesheet includes automatic accessibility adjustments:

- **`prefers-reduced-motion`** — sets `--lg-glass-transition-duration: 0ms`.
- **`prefers-reduced-transparency`** — sets `--lg-glass-bg-opacity: 0.98` and `--lg-glass-blur: 0px`.

These apply globally via `@media` queries and require no configuration.
