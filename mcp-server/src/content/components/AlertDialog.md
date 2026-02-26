# AlertDialog

A modal dialog for destructive confirmations, built on Radix UI AlertDialog primitives. Requires explicit user action to dismiss (no close on overlay click).

## Import

```tsx
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogAction,
} from "liquid-glass-ui";
```

## Components

### AlertDialogRoot

Re-export of `@radix-ui/react-alert-dialog` Root. Controls open/close state.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when state changes. |

### AlertDialogTrigger

Re-export of Radix AlertDialog Trigger.

### AlertDialogContent

Renders portal, overlay, and glass content container.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Dialog body. |
| `className` | `string` | `''` | Additional CSS class. |

### AlertDialogTitle

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Title text. |
| `className` | `string` | `''` | Additional CSS class. |

### AlertDialogDescription

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Description text. |
| `className` | `string` | `''` | Additional CSS class. |

### AlertDialogActions

Container for Cancel/Action buttons.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Action buttons. |
| `className` | `string` | `''` | Additional CSS class. |

### AlertDialogCancel

Re-export of Radix AlertDialog Cancel.

### AlertDialogAction

Re-export of Radix AlertDialog Action.

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
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogAction,
  Button,
} from "liquid-glass-ui";

<AlertDialogRoot>
  <AlertDialogTrigger asChild>
    <Button variant="text" color="error">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account.
    </AlertDialogDescription>
    <AlertDialogActions>
      <AlertDialogCancel asChild>
        <Button variant="text">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button variant="contained" color="error">
          Yes, delete account
        </Button>
      </AlertDialogAction>
    </AlertDialogActions>
  </AlertDialogContent>
</AlertDialogRoot>
```
