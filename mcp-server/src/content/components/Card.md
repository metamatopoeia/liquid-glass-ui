# Card

A glass surface container with optional media and content sub-components. Supports outlined and elevated variants.

## Import

```tsx
import { Card, CardContent, CardMedia } from "liquid-glass-ui";
```

## Card Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'outlined' \| 'elevated'` | `'outlined'` | Visual elevation style. |
| `className` | `string` | `''` | Additional CSS class. |
| `onClick` | `MouseEventHandler` | — | Makes the card clickable with hover styles. |

Extends `HTMLAttributes<HTMLDivElement>`.

## CardContent Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Card body content. |
| `className` | `string` | `''` | Additional CSS class. |

Extends `HTMLAttributes<HTMLDivElement>`.

## CardMedia Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `image` | `string` | — | Image source URL (alias for `src`). |
| `src` | `string` | — | Image source URL. |
| `alt` | `string` | `''` | Alt text for the image. |
| `component` | `'img'` | `'img'` | Render element (currently only img). |

Extends `ImgHTMLAttributes<HTMLImageElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer `<article>` element (Card). |
| `content` | The CardContent `<div>`. |
| `media` | The CardMedia `<img>`. |

## Usage

```tsx
import { Card, CardContent, CardMedia } from "liquid-glass-ui";

<Card variant="outlined">
  <CardMedia image="/hero.jpg" alt="Hero" />
  <CardContent>
    <h2>Card Title</h2>
    <p>Card description text.</p>
  </CardContent>
</Card>

<Card variant="elevated" onClick={() => navigate('/detail')}>
  <CardContent>
    <p>Clickable elevated card</p>
  </CardContent>
</Card>
```
