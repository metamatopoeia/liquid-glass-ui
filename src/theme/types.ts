export interface LiquidGlassTheme {
  /* --- Liquid Glass Physics --- */
  blur?: string;
  bgOpacity?: string;
  borderOpacity?: string;
  surface?: string;
  border?: string;
  reflection?: string;
  easing?: string;
  transitionDuration?: string;
  shadowSoft?: string;
  shadowSharp?: string;

  /* --- Semantic Colors --- */
  colorPrimary?: string;
  colorPrimaryDark?: string;
  colorPrimaryLight?: string;
  colorError?: string;
  colorErrorDark?: string;
  colorErrorLight?: string;
  colorErrorBg?: string;
  colorErrorText?: string;
  colorWarningBg?: string;
  colorWarningText?: string;
  colorInfoBg?: string;
  colorInfoText?: string;
  colorSuccessBg?: string;
  colorSuccessText?: string;
  colorTextPrimary?: string;
  colorTextSecondary?: string;
  colorTextDisabled?: string;
  colorDivider?: string;
  colorActionHover?: string;
  colorBackground?: string;
  colorPaper?: string;
  colorChipFilled?: string;
  colorTextOnSurface?: string;
  colorTextOnSurfaceSecondary?: string;

  /* --- Background --- */
  bgFallback?: string;

  /* --- Typography --- */
  fontFamily?: string;

  /* --- Radii --- */
  radiusSm?: string;
  radiusMd?: string;
  radiusLg?: string;

  /* --- Legacy Shadows --- */
  shadow1?: string;
  shadow2?: string;
  shadow4?: string;

  /* --- Transitions (legacy) --- */
  transitionFast?: string;
  transitionNormal?: string;
}

export type ThemeTokenKey = keyof LiquidGlassTheme;
