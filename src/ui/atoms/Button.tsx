import { ButtonHTMLAttributes, ReactNode } from 'react';
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
  ...rest
}: ButtonProps) {
  const classes = [
    variantMap[variant]?.[color] ?? s.text,
    size === 'small' ? s.small : '',
    fullWidth ? s.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {startIcon && <span className={s.startIcon}>{startIcon}</span>}
      {children}
    </button>
  );
}
