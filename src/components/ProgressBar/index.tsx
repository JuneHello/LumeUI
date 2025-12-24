import React, { useEffect, useRef, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { cn } from '../../lib/utils';
import { ProgressBarProps } from './types';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  className = '',
  innerClassName = '',
  width = 300,
  size = 'medium',
  preset = 'brand_normal',
  anime = true,
  max = 100,
  min = 2,
  current,
  addonAfter,
  addonBefore,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  const isBorder = size === 'extra_large' || size === 'large';

  useEffect(() => {
    const curWidth = (current / max * width > min ? current / max * width : min) - (isBorder ? 4 : 0);
    setValue(curWidth);
  }, [current, max, min, width, isBorder]);

  return (
    <div className={cn('row', 'gap-3', 'inline-flex', 'items-center')}>
      {addonBefore && (
        <div
          className={cn([
            'font-IBM',
            'text-bds-gray-t2',
            {
              'text-bds-font-size-16': size === 'extra_large',
              'text-bds-font-size-14': size === 'large' || size === 'medium',
              'text-bds-font-size-12': size === 'small' || size === 'extra_small',
            },
          ])}
        >
          {addonBefore}
        </div>
      )}
      <Progress.Root
        value={current}
        max={max}
        className={cn([
          'bg-bds-gray-ele-line',
          'relative',
          'overflow-hidden',
          'rounded-full',
          'w-[300px]',
          {
            'h-[18px]': size === 'extra_large',
            'h-[14px]': size === 'large',
            'h-[10px]': size === 'medium',
            'h-[8px]': size === 'small',
            'h-[6px]': size === 'extra_small',
            'p-[2px]': isBorder,
          },
          className,
        ])}
      >
        <Progress.Indicator
          ref={innerRef}
          className={cn([
            'rounded-s-full',
            'h-full',
            {
              'ease-in': anime,
              'duration-700': anime,
              'transition-[width]': anime,
            },
            {
              'bg-bds-brand-700': preset === 'brand_normal',
              'bg-bds-gradient-reddish': preset === 'reddish',
              'bg-bds-gradient-brand': preset === 'brand',
              'bg-bds-green-700': preset === 'green',
              'bg-bds-red-700': preset === 'red',
            },
            {
              'rounded-e-full': current === max,
            },
            innerClassName,
          ])}
          style={{
            width: `${value}px`,
          }}
        />
      </Progress.Root>
      {addonAfter && (
        <div
          className={cn([
            'font-IBM',
            'text-bds-gray-t2',
            {
              'text-bds-font-size-16': size === 'extra_large',
              'text-bds-font-size-14': size === 'large' || size === 'medium',
              'text-bds-font-size-12': size === 'small' || size === 'extra_small',
            },
          ])}
        >
          {addonAfter}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
