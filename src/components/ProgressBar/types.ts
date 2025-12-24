import { ReactNode } from 'react';

export type ProgressBarSize = 'extra_large' | 'large' | 'medium' | 'small' | 'extra_small';
export type ProgressBarPreset = 'reddish' | 'brand' | 'green' | 'brand_normal' | 'red';

export interface ProgressBarProps {
  className?: string;
  innerClassName?: string;
  width?: number;
  size?: ProgressBarSize;
  preset?: ProgressBarPreset;
  anime?: boolean;
  max?: number;
  min?: number;
  current: number;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
}
