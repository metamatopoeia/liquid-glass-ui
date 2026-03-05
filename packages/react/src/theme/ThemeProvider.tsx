import {
  useMemo,
  useId,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import type { LiquidGlassTheme, LiquidGlassThemeInput, DeepPartial } from './types';
import { createTheme } from './createTheme';
import { useColorScheme } from './useColorScheme';
import { ThemeContext } from './useTheme';

interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  theme?: LiquidGlassTheme | DeepPartial<LiquidGlassThemeInput>;
  mode?: 'light' | 'dark' | 'system';
  children?: ReactNode;
}

function isCreatedTheme(
  value: LiquidGlassTheme | DeepPartial<LiquidGlassThemeInput>,
): value is LiquidGlassTheme {
  return typeof (value as LiquidGlassTheme).getCssVars === 'function';
}

function cssVarsToString(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
}

const ThemeProvider = forwardRef<HTMLDivElement, ThemeProviderProps>(
  function ThemeProvider(
    { theme: themeProp, mode: modeProp = 'system', children, ...rest },
    ref,
  ) {
    const reactId = useId();
    const themeId = `lg-${reactId.replace(/:/g, '')}`;

    const resolvedTheme = useMemo<LiquidGlassTheme>(() => {
      if (!themeProp) return createTheme();
      if (isCreatedTheme(themeProp)) return themeProp;
      return createTheme(themeProp);
    }, [themeProp]);

    const { mode, setMode } = useColorScheme(modeProp);

    const cssVarString = useMemo(() => {
      const vars = resolvedTheme.getCssVars(mode);
      return cssVarsToString(vars);
    }, [resolvedTheme, mode]);

    const contextValue = useMemo(
      () => ({ theme: resolvedTheme, mode, setMode }),
      [resolvedTheme, mode, setMode],
    );

    return (
      <ThemeContext.Provider value={contextValue}>
        <div ref={ref} data-lg-theme={themeId} data-lg-mode={mode} {...rest}>
          <style>{`[data-lg-theme="${themeId}"] { ${cssVarString} }`}</style>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  },
);

export default ThemeProvider;
