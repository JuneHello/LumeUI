import RcCheckbox from 'rc-checkbox';
import React, { useEffect, useState } from 'react';
import { cn } from "../../lib/utils";
import Wave from "../../lib/wave";
import { CheckIcon } from '../../icons';
import { css, keyframes } from '@emotion/css';

const fadeInKeyframes = keyframes`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`;

const bgFadeIn = keyframes`
  from {
    border-color: transparent;
    background-color: transparent;
  }
  to {
    border-color: auto;
    background-color: auto;
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
`;

const bgFadeOut = keyframes`
  from {
    border-color: auto;
    background-color: auto;
  }
  to {
    border-color: transparent;
    background-color: transparent;
  }
`;

const checkboxStyles = {
  molyCheckbox: css`
    display: flex;
    height: 22px;
    justify-content: center;
    align-items: center;
    position: relative;

    input[type='checkbox'] {
      position: absolute;
      z-index: -1;
      width: 0;
      height: 0;
      transform: scale(0);
    }

    &-inner {
      position: relative;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    input[type='checkbox'] + span::before {
      box-sizing: border-box;
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid var(--bds-gray-t2);
      transform-origin: center center;
    }
    input[type='checkbox']:hover + span::before,
    input[type='checkbox']:focus + span::before {
      border-color: var(--bds-brand-600-hover);
    }
    input[type='checkbox']:checked + span::before {
      border-color: var(--bds-brand-700-normal);
      background-color: var(--bds-brand-700-normal);
    }

    input[type='checkbox']:hover:checked + span::before {
      border-color: var(--bds-brand-600-hover);
      background-color: var(--bds-brand-600-hover);
    }

    input[type='checkbox']:disabled + span::before,
    input[type='checkbox']:disabled:hover + span::before,
    input[type='checkbox']:disabled:checked + span::before {
      border-color: var(--bds-gray-ele-border);
      background-color: var(--bds-gray-ele-edge);
    }

    &.indeterminate {
      input[type='checkbox']:checked + span::before {
        background-color: initial;
        border-color: var(--bds-gray-ele-border);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-brand-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-buy {
      input[type='checkbox']:hover + span::before,
      input[type='checkbox']:focus + span::before {
        border-color: var(--bds-green-600-hover);
      }
      input[type='checkbox']:checked + span::before {
        border-color: var(--bds-green-700-normal);
        background-color: var(--bds-green-700-normal);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-green-600-hover);
        background-color: var(--bds-green-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-buy.indeterminate {
      input[type='checkbox']:checked + span::before {
        background-color: initial;
        border-color: var(--bds-gray-ele-border);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-green-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-sell {
      input[type='checkbox']:hover + span::before,
      input[type='checkbox']:focus + span::before {
        border-color: var(--bds-red-600-hover);
      }
      input[type='checkbox']:checked + span::before {
        border-color: var(--bds-red-700-normal);
        background-color: var(--bds-red-700-normal);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-red-600-hover);
        background-color: var(--bds-red-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-sell.indeterminate {
      input[type='checkbox']:checked + span::before {
        background-color: initial;
        border-color: var(--bds-gray-ele-border);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-red-700-normal);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.sm &-inner {
      width: 14px;
      height: 14px;
    }
    &.sm {
      height: 18px;

      input[type='checkbox'] + span::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
      }
    }
  `,
  fadeIn: css`
    transform-origin: center center;
    animation: ${fadeInKeyframes} 100ms ease-in-out;
  `,
  fadeOut: css`
    transform-origin: center center;
    animation: ${fadeOutKeyframes} 100ms ease-in-out;
    display: none;
  `,
};

export interface CheckboxProps {
  className?: string;
  innerClassName?: string;
  size?: 'middle' | 'small';
  type?: 'normal' | 'buy' | 'sell';
  checked?: boolean | undefined;
  name?: string;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (e: any, checked: boolean) => void;
  children?: React.ReactNode;
}

export default function Checkbox({
  className,
  innerClassName,
  size = 'middle',
  type = 'normal',
  checked: propChecked,
  name,
  defaultChecked = false,
  indeterminate,
  disabled = false,
  onChange = () => {},
  children,
}: CheckboxProps) {
  const [status, setStatus] = useState<boolean | undefined>(defaultChecked);

  useEffect(() => {
    setStatus(defaultChecked);
  }, [defaultChecked]);

  useEffect(() => {
    if (status !== propChecked) setStatus(propChecked);
  }, [propChecked]);

  return (
    <label
      className={cn(
        'flex gap-[8px] items-start transition-all',
        !disabled ? 'cursor-pointer' : 'cursor-not-allowed',
        className
      )}
    >
      <span className="flex justify-center items-center relative">
        <Wave component="Checkbox">
          {typeof propChecked !== 'undefined' ? (
            <RcCheckbox
              prefixCls={checkboxStyles.molyCheckbox}
              className={cn(
                'outline-none ring-btn-default focus-visible:ring-[5px]',
                size === 'small' ? 'sm' : '',
                `color-${type}`,
                indeterminate ? 'indeterminate' : '',
                innerClassName
              )}
              checked={propChecked}
              disabled={disabled}
              onChange={(e) => {
                setStatus(propChecked);
                onChange?.(e.nativeEvent, propChecked);
              }}
              name={name}
            />
          ) : (
            <RcCheckbox
              prefixCls={checkboxStyles.molyCheckbox}
              className={cn(
                'outline-none ring-btn-default focus-visible:ring-[5px]',
                size === 'small' ? 'sm' : '',
                `color-${type}`,
                indeterminate ? 'indeterminate' : '',
                innerClassName
              )}
              defaultChecked={defaultChecked}
              disabled={disabled}
              onChange={(e) => {
                setStatus(e.target.checked);
                onChange?.(e.nativeEvent, e.target.checked);
              }}
              name={name}
            />
          )}
        </Wave>
        {indeterminate ? (
          <div
            className={cn(
              'absolute',
              'bg-brandColor-bds-brand-700-normal',
              status ? checkboxStyles.fadeIn : checkboxStyles.fadeOut,
              size === 'small' ? 'w-[7px] h-[7px] ' : 'w-[8px] h-[8px] ',
              type === 'buy' ? 'bg-greenColor-bds-green-700-normal' : '',
              type === 'sell' ? 'bg-redColor-bds-red-700-normal' : '',
              disabled ? 'bg-base-bds-gray-t4-dis' : ''
            )}
          />
        ) : (
          <CheckIcon
            className={cn(
              'text-center absolute',
              'text-base-bds-static-black',
              status ? checkboxStyles.fadeIn : checkboxStyles.fadeOut,
              size === 'small' ? 'w-[14px] text-[7px] font-[500]' : 'w-[16px] text-[8px] font-[700]',
              type !== 'normal' ? 'text-base-bds-gray-t1-title-revert' : '',
              disabled ? 'bg-base-bds-gray-t4-dis' : ''
            )}
          />
        )}
      </span>
      <span
        className={cn(
          'font-IBM font-normal text-base-bds-gray-t1-title',
          size === 'small' ? 'text-[12px] leading-[18px]' : 'text-[14px] leading-[22px]',
          type === 'buy' ? (!status ? 'hover:text-greenColor-bds-green-700-normal' : 'text-greenColor-bds-green-700-normal') : '',
          type === 'sell' ? (!status ? 'hover:text-redColor-bds-red-700-normal' : 'text-redColor-bds-red-700-normal') : '',
          disabled ? 'hover:text-base-bds-gray-t3 text-base-bds-gray-t3' : ''
        )}
      >
        {children}
      </span>
    </label>
  );
}
