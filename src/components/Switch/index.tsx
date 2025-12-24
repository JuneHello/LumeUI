import * as SwitchPrimitives from '@radix-ui/react-switch';
import React, { forwardRef, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import Wave from '../../lib/wave';
import { molySwitch, molySwitchThumb } from './styles';
import { SwitchProps } from './types';

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    className,
    size,
    disabled,
    loading,
    unCheckedChildren,
    checkedChildren,
    onCheckedChange,
    checked,
    defaultChecked,
    ...rest
  } = props;

  const [state, setState] = useState(checked !== undefined ? checked : !!defaultChecked);

  useEffect(() => {
    if (checked !== undefined) {
      setState(checked);
    }
  }, [checked]);

  const handleCheckedChange = (newChecked: boolean) => {
    if (checked === undefined) {
      setState(newChecked);
    }
    onCheckedChange?.(newChecked);
  };

  return (
    <Wave component="switch">
      <SwitchPrimitives.Root
        className={cn(
          molySwitch,
          'bg-[var(--bds-gray-t3)] text-xs rounded-full relative group select-none transition-all outline-none focus-visible:ring-[5px] ring-btn-default',
          {
            'h-5 min-w-[42px]': size !== 'small',
            'min-w-[20px] h-[10px]': size === 'small',
          },
          className
        )}
        checked={state}
        onCheckedChange={handleCheckedChange}
        disabled={disabled || loading}
        ref={ref}
        {...rest}
      >
        <>
          {size !== 'small' && (
            <div
              className={cn(
                'px-[6px] flex text-white align-center transition-[padding]',
                'group-data-[state=unchecked]:pl-[22px] group-data-[state=checked]:pr-[22px]',
                'rtl:group-data-[state=unchecked]:pl-0 rtl:group-data-[state=checked]:pr-0 rtl:group-data-[state=unchecked]:pr-[22px] rtl:group-data-[state=checked]:pl-[22px]'
              )}
            >
              {state ? checkedChildren : unCheckedChildren}
            </div>
          )}
          <div
            className={cn('absolute h-full left-[2px] right-[2px] top-0', {
              'left-[1px] right-[1px]': size === 'small',
            })}
          >
            <SwitchPrimitives.Thumb
              className={cn(
                molySwitchThumb,
                'block w-[16px] h-[16px] rounded-full absolute top-1/2 -translate-y-1/2 transition-[left] pointer-events-none text-[var(--bds-brand-700-normal)]',
                '-translate-x-full data-[state=unchecked]:left-[16px] data-[state=checked]:left-full',
                'rtl:data-[state=checked]:left-[16px] rtl:data-[state=unchecked]:left-full',
                {
                  'w-[8px] h-[8px] data-[state=unchecked]:left-[8px]': size === 'small',
                }
              )}
            >
              {loading && (
                <svg
                  className="absolute top-1/2 left-1/2 -mt-[6px] -ml-[6px] animate-spin"
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  data-icon="loading"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
                </svg>
              )}
            </SwitchPrimitives.Thumb>
          </div>
        </>
      </SwitchPrimitives.Root>
    </Wave>
  );
});

Switch.displayName = 'Switch';

export default Switch;
