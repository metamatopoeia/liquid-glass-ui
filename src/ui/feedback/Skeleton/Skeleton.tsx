import { HTMLAttributes } from 'react';
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
  const classes = [
    variantMap[variant] ?? s.text,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={{
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
        ...style,
      }}
      {...rest}
    />
  );
}
