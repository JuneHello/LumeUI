import { useRTL } from "../../hooks/useRTL";
import { cn } from "../../lib/utils";
import * as React from 'react';
import { useMemo } from 'react';
import useStyles from "./useStyles";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  dot?: boolean;
  count?: number | string | React.ReactNode | (() => React.ReactNode);
  sup?: boolean;
  inlineFlex?: boolean;
  type?: 'primary' | 'secondary';
  showZero?: boolean;
  overflowCount?: number;
  size?: 'normal' | 'small';
  offset?: [number | string, number | string];
  color?: string;
  classNames?: {
    root?: string;
    indicator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    indicator?: React.CSSProperties;
  };
}

const prefixCls = 'moly-badge';

export const Badge: React.FC<BadgeProps> = (props) => {
  const {
    className,
    style,
    count,
    dot,
    sup,
    inlineFlex,
    type = 'primary',
    size,
    offset,
    showZero = false,
    overflowCount = 99,
    color,
    children,
    classNames,
    styles,
    ...restProps
  } = props;

  const isRTL = useRTL();

  const numberedDisplayCount = useMemo(() => {
    if (count === undefined || count === null || count === (false as any)) {
      return '';
    }
    if (typeof count === 'string' || React.isValidElement(count)) {
      return count;
    }
    if (typeof count === 'function') {
      return count();
    }
    return (count as number) > overflowCount ? `${overflowCount}+` : `${count}`;
  }, [count, overflowCount]);

  const countIsCustom = useMemo(() => {
    return React.isValidElement(count) || typeof count === 'function';
  }, [count]);

  const isZero = numberedDisplayCount === '0';
  const showAsDot = dot && !isZero;
  const mergedCount = showAsDot ? '' : numberedDisplayCount;

  const isLongerThan2 = useMemo(() => {
    if (typeof mergedCount === 'string') {
      return mergedCount.length > 1;
    }
    return false;
  }, [mergedCount]);

  const isHidden = useMemo(() => {
    const isEmpty = mergedCount === null || mergedCount === undefined || mergedCount === '';
    return (isEmpty || (isZero && !showZero)) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);

  const { styles: localClassName, theme } = useStyles(prefixCls, {
    inlineFlex,
    size,
    isLongerThan2,
    hasChild: !!children,
    isHidden,
    countIsCustom,
  });

  const badgeContainerClassName = cn(prefixCls, localClassName, className, classNames?.root);
  const badgeContainerStyle: React.CSSProperties = { ...style, ...styles?.root };

  const combineStyles = useMemo(() => {
    const mergeStyles: React.CSSProperties = {};
    if (countIsCustom) {
      mergeStyles.color = color || theme.badgeBgColor;
    } else if (color) {
      mergeStyles.background = color;
    }

    let offsetStyle: React.CSSProperties = {};
    if (offset) {
      offsetStyle = {
        top: offset[1],
      };
      if (isRTL) {
        offsetStyle.left = -parseInt(offset[0] as string, 10);
        offsetStyle.right = 'unset';
      } else {
        offsetStyle.left = 'unset';
        offsetStyle.right = -parseInt(offset[0] as string, 10);
      }
    }
    return { ...mergeStyles, ...offsetStyle, ...styles?.indicator };
  }, [countIsCustom, color, theme.badgeBgColor, offset, isRTL, styles?.indicator]);

  const renderBadge = () => {
    if (!showAsDot && sup) {
      return (
        <sup
          className={cn(
            `${prefixCls}-sup`,
            {
              [`${prefixCls}-size-small`]: size === 'small',
              [`${prefixCls}-type-secondary`]: type === 'secondary',
            },
            classNames?.indicator
          )}
        >
          {mergedCount}
        </sup>
      );
    }

    if (!isHidden) {
      return (
        <span
          className={cn(
            {
              [`${prefixCls}-dot`]: showAsDot,
              [`${prefixCls}-count`]: !showAsDot && !countIsCustom,
              [`${prefixCls}-inline-flex`]: inlineFlex,
              [`${prefixCls}-size-small`]: size === 'small',
              [`${prefixCls}-type-secondary`]: type === 'secondary',
              [`${prefixCls}-custom-component`]: countIsCustom,
            },
            classNames?.indicator
          )}
          style={combineStyles}
        >
          {mergedCount}
        </span>
      );
    }

    return null;
  };

  return (
    <span className={badgeContainerClassName} style={badgeContainerStyle} {...(restProps as any)}>
      {children}
      {renderBadge()}
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
