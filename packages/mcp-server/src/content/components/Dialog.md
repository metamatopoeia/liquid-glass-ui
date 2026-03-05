# Dialog

A modal dialog built on Radix UI Dialog primitives with liquid glass overlay and content styling. Implemented as a compound component pattern.

## Import

```tsx
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogClose,
} from "liquid-glass-ui";
```

## Components

### DialogRoot

Re-export of `@radix-ui/react-dialog` Root. Controls open/close state.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled default state. |

### DialogTrigger

Re-export of Radix Dialog Trigger. Renders as a button that opens the dialog.

### DialogContent

Renders the portal, overlay, and glass content container.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Dialog body. |
| `className` | `string` | `''` | Additional CSS class on the content. |

### DialogTitle

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Title text. |
| `className` | `string` | `''` | Additional CSS class. |

### DialogDescription

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Description text. |
| `className` | `string` | `''` | Additional CSS class. |

### DialogActions

Container for action buttons, rendered as a flex row.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Action buttons. |
| `className` | `string` | `''` | Additional CSS class. |

### DialogClose

Re-export of Radix Dialog Close. Renders as a button that closes the dialog.

## Slots

| Slot | Description |
| :--- | :--- |
| `overlay` | The backdrop overlay. |
| `content` | The glass content container. |
| `title` | The dialog title. |
| `description` | The dialog description. |
| `actions` | The actions row container. |

## Usage

```tsx
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogClose,
  Button,
} from "liquid-glass-ui";

<DialogRoot>
  <DialogTrigger asChild>
    <Button variant="outlined">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Confirm Action</DialogTitle>
    <DialogDescription>
      Are you sure you want to proceed?
    </DialogDescription>
    <DialogActions>
      <DialogClose asChild>
        <Button variant="text">Cancel</Button>
      </DialogClose>
      <Button variant="contained" onClick={handleConfirm}>
        Confirm
      </Button>
    </DialogActions>
  </DialogContent>
</DialogRoot>
```
