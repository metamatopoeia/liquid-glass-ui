# Separator

A visual divider built on Radix UI Separator. Supports horizontal and vertical orientations.

## Import

```tsx
import { Separator } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the separator. |
| `className` | `string` | `''` | Additional CSS class. |
| `style` | `CSSProperties` | — | Inline styles. |

Rendered as a decorative `<hr>`-like element via Radix Separator.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The Radix Separator Root element. |

## Usage

```tsx
import { Separator } from "liquid-glass-ui";

<div>
  <p>Section A</p>
  <Separator />
  <p>Section B</p>
</div>

<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>
```
