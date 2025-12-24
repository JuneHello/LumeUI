import { HTMLAttributes } from 'react';

export type SkeletonSize = 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  size?: SkeletonSize;
}

export interface SkeletonBarsProps extends SkeletonProps {
  row?: number;
}
