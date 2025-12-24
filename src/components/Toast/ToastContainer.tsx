import React from 'react';
import { Toast, ToastProvider, ToastTitle, ToastViewport } from './ToastComponents';
import { useToast } from './useToast';

export function ToastContainer() {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="down">
      {toasts.map(({ id, title, action, duration = 3000, ...props }) => (
        <Toast key={id} duration={duration} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
          </div>
          {action}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
