import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text' | 'inherit';
  color?: 'primary' | 'error' | 'inherit';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  startIcon?: ReactNode;
}

const variantMap: Record<string, Record<string, string>> = {
  contained: { primary: s.contained, error: s.containedError, inherit: s.contained },
  outlined: { primary: s.outlined, error: s.outlined, inherit: s.outlined },
  text: { primary: s.text, error: s.text, inherit: s.text },
  inherit: { primary: s.inherit, error: s.inherit, inherit: s.inherit },
};

export default function Button({
  variant = 'text',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  startIcon,
  className = '',
  children,
  style,
  ...rest
}: ButtonProps) {
  const ownerState = useMemo(() => ({ variant, color, size, fullWidth }), [variant, color, size, fullWidth]);
  const overrides = useComponentOverrides('Button', ownerState, { className, style });

  const classes = [
    variantMap[variant]?.[color] ?? s.text,
    size === 'small' ? s.small : '',
    fullWidth ? s.fullWidth : '',
    overrides.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} style={overrides.style} {...rest}>
      {startIcon && <span className={s.startIcon}>{startIcon}</span>}
      {children}
    </button>
  );
}
