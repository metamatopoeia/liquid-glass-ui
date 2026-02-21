import { HTMLAttributes, ReactNode } from 'react';
import styles from './Alert.module.css';

const severityMap: Record<string, string> = {
  error: styles.error,
  warning: styles.warning,
  info: styles.info,
  success: styles.success,
};

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  severity?: 'error' | 'warning' | 'info' | 'success';
  title?: string;
  children?: ReactNode;
}

export default function Alert({
  severity = 'error',
  title,
  children,
  className = '',
  ...rest
}: AlertProps) {
  const classes = [
    severityMap[severity] ?? styles.error,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="alert" {...rest}>
      <div className={styles.message}>
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    </div>
  );
}
