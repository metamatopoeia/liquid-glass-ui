import * as RadixSeparator from '@radix-ui/react-separator';
import s from './Separator.module.css';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function Separator({
  orientation = 'horizontal',
  className = '',
}: SeparatorProps) {
  const classes = [
    orientation === 'vertical' ? s.vertical : s.horizontal,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RadixSeparator.Root
      className={classes}
      orientation={orientation}
      decorative
    />
  );
}
