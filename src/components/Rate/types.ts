import { ReactNode, CSSProperties } from 'react';

export type RateSize = 'small' | 'medium';
export type RateTheme = 'light' | 'dark';

export interface RateProps {
  size?: RateSize;
  theme?: RateTheme;
  disabled?: boolean;
  count?: number;
  value?: number;
  defaultValue?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  direction?: 'ltr' | 'rtl';
  className?: string;
  rootClassName?: string;
  style?: CSSProperties;
  tooltips?: string[];
  showToolTips?: boolean;
  character?: ReactNode;
  onHoverChange?: (value: number) => void;
  onChange?: (value: number) => void;
  [key: string]: any;
}
