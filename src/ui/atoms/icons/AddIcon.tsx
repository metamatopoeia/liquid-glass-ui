import { SVGAttributes } from 'react';
import iconStyles from '../Icon.module.css';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export default function AddIcon({ size = 24, className = '', style, ...rest }: IconProps) {
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
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}
