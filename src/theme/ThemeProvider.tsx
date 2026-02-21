import {
  createContext,
  useContext,
  useMemo,
  forwardRef,
  type ReactNode,
  type CSSProperties,
  type HTMLAttributes,
} from 'react';
import type { LiquidGlassTheme } from './types';
import { themeToVarMap } from './defaults';

interface ThemeContextValue {
  theme: Partial<LiquidGlassTheme>;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: {} });

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  theme?: Partial<LiquidGlassTheme>;
  children: ReactNode;
}

function themeToCSSVars(theme: Partial<LiquidGlassTheme>): CSSProperties {
  const vars: Record<string, string> = {};
  for (const key in theme) {
    const cssVar = themeToVarMap[key as keyof LiquidGlassTheme];
    const value = theme[key as keyof LiquidGlassTheme];
    if (cssVar && value !== undefined) {
      vars[cssVar] = value;
    }
  }
  return vars as CSSProperties;
}

const ThemeProvider = forwardRef<HTMLDivElement, ThemeProviderProps>(
  function ThemeProvider({ theme = {}, children, style, ...rest }, ref) {
    const contextValue = useMemo(() => ({ theme }), [theme]);
    const cssVars = useMemo(() => themeToCSSVars(theme), [theme]);

    return (
      <ThemeContext.Provider value={contextValue}>
        <div ref={ref} style={{ ...cssVars, ...style }} {...rest}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }
);

export default ThemeProvider;
