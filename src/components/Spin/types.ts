import { ReactNode } from 'react';

export interface SpinProps {
  theme?: 'light' | 'dark';
  indicator?: ReactNode;
  size?: 'small' | 'default' | 'large' | number;
  spinning?: boolean;
  tip?: ReactNode;
  wrapperClassName?: string;
  children?: ReactNode;
}
