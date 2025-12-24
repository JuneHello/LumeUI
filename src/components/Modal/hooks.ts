import { useEffect } from 'react';
import { injectGlobal } from '@emotion/css';

export const injectGlobalStyles = () => {
  return injectGlobal`
    body[data-moly-lock-scroll] {
      overflow: hidden;
    }
  `;
};

injectGlobalStyles();

export interface UseLockBodyScrollProps {
  lockScroll: boolean;
  openBool: boolean | undefined;
}

export const useLockBodyScroll = ({ lockScroll, openBool }: UseLockBodyScrollProps) => {
  useEffect(() => {
    const body = document.body;
    if (!lockScroll) return;
    if (openBool) {
      if (body.hasAttribute('data-moly-lock-scroll')) {
        const lockCount = body.getAttribute('data-moly-lock-scroll') || '0';
        const newLock = parseInt(lockCount, 10) + 1 + '';
        body.setAttribute('data-moly-lock-scroll', newLock);
      } else {
        body.setAttribute('data-moly-lock-scroll', '1');
      }
    } else {
      if (body.hasAttribute('data-moly-lock-scroll')) {
        const lockCount = body.getAttribute('data-moly-lock-scroll');
        if (lockCount) {
          const newLock = parseInt(lockCount, 10) - 1;
          if (newLock <= 0) {
            body.removeAttribute('data-moly-lock-scroll');
          } else {
            body.setAttribute('data-moly-lock-scroll', newLock.toString());
          }
        }
      }
    }
  }, [openBool, lockScroll]);

  useEffect(() => {
    return () => {
      const body = document.body;
      if (lockScroll) {
        if (body.hasAttribute('data-moly-lock-scroll')) {
          const lockCount = body.getAttribute('data-moly-lock-scroll');
          if (lockCount) {
            const newLock = parseInt(lockCount, 10) - 1;
            if (newLock <= 0) {
              body.removeAttribute('data-moly-lock-scroll');
            } else {
              body.setAttribute('data-moly-lock-scroll', newLock.toString());
            }
          }
        }
      }
    };
  }, [lockScroll]);

  return {};
};

export default useLockBodyScroll;
