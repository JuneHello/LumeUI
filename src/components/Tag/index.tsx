import React, { forwardRef, useMemo } from 'react';
import { cn, isHexColor, opacityColorByPercent } from '../../lib/utils';
import { CloseIcon, DirectionrightIcon } from '../../icons';
import { tagVariants, prefixCls, fontGradient } from './styles';
import { TagProps } from './types';

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    className,
    color,
    variant,
    size,
    shape,
    children,
    closeIcon = false,
    arrowIcon = false,
    onClose,
    style,
    prefix,
    disabled,
    ...others
  } = props;

  const hexStyle = useMemo(() => {
    if (!color || typeof color !== 'string' || !isHexColor(color)) return {};
    if (variant === 'primary') {
      return {
        backgroundColor: color,
      };
    }
    return {
      color: color,
      backgroundColor: opacityColorByPercent(color, 0.2),
    };
  }, [color, variant]);

  const handleClose = (e: React.MouseEvent<SVGElement>) => {
    if (disabled) return;
    onClose?.(e);
  };

  return (
    <div
      className={cn(
        tagVariants({
          color: color as any,
          variant,
          size,
          shape,
        }),
        className
      )}
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      style={{ ...style, ...hexStyle }}
      {...others}
    >
      {prefix && (
        <div className={cn(prefixCls)}>
          <span className={fontGradient}>{prefix}</span>
        </div>
      )}
      {variant === 'vip-only' ? <span>{children}</span> : children}
      {closeIcon && (
        <CloseIcon
          className="cursor-pointer data-[disabled]:cursor-not-allowed"
          data-disabled={disabled ? '' : undefined}
          onClick={handleClose}
        />
      )}
      {arrowIcon && (
        <DirectionrightIcon className={size === 'xlarge' ? 'w-[14px] h-[14px]' : 'w-3 h-3'} />
      )}
    </div>
  );
});

Tag.displayName = 'Tag';

export default Tag;
