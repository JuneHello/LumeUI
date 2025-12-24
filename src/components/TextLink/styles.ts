import { cva } from 'class-variance-authority';

export const textVariants = cva(
  [
    'no-wrap font-medium transition-all',
    'inline-flex items-center',
    'data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        small: ['text-xs gap-[2px]'],
        normal: ['text-sm gap-[2px]'],
        large: ['text-base gap-[4px]'],
        xlarge: ['text-lg gap-[6px]'],
      },
      variant: {
        primary: [],
        secondary: [],
        tertiary: [],
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        className: ['text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer'],
      },
      {
        variant: 'secondary',
        className: ['text-base-bds-black-t2 hover:text-base-bds-gray-t2 cursor-pointer'],
      },
      {
        variant: 'tertiary',
        className: ['text-base-bds-gray-t2 hover:text-base-bds-gray-t3 cursor-pointer'],
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
    },
  }
);
