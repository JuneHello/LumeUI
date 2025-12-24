import { ReactNode } from 'react';

export enum EToastType {
  SUCCESS = 'success',
  FAIL = 'fail',
  INFO = 'info',
  WARN = 'warn',
  PROCESS = 'process',
}

export type ToastVariant = 'default' | 'destructive';

export interface ToasterToast {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  duration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: ToastVariant;
  iconType?: EToastType;
}

export interface ToastState {
  toasts: ToasterToast[];
}

export type Action =
  | { type: 'ADD_TOAST'; toast: ToasterToast }
  | { type: 'UPDATE_TOAST'; toast: Partial<ToasterToast> & { id: string } }
  | { type: 'DISMISS_TOAST'; toastId?: string }
  | { type: 'REMOVE_TOAST'; toastId?: string };
