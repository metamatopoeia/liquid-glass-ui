# IconButton

A minimal button designed to wrap a single icon. Supports small and medium sizes.

## Import

```tsx
import { IconButton } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'small' \| 'medium'` | `'medium'` | Button size. |
| `className` | `string` | `''` | Additional CSS class. |
| `children` | `ReactNode` | — | Icon content. |

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<button>` element. |

## Usage

```tsx
import { IconButton } from "liquid-glass-ui";

<IconButton aria-label="Settings" onClick={openSettings}>
  <GearIcon />
</IconButton>

<IconButton size="small" aria-label="Close">
  <XIcon />
</IconButton>
```
