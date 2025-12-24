/** @tsxImportSource @emotion/react */
/**
 * @author andy.an@bybit.com
 */
'use client';

import { cn } from "../../lib/utils";
import { CheckIcon } from '../../icons';
import React, { useLayoutEffect, useState, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/css';

export const molyBoxedSelectCompact = css`
  &.card {
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    position: relative;
    border-color: var(--bds-gray-ele-line);
    cursor: pointer;
    overflow: hidden;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  &.isSelectedCard {
    border-color: var(--bds-brand-700-normal);
  }

  &.isSelectedCard .tag {
    opacity: 1;
  }

  &.isSelectedCard:hover {
    border-color: var(--bds-brand-600-hover);
  }

  &.isSelectedCard:hover .tagBg {
    border-color: transparent var(--bds-brand-600-hover)
      var(--bds-brand-600-hover) transparent;
  }

  &.isNotSelectedCard:hover {
    background-color: var(--bds-badge-type-secondary-bg-color);
  }

  &.isDisabledCard {
    background-color: var(--bds-gray-ele-edge);
  }

  &.isDisabledCard:hover {
    cursor: not-allowed;
    background-color: var(--bds-gray-ele-edge);
  }

  .tag {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .tagBg {
    width: 0;
    height: 0;
    border: 16px solid;
    border-color: transparent var(--bds-brand-700-normal)
      var(--bds-brand-700-normal) transparent;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 2px;
    bottom: 0;
    color: var(--bds-static-black);
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    .tag {
      left: 0;
      right: auto;
    }
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    .tagBg {
      border-color: transparent transparent var(--bds-brand-700-normal)
        var(--bds-brand-700-normal);
    }
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    &.isSelectedCard:hover .tagBg {
      border-color: transparent transparent var(--bds-brand-600-hover)
        var(--bds-brand-600-hover);
    }
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    .icon {
      left: 2px;
      right: auto;
    }
  }
`;

export interface BoxedSelectProps {
  value: string;
  isSelected?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onChange?: () => void;
}

export interface BoxedSelectGroupProps {
  children: ReactElement<BoxedSelectProps> | ReactElement<BoxedSelectProps>[];
  defaultValue?: string;
  value?: string;
  onChange: (value: string) => void;
}

const BoxedSelect: React.FC<BoxedSelectProps> & {
  Group: React.FC<BoxedSelectGroupProps>;
} = (props) => {
  const { children, isSelected, className, disabled, onChange } = props;
  const handleClick = () => {
    // disabled时点击无效
    if (!disabled) {
      onChange?.();
    }
  };
  return (
    <div
      onClick={handleClick}
      className={cn(
        className,
        molyBoxedSelectCompact,
        'card',
        isSelected ? 'isSelectedCard' : '',
        !isSelected ? 'isNotSelectedCard' : '',
        disabled ? 'isDisabledCard' : ''
      )}
    >
      {children}
      <div className="tag">
        <div className="tagBg" />
        <CheckIcon className="icon" />
      </div>
    </div>
  );
};

const BoxedSelectGroup: React.FC<BoxedSelectGroupProps> = (props) => {
  const { children, defaultValue = '', value = '', onChange } = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (newValue: string) => {
    // 不存在value则说明为非受控模式，需要手动设置内部值
    if (!value) {
      setSelectedValue(newValue);
    }
    if (onChange) {
      onChange(newValue === selectedValue ? '' : newValue);
    }
  };

  // 当传入value后，需要映射到内部selectedValue上，因为组件以selectedValue为准
  useLayoutEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              isSelected: child.props.value === selectedValue,
              onChange: () => handleChange(child.props.value),
            } as any)
          : child;
      })}
    </div>
  );
};

BoxedSelect.Group = BoxedSelectGroup;

export default BoxedSelect;
