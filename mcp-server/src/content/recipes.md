# Recipes

## Brand Palette

```ts
import { createTheme } from "liquid-glass-ui";

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

## Dark-Only Overrides

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

## Toggle Light / Dark at Runtime

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

## Plain CSS Override (No Provider)

If you don't need runtime theming, override any variable in plain CSS:

```css
:root {
  --lg-palette-primary-main: #6366f1;
  --lg-palette-primary-dark: #4338ca;
  --lg-glass-blur: 24px;
  --lg-radius-md: 12px;
}
```

This works because components consume CSS variables directly. No `ThemeProvider` required.

## Custom Component with Theme Overrides

```tsx
import { createTheme, ThemeProvider, Card, CardContent, Button } from "liquid-glass-ui";

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
    Card: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardContent>
          <Button>Uses outlined by default</Button>
          <Button variant="contained" color="primary">Gradient button</Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
```

## Using the vars Mirror

```tsx
import { useTheme } from "liquid-glass-ui";

function GlassCard() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backdropFilter: `blur(${theme.glass.blur})`,
        backgroundColor: theme.vars.glass.surface,
        border: `1px solid ${theme.vars.glass.border}`,
        borderRadius: theme.vars.radius.lg,
        padding: theme.spacing(3),
        color: theme.vars.palette.text.primary,
      }}
    >
      Custom glass element using theme tokens
    </div>
  );
}
```
