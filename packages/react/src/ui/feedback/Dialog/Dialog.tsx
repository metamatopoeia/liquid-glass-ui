import * as RadixDialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import s from './Dialog.module.css';

/* --- Root / Trigger (re-export) --- */
export const DialogRoot = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

/* --- Content wrapper --- */
interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

export function DialogContent({ children, className = '' }: DialogContentProps) {
  const classes = [s.content, className].filter(Boolean).join(' ');

  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={s.overlay} />
      <RadixDialog.Content className={classes}>
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

/* --- Title --- */
interface DialogTitleProps {
  children: ReactNode;
  className?: string;
}

export function DialogTitle({ children, className = '' }: DialogTitleProps) {
  const classes = [s.title, className].filter(Boolean).join(' ');
  return <RadixDialog.Title className={classes}>{children}</RadixDialog.Title>;
}

/* --- Description --- */
interface DialogDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function DialogDescription({ children, className = '' }: DialogDescriptionProps) {
  const classes = [s.description, className].filter(Boolean).join(' ');
  return <RadixDialog.Description className={classes}>{children}</RadixDialog.Description>;
}

/* --- Actions bar --- */
interface DialogActionsProps {
  children: ReactNode;
  className?: string;
}

export function DialogActions({ children, className = '' }: DialogActionsProps) {
  const classes = [s.actions, className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}

/* --- Close (re-export) --- */
export const DialogClose = RadixDialog.Close;
