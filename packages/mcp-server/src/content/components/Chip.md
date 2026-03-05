# Chip

A compact element for tags, labels, and status indicators. Supports filled and outlined variants.

## Import

```tsx
import { Chip } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `ReactNode` | — | **Required.** The chip's display text or content. |
| `variant` | `'filled' \| 'outlined'` | `'filled'` | Visual style variant. |
| `className` | `string` | `''` | Additional CSS class. |

Extends `HTMLAttributes<HTMLSpanElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<span>` element. |

## Usage

```tsx
import { Chip } from "liquid-glass-ui";

<Chip label="Active" />
<Chip label="Draft" variant="outlined" />
<Chip label="3 new" variant="filled" />
```
