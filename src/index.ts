/* --- Global CSS (side-effect) --- */
import "./ui/variables.css";

/* --- Theme --- */
export * from "./theme/ThemeProvider";
export type { LiquidGlassTheme, ThemeTokenKey } from "./theme/types";

/* --- Inputs --- */
export { default as Button } from "./ui/inputs/Button";
export { default as Fab } from "./ui/inputs/Fab";
export { default as IconButton } from "./ui/inputs/IconButton";
export { default as Select } from "./ui/inputs/Select";
export { default as TextField } from "./ui/inputs/TextField";

/* --- Surfaces --- */
export { default as AppBar } from "./ui/surfaces/AppBar";
export { default as Card, CardContent, CardMedia } from "./ui/surfaces/Card";
export { default as Paper } from "./ui/surfaces/Paper";

/* --- Data Display --- */
export { default as Avatar } from "./ui/data-display/Avatar";
export { default as Chip } from "./ui/data-display/Chip";
export { default as Separator } from "./ui/data-display/Separator";

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
} from "./ui/feedback/AlertDialog";
export {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogClose,
} from "./ui/feedback/Dialog";
export { default as Skeleton } from "./ui/feedback/Skeleton";
export { default as Spinner } from "./ui/feedback/Spinner";

/* --- Navigation --- */
export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/navigation/DropdownMenu";
