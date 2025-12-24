import { Button } from "../Button";
import { cn } from "../../lib/utils";
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

export interface FooterProps {
  size?: 'large' | 'medium' | 'small';
  buttonVertical?: boolean;
  isMobile?: boolean;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  okText?: React.ReactNode;
  confirmLoading?: boolean;
  cancelLoading?: boolean;
  cancelText?: React.ReactNode;
  footer?: React.ReactNode;
  footerWrapper?: string;
  confirmBtnDisabled?: boolean;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const {
    size,
    buttonVertical,
    isMobile,
    onOk,
    onCancel,
    okText,
    confirmLoading,
    cancelLoading,
    cancelText,
    footer,
    footerWrapper,
    confirmBtnDisabled,
  } = props;

  if (footer === false || footer === null) {
    return null;
  }

  if (footer) {
    return (
      <div
        style={{ marginTop: 24 }}
        className={cn(
          {
            'px-[24px]': isMobile,
            'px-[32px]': !isMobile,
          },
          footerWrapper
        )}
      >
        {footer}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        marginTop: 24,
        justifyContent: 'center',
      }}
      className={cn({
        'px-[24px]': isMobile,
        'px-[32px]': !isMobile && size === 'small',
        'max-w-[496px] mx-auto': ['large', 'medium'].includes(size || '') && !isMobile,
      })}
    >
      <Dialog.Close asChild>
        <div
          className={cn('flex w-full', footerWrapper, {
            'flex-col gap-[12px]': isMobile && buttonVertical,
            'gap-[20px]': (isMobile && !buttonVertical) || !isMobile,
          })}
        >
          {okText && (
            <Button
              className="flex-1"
              disabled={confirmBtnDisabled}
              variant="primary"
              loading={confirmLoading}
              onClick={() => {
                onOk?.();
              }}
            >
              {okText}
            </Button>
          )}
          {cancelText && (
            <Button
              className="flex-1"
              variant="secondary"
              loading={cancelLoading}
              onClick={() => {
                onCancel?.();
              }}
            >
              {cancelText}
            </Button>
          )}
        </div>
      </Dialog.Close>
    </div>
  );
};
