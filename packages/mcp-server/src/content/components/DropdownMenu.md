# DropdownMenu

A dropdown menu built on Radix UI DropdownMenu primitives with liquid glass styling. Compound component pattern.

## Import

```tsx
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "liquid-glass-ui";
```

## Components

### DropdownMenuRoot

Re-export of `@radix-ui/react-dropdown-menu` Root. Controls open/close state.

### DropdownMenuTrigger

Re-export of Radix DropdownMenu Trigger. Renders as a button that opens the menu.

### DropdownMenuContent

Glass-styled dropdown panel.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Menu items. |
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | Horizontal alignment relative to trigger. |
| `sideOffset` | `number` | `4` | Pixel offset from trigger edge. |
| `minWidth` | `number` | — | Minimum width of the dropdown. |
| `className` | `string` | `''` | Additional CSS class. |

### DropdownMenuItem

Individual menu option.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Item content. |
| `onSelect` | `() => void` | — | Callback when item is selected. |
| `danger` | `boolean` | `false` | Applies destructive/error styling. |
| `className` | `string` | `''` | Additional CSS class. |

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | The glass dropdown content panel. |
| `item` | Individual menu items. |

## Usage

```tsx
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  IconButton,
} from "liquid-glass-ui";

<DropdownMenuRoot>
  <DropdownMenuTrigger asChild>
    <IconButton aria-label="Options">
      <DotsIcon />
    </IconButton>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" minWidth={180}>
    <DropdownMenuItem onSelect={handleEdit}>Edit</DropdownMenuItem>
    <DropdownMenuItem onSelect={handleDuplicate}>Duplicate</DropdownMenuItem>
    <DropdownMenuItem danger onSelect={handleDelete}>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenuRoot>
```
