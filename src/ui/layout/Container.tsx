import { HTMLAttributes, ReactNode } from 'react';
import s from './Container.module.css';

const sizeMap: Record<string, string> = {
  xs: s.xs,
  sm: s.sm,
  md: s.md,
  lg: s.lg,
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export default function Container({
  maxWidth = 'lg',
  className = '',
  children,
  ...rest
}: ContainerProps) {
  const classes = [
    sizeMap[maxWidth] ?? s.lg,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
