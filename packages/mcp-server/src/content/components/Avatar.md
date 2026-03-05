# Avatar

An image avatar with automatic fallback, built on Radix UI Avatar primitives. Shows the first letter of `alt` text when the image fails to load.

## Import

```tsx
import { Avatar } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | `string` | — | Image source URL. |
| `alt` | `string` | `''` | Alt text. First character used as fallback. |
| `size` | `number` | `40` | Width and height in pixels. |
| `className` | `string` | `''` | Additional CSS class. |
| `style` | `CSSProperties` | — | Inline styles. |

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The Radix Avatar Root container. |
| `image` | The `<img>` element rendered by Radix. |
| `fallback` | The fallback element (shows first letter of alt). |

## Usage

```tsx
import { Avatar } from "liquid-glass-ui";

<Avatar src="/avatar.jpg" alt="Jane Doe" />
<Avatar src="/avatar.jpg" alt="Jane Doe" size={64} />
<Avatar alt="JD" /> {/* Shows "J" as fallback */}
```
