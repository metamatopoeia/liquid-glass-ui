# @metamatopoeia/liquid-glass-core

Shared types, design tokens, and utilities for the [Liquid Glass UI](https://github.com/metamatopoeia/liquid-glass-ui) component ecosystem.

[![npm version](https://badge.fury.io/js/@metamatopoeia%2Fliquid-glass-core.svg)](https://www.npmjs.com/package/@metamatopoeia/liquid-glass-core)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Purpose

This package contains **platform-agnostic** artifacts consumed by both the web (`@metamatopoeia/liquid-glass-ui`) and future React Native (`@metamatopoeia/liquid-glass-ui-native`) packages:

- **Type definitions** — `LiquidGlassThemeInput`, `ResolvedThemeTokens`, `ThemePalette`, `GlassTokens`, slot types, and all supporting interfaces.
- **Default tokens** — `defaultLightTokens` and `darkOverrides` containing the full default color palette, glass physics, typography, spacing, and z-index values.
- **`createTheme()`** — Pure token-merging function that deep-merges user overrides with defaults and resolves light/dark mode token sets. Returns a `ResolvedThemeTokens` object with no CSS or DOM dependencies.
- **`deepMerge()`** — Generic recursive object merge utility.

## Installation

```bash
npm install @metamatopoeia/liquid-glass-core
```

**Zero runtime dependencies.** This package is pure TypeScript — types, constants, and utility functions only.

## API

### `createTheme(options?)`

Deep-merges partial theme overrides with the default tokens and returns a resolved theme object containing both light and dark token sets.

```ts
import { createTheme } from '@metamatopoeia/liquid-glass-core';

const theme = createTheme({
  palette: {
    primary: { main: '#6366f1', dark: '#4338ca', light: '#818cf8' },
  },
});

// theme.palette, theme.glass, theme.light, theme.dark, etc.
```

### `deepMerge(target, ...sources)`

Recursively merges plain objects. Arrays and non-object values are replaced, not merged.

### `defaultLightTokens` / `darkOverrides`

The full default token set and dark mode overrides. Useful for inspecting defaults or building custom theme logic.

### Types

All theme-related types are exported:

`LiquidGlassThemeInput`, `ResolvedThemeTokens`, `ThemePalette`, `PaletteColor`, `StatusColor`, `GlassTokens`, `ThemeTypography`, `ThemeRadius`, `ThemeShadows`, `ThemeTransitions`, `ThemeSpacing`, `CallableSpacing`, `ThemeZIndex`, `ComponentName`, `DeepPartial`, and all per-component slot types.

## Platform Agnosticism

This package contains **zero** imports from `react`, `react-dom`, `react-native`, or any DOM/Node API. It compiles and runs in any JavaScript environment.

## License

[MIT](../../LICENSE) © [Shawn D Smith](https://github.com/sds-smith)
