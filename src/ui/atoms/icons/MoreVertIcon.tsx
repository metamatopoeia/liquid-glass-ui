import { SVGAttributes } from 'react';
import iconStyles from '../Icon.module.css';

interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export default function MoreVertIcon({ size = 24, className = '', style, ...rest }: IconProps) {
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
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}
