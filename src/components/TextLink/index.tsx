import React, { forwardRef, useMemo, useState } from 'react';
import { useRTL } from '../../hooks/useRTL';
import { cn, opacityColorByPercent } from '../../lib/utils';
import { DirectionleftIcon, DirectionrightIcon } from '../../icons';
import { textVariants } from './styles';
import { TextLinkProps } from './types';

export const TextLink = forwardRef<HTMLDivElement, TextLinkProps>((props, ref) => {
  const {
    className,
    color,
    variant,
    size,
    href,
    children,
    disabled,
    closeIcon = false,
    opensWindow = false,
    style,
    onClick,
    ...others
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const isRTL = useRTL();

  const dynamicStyle = useMemo(() => {
    if (!color) return {};
    return {
      color: isHovered ? opacityColorByPercent(color, 0.6) : color,
    };
  }, [color, isHovered]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (href) {
      if (opensWindow) {
        window.open(href);
      } else {
        window.location.href = href;
      }
    } else {
      onClick?.(event);
    }
  };

  return (
    <div
      className={cn(className, textVariants({ variant, size }))}
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      style={{ ...style, ...dynamicStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      {...others}
    >
      {children}
      {!closeIcon && (isRTL ? <DirectionleftIcon /> : <DirectionrightIcon />)}
    </div>
  );
});

TextLink.displayName = 'TextLink';

export default TextLink;
