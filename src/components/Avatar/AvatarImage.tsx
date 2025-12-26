import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';
import { LoadingStatus } from './utils';
import useStyles from './useStyles';

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface AvatarImageProps extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>, 'onLoadingStatusChange'> {
  /** 图片加载状态变化回调 */
  onLoadingStatusChange?: (status: LoadingStatus) => void;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, style, onLoadingStatusChange, src, alt, ...props }, ref) => {
    const prefixCls = 'moly-avatar';
    const { styles: localClassName } = useStyles(prefixCls);

    const avatarImageClassName = cn(
      prefixCls,
      `${prefixCls}-image`,
      localClassName,
      className
    );

    return (
      <AvatarPrimitive.Image
        ref={ref}
        src={src}
        alt={alt}
        className={avatarImageClassName}
        style={style}
        onLoadingStatusChange={(status) => {
          // 将 Radix UI 的 'idle' 映射到我们的 'lazy'
          const mappedStatus: LoadingStatus = status === 'idle' ? 'lazy' : status as LoadingStatus;
          onLoadingStatusChange?.(mappedStatus);
        }}
        {...props}
      />
    );
  }
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export default AvatarImage;
