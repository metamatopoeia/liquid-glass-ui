import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import s from './SpeedDial.module.css';

/* === Types === */

type Direction = 'up' | 'down' | 'left' | 'right';

export interface SpeedDialProps {
  ariaLabel: string;
  icon: ReactNode;
  openIcon?: ReactNode;
  direction?: Direction;
  open?: boolean;
  defaultOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  hidden?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export interface SpeedDialActionProps {
  icon: ReactNode;
  tooltipTitle: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

/* === Context === */

interface SpeedDialContextValue {
  open: boolean;
  onClose: () => void;
}

const SpeedDialContext = createContext<SpeedDialContextValue | null>(null);

function useSpeedDialContext(): SpeedDialContextValue {
  const ctx = useContext(SpeedDialContext);
  if (ctx === null) {
    throw new Error(
      '[liquid-glass-ui] SpeedDialAction must be rendered inside a SpeedDial.'
    );
  }
  return ctx;
}

/* === Direction class map === */

const directionClassMap: Record<Direction, string> = {
  up: s.directionUp,
  down: s.directionDown,
  left: s.directionLeft,
  right: s.directionRight,
};

/* === SpeedDial === */

export function SpeedDial({
  ariaLabel,
  icon,
  openIcon,
  direction = 'up',
  open: openProp,
  defaultOpen = false,
  onOpen,
  onClose,
  hidden = false,
  className = '',
  style,
  children,
}: SpeedDialProps) {
  const isControlled = openProp !== undefined;
  const [openState, setOpenState] = useState(defaultOpen);
  const open = isControlled ? (openProp as boolean) : openState;
  const rootRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (!isControlled) setOpenState(false);
    onClose?.();
  }, [isControlled, onClose]);

  const handleOpen = useCallback(() => {
    if (!isControlled) setOpenState(true);
    onOpen?.();
  }, [isControlled, onOpen]);

  const handleToggle = () => {
    if (open) handleClose();
    else handleOpen();
  };

  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e: globalThis.MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, handleClose]);

  const rootClasses = [
    s.root,
    directionClassMap[direction],
    hidden ? s.hidden : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const actionsClasses = [s.actions, !open ? s.actionsClosed : '']
    .filter(Boolean)
    .join(' ');

  const showOpenIcon = open && openIcon;

  return (
    <SpeedDialContext.Provider value={{ open, onClose: handleClose }}>
      <div
        ref={rootRef}
        className={rootClasses}
        style={style}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <button
          type="button"
          className={s.fab}
          aria-label={ariaLabel}
          onClick={handleToggle}
        >
          <span
            className={[
              s.fabIcon,
              showOpenIcon ? s.fabIconHidden : s.fabIconVisible,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {icon}
          </span>
          {openIcon && (
            <span
              className={[
                s.fabIcon,
                showOpenIcon ? s.fabIconVisible : s.fabIconHidden,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {openIcon}
            </span>
          )}
        </button>
        <div
          className={actionsClasses}
          role="menu"
          aria-label={`${ariaLabel} actions`}
        >
          {children}
        </div>
      </div>
    </SpeedDialContext.Provider>
  );
}

/* === SpeedDialAction === */

export function SpeedDialAction({
  icon,
  tooltipTitle,
  onClick,
  disabled = false,
  className = '',
}: SpeedDialActionProps) {
  const { open, onClose } = useSpeedDialContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onClose();
  };

  const actionClasses = [s.action, !open ? s.actionClosed : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={s.actionWrapper} role="menuitem">
      <span
        className={[s.label, !open ? s.labelHidden : ''].filter(Boolean).join(' ')}
      >
        {tooltipTitle}
      </span>
      <button
        type="button"
        className={actionClasses}
        disabled={disabled}
        onClick={handleClick}
        tabIndex={open ? 0 : -1}
        aria-label={typeof tooltipTitle === 'string' ? tooltipTitle : undefined}
      >
        {icon}
      </button>
    </span>
  );
}
