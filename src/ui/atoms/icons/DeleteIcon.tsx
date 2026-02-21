import { SVGAttributes } from 'react';
import iconStyles from '../Icon.module.css';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export default function DeleteIcon({ size = 24, className = '', style, ...rest }: IconProps) {
  return (
    <svg
      className={`${iconStyles.icon} ${className}`}
      style={{ fontSize: size, ...style }}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...rest}
    >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
}
