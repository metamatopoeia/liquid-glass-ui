import type { CSSProperties, ReactNode } from 'react';

/* === Utility Types === */

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/* === Palette === */

export interface PaletteColor {
  main: string;
  dark: string;
  light: string;
  contrastText?: string;
}

export interface StatusColor {
  bg: string;
  text: string;
}

export interface ThemePalette {
  primary: PaletteColor;
  error: PaletteColor & StatusColor;
  warning: StatusColor;
  info: StatusColor;
  success: StatusColor;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    onSurface: string;
    onSurfaceSecondary: string;
  };
  background: { default: string; paper: string; fallback: string };
  action: { hover: string };
  divider: string;
  chip: { filled: string };
}

/* === Glass Physics === */

export interface GlassTokens {
  blur: string;
  bgOpacity: string;
  borderOpacity: string;
  surface: string;
  border: string;
  reflection: string;
  easing: string;
  transitionDuration: string;
  transition: string;
  shadowSoft: string;
  shadowSharp: string;
}

/* === Typography === */

export interface ThemeTypography {
  fontFamily: string;
}

/* === Radius === */

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
}

/* === Shadows === */

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
}

/* === Transitions === */

export interface ThemeTransitions {
  fast: string;
  normal: string;
}

/* === Spacing === */

export interface ThemeSpacing {
  unit: number;
}

export interface CallableSpacing extends ThemeSpacing {
  (factor: number): string;
}

/* === Z-Index === */

export interface ThemeZIndex {
  appBar: number;
  drawer: number;
  modal: number;
  popover: number;
  tooltip: number;
}

/* === Component Overrides === */

export type ComponentName =
  | 'Button'
  | 'Card'
  | 'AppBar'
  | 'Paper'
  | 'Dialog'
  | 'AlertDialog'
  | 'Select'
  | 'TextField'
  | 'Chip'
  | 'Avatar'
  | 'Fab'
  | 'IconButton'
  | 'Separator'
  | 'Skeleton'
  | 'Spinner'
  | 'DropdownMenu'
  | 'SpeedDial'
  | 'SpeedDialAction';

export interface ComponentStyleOverride<SlotName extends string = string> {
  styleOverrides?: Partial<Record<
    SlotName,
    | CSSProperties
    | ((params: { theme: LiquidGlassTheme }) => CSSProperties)
  >>;
  variants?: Array<{
    props:
      | Record<string, unknown>
      | ((props: Record<string, unknown>) => boolean);
    style:
      | CSSProperties
      | ((params: { theme: LiquidGlassTheme }) => CSSProperties);
  }>;
  defaultProps?: Record<string, unknown>;
}

/* --- Per-component slot maps --- */

export type ButtonSlot = 'root' | 'startIcon';
export type CardSlot = 'root' | 'content' | 'media';
export type AppBarSlot = 'root';
export type PaperSlot = 'root';
export type DialogSlot = 'overlay' | 'content' | 'title' | 'description' | 'actions';
export type AlertDialogSlot = 'overlay' | 'content' | 'title' | 'description' | 'actions';
export type SelectSlot = 'trigger' | 'content' | 'item';
export type TextFieldSlot = 'root' | 'label' | 'input' | 'helper';
export type ChipSlot = 'root';
export type AvatarSlot = 'root' | 'image' | 'fallback';
export type FabSlot = 'root';
export type IconButtonSlot = 'root';
export type SeparatorSlot = 'root';
export type SkeletonSlot = 'root';
export type SpinnerSlot = 'root';
export type DropdownMenuSlot = 'content' | 'item';
export type SpeedDialSlot = 'root' | 'fab' | 'actions';
export type SpeedDialActionSlot = 'root' | 'fab' | 'label';

/* === Vars Mirror === */

type VarsLeaf<T> = T extends string
  ? string
  : T extends object
    ? { [K in keyof T]: VarsLeaf<T[K]> }
    : never;

export type ThemeVars = {
  palette: VarsLeaf<ThemePalette>;
  glass: VarsLeaf<GlassTokens>;
  typography: VarsLeaf<ThemeTypography>;
  radius: VarsLeaf<ThemeRadius>;
  shadows: VarsLeaf<ThemeShadows>;
  transitions: VarsLeaf<ThemeTransitions>;
};

/* === Input type (consumer passes to createTheme) === */

export interface LiquidGlassThemeInput {
  palette: ThemePalette;
  glass: GlassTokens;
  typography: ThemeTypography;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  spacing: ThemeSpacing;
  zIndex: ThemeZIndex;
  components?: Partial<Record<ComponentName, ComponentStyleOverride>>;
  colorSchemes?: {
    light?: DeepPartial<Omit<LiquidGlassThemeInput, 'colorSchemes' | 'components'>>;
    dark?: DeepPartial<Omit<LiquidGlassThemeInput, 'colorSchemes' | 'components'>>;
  };
  cssVarPrefix?: string;
}

/* === Root Theme (output of createTheme) === */

export interface LiquidGlassTheme {
  palette: ThemePalette;
  glass: GlassTokens;
  typography: ThemeTypography;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  spacing: CallableSpacing;
  zIndex: ThemeZIndex;
  components?: Partial<Record<ComponentName, ComponentStyleOverride>>;
  vars: ThemeVars;
  getCssVars: (mode?: 'light' | 'dark') => Record<string, string>;
}

/* === Deprecated compat alias === */

export type ThemeTokenKey = keyof LiquidGlassTheme;
