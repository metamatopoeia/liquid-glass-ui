import { ButtonHTMLAttributes } from 'react';
import s from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
}

export default function IconButton({
  size = 'medium',
  className = '',
  children,
  ...rest
}: IconButtonProps) {
  const classes = [
    s.iconButton,
    size === 'small' ? s.small : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
