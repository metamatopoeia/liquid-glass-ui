import { HTMLAttributes, ReactNode, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Paper.module.css';

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: number;
  variant?: 'elevation' | 'outlined';
  children?: ReactNode;
}

export default function Paper({
  elevation = 1,
  variant = 'elevation',
  className = '',
  children,
  style,
  ...rest
}: PaperProps) {
  const ownerState = useMemo(() => ({ elevation, variant }), [elevation, variant]);
  const overrides = useComponentOverrides('Paper', ownerState, { className, style });

  const elevationClass = variant === 'outlined'
    ? s.outlined
    : elevation >= 2 ? s.elevation2 : s.elevation1;

  const classes = [elevationClass, overrides.className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={overrides.style} {...rest}>
      {children}
    </div>
  );
}
