import { HTMLAttributes, ImgHTMLAttributes, ReactNode, useMemo } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import styles from './Card.module.css';

/* --- Card --- */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'outlined' | 'elevated';
}

export default function Card({
  variant = 'outlined',
  className = '',
  onClick,
  children,
  style,
  ...rest
}: CardProps) {
  const ownerState = useMemo(() => ({ variant }), [variant]);
  const overrides = useComponentOverrides('Card', ownerState, { className, style });

  const variantClass = variant === 'outlined' ? styles.cardOutlined : styles.cardElevated;
  const classes = [variantClass, onClick && styles.cardClickable, overrides.className].filter(Boolean).join(' ');

  return (
    <article className={classes} onClick={onClick} style={overrides.style} {...rest}>
      {children}
    </article>
  );
}

/* --- CardContent --- */
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function CardContent({ className = '', children, ...rest }: CardContentProps) {
  const classes = [styles.content, className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

/* --- CardMedia --- */
interface CardMediaProps extends ImgHTMLAttributes<HTMLImageElement> {
  image?: string;
  component?: 'img';
}

export function CardMedia({
  image,
  src,
  alt = '',
  className = '',
  style,
  ...rest
}: CardMediaProps) {
  const classes = [styles.media, className].filter(Boolean).join(' ');
  return (
    <img
      className={classes}
      src={image || src}
      alt={alt}
      style={style}
      {...rest}
    />
  );
}
