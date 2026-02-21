import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ReactNode } from 'react';
import s from './Collapsible.module.css';

interface CollapsibleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export const CollapsibleRoot = CollapsiblePrimitive.Root;

interface CollapsibleContentProps {
  children: ReactNode;
  className?: string;
}

function CollapsibleContent({ children, className }: CollapsibleContentProps) {
  const classes = [s.content, className].filter(Boolean).join(' ');
  return (
    <CollapsiblePrimitive.Content className={classes}>
      {children}
    </CollapsiblePrimitive.Content>
  );
}

export { CollapsibleContent };
