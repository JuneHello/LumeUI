import React from 'react';
import { cn } from '../../lib/utils';
import { cva } from 'class-variance-authority';
import { SkeletonProps, SkeletonBarsProps } from './types';

const ballVariants = cva('', {
  variants: {
    size: {
      large: 'h-16 w-16',
      medium: 'h-12 w-12',
      small: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const barVariants = cva('', {
  variants: {
    size: {
      'xx-large': 'h-12',
      'x-large': 'h-8',
      large: 'h-6',
      medium: 'h-[18px]',
      small: 'h-3.5',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const Ball: React.FC<SkeletonProps> = ({ className, size = 'medium', ...props }) => {
  return (
    <div
      className={cn('animate-pulse rounded-full bg-base-bds-trans-hover', ballVariants({ size: size as any }), className)}
      {...props}
    />
  );
};

const Bar: React.FC<SkeletonProps> = ({ className, size = 'medium', ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg w-full bg-base-bds-trans-hover',
        barVariants({ size: size as any }),
        className
      )}
      {...props}
    />
  );
};

const Bars: React.FC<SkeletonBarsProps> = ({ size = 'medium', row = 6, ...props }) => {
  return (
    <div className="space-y-4" {...props}>
      {new Array(Number(row)).fill(undefined).map((_, index) => (
        <Bar
          key={index}
          size={size}
          style={{
            width: `${Math.floor(Math.random() * (100 - 50) + 50)}%`,
          }}
        />
      ))}
    </div>
  );
};

const Skeleton = {
  Ball,
  Bar,
  Bars,
};

export default Skeleton;
