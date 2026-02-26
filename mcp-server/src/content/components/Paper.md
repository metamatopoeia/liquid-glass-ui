# Paper

A generic glass surface component with elevation or outlined variants.

## Import

```tsx
import { Paper } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `elevation` | `number` | `1` | Elevation level. Values ≥ 2 use a stronger shadow. |
| `variant` | `'elevation' \| 'outlined'` | `'elevation'` | Visual style. |
| `children` | `ReactNode` | — | Content. |
| `className` | `string` | `''` | Additional CSS class. |

Extends `HTMLAttributes<HTMLDivElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<div>` element. |

## Usage

```tsx
import { Paper } from "liquid-glass-ui";

<Paper elevation={1}>
  <p>Default elevation surface</p>
</Paper>

<Paper variant="outlined">
  <p>Outlined surface</p>
</Paper>

<Paper elevation={2}>
  <p>Higher elevation surface</p>
</Paper>
```
