import type {
  LiquidGlassTheme,
  LiquidGlassThemeInput,
  DeepPartial,
} from './types';
import { createTheme as createCoreTheme } from '@metamatopoeia/liquid-glass-core';
import type { LiquidGlassThemeInput as CoreThemeInput } from '@metamatopoeia/liquid-glass-core';
import { generateVarsMirror, generateCssVars } from './generateVars';

export function createTheme(
  options?: DeepPartial<LiquidGlassThemeInput>,
): LiquidGlassTheme {
  const prefix = options?.cssVarPrefix ?? '--lg';

  const resolved = createCoreTheme(options as DeepPartial<CoreThemeInput> | undefined);

  const vars = generateVarsMirror(resolved.light, prefix);

  const getCssVars = (mode?: 'light' | 'dark'): Record<string, string> => {
    const source = mode === 'dark' ? resolved.dark : resolved.light;
    return generateCssVars(source, prefix);
  };

  return {
    palette: resolved.palette,
    glass: resolved.glass,
    typography: resolved.typography,
    radius: resolved.radius,
    shadows: resolved.shadows,
    transitions: resolved.transitions,
    spacing: resolved.spacing,
    zIndex: resolved.zIndex,
    components: options?.components,
    vars,
    getCssVars,
  };
}
