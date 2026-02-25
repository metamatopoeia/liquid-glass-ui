import { ButtonHTMLAttributes } from 'react';
import s from './Fab.module.css';

interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary';
}

export default function Fab({
  className = '',
  children,
  ...rest
}: FabProps) {
  const classes = [s.fab, className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
