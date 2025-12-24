'use client';

import { useRTL } from "../../hooks/useRTL";
import { useTheme } from "../../hooks";
import { cn } from "../../lib/utils";
import { CloseIcon, DirectionleftIcon } from '../../icons';
import { IconButton } from "../IconButton";
import * as Dialog from '@radix-ui/react-dialog';
import React, { useCallback, useEffect, useRef, useState, forwardRef } from 'react';
import * as styles from "./styles";
import { DarkDraggableIcon, LightDraggableIcon } from "./icons";
import { Footer } from "./Footer";
import useLockBodyScroll from "./hooks";

export type IconStatus = 'successful' | 'failed' | 'alert' | 'pending';

export interface ModalProps {
  titleClass?: string;
  buttonVertical?: boolean;
  arrowEnable?: boolean;
  arrowHandler?: () => void;
  direction?: string;
  isMobile?: boolean;
  size?: 'large' | 'medium' | 'small';
  type?: IconStatus;
  open?: boolean;
  className?: string;
  overlayClassName?: string;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  closable?: boolean;
  contentHeight?: number | string;
  contentHeightAnimate?: boolean;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
  width?: string | number;
  height?: string | number;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  zIndex?: number;
  titleCenter?: boolean;
  wrapClassName?: string;
  contextWrapper?: string;
  footer?: React.ReactNode;
  confirmBtnDisabled?: boolean;
  children?: React.ReactNode;
  footerWrapper?: string;
  headerWrapper?: string;
  onOpenAutoFocus?: (e: Event) => void;
  modal?: boolean;
  maskClosable?: boolean;
  confirmLoading?: boolean;
  cancelLoading?: boolean;
  draggable?: boolean;
  lockScroll?: boolean;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    onOpenAutoFocus,
    titleClass,
    buttonVertical,
    arrowEnable,
    arrowHandler,
    direction = 'default',
    isMobile,
    size = 'medium',
    confirmBtnDisabled,
    title,
    subTitle,
    open,
    className = '',
    overlayClassName = '',
    zIndex = 1000,
    onOk,
    onCancel,
    onClose,
    titleCenter,
    wrapClassName,
    contextWrapper,
    width,
    height,
    contentHeight = 'auto',
    contentHeightAnimate = false,
    okText = 'Ok',
    type,
    footerWrapper = '',
    headerWrapper = '',
    cancelText = 'Cancel',
    footer,
    closable = true,
    modal = true,
    maskClosable = false,
    confirmLoading = false,
    cancelLoading = false,
    draggable = false,
    lockScroll = true,
    children,
  } = props;

  const isRTL = useRTL();
  const [theme] = useTheme();
  const [openBool, setOpenBool] = useState(open);
  const [modalZIndex, setModalZIndex] = useState(zIndex);

  useLockBodyScroll({
    openBool: openBool,
    lockScroll: lockScroll,
  });

  useEffect(() => {
    if (openBool) {
      const allModal = document.querySelectorAll('.moly-dialog-shadow');
      let maxZIndex = '0';
      allModal.forEach((v: any) => {
        maxZIndex = v.style.zIndex;
      });
      if (parseInt(maxZIndex) >= zIndex) {
        setModalZIndex(parseInt(maxZIndex) + 1);
      }
    }
  }, [openBool, zIndex]);

  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const isDragging = useRef(false);
  const modalPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!draggable || (e.target as HTMLElement).id === 'closeIcon') {
      return;
    }
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current || !draggable) return;
      const offsetX = e.clientX - dragStartX.current;
      const offsetY = e.clientY - dragStartY.current;
      const modalElement = document.querySelector('.moly-modal') as HTMLElement;
      const modalRect = modalElement?.getBoundingClientRect();
      const rightBoundary = (window.innerWidth - (modalRect?.width || 0)) || 0;
      const bottomBoundary = (window.innerHeight - (modalRect?.height || 0)) || 0;

      let currentMPX = modalPosition.current.x;
      let currentMPY = modalPosition.current.y;

      if (!modalPosition.current.x || !modalPosition.current.y) {
        currentMPX = (modalRect?.left || 0) + (modalRect?.width || 0) / 2;
        currentMPY = (modalRect?.top || 0) + (modalRect?.height || 0) / 2;
      }

      let newX = currentMPX + offsetX;
      let newY = currentMPY + offsetY;

      if (modalRect) {
        if (newX < modalRect.width / 2) newX = modalRect.width / 2;
        if (newX > rightBoundary + modalRect.width / 2) newX = rightBoundary + modalRect.width / 2;
        if (newY < modalRect.height / 2) newY = modalRect.height / 2;
        if (newY > bottomBoundary + modalRect.height / 2) newY = bottomBoundary + modalRect.height / 2;
      }

      if (modalElement?.style) {
        modalElement.style.top = `${newY}px`;
        modalElement.style.left = `${newX}px`;
      }

      modalPosition.current = { x: newX, y: newY };
      dragStartX.current = e.clientX;
      dragStartY.current = e.clientY;
    },
    [draggable]
  );

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if (!draggable) return;
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggable, handleMouseMove]);

  const iconMap: Record<IconStatus, string> = {
    successful: 'https://s1.bycsi.com/bybit/deadpool/image-a94c1c9e32e74d0696a47a434310a189.svg',
    failed: 'https://s1.bycsi.com/bybit/deadpool/image-84f00a214fb54eacbc2ec92086433b3f.svg',
    alert: 'https://s1.bycsi.com/bybit/deadpool/image-88a487697968406faa1aa1918f1287e8.svg',
    pending: 'https://s1.bycsi.com/bybit/deadpool/image-ce5dd07f6a53413f825a09b9a5579d99.svg',
  };

  useEffect(() => {
    if (open) {
      isDragging.current = false;
      dragStartX.current = 0;
      dragStartY.current = 0;
      modalPosition.current = { x: 0, y: 0 };
      setTimeout(() => {
        document.body.style.pointerEvents = 'initial';
      }, 100);
    }
    setOpenBool(open);
  }, [open]);

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    } else {
      onCancel?.();
    }
  };

  let modalWidth = width;
  if (isMobile) {
    modalWidth = 'calc(100vw - 48px)';
    if (direction === 'bottom') {
      modalWidth = '100vw';
    }
  }

  const contentRender = () => {
    return (
      <>
        {!draggable && (
          <div
            style={{ zIndex: modalZIndex, pointerEvents: 'auto' }}
            className={cn(
              'moly-dialog-shadow',
              styles.molyModalOpen,
              overlayClassName,
              'font-IBM',
              !open ? styles.molyModalClose : ''
            )}
          />
        )}
        <Dialog.Content
          style={{
            width: modalWidth,
            height: height,
            zIndex: modalZIndex + 1,
          }}
          data-open={open ? 'open' : 'closed'}
          data-direction={direction}
          className={cn(
            'moly-modal pb-[24px] rounded-2xl  font-IBM',
            {
              'pt-[24px]': !draggable,
              'rounded-t-2xl': isMobile && direction === 'bottom',
              'rounded-b-none': isMobile && direction === 'bottom',
              'w-[780px]': !isMobile && !width && size === 'large',
              'w-[560px]': !isMobile && !width && size === 'medium',
              'w-[480px]': !isMobile && !width && size === 'small',
            },
            styles.molyModalContainer,
            className
          )}
          onEscapeKeyDown={handleClose}
          onPointerDownOutside={() => {
            if (maskClosable) {
              handleClose();
            }
          }}
          onOpenAutoFocus={onOpenAutoFocus}
        >
          <div
            className={cn('text-[18px] w-full leading-[26px] font-semibold', {
              'px-[32px]': !isMobile,
              'px-[24px]': isMobile,
              'text-left': isRTL,
              'text-right': !isRTL,
              'text-[20px] leading-[28px]  h-[24px] mr-[0px]': type,
              hidden: !title && !closable,
            })}
          >
            {closable && type && (
              <Dialog.Close asChild>
                <IconButton width="24px" className="w-[24px] h-[24px]">
                  <CloseIcon
                    id="closeIcon"
                    aria-label="Close"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleClose();
                    }}
                    className={cn('IconButton  leading-6 rounded inline-block text-[#81858c]  ')}
                  />
                </IconButton>
              </Dialog.Close>
            )}
          </div>
          <div className={cn(headerWrapper)}>
            {type && (
              <div className={cn('text-center')}>
                <img
                  className={cn('w-[66px] h-[66px] mb-[16px] inline')}
                  src={iconMap[type]}
                  alt="success"
                />
              </div>
            )}
            <Dialog.Title
              className={cn(
                'text-[18px] leading-[26px] font-semibold flex gap-x-2',
                {
                  'px-[32px]': !isMobile,
                  'px-[24px]': isMobile,
                  'pt-[24px]': draggable,
                  'cursor-move': draggable,
                  'text-center': titleCenter,
                  'text-[20px] leading-[28px] mr-[0px]': type,
                  hidden: !title && !closable,
                  'justify-end': !title,
                },
                titleClass
              )}
              id="dragEle"
              onMouseDown={handleMouseDown}
            >
              {arrowEnable && (
                <IconButton width="24px" className={cn('w-[24px] h-[24px]')}>
                  <DirectionleftIcon
                    onClick={() => {
                      arrowHandler?.();
                    }}
                  />
                </IconButton>
              )}
              {draggable && (
                <div className={styles.molyModalDraggableIcon}>
                  {theme === 'light' ? <LightDraggableIcon /> : <DarkDraggableIcon />}
                </div>
              )}
              <div className="flex-1">{title}</div>
              {closable && !type && (
                <Dialog.Close asChild>
                  <IconButton width="24px" className="w-[24px] h-[24px] ">
                    <CloseIcon
                      id="closeIcon"
                      aria-label="Close"
                      onClick={handleClose}
                      className={cn('IconButton leading-6 rounded inline-block text-[#81858c] ')}
                    />
                  </IconButton>
                </Dialog.Close>
              )}
            </Dialog.Title>
            {subTitle && (
              <Dialog.Title
                className={cn(
                  'mt-[8px] text-[16px] leading-[24px] font-normal text-[#81858C] ',
                  {
                    'text-center': titleCenter,
                    'px-[32px]': !isMobile,
                    'px-[24px]': isMobile,
                  }
                )}
              >
                {subTitle}
              </Dialog.Title>
            )}
          </div>
          <div
            ref={ref}
            className={cn(
              contextWrapper,
              styles.molyModalContent,
              'font-IBM',
              title ? '' : 'unhave-header',
              {
                [styles.molyModalContentH5]: isMobile,
                'px-[32px]': !isMobile,
                'px-[24px]': isMobile,
                'overflow-y-scroll max-h-[440px]': isMobile,
                'transition-all duration-300 ease-in-out': contentHeightAnimate,
                hidden: !children,
              },
              wrapClassName
            )}
            style={{ height: contentHeight }}
          >
            {children}
          </div>
          <Footer
            size={size}
            buttonVertical={buttonVertical}
            isMobile={isMobile}
            footerWrapper={footerWrapper}
            confirmBtnDisabled={confirmBtnDisabled}
            footer={footer}
            onOk={onOk}
            onCancel={onCancel}
            okText={okText}
            cancelText={cancelText}
            confirmLoading={confirmLoading}
            cancelLoading={cancelLoading}
          />
        </Dialog.Content>
      </>
    );
  };

  return (
    <Dialog.Root open={openBool} modal={modal}>
      <Dialog.Portal>{contentRender()}</Dialog.Portal>
    </Dialog.Root>
  );
});

Modal.displayName = 'Modal';

export default Modal;
