import React, { isValidElement, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import {
  ArrowchevronDownIcon,
  ArrowchevronLeftIcon,
  ArrowchevronRightIcon,
  ArrowchevronUpIcon,
} from '../../icons';
import { TabBarExtraContentType } from './types';

const directionComp = {
  left: ArrowchevronLeftIcon,
  right: ArrowchevronRightIcon,
  top: ArrowchevronDownIcon,
  bottom: ArrowchevronUpIcon,
};

const directionSpaceClass = {
  left: 'shadow-bds-shadow-right',
  right: 'shadow-bds-shadow-left',
  top: '',
  bottom: '',
};

interface SliderBtnIconProps {
  className?: string;
  width?: number;
  height?: string | number;
  iconWidth?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  handleClick?: () => void;
}

const SliderBtnIcon: React.FC<SliderBtnIconProps> = ({
  className,
  width = 16,
  height = '100%',
  iconWidth,
  direction = 'left',
  handleClick = () => {},
}) => {
  const IconComp = directionComp[direction] as any;
  return (
    <div
      onClick={handleClick}
      className={cn(
        'flex justify-center items-center cursor-pointer shrink-0',
        directionSpaceClass[direction],
        className
      )}
      style={{
        width,
        height,
        fontSize: iconWidth ? iconWidth : width,
      }}
    >
      <IconComp />
    </div>
  );
};

export const ExtraContent: React.FC<{ position: 'left' | 'right'; extra?: TabBarExtraContentType }> = ({
  position,
  extra,
}) => {
  if (!extra) return null;

  let content: ReactNode = null;
  let assertExtra: { left?: ReactNode; right?: ReactNode } = {};

  if (typeof extra === 'object' && !isValidElement(extra)) {
    assertExtra = extra as { left?: ReactNode; right?: ReactNode };
  } else {
    assertExtra.right = extra as ReactNode;
  }

  if (position === 'right') {
    content = assertExtra.right;
  }
  if (position === 'left') {
    content = assertExtra.left;
  }

  return content as React.ReactElement;
};

export default SliderBtnIcon;
