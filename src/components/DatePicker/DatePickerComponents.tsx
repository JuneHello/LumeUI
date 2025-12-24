'use client';

import Picker, { PickerPanel, RangePicker } from 'rc-picker';
import React, { useEffect, useState, FC, ReactElement } from 'react';
import { cn } from "../../lib/utils";
import useSharedProps, { Status, ThemeType, PickMode, allFalse } from "./hooks";
import { injectDatePickerStyles } from "./styles";
import { type Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { RangeIcon } from './icons';
import { PickerDateProps } from 'rc-picker/lib/Picker';
import { PickerPanelProps, RangePickerProps } from 'rc-picker';
import { SharedTimeProps } from 'rc-picker/lib/panels/TimePanel';

export type DatePickerProps<DateType> = Omit<PickerDateProps<DateType>, 'generateConfig' | 'prefixCls' | 'locale' | 'picker'> & {
  picker?: PickMode;
  label?: string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  theme?: ThemeType;
  status?: Status;
  errorText?: string;
  locale?: any;
  isMobile?: boolean;
  displayElement?: ReactElement;
};

export const DatePicker: FC<DatePickerProps<Dayjs>> = (props) => {
  const {
    size = 'small',
    theme = 'light',
    label,
    status,
    errorText,
    isMobile,
    fullWidth,
  } = props;
  const [open, setOpen] = useState(false);
  const sharedProps = useSharedProps(props);

  injectDatePickerStyles({
    id: sharedProps.paramsID,
    size,
    theme,
    status,
    fullWidth,
  });

  useEffect(() => {
    const inputElement = document.querySelector(`.${sharedProps.prefixCls}-input input`) as HTMLInputElement;
    const handleFocus = () => {
      if (inputElement) {
        inputElement.blur();
      }
    };
    if (isMobile && inputElement) {
      inputElement.addEventListener('focus', handleFocus);
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus);
      }
    };
  }, [isMobile, sharedProps.prefixCls]);

  const handleDisplayClick = () => {
    setOpen((v) => !v);
  };

  const handleSelect = (v: Dayjs) => {
    setOpen(false);
    if (sharedProps.onSelect) {
      sharedProps.onSelect(v);
    }
  };

  const renderOpen = () => {
    if (sharedProps.open === undefined) {
      return sharedProps.displayElement ? open : undefined;
    }
    return sharedProps.open;
  };

  return (
    <div className={`moly-datepicker-wrapper-${sharedProps.paramsID}`}>
      {label && <div className={sharedProps.prefixCls + '-label'}>{label}</div>}
      <div className={`${sharedProps.prefixCls}-displayWrap`} onClick={handleDisplayClick}>
        {sharedProps.displayElement ?? null}
      </div>
      <Picker
        {...sharedProps}
        open={renderOpen()}
        className={cn({
          [sharedProps.prefixCls + '-status-error']: status === 'error',
          [sharedProps.prefixCls + '-customize']: !!sharedProps.displayElement,
        })}
        onSelect={handleSelect}
        dropdownClassName={cn(sharedProps.dropdownClassName, {
          [sharedProps.prefixCls + '-h5']: isMobile,
        })}
      />
      {errorText && <div className={sharedProps.prefixCls + '-error-text'}>{errorText}</div>}
    </div>
  );
};

export const DatePickerPanel: FC<PickerPanelProps<Dayjs>> = (props) => {
  const sharedProps = useSharedProps(props);
  return <PickerPanel {...sharedProps} />;
};

export type DateRangePickerProps<DateType> = Omit<RangePickerProps<DateType>, 'generateConfig' | 'prefixCls' | 'locale' | 'picker'> & {
  picker?: PickMode | 'range';
  label?: string;
  size?: 'small' | 'medium';
  theme?: ThemeType;
  status?: Status;
  errorText?: string;
  fullWidth?: boolean;
  isMobile?: boolean;
  showTime?: SharedTimeProps<DateType>;
  displayElement?: ReactElement;
};

export const DateRangePicker: FC<DateRangePickerProps<Dayjs>> = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  const sharedProps = useSharedProps(props, 'range');

  const {
    size = 'small',
    theme = 'light',
    label,
    status,
    isMobile,
    fullWidth,
    errorText,
  } = props;

  injectDatePickerStyles({
    id: sharedProps.paramsID,
    size,
    theme,
    status,
    fullWidth,
  });

  useEffect(() => {
    const inputElement = document.querySelector(`.${sharedProps.prefixCls}-input input`) as HTMLInputElement;
    const handleFocus = () => {
      if (inputElement) {
        inputElement.blur();
      }
    };
    if (isMobile && inputElement) {
      inputElement.addEventListener('focus', handleFocus);
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus);
      }
    };
  }, [isMobile, sharedProps.prefixCls]);

  const handleDisplayClick = () => {
    setOpen((v) => !v);
  };

  const handleSelect = (values: [Dayjs | null, Dayjs | null] | null, formatString: [string, string]) => {
    setOpen(false);
    if (sharedProps.onChange) {
      sharedProps.onChange(values, formatString);
    }
  };

  const handleOk = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (!dates) return;
    setValue(dates[1] ? dates : [dates[0], dayjs()]);
    if (dates[1]) {
      setOpen(false);
    }
    if (sharedProps.onOk) {
      sharedProps.onOk(dates);
    }
    if (sharedProps.onChange) {
      sharedProps.onChange(dates, ['', '']);
    }
  };

  const renderOpen = () => {
    if (sharedProps.open === undefined) {
      return sharedProps.displayElement ? open : undefined;
    }
    return sharedProps.open;
  };

  return (
    <div className={`moly-datepicker-wrapper-${sharedProps.paramsID}`}>
      {label && <div className={sharedProps.prefixCls + '-label'}>{label}</div>}
      <div className={`${sharedProps.prefixCls}-displayWrap`} onClick={handleDisplayClick}>
        {sharedProps.displayElement ?? null}
      </div>
      <RangePicker
        {...sharedProps}
        open={renderOpen()}
        value={sharedProps.value ?? value}
        separator={
          <span className={sharedProps.prefixCls + '-separator'}>
            <RangeIcon />
          </span>
        }
        onOk={handleOk}
        onChange={handleSelect}
        className={cn({
          [sharedProps.prefixCls + '-status-error']: status === 'error',
          [sharedProps.prefixCls + '-customize']: !!sharedProps.displayElement,
        })}
        dropdownClassName={cn(sharedProps.dropdownClassName, {
          [sharedProps.prefixCls + '-h5']: isMobile,
          [sharedProps.prefixCls + '-h5-noShowTime']: isMobile && allFalse(sharedProps.showTime, ['showHour', 'showMinute', 'showSecond']),
        })}
      />
      {errorText && <div className={sharedProps.prefixCls + '-error-text'}>{errorText}</div>}
    </div>
  );
};
