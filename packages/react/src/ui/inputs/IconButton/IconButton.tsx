import { ButtonHTMLAttributes, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
}

export default function IconButton({
  size = 'medium',
  className = '',
  children,
  style,
  ...rest
}: IconButtonProps) {
  const ownerState = useMemo(() => ({ size }), [size]);
  const overrides = useComponentOverrides('IconButton', ownerState, { className, style });

  const classes = [
    s.iconButton,
    size === 'small' ? s.small : '',
    overrides.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} style={overrides.style} {...rest}>
      {children}
    </button>
  );
}
