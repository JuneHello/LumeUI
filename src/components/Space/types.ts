import { HTMLAttributes, ReactNode, CSSProperties } from 'react';

export type SpaceSize = 'small' | 'middle' | 'large' | number;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  direction?: 'vertical' | 'horizontal';
  size?: SpaceSize | SpaceSize[];
  split?: ReactNode;
  wrap?: boolean;
  compact?: boolean;
  style?: CSSProperties;
}
