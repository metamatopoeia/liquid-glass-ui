# @metamatopoeia/liquid-glass-ui

A React component library for building interfaces with translucent, depth-aware surfaces inspired by the Liquid Glass design language. Built on [Radix UI](https://www.radix-ui.com/) primitives, styled with CSS Variables and CSS Modules, and bundled with [tsup](https://tsup.egoist.dev/).

[![npm version](https://badge.fury.io/js/@metamatopoeia%2Fliquid-glass-ui.svg)](https://www.npmjs.com/package/@metamatopoeia/liquid-glass-ui)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

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

| Component                           | Description                                                  |
| :---------------------------------- | :----------------------------------------------------------- |
| `AlertDialog` *(deprecated)*        | Radix AlertDialog — **migrate to `Dialog`**                  |
| `Dialog`                            | Radix Dialog with thick glass overlay                        |
| `Skeleton`                          | Glass-pulsing placeholder — `text`, `circular`, `rectangular`|
| `Spinner`                           | Animated SVG spinner                                         |

### Navigation

| Component                          | Description                                                   |
| :--------------------------------- | :------------------------------------------------------------ |
| `DropdownMenu`                     | Radix DropdownMenu with glass content                         |
| `SpeedDial` / `SpeedDialAction`    | Expandable FAB action cluster with directional layouts        |

## Theming

See the [Theming Guide](../../docs/Theme.md) and [Best Practices](../../docs/BEST_PRACTICES.md).

## License

[MIT](../../LICENSE) © [Shawn D Smith](https://github.com/sds-smith)
