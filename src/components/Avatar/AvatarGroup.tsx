import * as React from 'react';
import { cn } from '../../lib/utils';
import useStyles from './useStyles';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 头像之间的间距（负值实现重叠效果） */
  spacing?: string | number;
  /** 最大显示的头像数量，超出部分显示 +N */
  max?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 头像数组，用于自动截断显示 */
  children?: React.ReactNode;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, style, spacing, max, children, ...props }, ref) => {
    const prefixCls = 'moly-avatar';
    const { styles: localClassName, theme } = useStyles(prefixCls);

    const avatarGroupClassName = cn(
      prefixCls,
      `${prefixCls}-group`,
      localClassName,
      className
    );

    // 处理 max 逻辑：如果设置了 max，只显示前 max-1 个子元素，最后一个显示 +N
    const renderedChildren = React.useMemo(() => {
      if (!max) return children;

      const childArray = React.Children.toArray(children);
      if (childArray.length <= max) return children;

      const visibleChildren = childArray.slice(0, max - 1);
      const hiddenCount = childArray.length - max + 1;

      return [
        ...visibleChildren,
        React.createElement(
          'div',
          {
            key: 'avatar-count',
            className: `${prefixCls}-root ${prefixCls}-fallback`,
            style: {
              background: theme.avatarFallbackBg,
              color: theme.avatarFallbackText,
            },
          },
          `+${hiddenCount}`
        ),
      ];
    }, [children, max, prefixCls, theme]);

    // 应用自定义间距
    const groupStyle: React.CSSProperties & { [key: string]: any } = {
      ...style,
    };

    if (spacing !== undefined) {
      // 转换 spacing 为 CSS 值
      const spacingValue = typeof spacing === 'number' ? `${spacing}px` : spacing;
      groupStyle['--bds-avatar-group-spacing'] = spacingValue;
    }

    return (
      <div
        ref={ref}
        className={avatarGroupClassName}
        style={groupStyle}
        {...props}
      >
        {renderedChildren}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
