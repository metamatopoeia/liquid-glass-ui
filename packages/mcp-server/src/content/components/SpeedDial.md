# SpeedDial

An expandable action cluster that reveals a set of related actions from a trigger FAB (Floating Action Button). Supports controlled and uncontrolled modes, four expansion directions, and closes on outside click or `Escape`.

## Import

```tsx
import { SpeedDial, SpeedDialAction } from "liquid-glass-ui";
```

## Components

### SpeedDial

The root container. Renders the trigger FAB and the actions list.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ariaLabel` | `string` | — | **Required.** Accessible label for the trigger button. |
| `icon` | `ReactNode` | — | **Required.** Icon displayed when closed. |
| `openIcon` | `ReactNode` | — | Optional icon displayed when open (cross-fades with `icon`). |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Direction the actions expand toward. |
| `open` | `boolean` | — | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `onOpen` | `() => void` | — | Called when the dial opens. |
| `onClose` | `() => void` | — | Called when the dial closes. |
| `hidden` | `boolean` | `false` | Hides the entire component (e.g. on scroll). |
| `className` | `string` | `''` | Additional CSS class for the root element. |
| `style` | `CSSProperties` | — | Inline styles for the root element. |
| `children` | `ReactNode` | — | **Required.** One or more `SpeedDialAction` elements. |

### SpeedDialAction

An individual action rendered inside `SpeedDial`. Must be a direct child (inside the `SpeedDial` context). Renders a glass pill label alongside a circular action button. Clicking an action automatically closes the dial.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `ReactNode` | — | **Required.** Icon for the action button. |
| `tooltipTitle` | `ReactNode` | — | **Required.** Label shown beside the button. Passed as `aria-label` when it is a string. |
| `onClick` | `(event: MouseEvent<HTMLButtonElement>) => void` | — | Handler called before the dial closes. |
| `disabled` | `boolean` | `false` | Disables the action button. |
| `className` | `string` | `''` | Additional CSS class for the action button. |

## Behaviour

- **Uncontrolled:** Omit `open` — the component manages its own state via `defaultOpen`.
- **Controlled:** Pass `open` + `onOpen` + `onClose` to drive state externally.
- **Close on outside click:** A `mousedown` listener is attached to `document` while open; clicking outside the root closes the dial.
- **Close on Escape:** A `keydown` listener fires `onClose` when `Escape` is pressed while open.
- **Icon swap:** When `openIcon` is provided, the two icons cross-fade (opacity + scale + rotate) using `--lg-glass-transition`.

## Glass Elevation

| Element | Blur | Opacity | Notes |
| :--- | :--- | :--- | :--- |
| Trigger FAB | 40px (Thick) | 0.25 | Increases to 0.35 on hover |
| Action buttons | 20px (Regular) | 0.12 | Increases to 0.25 on hover |
| Tooltip labels | 20px (Regular) | 0.12 | Glass pill beside each action |

## Usage

### Uncontrolled (default)

```tsx
import { SpeedDial, SpeedDialAction } from "liquid-glass-ui";
import { Plus, Pencil, Share, Trash2 } from "lucide-react";

<SpeedDial ariaLabel="Create options" icon={<Plus />} direction="up">
  <SpeedDialAction
    icon={<Pencil size={18} />}
    tooltipTitle="Edit"
    onClick={() => console.log("edit")}
  />
  <SpeedDialAction
    icon={<Share size={18} />}
    tooltipTitle="Share"
    onClick={() => console.log("share")}
  />
  <SpeedDialAction
    icon={<Trash2 size={18} />}
    tooltipTitle="Delete"
    onClick={() => console.log("delete")}
  />
</SpeedDial>
```

### Controlled with openIcon

```tsx
import { useState } from "react";
import { SpeedDial, SpeedDialAction } from "liquid-glass-ui";
import { Menu, X, Pencil, Share } from "lucide-react";

function ControlledDial() {
  const [open, setOpen] = useState(false);

  return (
    <SpeedDial
      ariaLabel="Options"
      icon={<Menu />}
      openIcon={<X />}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      direction="right"
    >
      <SpeedDialAction icon={<Pencil size={18} />} tooltipTitle="Edit" />
      <SpeedDialAction icon={<Share size={18} />} tooltipTitle="Share" />
    </SpeedDial>
  );
}
```

### Hidden on scroll

```tsx
const [hidden, setHidden] = useState(false);

useEffect(() => {
  const onScroll = () => setHidden(window.scrollY > 100);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

<SpeedDial ariaLabel="Actions" icon={<Plus />} hidden={hidden}>
  <SpeedDialAction icon={<Pencil size={18} />} tooltipTitle="Edit" />
</SpeedDial>
```
