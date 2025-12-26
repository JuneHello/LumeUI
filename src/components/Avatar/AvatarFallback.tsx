import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';
import useStyles from './useStyles';

export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  /** 延迟显示回退内容的时间（毫秒），避免快速加载时的闪烁 */
  delayMs?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, style, delayMs, children, ...props }, ref) => {
    const prefixCls = 'moly-avatar';
    const { styles: localClassName } = useStyles(prefixCls);

    const avatarFallbackClassName = cn(
      prefixCls,
      `${prefixCls}-fallback`,
      localClassName,
      className
    );

    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        delayMs={delayMs}
        className={avatarFallbackClassName}
        style={style}
        {...props}
      >
        {children}
      </AvatarPrimitive.Fallback>
    );
  }
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export default AvatarFallback;
