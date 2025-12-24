import React, { useMemo } from 'react';
import { useTheme } from '../../hooks';
import { cn } from '../../lib/utils';
import { molySpinKeyframes, molySpinTextColor } from './styles';
import { SpinProps } from './types';

export const Spin: React.FC<SpinProps> = (props) => {
  const {
    theme: propsTheme,
    indicator: propsIndicator,
    size: propsSize = 'default',
    spinning = true,
    tip,
    wrapperClassName,
    children,
  } = props;

  const [htmlTheme] = useTheme();
  const theme = propsTheme ?? htmlTheme;
  const color = theme === 'light' ? '#000' : '#fff';

  const size = useMemo(() => {
    if (typeof propsSize === 'number') return propsSize;
    if (propsSize === 'small') return 48;
    if (propsSize === 'large') return 96;
    return 64;
  }, [propsSize]);

  const isNested = children !== undefined;

  const baseStyle: React.CSSProperties = {
    display: 'inline-block',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationFillMode: 'both',
  };

  const LogoIndicator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 54 15"
      fill="none"
      style={{
        display: 'inline',
        padding: 4,
        transitionProperty: 'opacity',
        transitionDuration: '0.4s',
        opacity: spinning ? '1' : '0',
      }}
    >
      <path
        d="M6.03751 14.9988H0V0.455078H5.79357C8.60948 0.455078 10.2508 2.04847 10.2508 4.54014C10.2508 6.15492 9.19812 7.1949 8.46895 7.54245C9.3413 7.95149 10.4549 8.87117 10.4549 10.8121C10.4549 13.5284 8.60948 14.9988 6.03751 14.9988ZM5.57084 2.98686H2.81591V6.33939H5.57084C6.76668 6.33939 7.43486 5.66567 7.43486 4.66312C7.43486 3.66324 6.76668 2.98686 5.57084 2.98686ZM5.7538 8.89256H2.81591V12.467H5.7538C7.02918 12.467 7.63903 11.6489 7.63903 10.6704C7.63903 9.68925 7.02918 8.89256 5.7538 8.89256Z"
        fill={color}
        style={{
          ...baseStyle,
          animationName: molySpinKeyframes['moly-spin'],
          animationDelay: '50ms',
        }}
      />
      <path
        d="M8.04326 9.03425V14.9988H5.24856V9.03425L0.91333 0.455078H3.97318L6.66713 6.318L9.3213 0.455078H12.3785L8.04326 9.03425Z"
        fill={color}
        transform="translate(11, 0)"
        style={{
          ...baseStyle,
          animationName: molySpinKeyframes['moly-spin-1'],
          animationDelay: '100ms',
        }}
      />
      <path
        d="M6.03751 14.9988H0V0.455078H5.79357C8.60948 0.455078 10.2508 2.04847 10.2508 4.54014C10.2508 6.15492 9.19812 7.1949 8.46895 7.54245C9.3413 7.95149 10.4549 8.87117 10.4549 10.8121C10.4549 13.5284 8.60948 14.9988 6.03751 14.9988ZM5.57084 2.98686H2.81591V6.33939H5.57084C6.76668 6.33939 7.43486 5.66567 7.43486 4.66312C7.43486 3.66324 6.76668 2.98686 5.57084 2.98686ZM5.7538 8.89256H2.81591V12.467H5.7538C7.02918 12.467 7.63903 11.6489 7.63903 10.6704C7.63903 9.68925 7.02918 8.89256 5.7538 8.89256Z"
        fill={color}
        transform="translate(25 0)"
        style={{
          ...baseStyle,
          animationName: molySpinKeyframes['moly-spin-2'],
          animationDelay: '150ms',
        }}
      />
      <rect
        width="3"
        height="15"
        transform="translate(38 -5)"
        fill="#F7A600"
        style={{
          ...baseStyle,
          animationName: molySpinKeyframes['moly-spin-3'],
          animationDelay: '200ms',
        }}
      />
      <path
        d="M6.74998 2.98686V14.9988H3.93407V2.98686H0.16626V0.455078H10.5178V2.98686H6.74998Z"
        transform="translate(43 0)"
        fill={color}
        style={{
          ...baseStyle,
          animationName: molySpinKeyframes['moly-spin-4'],
          animationDelay: '250ms',
        }}
      />
    </svg>
  );

  const indicator = propsIndicator ?? LogoIndicator;

  const containerPrefixCls = 'absolute w-[100%] h-[100%] left-0 top-0 overflow-hidden';
  const backdropCls = theme === 'light' ? 'bg-white opacity-60' : 'bg-black opacity-50';

  let tipFontSize = 'text-[14px]';
  if (propsIndicator === undefined) {
    tipFontSize += ' translate-y-[-14px]';
  }
  if (propsSize === 'small') {
    tipFontSize = 'text-[12px]';
    if (propsIndicator === undefined) {
      tipFontSize += ' translate-y-[-12px]';
    }
  } else if (propsSize === 'large') {
    tipFontSize = 'text-[18px]';
    if (propsIndicator === undefined) {
      tipFontSize += ' translate-y-[-18px]';
    }
  }

  if (!isNested) {
    return (
      <div className={cn('inline-block', wrapperClassName)} style={{ width: size, height: size }}>
        {indicator}
      </div>
    );
  }

  return (
    <div className={cn(wrapperClassName, 'relative overflow-hidden')}>
      {children}
      {spinning && (
        <>
          <div className={cn(containerPrefixCls, backdropCls)} />
          <div className={cn(containerPrefixCls, 'grid justify-center content-center')}>
            {indicator}
            {tip && <div className={cn('text-center', molySpinTextColor, tipFontSize)}>{tip}</div>}
          </div>
        </>
      )}
    </div>
  );
};

Spin.displayName = 'Spin';

export default Spin;
