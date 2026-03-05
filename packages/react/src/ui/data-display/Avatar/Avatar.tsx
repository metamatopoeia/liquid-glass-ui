import * as RadixAvatar from '@radix-ui/react-avatar';
import { CSSProperties, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Avatar.module.css';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Avatar({
  src,
  alt = '',
  size = 40,
  className = '',
  style,
}: AvatarProps) {
  const ownerState = useMemo(() => ({ size }), [size]);
  const overrides = useComponentOverrides('Avatar', ownerState, { className, style });

  const classes = [s.avatar, overrides.className].filter(Boolean).join(' ');

  return (
    <RadixAvatar.Root
      className={classes}
      style={{ width: size, height: size, ...overrides.style }}
    >
      <RadixAvatar.Image className={s.image} src={src} alt={alt} />
      <RadixAvatar.Fallback className={s.fallback} delayMs={300}>
        {alt ? alt.charAt(0).toUpperCase() : '?'}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
