# Fab

A floating action button with liquid glass styling. Designed for primary screen actions.

## Import

```tsx
import { Fab } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `'primary'` | `'primary'` | Color scheme. |
| `className` | `string` | `''` | Additional CSS class. |
| `children` | `ReactNode` | — | Icon or content. |

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<button>` element. |

## Usage

```tsx
import { Fab } from "liquid-glass-ui";

<Fab aria-label="Add" onClick={handleAdd}>
  <PlusIcon />
</Fab>
```
