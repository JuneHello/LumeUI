import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    'flex min-h-[82px] w-full rounded-md bg-[#f3f5f7] px-[16px] py-[16px] text-sm border border-[#F3F5F7]',
    'box-border placeholder:text-[#ADB1B8]',
    'bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:border-bds-input-disabled-border disabled:bg-base-bds-gray-ele-edge',
  ],
  {
    variants: {
      variant: {
        default: [''],
        readonly: [],
        error: ['border-[#EF454A]', 'focus-visible:border-[#EF454A]', 'hover:border-[#EF454A]'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
