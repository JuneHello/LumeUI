import React, { useMemo } from 'react';
import { useRTL } from '../../hooks/useRTL';
import { cn } from '../../lib/utils';
import RcSlider from 'rc-slider';
import { handleRender } from './SliderTooltip';
import { container, markStyle, sizeStyle, getSliderStyles } from './styles';
import { SliderProps } from './types';

const Slider: React.FC<SliderProps> = (props) => {
  const {
    primaryColor = 'var(--bds-brand-700-normal,#F7A600)',
    dotBgColor = 'var(--bds-gray-bg-area)',
    className,
    markTip,
    ToolTip,
    tipFormatter,
    size = 'small',
    trackStyle,
    handleStyle,
    railStyle,
    dotStyle,
    activeDotStyle,
    ...rest
  } = props;

  const isRTL = useRTL();
  const defalutMarkWithTrue = markTip === undefined ? 'true' : markTip.toString();

  const primaryStyles = useMemo(() => {
    return getSliderStyles(isRTL, primaryColor, dotBgColor);
  }, [dotBgColor, isRTL, primaryColor]);

  const rcSliderProps: any = {
    ...rest,
    prefixCls: 'moly-slider',
    className: cn(
      container,
      primaryStyles,
      sizeStyle[size as keyof typeof sizeStyle],
      markStyle[defalutMarkWithTrue as keyof typeof markStyle],
      className
    ),
    trackStyle,
    handleStyle,
    railStyle,
    dotStyle,
    activeDotStyle,
    reverse: isRTL,
  };

  if (ToolTip) {
    rcSliderProps.handleRender = (node: React.ReactElement, handleProps: any) => {
      return handleRender(node, handleProps, tipFormatter);
    };
  }

  return <RcSlider {...rcSliderProps} />;
};

Slider.displayName = 'Slider';

export default Slider;
