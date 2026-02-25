import { HTMLAttributes, ReactNode } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './AppBar.module.css';

interface AppBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const EMPTY_OWNER_STATE = {};

export default function AppBar({ className = '', children, style, ...rest }: AppBarProps) {
  const overrides = useComponentOverrides('AppBar', EMPTY_OWNER_STATE, { className, style });
  const classes = [s.appBar, overrides.className].filter(Boolean).join(' ');

  return (
    <header className={classes} style={overrides.style} {...rest}>
      {children}
    </header>
  );
}
