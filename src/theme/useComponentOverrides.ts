import { useMemo, type CSSProperties } from 'react';
import type { ComponentName, LiquidGlassTheme } from './types';
import { useTheme } from './useTheme';

interface OverrideResult {
  className: string;
  style: CSSProperties;
  resolvedProps: Record<string, unknown>;
}

function resolveStyle(
  styleDef: CSSProperties | ((params: { theme: LiquidGlassTheme }) => CSSProperties),
  theme: LiquidGlassTheme,
): CSSProperties {
  return typeof styleDef === 'function' ? styleDef({ theme }) : styleDef;
}

function matchesProps(
  matcher: Record<string, unknown> | ((props: Record<string, unknown>) => boolean),
  ownerState: Record<string, unknown>,
): boolean {
  if (typeof matcher === 'function') return matcher(ownerState);
  return Object.entries(matcher).every(
    ([key, value]) => ownerState[key] === value,
  );
}

export function useComponentOverrides(
  componentName: ComponentName,
  ownerState: Record<string, unknown>,
  props: { className?: string; style?: CSSProperties },
): OverrideResult {
  const { theme } = useTheme();
  const { className = '', style } = props;

  return useMemo(() => {
    const config = theme.components?.[componentName];
    if (!config) {
      return {
        className,
        style: style ?? {},
        resolvedProps: { className, style },
      };
    }

    const resolvedProps = config.defaultProps
      ? { ...config.defaultProps, className, style }
      : { className, style };

    let mergedStyle: CSSProperties = {};

    if (config.styleOverrides?.root) {
      mergedStyle = {
        ...mergedStyle,
        ...resolveStyle(config.styleOverrides.root, theme),
      };
    }

    if (config.variants) {
      for (const variant of config.variants) {
        if (matchesProps(variant.props, ownerState)) {
          mergedStyle = {
            ...mergedStyle,
            ...resolveStyle(variant.style, theme),
          };
        }
      }
    }

    if (style) mergedStyle = { ...mergedStyle, ...style };

    return {
      className: (resolvedProps.className as string) ?? '',
      style: mergedStyle,
      resolvedProps,
    };
  }, [theme, componentName, ownerState, className, style]);
}
