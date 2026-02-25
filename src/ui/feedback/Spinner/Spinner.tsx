import { useMemo, CSSProperties } from 'react';
import { useComponentOverrides } from '../../../theme/useComponentOverrides';
import s from './Spinner.module.css';

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Spinner({
  size = 40,
  color,
  className = '',
  style,
}: SpinnerProps) {
  const ownerState = useMemo(() => ({ size, color }), [size, color]);
  const overrides = useComponentOverrides('Spinner', ownerState, { className, style });

  const classes = [s.spinner, overrides.className].filter(Boolean).join(' ');

  return (
    <svg
      className={classes}
      style={{ width: size, height: size, ...(color ? { color } : {}), ...overrides.style }}
      viewBox="0 0 44 44"
    >
      <circle
        className={s.circle}
        cx="22"
        cy="22"
        r="20.2"
        fill="none"
        strokeWidth="3.6"
      />
    </svg>
  );
}
