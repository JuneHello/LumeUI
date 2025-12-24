import { cn, logVersion } from "../../lib/utils";
import Wave from "../../lib/wave";
import { LoadingIcon } from '../../icons';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const buttonVariants = cva(
  [
    'moly-btn inline-flex items-center justify-center rounded-lg select-none',
    'text-base font-bds-font-weight-medium transition-all leading-6 font-IBM font-semibold',
    'disabled:cursor-not-allowed disabled:opacity-40 bg-transparent',
    'outline-none ring-btn-default focus-visible:ring-[5px]',
    'border-y-[1px] border-solid border-transparent',
  ],
  {
    variants: {
      variant: {
        default: [
          'border border-solid border-base-bds-static-border-color bg-base-bds-static-white text-base-bds-static-black',
          'enabled:active:border active:border-base-bds-static-active-color active:text-base-bds-static-active-color',
          'enabled:hover:border-brandColor-bds-brand-600-hover',
          'enabled:hover:text-brandColor-bds-brand-600-hover',
        ],
        primary: [
          'bg-brandColor-bds-brand-700-normal text-base-bds-static-black',
          'enabled:active:bg-brandColor-bds-brand-800-pressed enabled:active:text-base-bds-static-black',
          'enabled:hover:bg-brandColor-bds-brand-600-hover',
        ],
        secondary: [
          'border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title',
          'enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title',
          'enabled:hover:border-base-bds-gray-t4-dis',
          'enabled:hover:text-base-bds-gray-t2',
          'disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3',
        ],
        secondaryBrand: [
          'border border-solid border-brandColor-bds-brand-900-focus text-brandColor-bds-brand-900-text',
          'enabled:hover:text-brandColor-bds-brand-700-normal enabled:hover:border-brandColor-bds-brand-600-hover',
          'enabled:active:border-brandColor-bds-brand-800-pressed enabled:active:text-brandColor-bds-brand-800-pressed',
          'disabled:border-base-bds-static-border-color',
          'disabled:opacity-90 disabled:text-base-bds-gray-t3',
        ],
        tradeLong: [
          'bg-greenColor-bds-green-700-normal text-base-bds-static-white',
          'enabled:active:bg-greenColor-bds-green-800-pressed enabled:active:text-base-bds-static-white',
          'enabled:hover:bg-greenColor-bds-green-600-hover',
          'disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100',
          'ring-btn-green',
        ],
        tradeShort: [
          'bg-redColor-bds-red-700-normal text-base-bds-static-white enabled:hover:bg-redColor-bds-red-600-hover',
          'enabled:active:bg-redColor-bds-red-800-pressed enabled:active:text-base-bds-static-white',
          'disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100',
          'ring-btn-red',
        ],
        tradeSecondary: [
          'text-base-bds-gray-t1-title bg-base-bds-gray-ele-border',
          'enabled:hover:bg-base-bds-gray-ele-line enabled:active:bg-base-bds-gray-ele-border enabled:hover:text-base-bds-gray-t1-title',
          'disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100',
        ],
        marketing: [
          'opacity-100 bg-bds-gradient-brand enabled:hover:bg-marketing-btn-background-hover',
          'enabled:active:bg-marketing-btn-background-press',
          'enabled:hover:opacity-90',
          'text-base-bds-static-black',
        ],
      },
      size: {
        middle: 'px-[24px] py-[11px]',
        'xx-small': 'text-xs leading-[18px] px-[8px] py-[2px] rounded',
        'x-small': 'text-xs leading-[18px] px-[12px] py-[6px] rounded',
        small: 'text-sm leading-[22px] px-[16px] py-[8px] rounded',
        large: 'text-lg leading-[26px] px-[32px] py-[14px]',
        'x-large': 'text-xl px-[32px] py-[17px]',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'middle',
    },
  }
);

/**
 * Props for the Button component
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** Show loading spinner and disable button interactions */
  loading?: boolean;
  /** Make button take full width of its container */
  block?: boolean;
  /** Subtitle text (only shown with trade variants when size is 'small') */
  subtitle?: string;
}

// Button variant type constants for type-safe variant checking
const ButtonTypesMAP = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SECONDARY_BRAND: 'secondaryBrand',
  TRADE_LONG: 'tradeLong',
  TRADE_SHORT: 'tradeShort',
  TRADE_SECONDARY: 'tradeSecondary',
} as const;

// Variants that support subtitle display
const SUBTITLE_SUPPORTED_VARIANTS = [
  ButtonTypesMAP.TRADE_LONG,
  ButtonTypesMAP.TRADE_SHORT,
  ButtonTypesMAP.TRADE_SECONDARY,
] as const;

// Loading state class mapping for each variant
const LOADING_VARIANT_CLASSES = {
  [ButtonTypesMAP.PRIMARY]: 'bg-brandColor-bds-brand-600-hover',
  [ButtonTypesMAP.SECONDARY]: 'text-base-bds-gray-t2',
  [ButtonTypesMAP.SECONDARY_BRAND]: 'text-brandColor-bds-brand-700-normal',
  [ButtonTypesMAP.TRADE_LONG]: 'bg-greenColor-bds-green-600-hover',
  [ButtonTypesMAP.TRADE_SHORT]: 'bg-redColor-bds-red-600-hover',
  [ButtonTypesMAP.TRADE_SECONDARY]: 'bg-base-bds-gray-ele-line',
} as const;

/**
 * Button component with variant styles, loading states, and subtitle support.
 *
 * @example
 * // Primary button with loading state
 * <Button variant="primary" loading={true}>Submit</Button>
 *
 * @example
 * // Trade button with subtitle (only shows when size is 'small')
 * <Button variant="tradeLong" size="small" subtitle="Long">BTC</Button>
 *
 * @example
 * // Full width button
 * <Button variant="secondary" block>Full Width</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((_ref, ref) => {
  const {
    className,
    variant = 'secondary',
    size = 'middle',
    loading = false,
    subtitle = '',
    block = false,
    children,
    ...props
  } = _ref;

  // Check if subtitle should be displayed (only for trade variants with small size)
  const showSubtitle = Boolean(
    subtitle &&
    size === 'small' &&
    SUBTITLE_SUPPORTED_VARIANTS.includes(variant as any)
  );

  // Compute block class
  const blockClz = block ? 'w-full' : '';

  // Compute loading state class (inline - faster than useMemo for simple lookups)
  const loadingClassKey = loading && variant
    ? (LOADING_VARIANT_CLASSES as Record<string, string>)[variant] || ''
    : '';

  // Compute pointer events class
  const loadingPointerClass = loading ? 'pointer-events-none' : '';

  return (
    <Wave component="Button">
      {showSubtitle ? (
        <button
          className={cn(buttonVariants({ variant, size, className }), blockClz, 'pt-[4px] pb-[6px]')}
          ref={ref}
          {...props}
        >
          <div className="btn-content flex flex-col">
            <div className="inner-children leading-[20px]">{children}</div>
            <div className="subtitle font-regular text-xs opacity-70 leading-[10px]">{subtitle}</div>
          </div>
        </button>
      ) : (
        <button
          className={cn(
            buttonVariants({ variant, size, className }),
            blockClz,
            loadingClassKey,
            loadingPointerClass
          )}
          ref={ref}
          {...props}
        >
          {loading && <LoadingIcon className="mr-2 rtl:ml-2 animate-spin" />}
          {children}
        </button>
      )}
    </Wave>
  );
});

Button.displayName = 'Button';

logVersion();

export default Button;
