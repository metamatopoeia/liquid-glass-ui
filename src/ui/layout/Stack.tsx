import { HTMLAttributes, ReactNode } from 'react';
import st from './Stack.module.css';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'column' | 'row';
  spacing?: number;
  wrap?: boolean;
  children?: ReactNode;
}

export default function Stack({
  direction = 'column',
  spacing = 0,
  wrap = false,
  className = '',
  style,
  children,
  ...rest
}: StackProps) {
  const classes = [
    direction === 'row' ? st.row : st.stack,
    wrap ? st.wrap : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const combinedStyle = {
    ...(spacing ? { gap: `${spacing * 8}px` } : {}),
    ...style,
  };

  return (
    <div className={classes} style={combinedStyle} {...rest}>
      {children}
    </div>
  );
}
