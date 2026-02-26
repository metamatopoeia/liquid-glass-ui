# Button

A polymorphic button component with liquid glass styling. Supports contained, outlined, text, and inherit variants.

## Import

```tsx
import { Button } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'contained' \| 'outlined' \| 'text' \| 'inherit'` | `'text'` | Visual style variant. |
| `color` | `'primary' \| 'error' \| 'inherit'` | `'primary'` | Color scheme. |
| `size` | `'small' \| 'medium'` | `'medium'` | Button size. |
| `fullWidth` | `boolean` | `false` | If true, the button stretches to 100% width. |
| `startIcon` | `ReactNode` | — | Icon element rendered before children. |
| `className` | `string` | `''` | Additional CSS class. |
| `children` | `ReactNode` | — | Button content. |

Extends `ButtonHTMLAttributes<HTMLButtonElement>` — all native button props are forwarded.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<button>` element. |
| `startIcon` | The `<span>` wrapping the `startIcon` prop. |

## Usage

```tsx
import { Button } from "liquid-glass-ui";

<Button variant="contained" color="primary">
  Get Started
</Button>

<Button variant="outlined" size="small" startIcon={<PlusIcon />}>
  Add Item
</Button>

<Button variant="text" color="error" onClick={handleDelete}>
  Delete
</Button>
```
