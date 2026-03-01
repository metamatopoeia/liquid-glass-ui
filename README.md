# Liquid Glass UI

A React component library for building interfaces with translucent, depth-aware surfaces inspired by the Liquid Glass design language. Built on [Radix UI](https://www.radix-ui.com/) primitives, styled with CSS Variables and CSS Modules, and bundled with [tsup](https://tsup.egoist.dev/).

[![npm version](https://badge.fury.io/js/@metamatopoeia%2Fliquid-glass-ui.svg)](https://www.npmjs.com/package/@metamatopoeia/liquid-glass-ui)
![No Pull Requests](https://img.shields.io/badge/PRs-not_accepted-red.svg)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- **Liquid Glass physics** — backdrop blur, refraction, specular reflections, and viscosity transitions driven entirely by CSS variables
- **Radix UI primitives** — accessible, unstyled foundations for Dialog, AlertDialog, Select, DropdownMenu, Tabs, and more
- **CSS variable theming** — override any design token at runtime via `ThemeProvider` or plain CSS
- **Dark mode** — automatic `prefers-color-scheme: dark` support out of the box
- **Accessibility** — respects `prefers-reduced-motion` and `prefers-reduced-transparency`
- **Tree-shakeable** — ESM and CJS outputs with full TypeScript declarations
- **Zero runtime CSS generation** — all styles are static CSS Modules extracted at build time

## Installation

```bash
npm install @metamatopoeia/liquid-glass-ui
```

**Peer dependencies:** `react >= 18` and `react-dom >= 18`.

## Quick Start

Import the stylesheet once at your app's entry point, then use any component:

```tsx
import "@metamatopoeia/liquid-glass-ui/styles.css";
import {
  ThemeProvider,
  createTheme,
  Button,
  Card,
  CardContent,
} from "@metamatopoeia/liquid-glass-ui";

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

`ThemeProvider` also accepts a raw partial object instead of a pre-built theme — see the [Theming Guide](docs/Theme.md) for details.

## Components

### Inputs

| Component    | Description                                                          |
| :----------- | :------------------------------------------------------------------- |
| `Button`     | Contained, outlined, and text variants with glass hover/focus states |
| `Fab`        | Floating action button with thick glass blur                         |
| `IconButton` | Circular icon button with glass hover ring                           |
| `Select`     | Radix Select with glass trigger and dropdown                         |
| `TextField`  | Input/textarea with glass stroke, floating label, and helper text    |

### Surfaces

| Component                            | Description                                             |
| :----------------------------------- | :------------------------------------------------------ |
| `AppBar`                             | Fixed top bar with glass blur                           |
| `Card` / `CardContent` / `CardMedia` | Glass card with media and content slots                 |
| `Paper`                              | Glass elevation surface — `thin`, `regular`, or `thick` |

### Data Display

| Component   | Description                                      |
| :---------- | :----------------------------------------------- |
| `Avatar`    | Radix Avatar with glass fallback                 |
| `Chip`      | Thin glass chip — `filled` or `outlined`         |
| `Separator` | Radix Separator — horizontal or vertical divider |

### Feedback

| Component     | Description                                                                                                                                                                                                              |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertDialog` | Radix AlertDialog with thick glass overlay (`AlertDialogRoot`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogActions`, `AlertDialogCancel`, `AlertDialogAction`) |
| `Dialog`      | Radix Dialog with thick glass overlay (`DialogRoot`, `DialogTrigger`, `DialogContent`, `DialogTitle`, `DialogDescription`, `DialogActions`, `DialogClose`)                                                               |
| `Skeleton`    | Glass-pulsing placeholder — `text`, `circular`, or `rectangular`                                                                                                                                                         |
| `Spinner`     | Animated SVG spinner                                                                                                                                                                                                     |

### Navigation

| Component      | Description                                                                                                                  |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `DropdownMenu` | Radix DropdownMenu with glass content (`DropdownMenuRoot`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`) |

## Theming

All design tokens are exposed as `--lg-{group}-{token}` CSS variables (e.g. `--lg-palette-primary-main`, `--lg-glass-blur`, `--lg-radius-md`). Override them in plain CSS, or use the runtime theme engine:

- **`createTheme()`** — deep-merges your partial overrides with the defaults and produces a resolved `LiquidGlassTheme` object.
- **`<ThemeProvider>`** — injects resolved tokens as scoped CSS variables and exposes the theme via React context.
- **`useTheme()`** — access the theme, current color mode, and `setMode` from any child component.
- **Component overrides** — customize `styleOverrides`, `variants`, and `defaultProps` per-component globally.
- **Color schemes** — define light- and dark-specific token overrides via `colorSchemes.light` / `colorSchemes.dark`.
- **Dark mode** — automatic `prefers-color-scheme: dark` support, or force a mode with `mode="dark"`.
- **Accessibility** — `prefers-reduced-motion` disables transitions; `prefers-reduced-transparency` disables backdrop blur.

**[Read the full Theming Guide →](docs/Theme.md)**

**[Best Practices →](docs/BEST_PRACTICES.md)**

## MCP Server

Liquid Glass UI ships an [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server that gives AI coding assistants in-context knowledge of every component, prop, CSS variable, and theming API — without needing to search docs.

### Add to your IDE

**Windsurf / Cursor** — add to your MCP config:

```json
{
  "mcpServers": {
    "liquid-glass-ui": {
      "command": "npx",
      "args": ["-y", "@metamatopoeia/liquid-glass-mcp"]
    }
  }
}
```

**Claude Desktop** — add to `claude_desktop_config.json` under the same `mcpServers` key.

**Claude Code**:

```bash
claude mcp add liquid-glass-ui -- npx -y @metamatopoeia/liquid-glass-mcp
```

### What it provides

| Capability                | Details                                                                                |
| :------------------------ | :------------------------------------------------------------------------------------- |
| `useLiquidGlassDocs` tool | Returns the master doc index so the AI knows what's available                          |
| `fetchDocs` tool          | Fetches per-component docs, theming guide, CSS variable reference, or recipes by key   |
| Resources                 | `liquid-glass://components/{name}`, `liquid-glass://theme/*`, `liquid-glass://recipes` |
| `create-theme` prompt     | Guided generation of a valid `createTheme()` call with your brand colors               |
| `add-component` prompt    | Scaffolds correct imports and usage for any component                                  |

**[MCP Server README →](mcp-server/README.md)**

## Tech Stack

- **React 18+** — function components
- **Radix UI** — accessible primitives (Dialog, Select, Tabs, etc.)
- **CSS Modules** — scoped styles with `.module.css`
- **CSS Variables** — runtime theming via `--lg-*` tokens
- **tsup** — zero-config bundler powered by esbuild
- **TypeScript** — strict mode, full declaration output

## Community & Legal

To maintain the specific architectural and visual direction of this library, **this project does not accept Pull Requests.**

- **Found a bug?** Please open an [Issue](https://github.com/sds-smith/liquid-glass-ui/issues).
- **Want to contribute?** See our [Contributing Guide](.github/CONTRIBUTING.md).
- **Security Issues?** Please refer to our [Security Policy](.github/SECURITY.md).
- **Code of Conduct?** Read our [standards of behavior](.github/CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE) © [Shawn D Smith](https://github.com/sds-smith)
