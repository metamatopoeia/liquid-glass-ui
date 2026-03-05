# TextField

A form input component supporting single-line input and multiline textarea modes. Includes label, helper text, and error states.

## Import

```tsx
import { TextField } from "liquid-glass-ui";
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | — | Label text above the input. |
| `helperText` | `string` | — | Helper or error message below the input. |
| `error` | `boolean` | `false` | Applies error styling to label, input, and helper text. |
| `fullWidth` | `boolean` | `false` | Stretches to 100% width. |
| `required` | `boolean` | `false` | Shows required indicator on label. |
| `multiline` | `boolean` | `false` | Renders a `<textarea>` instead of `<input>`. |
| `minRows` | `number` | `3` | Minimum rows for multiline mode. |
| `margin` | `'none' \| 'normal'` | `'none'` | Vertical margin mode. |
| `className` | `string` | `''` | Additional CSS class on wrapper. |

When `multiline` is `false`, extends `InputHTMLAttributes<HTMLInputElement>`.
When `multiline` is `true`, extends `TextareaHTMLAttributes<HTMLTextAreaElement>`.

## Slots

| Slot | Description |
| :--- | :--- |
| `root` | The outer wrapper `<div>`. |
| `label` | The `<label>` element. |
| `input` | The `<input>` or `<textarea>` element. |
| `helper` | The helper text `<p>` element. |

## Usage

```tsx
import { TextField } from "liquid-glass-ui";

<TextField
  label="Email"
  type="email"
  placeholder="you@example.com"
  fullWidth
  required
/>

<TextField
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
  fullWidth
/>

<TextField
  label="Bio"
  multiline
  minRows={4}
  helperText={error ? "Bio is required" : "Tell us about yourself"}
  error={!!error}
  fullWidth
/>
```
