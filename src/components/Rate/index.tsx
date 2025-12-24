import RcRate from 'rc-rate';
import React, { useEffect, useState, forwardRef } from 'react';
import { useRTL } from '../../hooks/useRTL';
import { useTheme } from '../../hooks';
import { cn } from '../../lib/utils';
import Tooltip from '../Tooltip';
import StarMedium from './StarMedium';
import StarSmall from './StarSmall';
import { getHoverTips } from './utils';
import { injectRateStyles } from './styles';
import { RateProps } from './types';

injectRateStyles();

const prefixCls = 'moly-rate';

const Rate = forwardRef<any, RateProps>((props, ref) => {
  const {
    size = 'medium',
    theme,
    disabled,
    direction,
    className,
    rootClassName,
    style = {},
    tooltips,
    showToolTips = false,
    character = size === 'medium' ? <StarMedium /> : <StarSmall />,
    onHoverChange,
    ...rest
  } = props;

  const isRTL = useRTL();
  const [color] = useTheme();
  const [hoverTitles, setHoverTitles] = useState<string[] | undefined>(tooltips);

  const { integerArray, hoverArray } = getHoverTips(props.count);

  useEffect(() => {
    setHoverTitles(tooltips);
  }, [tooltips]);

  const characterRender = (node: React.ReactNode, { index }: { index?: number }) => {
    if (tooltips || showToolTips) {
      return (
        <Tooltip title={hoverTitles?.[index || 0]} trigger="hover" placement="top">
          {node}
        </Tooltip>
      );
    }
    return node;
  };

  const onHover = (value: number) => {
    if (showToolTips && !tooltips) {
      if (!hoverTitles?.includes(value?.toString())) {
        setHoverTitles(hoverTitles?.includes('1') ? hoverArray : integerArray);
      }
    }
    onHoverChange?.(value);
  };

  return (
    <RcRate
      ref={ref}
      character={character}
      characterRender={characterRender}
      disabled={disabled}
      direction={direction || (isRTL ? 'rtl' : 'ltr')}
      className={cn(className, rootClassName, `${prefixCls}-${size}`, `${prefixCls}-${theme || color}`, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-rtl`]: direction === 'rtl',
      })}
      onHoverChange={onHover}
      prefixCls={prefixCls}
      style={style}
      {...rest}
    />
  );
});

Rate.displayName = 'Rate';

export default Rate;
