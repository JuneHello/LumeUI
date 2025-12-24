import { Arrowchevron2LeftIcon, Arrowchevron2RightIcon, ArrowchevronLeftIcon, ArrowchevronRightIcon, EmptyIcon, CloseIcon, DirectionleftIcon } from '../../icons';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import enUS from 'rc-picker/lib/locale/en_US';
import { useMemo } from 'react';
import { DateIcon, TimeIcon } from './icons';
import * as React from 'react';
import { type Dayjs } from 'dayjs';

export type Status = 'error' | 'success' | 'warning';
export type ThemeType = 'light' | 'dark';
export type PickMode = 'date' | 'week' | 'month' | 'quarter' | 'year' | 'time' | 'range';

export const locale = {
  locale: 'en_US',
  DatePicker: enUS,
  Modal: {
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
  Popconfirm: {
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
  Select: {
    noDataText: 'No data',
  },
};

function simpleHash(str: string) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0;
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export const generateUniqueId = (params: any) => {
  const string = JSON.stringify(params, getCircularReplacer());
  return simpleHash(string);
};

export const allFalse = (obj: any, keys: string[]) => {
  if (!obj) return true;
  return keys.every((key) => obj.hasOwnProperty(key) && obj[key] === false);
};

const useSharedProps = (props: any, type?: string) => {
  const prevIcon = useMemo(
    () => <ArrowchevronLeftIcon style={{ color: '#81858C' }} />,
    []
  );
  const nextIcon = useMemo(
    () => <ArrowchevronRightIcon style={{ color: '#81858C' }} />,
    []
  );
  const superPrevIcon = useMemo(
    () => <Arrowchevron2LeftIcon style={{ color: '#81858C' }} />,
    []
  );
  const superNextIcon = useMemo(
    () => <Arrowchevron2RightIcon style={{ color: '#81858C' }} />,
    []
  );
  const clearIcon = useMemo(
    () => <EmptyIcon color="var(--bds-gray-t2, #81858C)" width={18} />,
    []
  );
  const suffixIcon = useMemo(() => {
    return props.picker === 'time' ? <TimeIcon /> : <DateIcon />;
  }, [props.picker]);

  const paramsID = generateUniqueId(props);

  const defaultPlaceholder = (picker: string, type?: string) => {
    if (picker === 'time') {
      return 'Input Time';
    }
    if (type === 'range') {
      return ['Start Date', 'End Date'];
    }
    return 'input Date';
  };

  const rangeInH5 = (isMobile: boolean, type?: string, originShowTime?: any) => {
    if (type === 'range') {
      if (isMobile) {
        return {
          showHour: false,
          showMinute: false,
          showSecond: false,
          ...originShowTime,
        };
      }
      return originShowTime;
    }
    return originShowTime;
  };

  return {
    prevIcon,
    nextIcon,
    superPrevIcon,
    superNextIcon,
    clearIcon,
    suffixIcon,
    generateConfig: dayjsGenerateConfig,
    locale: props.locale ?? locale.DatePicker,
    allowClear: true,
    placeholder: defaultPlaceholder(props.picker, type),
    inputReadOnly: false,
    prefixCls: "moly-datepicker",
    paramsID,
    showTime: rangeInH5(props.isMobile, type, props.showTime),
    ...props,
  };
};

export default useSharedProps;
