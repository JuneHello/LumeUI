import { ReactNode, CSSProperties } from 'react';

export type ResultStatus = 'success' | 'error' | 'pending' | 'warning' | 'clock' | 'countdown';
export type ResultSize = 'large' | 'medium' | 'small';
export type ResultTheme = 'light' | 'dark';

export interface ResultProps {
  image?: ReactNode | string;
  imageStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  extra?: ReactNode;
  size?: ResultSize;
  status?: ResultStatus;
  theme?: ResultTheme;
  countdown?: number;
}
