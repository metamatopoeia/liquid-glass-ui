import { createContext, useContext } from 'react';
import type { LiquidGlassTheme } from './types';
import { createTheme } from './createTheme';

export interface ThemeContextValue {
  theme: LiquidGlassTheme;
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark' | 'system') => void;
}

let _defaultTheme: LiquidGlassTheme | null = null;
function getDefaultTheme(): LiquidGlassTheme {
  if (!_defaultTheme) _defaultTheme = createTheme();
  return _defaultTheme;
}

const noop = (_mode: 'light' | 'dark' | 'system') => {};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (ctx) return ctx;
  return { theme: getDefaultTheme(), mode: 'light', setMode: noop };
}
