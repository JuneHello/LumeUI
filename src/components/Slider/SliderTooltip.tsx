import React, { useEffect, useRef, useState, useMemo } from 'react';
import Tooltip from 'rc-tooltip';
import raf from 'rc-util/lib/raf';
import { tooltipStyles } from './styles';
import {
  ArrowCenterPlacementAlignMap,
  DisableAutoArrowList,
  MAX_VERTICAL_CONTENT_RADIUS,
  PlacementAlignMap,
  AlignType,
  BuildInPlacements,
} from './types';

interface HandleTooltipProps {
  value: number;
  children: React.ReactElement;
  onDrag: boolean;
  tipFormatter?: (val: number) => React.ReactNode;
  arrowPointAtCenter?: boolean;
  [key: string]: any;
}

interface PlacementsConfig {
  arrowWidth: number;
  autoAdjustOverflow?: boolean | { adjustX?: boolean; adjustY?: boolean };
  arrowPointAtCenter?: boolean;
  offset: number;
  borderRadius: number;
  visibleFirst?: boolean;
}

const HandleTooltip: React.FC<HandleTooltipProps> = (props) => {
  const {
    value,
    children,
    onDrag,
    tipFormatter = (val: number) => val,
    arrowPointAtCenter = false,
    ...restProps
  } = props;

  const tooltipRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);

  const cancelKeepAlign = () => {
    if (rafRef.current) raf.cancel(rafRef.current);
  };

  const keepAlign = () => {
    rafRef.current = raf(() => {
      if (tooltipRef.current) {
        tooltipRef.current.forceAlign();
      }
    });
  };

  useEffect(() => {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [value, visible]);

  useEffect(() => {
    setVisible(onDrag);
  }, [onDrag]);

  const handleChange = (isVisible: boolean) => {
    if (!onDrag) {
      setVisible(isVisible);
    } else {
      setVisible(true);
    }
  };

  const getArrowOffsetToken = (options: { contentRadius: number; limitVerticalRadius: boolean }) => {
    const { contentRadius, limitVerticalRadius } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
      arrowOffsetHorizontal: arrowOffset,
      arrowOffsetVertical: arrowOffsetVertical,
    };
  };

  const getOverflowOptions = (
    placement: string,
    arrowOffset: { arrowOffsetHorizontal: number; arrowOffsetVertical: number },
    arrowWidth: number,
    autoAdjustOverflow?: boolean | any
  ) => {
    if (autoAdjustOverflow === false) {
      return { adjustX: false, adjustY: false };
    }
    const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
    const baseOverflow: any = {};
    switch (placement) {
      case 'top':
      case 'bottom':
        baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
        baseOverflow.shiftY = true;
        baseOverflow.adjustY = true;
        break;
      case 'left':
      case 'right':
        baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
        baseOverflow.shiftX = true;
        baseOverflow.adjustX = true;
        break;
    }
    const mergedOverflow = { ...baseOverflow, ...overflow };
    if (!mergedOverflow.shiftX) mergedOverflow.adjustX = true;
    if (!mergedOverflow.shiftY) mergedOverflow.adjustY = true;
    return mergedOverflow;
  };

  const getPlacements = (config: PlacementsConfig) => {
    const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap: BuildInPlacements = {};

    Object.keys(PlacementAlignMap).forEach((key) => {
      const template = (arrowPointAtCenter && ArrowCenterPlacementAlignMap[key]) || PlacementAlignMap[key];
      const placementInfo: AlignType = {
        ...template,
        offset: [0, 0],
        dynamicInset: true,
      };
      placementMap[key] = placementInfo;

      if (DisableAutoArrowList.has(key)) {
        placementInfo.autoArrow = false;
      }

      switch (key) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          placementInfo.offset![1] = -halfArrowWidth - offset;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          placementInfo.offset![1] = halfArrowWidth + offset;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          placementInfo.offset![0] = -halfArrowWidth - offset;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          placementInfo.offset![0] = halfArrowWidth + offset;
          break;
      }

      const arrowOffset = getArrowOffsetToken({
        contentRadius: borderRadius,
        limitVerticalRadius: true,
      });

      if (arrowPointAtCenter) {
        switch (key) {
          case 'topLeft':
          case 'bottomLeft':
            placementInfo.offset![0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case 'topRight':
          case 'bottomRight':
            placementInfo.offset![0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
          case 'leftTop':
          case 'rightTop':
            placementInfo.offset![1] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case 'leftBottom':
          case 'rightBottom':
            placementInfo.offset![1] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
        }
      }

      placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);

      if (visibleFirst) {
        placementInfo.htmlRegion = 'visibleFirst';
      }
    });
    return placementMap;
  };

  const tooltipPlacements = useMemo(() => {
    return getPlacements({
      arrowPointAtCenter: false,
      autoAdjustOverflow: true,
      arrowWidth: 0,
      borderRadius: 8,
      offset: 0,
      visibleFirst: true,
    });
  }, [arrowPointAtCenter]);

  return (
    <Tooltip
      prefixCls={tooltipStyles.molyTooltip}
      trigger={['hover']}
      getTooltipContainer={(t) => t}
      placement="top"
      overlay={tipFormatter(value)}
      overlayInnerStyle={{ minHeight: 'auto' }}
      ref={tooltipRef}
      visible={visible}
      onVisibleChange={handleChange}
      builtinPlacements={tooltipPlacements as any}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

export const handleRender = (node: React.ReactElement, props: any, tipFormatter?: (val: number) => React.ReactNode) => {
  return (
    <HandleTooltip value={props.value} onDrag={props.dragging} tipFormatter={tipFormatter}>
      {node}
    </HandleTooltip>
  );
};

export default HandleTooltip;
