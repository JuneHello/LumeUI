import { useRTL } from '../../hooks/useRTL';
import * as ToastPrimitives from '../../lib/toast/toast-react';
import { cn } from '../../lib/utils';
import IconButton from '../IconButton';
import { CloseIcon } from '../../icons';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { injectNotificationStyles, styles } from './styles';

injectNotificationStyles();

export const NotificationToastProvider = ToastPrimitives.Provider;

export const NotificationToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => {
  const isRTL = useRTL();
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        'moly-notification-viewport',
        'flex flex-col',
        'fixed z-[9999] max-h-screen w-0 m-4 mb-10 bottom-0 sm:top-auto [&:not(:empty)]:w-[320px]',
        '!mb-0', // fix for lux margin-bottom: 4px issue
        styles,
        {
          'moly-notification-viewport-left': isRTL,
          'moly-notification-viewport-right': !isRTL,
        },
        className
      )}
      {...props}
    />
  );
});
NotificationToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80',
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

export const NotificationToast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const isRTL = useRTL();
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        'moly-notification-background',
        toastVariants({ variant }),
        `${
          isRTL
            ? 'moly-notification-background-rtl data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full'
            : 'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full'
        }`,
        className
      )}
      {...props}
    />
  );
});
NotificationToast.displayName = ToastPrimitives.Root.displayName;

export const NotificationToastAction = React.forwardRef<
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
NotificationToastAction.displayName = ToastPrimitives.Action.displayName;

export const NotificationToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-4 rounded-md text-foreground/50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className
    )}
    {...{ 'moly-notification-close': 'moly-notification-close' } as any}
    {...props}
  >
    <IconButton variant="default" size="x-small">
      <CloseIcon />
    </IconButton>
  </ToastPrimitives.Close>
));
NotificationToastClose.displayName = ToastPrimitives.Close.displayName;

export interface NotificationToastTitleProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> {
  showCloseBtn?: boolean;
}

export const NotificationToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, NotificationToastTitleProps>(
  ({ className, showCloseBtn, ...props }, ref) => (
    <ToastPrimitives.Title
      ref={ref}
      className={cn(
        'moly-notification-title',
        'text-sm font-medium text-left w-full',
        {
          'moly-notification-title-limit-width': showCloseBtn,
        },
        className
      )}
      {...props}
    />
  )
);
NotificationToastTitle.displayName = ToastPrimitives.Title.displayName;

export const NotificationToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('moly-notification-description', 'mt-1 text-xs opacity-90 text-left w-full', className)}
    {...props}
  />
));
NotificationToastDescription.displayName = ToastPrimitives.Description.displayName;


export type NotificationToastProps = React.ComponentPropsWithoutRef<typeof NotificationToast>;
export type NotificationToastActionElement = React.ReactElement<typeof NotificationToastAction>;
