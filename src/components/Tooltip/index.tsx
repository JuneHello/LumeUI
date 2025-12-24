import RcTooltip from 'rc-tooltip';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { tooltipStyles, globalTooltipCss } from './styles';
import { TooltipProps, TooltipPlacement } from './types';

globalTooltipCss();

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    title,
    placement = 'top',
    defaultOpen = false,
    popupContainer = typeof document === 'undefined' ? undefined : document.body,
    mouseEnterDelay = 250,
    mouseLeaveDelay = 500,
    overlayClassName,
    overlayStyle,
    trigger = 'hover',
    open,
    zIndex,
    onOpenChange = () => {},
    destroyTooltipOnHide = false,
    hasDashedLine = false,
    stopPropagation = false,
    hideAnimation = false,
    hideWrapper = false,
    showArrow = true,
    disabled = false,
  } = props;

  const childRef = useRef<HTMLDivElement>(null);
  const [offsetMap, setOffsetMap] = useState<Record<string, [number, number]>>({});

  useEffect(() => {
    const ARROW_SIZE = 6;
    const ARROW_MARGIN = 16;
    const rect = childRef.current?.getBoundingClientRect();
    const childWidth = rect?.width || 0;
    const childHeight = rect?.height || 0;

    const offsetX = childWidth / 2 - ARROW_MARGIN - ARROW_SIZE;
    const offsetY = childHeight / 2 - ARROW_MARGIN - ARROW_SIZE;

    const map: Record<string, [number, number]> = {
      topLeft: [offsetX, -4],
      top: [0, -4],
      topRight: [-offsetX, -4],
      bottomLeft: [offsetX, 4],
      bottom: [0, 4],
      bottomRight: [-offsetX, 4],
      leftTop: [-4, offsetY],
      left: [-4, 0],
      leftBottom: [-4, -offsetY],
      rightTop: [4, offsetY],
      right: [4, 0],
      rightBottom: [4, -offsetY],
    };
    setOffsetMap(map);
  }, []);

  let returnOverlayClassName = overlayClassName || '';
  if (hideAnimation) {
    returnOverlayClassName += (returnOverlayClassName ? ' ' : '') + 'no-animate';
  }
  if (!showArrow) {
    returnOverlayClassName += (returnOverlayClassName ? ' ' : '') + 'no-arrow';
  }

  if (!title || disabled) {
    return <>{children}</>;
  }

  return (
    <RcTooltip
      prefixCls="moly-tooltip"
      trigger={trigger}
      defaultVisible={defaultOpen}
      placement={placement}
      onVisibleChange={onOpenChange}
      visible={open}
      overlay={title}
      overlayStyle={overlayStyle}
      overlayClassName={returnOverlayClassName}
      mouseEnterDelay={mouseEnterDelay / 1000.0}
      mouseLeaveDelay={mouseLeaveDelay / 1000.0}
      getTooltipContainer={() => popupContainer as HTMLElement}
      destroyTooltipOnHide={destroyTooltipOnHide}
      showArrow={showArrow}
      align={{
        offset: offsetMap[placement as string] || [0, 0],
      }}
      zIndex={zIndex}
    >
      {!hideWrapper ? (
        <div
          className={cn('inline-block', hasDashedLine && [tooltipStyles.molyTooltipUnderline, 'cursor-pointer'])}
          onClick={(e) => {
            if (stopPropagation) e.stopPropagation();
          }}
          ref={childRef}
        >
          {children}
        </div>
      ) : (
        (children as React.ReactElement)
      )}
    </RcTooltip>
  );
};

export default Tooltip;
