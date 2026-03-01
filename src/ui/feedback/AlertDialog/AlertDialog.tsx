import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { useEffect, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import s from './AlertDialog.module.css';

export function AlertDialogRoot(props: ComponentPropsWithoutRef<typeof RadixAlertDialog.Root>) {
  useEffect(() => {
    console.warn(
      '[liquid-glass-ui] AlertDialog is deprecated and will be removed in v2.0.0. ' +
        'Please migrate to the Dialog component instead.'
    );
  }, []);
  return <RadixAlertDialog.Root {...props} />;
}

export const AlertDialogTrigger = RadixAlertDialog.Trigger;

interface AlertDialogContentProps {
  children: ReactNode;
  className?: string;
}

export function AlertDialogContent({ children, className = '' }: AlertDialogContentProps) {
  const classes = [s.content, className].filter(Boolean).join(' ');
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className={s.overlay} />
      <RadixAlertDialog.Content className={classes}>
        {children}
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}

interface AlertDialogTitleProps {
  children: ReactNode;
  className?: string;
}

export function AlertDialogTitle({ children, className = '' }: AlertDialogTitleProps) {
  const classes = [s.title, className].filter(Boolean).join(' ');
  return <RadixAlertDialog.Title className={classes}>{children}</RadixAlertDialog.Title>;
}

interface AlertDialogDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function AlertDialogDescription({ children, className = '' }: AlertDialogDescriptionProps) {
  const classes = [s.description, className].filter(Boolean).join(' ');
  return <RadixAlertDialog.Description className={classes}>{children}</RadixAlertDialog.Description>;
}

interface AlertDialogActionsProps {
  children: ReactNode;
  className?: string;
}

export function AlertDialogActions({ children, className = '' }: AlertDialogActionsProps) {
  const classes = [s.actions, className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}

export const AlertDialogCancel = RadixAlertDialog.Cancel;
export const AlertDialogAction = RadixAlertDialog.Action;
