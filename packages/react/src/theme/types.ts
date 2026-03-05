import type { CSSProperties } from 'react';
import type {
  ThemePalette,
  GlassTokens,
  ThemeTypography,
  ThemeRadius,
  ThemeShadows,
  ThemeTransitions,
  CallableSpacing,
  ThemeZIndex,
  ComponentName,
  LiquidGlassThemeInput as CoreThemeInput,
  DeepPartial,
} from '@metamatopoeia/liquid-glass-core';

/* === Re-export all core types for backward compatibility === */
export type {
  DeepPartial,
  PaletteColor,
  StatusColor,
  ThemePalette,
  GlassTokens,
  ThemeTypography,
  ThemeRadius,
  ThemeShadows,
  ThemeTransitions,
  ThemeSpacing,
  CallableSpacing,
  ThemeZIndex,
  ComponentName,
  ButtonSlot,
  CardSlot,
  AppBarSlot,
  PaperSlot,
  DialogSlot,
  AlertDialogSlot,
  SelectSlot,
  TextFieldSlot,
  ChipSlot,
  AvatarSlot,
  FabSlot,
  IconButtonSlot,
  SeparatorSlot,
  SkeletonSlot,
  SpinnerSlot,
  DropdownMenuSlot,
  SpeedDialSlot,
  SpeedDialActionSlot,
  ThemeTokenKey,
} from '@metamatopoeia/liquid-glass-core';

/* === Web-Specific: Component Overrides === */

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

/* === Web-Specific: Vars Mirror === */

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

/* === Web-Specific: Input type (extends core with CSS var prefix & web component overrides) === */

export interface LiquidGlassThemeInput extends CoreThemeInput {
  components?: Partial<Record<ComponentName, ComponentStyleOverride>>;
}

/* === Web-Specific: Root Theme (output of createTheme) === */

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
