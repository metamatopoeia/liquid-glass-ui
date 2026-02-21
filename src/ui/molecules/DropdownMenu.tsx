import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import s from './DropdownMenu.module.css';

/* --- Root (re-export) --- */
export const DropdownMenuRoot = RadixDropdownMenu.Root;
export const DropdownMenuTrigger = RadixDropdownMenu.Trigger;

/* --- Content --- */
interface ContentProps {
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  minWidth?: number;
  className?: string;
}

export function DropdownMenuContent({
  children,
  align = 'end',
  sideOffset = 4,
  minWidth,
  className = '',
}: ContentProps) {
  const classes = [s.content, className].filter(Boolean).join(' ');

  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className={classes}
        align={align}
        sideOffset={sideOffset}
        style={minWidth ? { minWidth } : undefined}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
}

/* --- Item --- */
interface ItemProps {
  children: ReactNode;
  onSelect?: () => void;
  danger?: boolean;
  className?: string;
}

export function DropdownMenuItem({
  children,
  onSelect,
  danger = false,
  className = '',
}: ItemProps) {
  const classes = [
    danger ? s.itemDanger : s.item,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RadixDropdownMenu.Item className={classes} onSelect={onSelect}>
      {children}
    </RadixDropdownMenu.Item>
  );
}
