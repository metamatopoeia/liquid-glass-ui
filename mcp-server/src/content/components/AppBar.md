# AppBar

A top-level header surface with liquid glass backdrop blur effect.

## Import

```tsx
import { AppBar } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Header content (logo, nav, actions). |
| `className` | `string` | `''` | Additional CSS class. |

Extends `HTMLAttributes<HTMLElement>`. Renders as a `<header>` element.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<header>` element. |

## Usage

```tsx
import { AppBar, IconButton } from "liquid-glass-ui";

<AppBar>
  <h1>My App</h1>
  <nav>
    <IconButton aria-label="Menu">
      <MenuIcon />
    </IconButton>
  </nav>
</AppBar>
```
