import { HTMLAttributes, ReactNode } from 'react';
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
  ...rest
}: PaperProps) {
  const elevationClass = variant === 'outlined'
    ? s.outlined
    : elevation >= 2 ? s.elevation2 : s.elevation1;

  const classes = [elevationClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
