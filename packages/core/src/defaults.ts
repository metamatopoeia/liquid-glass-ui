import type { LiquidGlassThemeInput, DeepPartial } from './types';

export const defaultLightTokens: LiquidGlassThemeInput = {
  palette: {
    primary: { main: '#18181b', dark: '#09090b', light: '#3f3f46' },
    error: {
      main: '#d32f2f',
      dark: '#c62828',
      light: '#ef5350',
      bg: '#fdeded',
      text: '#5f2120',
    },
    warning: { bg: '#fff4e5', text: '#663c00' },
    info: { bg: '#e5f6fd', text: '#014361' },
    success: { bg: '#edf7ed', text: '#1e4620' },
    text: {
      primary: '#18181b',
      secondary: '#52525b',
      disabled: 'rgba(0, 0, 0, 0.38)',
      onSurface: '#fff',
      onSurfaceSecondary: '#d4d4d8',
    },
    background: {
      default: '#fff',
      paper: '#fff',
      fallback:
        'linear-gradient(135deg, #09090b 0%, #18181b 25%, #27272a 50%, #3f3f46 75%, #52525b 100%)',
    },
    action: { hover: 'rgba(0, 0, 0, 0.04)' },
    divider: 'rgba(0, 0, 0, 0.12)',
    chip: { filled: '#e4e4e7' },
  },
  glass: {
    blur: '20px',
    bgOpacity: '0.12',
    borderOpacity: '0.2',
    surface: 'rgba(255, 255, 255, var(--lg-glass-bg-opacity))',
    border: 'rgba(255, 255, 255, var(--lg-glass-border-opacity))',
    reflection:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.15) 100%)',
    easing: 'cubic-bezier(0.32, 0.72, 0, 1)',
    transitionDuration: '400ms',
    transition: '400ms cubic-bezier(0.32, 0.72, 0, 1)',
    shadowSoft: '0 20px 50px rgba(0, 0, 0, 0.1)',
    shadowSharp: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  radius: { sm: '4px', md: '8px', lg: '16px' },
  shadows: {
    sm: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    md: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    lg: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spacing: { unit: 8 },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};

export const darkOverrides: DeepPartial<LiquidGlassThemeInput> = {
  glass: {
    surface: 'rgba(0, 0, 0, 0.35)',
    border: 'rgba(255, 255, 255, 0.1)',
    bgOpacity: '0.35',
  },
  palette: {
    text: {
      primary: '#f4f4f5',
      secondary: '#a1a1aa',
    },
  },
};
