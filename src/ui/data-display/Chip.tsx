import { HTMLAttributes, ReactNode } from "react";
import s from "./Chip.module.css";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: ReactNode;
  variant?: "filled" | "outlined";
}

const variantMap: Record<string, string> = {
  filled: s.filled,
  outlined: s.outlined,
};

export default function Chip({
  label,
  variant = "filled",
  className = "",
  ...rest
}: ChipProps) {
  const classes = [variantMap[variant] ?? s.chip, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {label}
    </span>
  );
}
