import React, { forwardRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { textareaVariants } from './styles';
import { TextareaProps } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    showCount = true,
    className,
    label,
    variant = 'default',
    placeholder = 'Please input content',
    value,
    defaultValue = '',
    errorMessage,
    maxLength = 100,
    onChange,
    disabled,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState<string | number | readonly string[] | undefined>(
    value || defaultValue
  );
  const [valueLength, setValueLength] = useState<number>(String(defaultValue).length || 0);

  const isReadOnly = variant === 'readonly';
  const isError = variant === 'error';

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
      setValueLength(String(value).length);
    }
  }, [value]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setValueLength(e.target.value.length);
    onChange?.(e);
  };

  return (
    <>
      {label && <p className="mb-[8px] text-[var(--bds-gray-t2)] text-sm">{label}</p>}
      <textarea
        className={cn(
          'moly-textarea',
          'transition-all ease-in-out duration-100',
          {
            'hover:outline-none hover:border-[#F0960E] hover:shadow-input-shadow focus:shadow-input-shadow focus:outline-none focus:border focus:border-solid focus:border-brandColor-bds-brand-900-focus focus-visible:outline-none focus-visible:border focus-visible:border-solid focus-visible:border-brandColor-bds-brand-900-focus focus-visible:shadow-input-shadow':
              !disabled,
            'border-bds-input-disabled-border bg-base-bds-gray-ele-edge': disabled,
            'hover:shadow-error-shadow focus:shadow-error-shadow focus-within:shadow-error-shadow focus-visible:shadow-error-shadow':
              isError && !disabled,
          },
          textareaVariants({
            variant,
            className,
          })
        )}
        ref={ref}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={isReadOnly}
        disabled={disabled}
        value={inputValue}
        onChange={handleTextareaChange}
        {...rest}
      />
      {showCount && !isError && !isReadOnly && maxLength && (
        <p className="mt-[8px] text-[var(--bds-gray-t2)] text-sm text-right">
          {valueLength}/{maxLength}
        </p>
      )}
      {isError && errorMessage && (
        <p className="mt-[8px] text-[var(--bds-red-700-normal)] text-sm">{errorMessage}</p>
      )}
    </>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
