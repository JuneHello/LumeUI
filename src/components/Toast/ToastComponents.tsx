import React, { forwardRef } from 'react';
import * as ToastPrimitives from '../../lib/toast/toast-react';
import { cn } from '../../lib/utils';
import { useRTL } from '../../hooks/useRTL';
import { cva, type VariantProps } from 'class-variance-authority';
import { toastStyles } from './styles';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => {
  const isRTL = useRTL();
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        'moly-toast-viewport',
        'flex flex-col justify-center items-center',
        'fixed top-0 z-[9999] max-h-screen w-0 [&:not(:empty)]:w-max pointer-events-none',
        '!mb-0',
        toastStyles,
        {
          'translate-x-1/2 right-1/2': isRTL,
          '-translate-x-1/2 left-1/2': !isRTL,
        },
        className
      )}
      {...props}
    />
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-md border shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full',
  {
    variants: {
      variant: {
        default: 'border bg-background flex justify-center align-center border-0 rounded-lg mb-2',
        destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const isRTL = useRTL();
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        'moly-toast-background',
        toastVariants({ variant }),
        isRTL ? 'moly-toast-background-rtl' : '',
        className
      )}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-medium moly-toast-title', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

export { Toast, ToastAction, ToastProvider, ToastTitle, ToastViewport };
