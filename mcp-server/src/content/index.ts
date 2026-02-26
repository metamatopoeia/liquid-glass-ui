import llmsTxt from './llms.txt';
import themeMd from './theme.md';
import cssVariablesMd from './css-variables.md';
import recipesMd from './recipes.md';

import ButtonMd from './components/Button.md';
import CardMd from './components/Card.md';
import AppBarMd from './components/AppBar.md';
import PaperMd from './components/Paper.md';
import DialogMd from './components/Dialog.md';
import AlertDialogMd from './components/AlertDialog.md';
import SelectMd from './components/Select.md';
import TextFieldMd from './components/TextField.md';
import ChipMd from './components/Chip.md';
import AvatarMd from './components/Avatar.md';
import FabMd from './components/Fab.md';
import IconButtonMd from './components/IconButton.md';
import SeparatorMd from './components/Separator.md';
import SkeletonMd from './components/Skeleton.md';
import SpinnerMd from './components/Spinner.md';
import DropdownMenuMd from './components/DropdownMenu.md';

export const LLMS_TXT = llmsTxt;

export const COMPONENT_DOCS: Record<string, string> = {
  Button: ButtonMd,
  Card: CardMd,
  AppBar: AppBarMd,
  Paper: PaperMd,
  Dialog: DialogMd,
  AlertDialog: AlertDialogMd,
  Select: SelectMd,
  TextField: TextFieldMd,
  Chip: ChipMd,
  Avatar: AvatarMd,
  Fab: FabMd,
  IconButton: IconButtonMd,
  Separator: SeparatorMd,
  Skeleton: SkeletonMd,
  Spinner: SpinnerMd,
  DropdownMenu: DropdownMenuMd,
};

export const COMPONENT_NAMES = Object.keys(COMPONENT_DOCS);

export const THEME_DOCS: Record<string, string> = {
  overview: themeMd,
  'css-variables': cssVariablesMd,
  recipes: recipesMd,
};

const glassSection = `# Glass Physics Tokens

| Token | Type | CSS Variable | Default |
| :--- | :--- | :--- | :--- |
| \`blur\` | \`string\` | \`--lg-glass-blur\` | \`20px\` |
| \`bgOpacity\` | \`string\` | \`--lg-glass-bg-opacity\` | \`0.12\` |
| \`borderOpacity\` | \`string\` | \`--lg-glass-border-opacity\` | \`0.2\` |
| \`surface\` | \`string\` | \`--lg-glass-surface\` | \`rgba(255, 255, 255, var(--lg-glass-bg-opacity))\` |
| \`border\` | \`string\` | \`--lg-glass-border\` | \`rgba(255, 255, 255, var(--lg-glass-border-opacity))\` |
| \`reflection\` | \`string\` | \`--lg-glass-reflection\` | specular highlight gradient |
| \`easing\` | \`string\` | \`--lg-glass-easing\` | \`cubic-bezier(0.32, 0.72, 0, 1)\` |
| \`transitionDuration\` | \`string\` | \`--lg-glass-transition-duration\` | \`400ms\` |
| \`transition\` | \`string\` | \`--lg-glass-transition\` | \`400ms cubic-bezier(0.32, 0.72, 0, 1)\` |
| \`shadowSoft\` | \`string\` | \`--lg-glass-shadow-soft\` | \`0 20px 50px rgba(0, 0, 0, 0.1)\` |
| \`shadowSharp\` | \`string\` | \`--lg-glass-shadow-sharp\` | \`0 1px 2px rgba(0, 0, 0, 0.05)\` |

> If you override \`transitionDuration\` or \`easing\` but not \`transition\`, it is automatically recomputed.`;

const paletteSection = `# Palette Tokens

## PaletteColor

\`\`\`ts
interface PaletteColor {
  main: string;
  dark: string;
  light: string;
  contrastText?: string;
}
\`\`\`

## StatusColor

\`\`\`ts
interface StatusColor {
  bg: string;
  text: string;
}
\`\`\`

## ThemePalette

| Key | Type | Description |
| :--- | :--- | :--- |
| \`primary\` | \`PaletteColor\` | Primary brand color. |
| \`error\` | \`PaletteColor & StatusColor\` | Error/destructive color. |
| \`warning\` | \`StatusColor\` | Warning status color. |
| \`info\` | \`StatusColor\` | Informational status color. |
| \`success\` | \`StatusColor\` | Success status color. |
| \`text.primary\` | \`string\` | Primary text color. |
| \`text.secondary\` | \`string\` | Secondary text color. |
| \`text.disabled\` | \`string\` | Disabled text color. |
| \`text.onSurface\` | \`string\` | Text on glass surfaces. |
| \`text.onSurfaceSecondary\` | \`string\` | Secondary text on glass surfaces. |
| \`background.default\` | \`string\` | Page background. |
| \`background.paper\` | \`string\` | Paper/card background. |
| \`background.fallback\` | \`string\` | Fallback gradient background. |
| \`action.hover\` | \`string\` | Hover overlay color. |
| \`divider\` | \`string\` | Divider/border color. |
| \`chip.filled\` | \`string\` | Filled chip background. |`;

const radiusSection = `# Radius Tokens

\`\`\`ts
interface ThemeRadius {
  sm: string;  // default "4px"
  md: string;  // default "8px"
  lg: string;  // default "16px"
}
\`\`\`

| CSS Variable | Default |
| :--- | :--- |
| \`--lg-radius-sm\` | \`4px\` |
| \`--lg-radius-md\` | \`8px\` |
| \`--lg-radius-lg\` | \`16px\` |`;

const shadowsSection = `# Shadow Tokens

\`\`\`ts
interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
}
\`\`\`

| CSS Variable | Default |
| :--- | :--- |
| \`--lg-shadows-sm\` | \`0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)\` |
| \`--lg-shadows-md\` | \`0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)\` |
| \`--lg-shadows-lg\` | \`0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)\` |`;

const transitionsSection = `# Transition Tokens

\`\`\`ts
interface ThemeTransitions {
  fast: string;    // default "150ms cubic-bezier(0.4, 0, 0.2, 1)"
  normal: string;  // default "250ms cubic-bezier(0.4, 0, 0.2, 1)"
}
\`\`\`

| CSS Variable | Default |
| :--- | :--- |
| \`--lg-transitions-fast\` | \`150ms cubic-bezier(0.4, 0, 0.2, 1)\` |
| \`--lg-transitions-normal\` | \`250ms cubic-bezier(0.4, 0, 0.2, 1)\` |`;

const typographySection = `# Typography Tokens

\`\`\`ts
interface ThemeTypography {
  fontFamily: string;  // default "system-ui, -apple-system, sans-serif"
}
\`\`\`

| CSS Variable | Default |
| :--- | :--- |
| \`--lg-typography-font-family\` | \`system-ui, -apple-system, sans-serif\` |`;

export const TOKEN_GROUP_DOCS: Record<string, string> = {
  glass: glassSection,
  palette: paletteSection,
  radius: radiusSection,
  shadows: shadowsSection,
  transitions: transitionsSection,
  typography: typographySection,
};

export const TOKEN_GROUP_NAMES = Object.keys(TOKEN_GROUP_DOCS);

export const DOC_KEY_MAP: Record<string, string> = {};

for (const name of COMPONENT_NAMES) {
  DOC_KEY_MAP[`components/${name}`] = COMPONENT_DOCS[name];
}
for (const [key, content] of Object.entries(THEME_DOCS)) {
  DOC_KEY_MAP[`theme/${key}`] = content;
}
for (const [key, content] of Object.entries(TOKEN_GROUP_DOCS)) {
  DOC_KEY_MAP[`theme/tokens/${key}`] = content;
}
