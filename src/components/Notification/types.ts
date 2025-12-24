import * as React from 'react';
import { type NotificationToastActionElement, type NotificationToastProps } from './NotificationComponents';

export enum ENotificationType {
  SUCCESS = 'success',
  FAIL = 'fail',
  INFO = 'info',
  WARN = 'warn',
  CUSTOM = 'custom',
}

export interface ToasterToast extends Omit<NotificationToastProps, 'title'> {
  id: string;
  icon?: string;
  iconType?: ENotificationType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: NotificationToastActionElement;
  link?: string;
  linkTarget?: '_blank' | '_self';
  linkText?: string;
  showCloseBtn?: boolean;
}

export const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

export type ActionType = typeof actionTypes;

export type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

export interface State {
  notifications: ToasterToast[];
}
