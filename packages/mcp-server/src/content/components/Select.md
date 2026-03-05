# Select

A dropdown select component built on Radix UI Select primitives. Integrates with the TextField wrapper for consistent form styling.

## Import

```tsx
import { Select } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | — | Optional label text above the select. |
| `value` | `string` | — | Controlled selected value. |
| `onValueChange` | `(value: string) => void` | — | Callback when selection changes. |
| `options` | `SelectOption[]` | — | **Required.** Array of options to render. |
| `placeholder` | `string` | `'Select…'` | Placeholder text when no value selected. |
| `required` | `boolean` | `false` | Shows required indicator on label. |
| `fullWidth` | `boolean` | `false` | Stretches to 100% width. |
| `margin` | `'none' \| 'normal'` | `'none'` | Vertical margin mode. |
| `className` | `string` | `''` | Additional CSS class on wrapper. |

### SelectOption

```ts
interface SelectOption {
  value: string;
  label: ReactNode;
  placeholder?: boolean;
}
```

## Slots

| Slot | Description |
| :--- | :--- |
| `trigger` | The select trigger button. |
| `content` | The dropdown content panel. |
| `item` | Individual option items. |

## Usage

```tsx
import { Select } from "liquid-glass-ui";

const options = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
];

<Select
  label="Size"
  value={size}
  onValueChange={setSize}
  options={options}
  placeholder="Choose a size"
/>

<Select
  label="Category"
  options={categories}
  onValueChange={setCategory}
  fullWidth
  required
/>
```
