import * as RadixSeparator from '@radix-ui/react-separator';
import { useMemo, CSSProperties } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Separator.module.css';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  style?: CSSProperties;
}

export default function Separator({
  orientation = 'horizontal',
  className = '',
  style,
}: SeparatorProps) {
  const ownerState = useMemo(() => ({ orientation }), [orientation]);
  const overrides = useComponentOverrides('Separator', ownerState, { className, style });

  const classes = [
    orientation === 'vertical' ? s.vertical : s.horizontal,
    overrides.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RadixSeparator.Root
      className={classes}
      style={overrides.style}
      orientation={orientation}
      decorative
    />
  );
}
