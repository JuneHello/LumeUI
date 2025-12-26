import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';
import { AvatarSize } from './utils';
import useStyles, { UseStylesProps } from './useStyles';

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  /** Avatar 尺寸 */
  size?: AvatarSize;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, style, size = 'medium', children, ...props }, ref) => {
    const prefixCls = 'moly-avatar';
    const { styles: localClassName } = useStyles(prefixCls, { size });

    const avatarRootClassName = cn(
      prefixCls,
      `${prefixCls}-root`,
      localClassName,
      className
    );

    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={avatarRootClassName}
        style={style}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    );
  }
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;
