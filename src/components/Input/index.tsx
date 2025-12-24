'use client';

import { cn } from "../../lib/utils";
import { EmptyIcon, EyeoffIcon, EyeonIcon, PlusIcon, ReduceIcon } from '../../icons';
import { css } from '@emotion/css';
import { cva, VariantProps } from 'class-variance-authority';
import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { IconButton } from "../IconButton";

export const inputVariants = cva(['color-[#121214]'], {
  variants: {
    variant: {
      default: [''],
      error: [
        'border-[#EF454A]',
        'focus-visible:border-[#EF454A]',
        'hover:outline-none hover:border-[#EF454A]',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const fontSizeVariable = {
  xs: ['text-[12px] font-medium leading-[18px]'],
  small: ['text-[12px] font-medium leading-[18px]'],
  medium: ['text-[16px] font-medium leading-6'],
  'x-large': ['text-[20px] leading-6 font-medium leading-7'],
};

const containerVariable = {
  xs: 'h-[32px] px-[7px] rounded gap-[8px]',
  small: 'h-[40px] pl-[11px] pr-[9px]  rounded gap-[8px]',
  medium: 'h-[48px] pl-[15px] pr-[13px] rounded-lg gap-[8px]',
  'x-large': 'h-[64px] pl-[19px] pr-[17px] rounded-lg gap-[8px]',
};

const inputStyle = css`
  &::placeholder {
    font-weight: 400;
  }
`;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'>,
    VariantProps<typeof inputVariants> {
  type?: 'text' | 'password' | 'number';
  width?: number | string;
  height?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: 'xs' | 'small' | 'medium' | 'x-large';
  defaultValue?: string;
  allowClear?: boolean;
  visible?: boolean;
  onEnter?: (val: string) => void;
  numberControl?: boolean;
  firstZero?: boolean;
  step?: number | string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    firstZero,
    prefix,
    suffix,
    type = 'text',
    placeholder,
    allowClear,
    visible,
    className,
    width,
    height,
    size = 'medium',
    value,
    defaultValue = '',
    variant = 'default',
    onEnter,
    onChange,
    onPaste,
    onFocus,
    onBlur,
    style,
    numberControl = true,
    step = 1,
    disabled,
    ...rest
  } = props;

  const [focusStatus, setFocusStatus] = useState(false);
  const [inputValue, setInputValue] = useState<string | number | readonly string[] | undefined>(value || defaultValue);
  const [inputType, setInputType] = useState(type === 'number' ? 'text' : type);
  const decimalRef = useRef<any>();

  useEffect(() => {
    const loadDecimal = async () => {
      try {
        const decimalModule = await import('decimal.js');
        decimalRef.current = decimalModule?.default;
      } catch (e) {
        console.error("Failed to load decimal.js", e);
      }
    };
    if (type === 'number' && !decimalRef.current) {
      loadDecimal();
    }
    if (type === 'number') {
      setInputType('text');
    } else {
      setInputType(type);
    }
  }, [type]);

  const getIconSize = () => {
    if (size === 'small') return 'xs';
    if (['medium', 'x-large'].includes(size) || !size) return 'small';
    return size as any;
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onClear = () => {
    setInputValue('');
    if (onChange) {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const plusHandler = () => {
    const InputDecimal = decimalRef.current;
    if (!InputDecimal) return;
    const arg1 = (inputValue?.toString()) || '0';
    const arg2 = step.toString();
    const decimal1 = new InputDecimal(arg1);
    const decimal2 = new InputDecimal(arg2);
    const result = decimal1.plus(decimal2)?.toString();
    setInputValue(result);
    if (onChange) {
      onChange({
        target: { value: result },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const reduceHandler = () => {
    const InputDecimal = decimalRef.current;
    if (!InputDecimal) return;
    const arg1 = (inputValue?.toString()) || '0';
    const arg2 = step.toString();
    const decimal1 = new InputDecimal(arg1);
    const decimal2 = new InputDecimal(arg2);
    const result = decimal1.minus(decimal2)?.toString();
    setInputValue(result);
    if (onChange) {
      onChange({
        target: { value: result },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  useEffect(() => {
    if (value !== undefined && value?.toString() !== inputValue?.toString()) {
      const t = setTimeout(() => {
        setInputValue(value);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, inputValue]);

  const countNonZeros = (str: string) => {
    let count = 0;
    let bool = false;
    str.split('').forEach((v) => {
      if (bool) return;
      if (v === '0') {
        count += 1;
      } else {
        bool = true;
      }
    });
    return count;
  };

  return (
    <div
      className={cn(
        'moly-input',
        'relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line',
        'transition-all ease-in-out  duration-100',
        'font-IBM',
        {
          'shadow-input-shadow border border-solid border-brandColor-bds-brand-900-focus':
            focusStatus && !disabled,
          'hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed':
            !disabled,
          'cursor-not-allowed  border-bds-input-disabled-border bg-base-bds-gray-ele-edge':
            disabled,
          'border-[#EF454A] focus-visible:border-[#EF454A]  hover:border-[#EF454A]':
            variant === 'error',
          'shadow-error-shadow': focusStatus && variant === 'error' && !disabled,
        },
        containerVariable[size as keyof typeof containerVariable],
        className
      )}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {prefix && (
        <div className={cn(' inline-flex items-center ', fontSizeVariable[size as keyof typeof fontSizeVariable])}>
          {prefix}
        </div>
      )}
      <input
        type={inputType}
        ref={ref}
        placeholder={placeholder}
        value={inputValue}
        disabled={disabled}
        onKeyPress={(event) => {
          if (firstZero) {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValidInput = /^[0-9]+$/.test(keyValue);
            if (!isValidInput) {
              event.preventDefault();
            }
          }
          if (rest.onKeyPress) rest.onKeyPress(event);
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (type === 'number') {
            const isValidInput = /^-?\d*\.?\d*$/.test(val);
            if (firstZero) {
              const _val = (val.match(/\d+\.\d+|\d+/g)?.join('')) || '';
              if (onChange) onChange(e);
              setInputValue(_val);
            } else if (isValidInput) {
              if (onChange) onChange(e);
              setInputValue(val);
            }
            return;
          }
          if (onChange) onChange(e);
          setInputValue(val);
        }}
        style={{
          background: 'transparent',
          outline: 'medium',
          caretColor: 'none',
          border: 'none',
          width: '100%',
        }}
        className={cn(
          fontSizeVariable[size as keyof typeof fontSizeVariable],
          'appearance-none placeholder:text-[#ADB1B8]',
          inputStyle,
          {
            'cursor-not-allowed bg-bds-input-disabled border-[#F3F5F7] text-base-bds-gray-t4-dis':
              disabled,
          }
        )}
        onFocus={(evt) => {
          setFocusStatus(true);
          if (onFocus) onFocus(evt);
        }}
        onPaste={(e) => {
          if (onPaste) onPaste(e);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            if (onEnter) onEnter(inputValue?.toString() || '');
          }
          if (rest.onKeyUp) rest.onKeyUp(e);
        }}
        onBlur={(e) => {
          if (type === 'number') {
            const _value = e.target.value;
            if (_value) {
              const InputDecimal = decimalRef.current;
              if (InputDecimal) {
                let numberValue = new InputDecimal(_value).toString();
                let zeroCount = 0;
                if (firstZero && _value[0] === '0') {
                  zeroCount = countNonZeros(_value);
                }
                if (zeroCount > 0 && firstZero && numberValue[0] !== '0') {
                  const preZero = new Array(zeroCount).fill('0').join('');
                  numberValue = preZero + numberValue;
                }
                e.target.value = numberValue;
                if (onChange) onChange(e);
                setInputValue(numberValue);
              }
            }
          }
          setFocusStatus(false);
          if (onBlur) onBlur(e);
        }}
        {...rest}
      />
      {(suffix || (allowClear && (inputValue?.toString().length || 0) > 0)) && (
        <>
          {allowClear && (inputValue?.toString().length || 0) > 0 && (
            <EmptyIcon
              onClick={onClear}
              style={{ color: 'var(--bds-gray-t2)' }}
              className={cn('cursor-pointer', {
                'w-[16px] h-[16px]': ['small', 'xs'].includes(size),
                'w-[20px] h-[20px]': ['medium', 'x-large'].includes(size) || !size,
              })}
            />
          )}
          {suffix && (
            <div
              className={cn(
                'justify-items-center text-brandColor-bds-brand-900-text',
                fontSizeVariable[size as keyof typeof fontSizeVariable]
              )}
              style={{
                marginRight: type === 'number' && numberControl ? '8px' : '0px',
                marginLeft: allowClear && (inputValue?.toString().length || 0) > 0 ? '8px' : '0px'
              }}
            >
              {suffix}
            </div>
          )}
        </>
      )}
      {type === 'password' && visible && !suffix && (
        <div className={cn('flex items-center ml-2')}>
          {passwordVisible ? (
            <IconButton size={getIconSize()}>
              <EyeonIcon
                onClick={() => {
                  setPasswordVisible(false);
                  setInputType('password');
                }}
              />
            </IconButton>
          ) : (
            <IconButton size={getIconSize()}>
              <EyeoffIcon
                onClick={() => {
                  setPasswordVisible(true);
                  setInputType('text');
                }}
              />
            </IconButton>
          )}
        </div>
      )}
      {type === 'number' && numberControl && (
        <div className={cn('flex items-center ml-2')}>
          <IconButton size={getIconSize()}>
            <ReduceIcon onClick={reduceHandler} />
          </IconButton>
          <div
            className={cn('border-colors-base-bds-gray-ele-border mt-[2px] mx-[8px]  items-center', {
              'h-[16px] ': size === 'xs',
              'h-[18px] ': size === 'small',
              'h-[20px] ': size === 'medium',
              'h-[24px] ': size === 'x-large',
            })}
            style={{ borderLeft: '1px solid var(--bds-gray-ele-border)' }}
          />
          <IconButton size={getIconSize()}>
            <PlusIcon onClick={plusHandler} />
          </IconButton>
        </div>
      )}
      <div
        className={cn(inputVariants({ variant }), 'pl-[32px]')}
        style={{
          height,
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
