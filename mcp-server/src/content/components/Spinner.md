# Spinner

An SVG-based circular loading spinner with configurable size and color.

## Import

```tsx
import { Spinner } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number` | `40` | Width and height in pixels. |
| `color` | `string` | — | Override the spinner stroke color (CSS color value). |
| `className` | `string` | `''` | Additional CSS class. |
| `style` | `CSSProperties` | — | Inline styles. |

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<svg>` element. |

## Usage

```tsx
import { Spinner } from "liquid-glass-ui";

<Spinner />
<Spinner size={24} />
<Spinner size={60} color="#6366f1" />
```
