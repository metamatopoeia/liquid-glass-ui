import { HTMLAttributes, ReactNode, useMemo } from "react";
import { useComponentOverrides } from "../../../theme/useComponentOverrides";
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
  style,
  ...rest
}: ChipProps) {
  const ownerState = useMemo(() => ({ variant }), [variant]);
  const overrides = useComponentOverrides("Chip", ownerState, { className, style });

  const classes = [variantMap[variant] ?? s.chip, overrides.className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} style={overrides.style} {...rest}>
      {label}
    </span>
  );
}
