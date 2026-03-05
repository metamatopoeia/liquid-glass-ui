import { ButtonHTMLAttributes, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Fab.module.css';

interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary';
}

export default function Fab({
  color = 'primary',
  className = '',
  children,
  style,
  ...rest
}: FabProps) {
  const ownerState = useMemo(() => ({ color }), [color]);
  const overrides = useComponentOverrides('Fab', ownerState, { className, style });

  const classes = [s.fab, overrides.className].filter(Boolean).join(' ');

  return (
    <button className={classes} style={overrides.style} {...rest}>
      {children}
    </button>
  );
}
