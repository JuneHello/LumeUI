import React, { forwardRef, Fragment, Children } from 'react';
import { cn } from '../../lib/utils';
import { molySpaceCompact } from './styles';
import { SpaceProps } from './types';

const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    className,
    children,
    size,
    align,
    direction = 'horizontal',
    wrap,
    split,
    compact,
    style,
    ...rest
  } = props;

  const mergedAlign = align || (direction === 'horizontal' ? 'center' : 'start');

  const getGap = () => {
    const sizeArr = Array.isArray(size) ? size : [size, size];
    const newSize = sizeArr.map((s) => {
      if (typeof s === 'number') {
        return `${s}px`;
      } else if (s === 'middle') {
        return '16px';
      } else if (s === 'large') {
        return '24px';
      }
      return '8px';
    });
    return newSize.join(' ');
  };

  return (
    <div
      className={cn(
        'moly-space flex',
        {
          'flex-col inline-flex moly-space-vertical': direction === 'vertical',
          'items-center': mergedAlign === 'center',
          'items-start': mergedAlign === 'start',
          'items-end': mergedAlign === 'end',
          'items-baseline': mergedAlign === 'baseline',
          'items-stretch': mergedAlign === 'stretch',
          'flex-wrap': wrap,
          'moly-space-compact': compact,
        },
        compact ? molySpaceCompact : '',
        className
      )}
      style={compact ? style : { gap: getGap(), ...style }}
      ref={ref}
      {...rest}
    >
      {Children.map(children, (child, index) => {
        if (!child) {
          return null;
        }
        return (
          <Fragment key={index}>
            <div
              className={cn('moly-space-item', {
                'w-full': mergedAlign === 'stretch',
                'moly-space-item-first': index === 0,
                'moly-space-item-last': index === Children.count(children) - 1,
              })}
            >
              {child}
            </div>
            {split && index < Children.count(children) - 1 && (
              <div className="moly-space-split">{split}</div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
});

Space.displayName = 'Space';

export default Space;
