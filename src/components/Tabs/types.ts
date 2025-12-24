import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

export type TabsSize = 'xl' | 'l' | 'm' | 's' | 'xs' | 'huge' | 'large' | 'medium' | 'small' | 'mini';
export type TabsType = 'title' | 'buttonBg' | 'button' | 'text';
export type TabsButtonType = 'default' | 'primary' | 'primaryLite' | 'tradeLong' | 'tradeLongLite' | 'tradeShort' | 'tradeShortLite';

export interface TabBarExtraContentFinalType {
  left?: ReactNode;
  right?: ReactNode;
}

export type TabBarExtraContentType = ReactNode | TabBarExtraContentFinalType;

export interface TabsItem {
  key: string;
  label: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}

export interface TabsProps extends Omit<TabsPrimitive.TabsProps, 'onChange'> {
  activeKey?: string;
  defaultActiveKey?: string;
  items?: TabsItem[];
  size?: TabsSize;
  tabBarExtraContent?: TabBarExtraContentType;
  tabBarGutter?: number;
  tabBarWithContentGutter?: number;
  tabType?: TabsType;
  onChange?: (activeKey: string) => void;
  buttonType?: TabsButtonType;
  showScrollButton?: boolean;
  isEqualDivided?: boolean;
  isMobile?: boolean;
  tabTitleClassName?: string;
}

export interface TabActiveBar {
  width: number;
  left: number;
}
