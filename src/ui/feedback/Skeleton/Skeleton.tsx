import { HTMLAttributes, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Skeleton.module.css';

const variantMap: Record<string, string> = {
  text: s.text,
  circular: s.circular,
  rectangular: s.rectangular,
};

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: number | string;
  height?: number | string;
}

export default function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  style,
  ...rest
}: SkeletonProps) {
  const ownerState = useMemo(() => ({ variant }), [variant]);
  const overrides = useComponentOverrides('Skeleton', ownerState, { className, style });

  const classes = [
    variantMap[variant] ?? s.text,
    overrides.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={{
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
        ...overrides.style,
      }}
      {...rest}
    />
  );
}
