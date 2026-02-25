import * as RadixAvatar from '@radix-ui/react-avatar';
import { CSSProperties } from 'react';
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
  const classes = [s.avatar, className].filter(Boolean).join(' ');

  return (
    <RadixAvatar.Root
      className={classes}
      style={{ width: size, height: size, ...style }}
    >
      <RadixAvatar.Image className={s.image} src={src} alt={alt} />
      <RadixAvatar.Fallback className={s.fallback} delayMs={300}>
        {alt ? alt.charAt(0).toUpperCase() : '?'}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
