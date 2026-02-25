import type {
  LiquidGlassTheme,
  LiquidGlassThemeInput,
  DeepPartial,
  CallableSpacing,
} from './types';
import { defaultLightTokens, darkOverrides } from './defaults';
import { deepMerge } from './deepMerge';
import { generateVarsMirror, generateCssVars } from './generateVars';

function createCallableSpacing(unit: number): CallableSpacing {
  const fn = ((factor: number) => `${factor * unit}px`) as CallableSpacing;
  fn.unit = unit;
  return fn;
}

export function createTheme(
  options?: DeepPartial<LiquidGlassThemeInput>,
): LiquidGlassTheme {
  const prefix = options?.cssVarPrefix ?? '--lg';

  const lightBase = deepMerge(
    defaultLightTokens as unknown as Record<string, unknown>,
    (options?.colorSchemes?.light ?? {}) as Record<string, unknown>,
  ) as unknown as LiquidGlassThemeInput;

  const merged = deepMerge(
    lightBase as unknown as Record<string, unknown>,
    options as unknown as Record<string, unknown>,
  ) as unknown as LiquidGlassThemeInput;

  if (
    merged.glass.transitionDuration &&
    merged.glass.easing &&
    !options?.glass?.transition
  ) {
    merged.glass.transition = `${merged.glass.transitionDuration} ${merged.glass.easing}`;
  }

  const darkBase = deepMerge(
    merged as unknown as Record<string, unknown>,
    darkOverrides as unknown as Record<string, unknown>,
    (options?.colorSchemes?.dark ?? {}) as Record<string, unknown>,
  ) as unknown as LiquidGlassThemeInput;

  const vars = generateVarsMirror(merged, prefix);

  const getCssVars = (mode?: 'light' | 'dark'): Record<string, string> => {
    const source = mode === 'dark' ? darkBase : merged;
    return generateCssVars(source, prefix);
  };

  return {
    palette: merged.palette,
    glass: merged.glass,
    typography: merged.typography,
    radius: merged.radius,
    shadows: merged.shadows,
    transitions: merged.transitions,
    spacing: createCallableSpacing(merged.spacing.unit),
    zIndex: merged.zIndex,
    components: merged.components,
    vars,
    getCssVars,
  };
}
