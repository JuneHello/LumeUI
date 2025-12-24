'use client';

import { cn, opacityColorByPercent } from "../../lib/utils";
import Wave from "../../lib/wave";
import { cva, VariantProps } from 'class-variance-authority';
import { injectGlobal } from '@emotion/css';
import React, { forwardRef, lazy, useMemo, Suspense } from 'react';

export const injectIconButtonStyles = () => {
  return injectGlobal`
    .moly-iconbutton {
      line-height: 1;
      &.xx-small {
        font-size: 12px;
        svg {
          width: 12px;
          height: 12px;
        }
      }
      &.x-small {
        font-size: 16px;
        svg {
          width: 16px;
          height: 16px;
        }
      }
      &.small {
        font-size: 20px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      &.middle {
        font-size: 24px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      &.large {
        font-size: 28px;
        svg {
          width: 28px;
          height: 28px;
        }
      } 
      &.x-large {
        font-size: 32px; 
        svg {
          width: 32px;
          height: 32px;
        }
      }


      &.default {
        width: auto;
        height: auto;
        padding: 0;
        border: 2px solid transparent;
      }

      &.outlined,
      &.float {
        &.xx-small {
          width: 24px;
          height: 24px;
        }
        &.x-small {
          width: 32px;
          height: 32px;
        }
        &.small {
          width: 40px;
          height: 40px;
        }
        &.middle {
          width: 48px;
          height: 48px;
        }
        &.large {
          width: 56px;
          height: 56px;
        } 
        &.x-large {
          width: 64px;
          height: 64px;
        }  
      }

      &.float {
        border-radius: 50%;
        background: var(--bds-gray-bg-float);
        box-shadow: 0px 4px 15px 0px rgba(44, 44, 44, 0.05);
      }

      &.float.type-highlight {
        background: var(--brand-700-normal, #f7a600);
        
        &[data-disabled] {
          background: var(--bds-static-white);
          box-shadow: 0px 4px 15px 0px rgba(44, 44, 44, 0.05);
        }

        &:hover {
          color: var(--bds-gray-t1-title);
          background: var(--brand-600-hover, #FFC35C);
        }

        &:active {
          color: var(--bds-gray-t1-title);
          background-color: var(--brand-800-pressed, #f0960e);
        }
      }
    }
  `;
};

injectIconButtonStyles();

const Tooltip = lazy(() => import("../Tooltip"));

export const iconButtonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'transition-all rounded-lg select-none cursor-pointer',
    'data-[disabled]:text-[var(--bds-gray-t4-dis)] data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:pointer-events-none',
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        default: [
          'text-[var(--bds-gray-t2)]',
          'hover:bg-base-bds-trans-hover',
          'active:active:text-[var(--bds-gray-t1-title)] active:active:bg-base-bds-trans-hover',
          'focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]',
        ],
        outlined: [
          'text-[var(--bds-gray-t1-title)]',
          'border border-solid border-base-bds-gray-t4-dis',
          'hover:text-[var(--bds-gray-t2)]',
          'active:text-[var(--bds-gray-t1-title)]',
          'focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]',
        ],
        float: [
          'text-[var(--bds-gray-t1-title)]',
          'hover:text-[var(--bds-gray-t2)]',
          'active:text-[var(--bds-gray-t1-title)]',
        ],
      },
      size: {
        'xx-small': 'rounded',
        'x-small': 'rounded',
        small: 'rounded',
        middle: '',
        large: '',
        'x-large': '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'middle',
    },
  }
);

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconButtonVariants> {
  color?: string;
  disabled?: boolean;
  type?: string;
  showTooltip?: boolean;
  tooltipContent?: React.ReactNode;
  width?: string;
  children?: React.ReactNode;
}

export const IconButton = forwardRef<HTMLDivElement, IconButtonProps>(
  (props, ref) => {
    const {
      className,
      color,
      variant,
      size,
      children,
      style,
      disabled,
      type,
      showTooltip = false,
      tooltipContent,
      width,
      ...others
    } = props;

    const colorStyle = useMemo(() => {
      if (!color) return {};
      if (width) {
        return {
          backgroundColor: opacityColorByPercent(color, 0.2),
          width: width,
          height: width,
        };
      } else {
        return {
          backgroundColor: opacityColorByPercent(color, 0.2),
        };
      }
    }, [color, width]);

    const widthStyle = useMemo(() => {
      if (!width) return {};
      return {
        width,
        height: width,
      };
    }, [width]);

    const tabIndex = variant === 'outlined' || variant === 'default' ? 0 : -1;

    const iconbutton = (
      <div
        className={cn(
          'moly-iconbutton',
          type ? `type-${type}` : '',
          `${variant || 'default'} `,
          `${size || 'middle'}`,
          iconButtonVariants({
            variant,
            size,
          }),
          className
        )}
        ref={ref}
        data-disabled={disabled ? '' : undefined}
        tabIndex={tabIndex}
        style={{ ...style, ...colorStyle, ...widthStyle }}
        {...others}
      >
        {children}
      </div>
    );

    const renderComponent = variant === 'outlined' ? (
      <Wave component="IconButton">{iconbutton}</Wave>
    ) : (
      iconbutton
    );

    if (showTooltip && tooltipContent) {
      return (
        <Suspense fallback={renderComponent}>
          <Tooltip title={tooltipContent}>{renderComponent}</Tooltip>
        </Suspense>
      );
    }

    return renderComponent;
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
