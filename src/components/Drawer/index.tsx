'use client';

import { useRTL } from "../../hooks/useRTL";
import { cn } from "../../lib/utils";
import { CloseIcon, DirectionleftIcon } from '../../icons';
import { Portal } from '@radix-ui/react-portal';
import React, { useEffect, useState, forwardRef } from 'react';
import { css } from '@emotion/css';
import IconButton from "../IconButton";

const molyDrawerOverlayBase = css`
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--bds-trans-mask);
  animation: overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const molyDrawerClose = css`
  @keyframes overlayHidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: overlayHidden 250ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const molyDrawerBase = css`
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: fixed;
  height: 100%;
  top: 0;
  background-color: var(--bds-gray-bg-card);
  animation: overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const molyDrawerHeader = css`
  padding: 24px 32px 0;
`;

const molyDrawerContainer = css`
  padding: 24px 32px;
  flex: 1;
  overflow-y: auto;
`;

const molyDrawerHeaderTitle = css`
  font-size: 18px;
  font-weight: 600;
  color: var(--bds-gray-t1-title);
`;

const molyDrawerFooter = css`
  padding: 24px 32px;
`;

const styles = {
  molyDrawerOverlay: molyDrawerOverlayBase,
  molyDrawerClose,
  molyDrawer: molyDrawerBase,
  molyDrawerHeader,
  molyDrawerContainer,
  molyDrawerHeaderTitle,
  molyDrawerFooter,
};

export interface DrawerProps {
  size?: 'large' | 'medium' | 'small';
  open?: boolean;
  className?: string;
  titleClass?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  zIndex?: number;
  contextWrapper?: string;
  footerWrapper?: string;
  children?: React.ReactNode;
  placement?: 'left' | 'right';
  returnable?: boolean;
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    size = 'medium',
    title,
    footer,
    open,
    className = '',
    titleClass = '',
    zIndex = 1000,
    onClose,
    contextWrapper,
    footerWrapper,
    closable = true,
    placement = 'right',
    returnable = false,
    children,
  } = props;

  const isRTL = useRTL();
  const [isDrawerOpen, setIsDrawerOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'initial';
      }, 100);
    }
    setIsDrawerOpen(open);
  }, [open]);

  const handleClose = () => {
    onClose?.();
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === 'molyDrawerOverlay') {
      handleClose();
    }
  };

  return (
    <Portal>
      <div
        id="molyDrawerOverlay"
        style={{ zIndex }}
        className={cn(
          styles.molyDrawerOverlay,
          !isDrawerOpen ? styles.molyDrawerClose : '',
          { hidden: !isDrawerOpen }
        )}
        onClick={handleClickOutside}
      >
        <div
          style={{ zIndex: zIndex + 1 }}
          className={cn(
            'flex flex-col',
            styles.molyDrawer,
            !isDrawerOpen ? styles.molyDrawerClose : '',
            {
              'w-[780px]': size === 'large',
              'w-[560px]': size === 'medium',
              'w-[480px]': size === 'small',
              'left-0': placement === 'left' || isRTL,
              'right-0': placement === 'right' && !isRTL,
            },
            className
          )}
        >
          {(returnable || closable || !!title) && (
            <div className={cn('flex items-center', styles.molyDrawerHeader)}>
              {returnable && (
                <IconButton
                  width="24px"
                  className="w-[24px] h-[24px] mr-2"
                >
                  <DirectionleftIcon
                    aria-label="Close"
                    onClick={handleClose}
                    className={cn('IconButton leading-6 rounded inline-block text-[#81858c]')}
                  />
                </IconButton>
              )}
              <span
                className={cn('flex-1', styles.molyDrawerHeaderTitle, titleClass, {
                  'text-left': !isRTL,
                  'text-right': isRTL,
                })}
              >
                {title}
              </span>
              {closable && (
                <IconButton
                  width="24px"
                  className="w-[24px] h-[24px]"
                >
                  <CloseIcon
                    aria-label="Close"
                    onClick={handleClose}
                    className={cn('IconButton leading-6 rounded inline-block text-[#81858c]')}
                  />
                </IconButton>
              )}
            </div>
          )}
          <div
            ref={ref}
            className={cn(styles.molyDrawerContainer, contextWrapper)}
          >
            {children}
          </div>
          {footer && (
            <div className={cn(styles.molyDrawerFooter, footerWrapper)}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
