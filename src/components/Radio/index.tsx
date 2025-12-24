import React, { useCallback, useEffect, useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useRTL } from '../../hooks/useRTL';
import { cn } from '../../lib/utils';
import Wave from '../../lib/wave';
import { styles as radixStyle, sizeStyle, themes } from './styles';
import { IRadioProps, IRadioItemProps } from './types';

const Radio: React.FC<IRadioProps> = (props) => {
  const {
    className,
    defaultValue,
    disabledAll = false,
    size = 'small',
    value,
    radioName,
    items = [],
    handleRadioChange,
    orientation,
  } = props;

  const [checkedValue, setCheckedValue] = useState<string | undefined>(defaultValue || value);
  const isRTL = useRTL();

  const handleChange = useCallback(
    (cv: string) => {
      if (cv !== checkedValue) {
        setCheckedValue(cv);
        if (typeof handleRadioChange === 'function') {
          const _item = items.find((item) => item.value === cv);
          if (_item) handleRadioChange(cv, _item);
        }
      }
    },
    [checkedValue, handleRadioChange, items]
  );

  useEffect(() => {
    setCheckedValue(value);
  }, [value]);

  if (!items.length) return null;

  return (
    <div className={cn(radixStyle, className, sizeStyle[size], themes)}>
      <RadioGroup.Root
        className={cn('radio-group-root', orientation)}
        defaultValue={defaultValue}
        value={checkedValue}
        aria-label={radioName}
        dir={isRTL ? 'rtl' : 'ltr'}
        name={radioName}
        onValueChange={handleChange}
      >
        {items.map((radio) => (
          <div
            key={radio.key}
            data-checked={checkedValue === radio.value}
            className={cn('radio-group-item__wrap', {
              disabled: disabledAll || radio.disabled,
            })}
          >
            <Wave component="Radio">
              <RadioGroup.Item
                className="radio-group-item"
                value={radio.value}
                id={`${radioName || ''}${radio.key}`}
                disabled={disabledAll || radio.disabled}
              >
                <RadioGroup.Indicator className="radio-group-indicator" />
              </RadioGroup.Item>
            </Wave>
            <label className="radio-group-item__label" htmlFor={`${radioName || ''}${radio.key}`}>
              {radio.childrenNode}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
};

export { Radio };
export default Radio;
