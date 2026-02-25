/* --- Global CSS (side-effect) --- */
import "./ui/variables.css";

/* --- Theme --- */
export * from "./theme/ThemeProvider";
export type { LiquidGlassTheme, ThemeTokenKey } from "./theme/types";

/* --- Inputs --- */
export { default as Button } from "./ui/inputs/Button/Button";
export { default as Fab } from "./ui/inputs/Fab/Fab";
export { default as IconButton } from "./ui/inputs/IconButton/IconButton";
export { default as Select } from "./ui/inputs/Select/Select";
export { default as TextField } from "./ui/inputs/TextField/TextField";

/* --- Surfaces --- */
export { default as AppBar } from "./ui/surfaces/AppBar/AppBar";
export { default as Card, CardContent, CardMedia } from "./ui/surfaces/Card/Card";
export { default as Paper } from "./ui/surfaces/Paper/Paper";

/* --- Data Display --- */
export { default as Avatar } from "./ui/data-display/Avatar/Avatar";
export { default as Chip } from "./ui/data-display/Chip/Chip";
export { default as Separator } from "./ui/data-display/Separator/Separator";

/* --- Feedback --- */
export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/feedback/AlertDialog/AlertDialog";
export {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogClose,
} from "./ui/feedback/Dialog/Dialog";
export { default as Skeleton } from "./ui/feedback/Skeleton/Skeleton";
export { default as Spinner } from "./ui/feedback/Spinner/Spinner";

/* --- Navigation --- */
export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/navigation/DropdownMenu/DropdownMenu";
