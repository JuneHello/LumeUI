import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import {
  BUTTON_TYPE_ITEM_OTHER_CLASS,
  EQUAL_DIVIDED_TAB_ITEM_LINE_HEIGHT,
  TEXT_TAB_ITEM_CLASS,
  getButtonTypeColorClass,
} from './constants';
import { TabsType, TabsSize, TabsButtonType } from './types';
import { activeTabBottomLineClass } from './styles';

interface RenderTabItemOptions {
  label: ReactNode;
  size: TabsSize;
  tabStyle?: React.CSSProperties;
  tabClass?: string;
  tabType: TabsType;
  buttonType: TabsButtonType;
  isEqualDivided?: boolean;
  singleLineClass?: string;
  showActiveBottomLine?: boolean;
  buttonVariants: (options: any) => string;
  isMobile?: boolean;
  disabled?: boolean;
}

export const renderTabItem = (options: RenderTabItemOptions) => {
  const {
    label,
    size,
    tabStyle,
    tabClass,
    tabType,
    buttonType,
    isEqualDivided,
    singleLineClass,
    showActiveBottomLine,
    buttonVariants,
    isMobile,
    disabled,
  } = options;

  const commonClasses = cn(
    'h-full relative transition-all aria-selected:cursor-default',
    'data-[disabled]:hover:cursor-not-allowed data-[disabled]:hover:text-base-bds-gray-t4-dis data-[disabled]:text-base-bds-gray-t4-dis',
    {
      'cursor-pointer': !disabled,
      'flex-1 shrink-0 text-center': isEqualDivided,
      'inline-flex items-center min-w-max': !isEqualDivided,
    },
    isEqualDivided && singleLineClass
  );

  const renderDom = {
    title: (
      <div
        className={cn(
          commonClasses,
          'aria-selected:text-base-bds-gray-t1-title',
          buttonVariants({ size }),
          !isMobile && 'hover:text-base-bds-gray-t1-title',
          tabClass,
          showActiveBottomLine && activeTabBottomLineClass
        )}
        style={{
          ...tabStyle,
          lineHeight: isEqualDivided ? EQUAL_DIVIDED_TAB_ITEM_LINE_HEIGHT[size] : undefined,
        }}
      >
        {label}
      </div>
    ),
    button: (
      <div
        className={cn(
          commonClasses,
          buttonVariants({ size, tabType }),
          tabClass,
          BUTTON_TYPE_ITEM_OTHER_CLASS[size],
          getButtonTypeColorClass({
            buttonType: 'primaryLite',
            tabType: 'button',
            isMobile: !!isMobile,
            disabled,
          })
        )}
        style={tabStyle}
      >
        {label}
      </div>
    ),
    buttonBg: (
      <div
        className={cn(
          commonClasses,
          BUTTON_TYPE_ITEM_OTHER_CLASS[size],
          getButtonTypeColorClass({
            buttonType,
            tabType: 'buttonBg',
            isMobile: !!isMobile,
            disabled,
          }),
          tabClass
        )}
        style={{
          ...tabStyle,
          lineHeight: isEqualDivided ? EQUAL_DIVIDED_TAB_ITEM_LINE_HEIGHT[size] : undefined,
        }}
      >
        {label}
      </div>
    ),
    text: (
      <div
        className={cn(
          commonClasses,
          'color-base-bds-gray-t2',
          !isMobile && 'hover:text-base-bds-gray-t3',
          TEXT_TAB_ITEM_CLASS[size],
          tabClass
        )}
        style={tabStyle}
      >
        {label}
      </div>
    ),
  };

  return renderDom[tabType];
};
