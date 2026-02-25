import type { ThemeVars, LiquidGlassThemeInput } from './types';

function camelToKebab(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function flattenToCssVars(
  obj: Record<string, unknown>,
  prefix: string,
  result: Record<string, string>,
): void {
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const varName = `${prefix}-${camelToKebab(key)}`;

    if (typeof value === 'string') {
      result[varName] = value;
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenToCssVars(value as Record<string, unknown>, varName, result);
    }
  }
}

function buildVarsMirror(
  obj: Record<string, unknown>,
  prefix: string,
): Record<string, unknown> {
  const mirror: Record<string, unknown> = {};

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const varName = `${prefix}-${camelToKebab(key)}`;

    if (typeof value === 'string') {
      mirror[key] = `var(${varName})`;
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      mirror[key] = buildVarsMirror(value as Record<string, unknown>, varName);
    }
  }

  return mirror;
}

const MIRRORED_GROUPS = [
  'palette',
  'glass',
  'typography',
  'radius',
  'shadows',
  'transitions',
] as const;

export function generateVarsMirror(
  theme: LiquidGlassThemeInput,
  prefix = '--lg',
): ThemeVars {
  const vars: Record<string, unknown> = {};

  for (const group of MIRRORED_GROUPS) {
    vars[group] = buildVarsMirror(
      theme[group] as unknown as Record<string, unknown>,
      `${prefix}-${camelToKebab(group)}`,
    );
  }

  return vars as ThemeVars;
}

export function generateCssVars(
  theme: LiquidGlassThemeInput,
  prefix = '--lg',
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const group of MIRRORED_GROUPS) {
    flattenToCssVars(
      theme[group] as unknown as Record<string, unknown>,
      `${prefix}-${camelToKebab(group)}`,
      result,
    );
  }

  return result;
}
