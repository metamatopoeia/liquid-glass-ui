import { HTMLAttributes, ReactNode } from 'react';
import s from './AppBar.module.css';

interface AppBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export default function AppBar({ className = '', children, ...rest }: AppBarProps) {
  const classes = [s.appBar, className].filter(Boolean).join(' ');

  return (
    <header className={classes} {...rest}>
      {children}
    </header>
  );
}
