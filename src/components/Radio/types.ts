import { ReactNode } from 'react';

export type RadioThemeType = 'light' | 'dark';
export type RadioSizeType = 'small' | 'medium';
export type RadioOrientationType = 'horizontal' | 'horizontal-reverse' | 'vertical' | 'vertical-reverse';

export interface IRadioItemProps {
  key: string | number;
  value: string;
  disabled?: boolean;
  childrenNode?: ReactNode;
  [key: string]: any;
}

export interface IRadioProps {
  className?: string;
  defaultValue?: string;
  disabledAll?: boolean;
  size?: RadioSizeType;
  value?: string;
  radioName?: string;
  items?: IRadioItemProps[];
  handleRadioChange?: (value: string, item: IRadioItemProps) => void;
  orientation?: RadioOrientationType;
}
