import IconButton from "../IconButton";
import { cn } from "../../lib/utils";
import { AlertCircleSolidIcon, AlertTriangleSolidIcon, CloseIcon, HelpIcon, CheckIcon } from '../../icons';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';

const alertVariants = cva(
  ['flex flex-col w-full pl-[12px] rtl:pl-[8px] pr-[8px] rtl:pr-[12px] py-[8px] text-bds-font-size-14 leading-bds-line-height-14'],
  {
    variants: {
      variant: {
        info: ['bg-base-bds-gray-ele-line'],
        remind: ['bg-brandColor-bds-brand-100-bg'],
        warn: ['bg-redColor-bds-red-100-bg'],
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export interface AlertProps extends VariantProps<typeof alertVariants> {
  /**
   * @description className
   */
  className?: string;
  /**
   * @description 是否展示前置的Icon
   * @default false
   */
  banner?: boolean;
  /**
   * @description 是否展示前置的Icon
   * @default true
   */
  showIcon?: boolean;
  /**
   * @description 自定义展示前置的icon
   */
  icon?: React.ReactNode;
  /**
   * @description 是否展示closeIcon `true` or `false`, 或者传入ReactNode自定义内容
   * @default false
   */
  closeIcon?: boolean | React.ReactNode;
  /**
   * @description icon后紧接着的信息
   */
  message?: React.ReactNode;
  /**
   * @description 该alert的详细描述
   */
  description?: React.ReactNode;
  /**
   * @description alert关闭回调
   */
  onClose?: () => void;
}

const getIcon = (variant?: "info" | "remind" | "warn" | null) => {
  let icon = null;
  if (variant === 'info' || !variant) {
    icon = <HelpIcon className="text-base-bds-gray-t2" />;
  } else if (variant === 'remind') {
    icon = <AlertCircleSolidIcon className="text-brandColor-bds-brand-700-normal" />;
  } else if (variant === 'warn') {
    icon = <AlertTriangleSolidIcon className="text-redColor-bds-red-700-normal" />;
  }
  return icon;
};

export const Alert: React.FC<AlertProps> = ({
  showIcon = true,
  icon,
  className,
  variant = 'info',
  message,
  description,
  closeIcon = false,
  banner = false,
  onClose,
}) => {
  const [closed, setClosed] = React.useState(false);

  if (closed) return null;

  const handleClose = () => {
    setClosed(true);
    if (onClose) onClose();
  };

  const getCloseIcon = () => {
    return (
      <IconButton onClick={handleClose} size="small">
        <CloseIcon />
      </IconButton>
    );
  };

  const customIcon = showIcon ? icon : undefined;
  const prefixIcon = customIcon || getIcon(variant);
  const finalCloseIcon = closeIcon === true ? getCloseIcon() : closeIcon;
  const bannerStyle = banner ? 'pl-[16px] pr-[12px] rtl:pl-[12px] rtl:pr-[16px]' : 'rounded-8';
  const messageBold = message && description ? 'font-semibold' : undefined;
  const messageBottom = description ? 'mb-[4px]' : undefined;

  return (
    <div
      className={cn(
        alertVariants({
          className: className,
          variant: variant,
        }),
        bannerStyle
      )}
    >
      {(showIcon || message || closeIcon) && (
        <div className={clsx('flex w-full justify-between', messageBottom)}>
          {showIcon && (
            <div className="flex items-center h-bds-height-14 mr-[8px] rtl:ml-[8px] rtl:mr-0">
              {prefixIcon}
            </div>
          )}
          {message && <div className={clsx('grow', messageBold)}>{message}</div>}
          {closeIcon && (
            <div className="flex items-center h-bds-height-14 ml-[8px] rtl:mr-[8px] rtl:ml-0">
              {finalCloseIcon}
            </div>
          )}
        </div>
      )}
      {description && <div className="">{description}</div>}
    </div>
  );
};
