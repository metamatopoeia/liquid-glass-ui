# Skeleton

A placeholder loading indicator with shimmer animation. Supports text, circular, and rectangular variants.

## Import

```tsx
import { Skeleton } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'text' \| 'circular' \| 'rectangular'` | `'text'` | Shape variant. |
| `width` | `number \| string` | — | Explicit width override. |
| `height` | `number \| string` | — | Explicit height override. |
| `className` | `string` | `''` | Additional CSS class. |

Extends `HTMLAttributes<HTMLDivElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<div>` element. |

## Usage

```tsx
import { Skeleton } from "liquid-glass-ui";

{/* Text line placeholder */}
<Skeleton variant="text" width="80%" />

{/* Avatar placeholder */}
<Skeleton variant="circular" width={40} height={40} />

{/* Image placeholder */}
<Skeleton variant="rectangular" width="100%" height={200} />
```
