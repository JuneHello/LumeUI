import RcTooltip from 'rc-tooltip';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/utils';
import { useRTL } from '../../hooks/useRTL';
import { IconButton } from '../IconButton';
import { CirclepromptIcon, CloseIcon, HelpIcon, PlacardIcon } from '../../icons';
import getPlacements from './placements';
import { injectPopoverStyles } from './styles';
import { PopoverProps } from './types';

injectPopoverStyles();

const prefixCls = 'moly-popover';

const Popover: React.FC<PopoverProps> = memo(
  ({
    title,
    content,
    trigger = 'hover',
    type,
    children,
    overlayClassName,
    placement = 'top',
    visible,
    onVisibleChange,
    showCloseBtn = false,
    hideAnimate = false,
    showArrow = true,
    noPadding = false,
    disabled = false,
    ...otherProps
  }) => {
    const isRTL = useRTL();

    const overlayClass = useMemo(() => {
      const typeClass = type ? `moly-popover-${type}` : '';
      const animateClass = hideAnimate ? 'moly-popover-no-animate' : '';
      const noPaddingClass = noPadding ? 'moly-popover-no-padding' : '';
      return cn(typeClass, 'font-IBM', overlayClassName, animateClass, noPaddingClass);
    }, [overlayClassName, type, hideAnimate, noPadding]);

    const controlled = useMemo(() => {
      return visible !== null && visible !== undefined;
    }, [visible]);

    const [visibleState, setVisibleState] = useState(visible || false);

    useEffect(() => {
      setVisibleState(Boolean(visible));
    }, [visible]);

    const onVisibleStateChange = useCallback(
      (v: boolean) => {
        onVisibleChange?.(v);
        if (!controlled) {
          setVisibleState(v);
        }
      },
      [controlled, onVisibleChange]
    );

    const onClose = useCallback(() => {
      onVisibleChange?.(false);
      if (!controlled) {
        setVisibleState(false);
      }
    }, [controlled, onVisibleChange]);

    const titleTemplate = useMemo(() => {
      let icon = null;
      const clzName = cn('absolute', '!w-[14px]', '!h-[14px]', isRTL ? 'right-3 moly-popover-rotate' : 'left-3');
      if (type === 'info') {
        icon = <HelpIcon className={clzName} />;
      } else if (type === 'highlight') {
        icon = <PlacardIcon className={clzName} />;
      } else if (type === 'warning') {
        icon = <CirclepromptIcon className={clzName} />;
      }

      return (
        <>
          {icon}
          <span className={cn(showCloseBtn ? 'me-7' : '')}>{title}</span>
          {showCloseBtn ? (
            <IconButton
              variant="default"
              className={cn('absolute top-3 cursor-pointer', isRTL ? 'left-3' : 'right-3', {
                '!text-base-bds-static-white': type === 'warning',
              })}
              size="x-small"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </>
      );
    }, [isRTL, type, title, onClose, showCloseBtn]);

    const getOverlay = useCallback(() => {
      return (
        <>
          <div className={cn(`${prefixCls}-title`, { '!pr-8': type && isRTL, '!pl-8': type && !isRTL })}>
            {titleTemplate}
          </div>
          <div
            className={cn(`${prefixCls}-inner-content`, isRTL ? 'text-right' : 'text-left', {
              '!pr-8': type && isRTL,
              '!pl-8': type && !isRTL,
            })}
          >
            {content}
          </div>
        </>
      );
    }, [content, isRTL, titleTemplate, type]);

    const placements = useMemo(() => {
      return getPlacements({
        arrowWidth: 12,
        borderRadius: 8,
        offset: 0,
      });
    }, []);

    if (disabled) {
      return <>{children}</>;
    }

    return (
      <RcTooltip
        trigger={trigger}
        placement={placement}
        overlayClassName={overlayClass}
        visible={visibleState}
        onVisibleChange={onVisibleStateChange}
        builtinPlacements={placements}
        getTooltipContainer={() => (typeof document === 'undefined' ? (undefined as any) : document.body)}
        overlay={getOverlay()}
        prefixCls={prefixCls}
        mouseEnterDelay={0.1}
        mouseLeaveDelay={0.1}
        showArrow={showArrow}
        {...otherProps}
      >
        {children as React.ReactElement}
      </RcTooltip>
    );
  }
);

Popover.displayName = 'Popover';

export { Popover };
export type { PopoverProps };
export default Popover;
