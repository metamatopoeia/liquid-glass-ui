import * as RadixTabs from '@radix-ui/react-tabs';
import { ReactNode } from 'react';
import s from './Tabs.module.css';

/* --- Root --- */
interface TabsRootProps {
  value: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export function TabsRoot({ value, onValueChange, children, className = '' }: TabsRootProps) {
  return (
    <RadixTabs.Root value={value} onValueChange={onValueChange} className={className}>
      {children}
    </RadixTabs.Root>
  );
}

/* --- List --- */
interface TabsListProps {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}

export function TabsList({ children, ariaLabel, className = '' }: TabsListProps) {
  const classes = [s.list, className].filter(Boolean).join(' ');
  return (
    <RadixTabs.List className={classes} aria-label={ariaLabel}>
      {children}
    </RadixTabs.List>
  );
}

/* --- Trigger --- */
interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

export function TabsTrigger({ value, children, id, className = '' }: TabsTriggerProps) {
  const classes = [s.trigger, className].filter(Boolean).join(' ');
  return (
    <RadixTabs.Trigger className={classes} value={value} id={id}>
      {children}
    </RadixTabs.Trigger>
  );
}

/* --- Content --- */
interface TabsContentProps {
  value: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

export function TabsContent({ value, children, id, className = '' }: TabsContentProps) {
  const classes = [s.content, className].filter(Boolean).join(' ');
  return (
    <RadixTabs.Content className={classes} value={value} id={id}>
      {children}
    </RadixTabs.Content>
  );
}
