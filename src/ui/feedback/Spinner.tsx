import s from './Spinner.module.css';

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function Spinner({
  size = 40,
  color,
  className = '',
}: SpinnerProps) {
  const classes = [s.spinner, className].filter(Boolean).join(' ');

  return (
    <svg
      className={classes}
      style={{ width: size, height: size, ...(color ? { color } : {}) }}
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
