import { TabsSize, TabsType, TabsButtonType } from './types';

export const SLIDE_ICON_WIDTH = 16;

export const DEFAULT_TAB_BAR_GUTTER_LTR: Record<TabsType, Record<string, string>> = {
  title: {
    xl: 'ml-8',
    l: 'ml-6',
    m: 'ml-5',
    s: 'ml-4',
    xs: 'ml-3',
    huge: 'ml-8',
    large: 'ml-6',
    medium: 'ml-5',
    small: 'ml-4',
    mini: 'ml-3',
  },
  button: {
    xl: 'ml-8',
    l: 'ml-5',
    m: 'ml-4',
    s: 'ml-4',
    xs: 'ml-3',
    huge: 'ml-8',
    large: 'ml-5',
    medium: 'ml-4',
    small: 'ml-4',
    mini: 'ml-3',
  },
  buttonBg: {
    xl: 'ml-1',
    l: 'ml-1',
    m: 'ml-1',
    s: 'ml-1',
    xs: 'ml-1',
    huge: 'ml-1',
    large: 'ml-1',
    medium: 'ml-1',
    small: 'ml-1',
    mini: 'ml-1',
  },
  text: {
    xl: 'ml-8',
    l: 'ml-5',
    m: 'ml-4',
    s: 'ml-4',
    xs: 'ml-3',
    huge: 'ml-8',
    large: 'ml-5',
    medium: 'ml-4',
    small: 'ml-4',
    mini: 'ml-3',
  },
};

export const DEFAULT_TAB_BAR_GUTTER_RTL: Record<TabsType, Record<string, string>> = {
  title: {
    xl: 'mr-8',
    l: 'mr-6',
    m: 'mr-5',
    s: 'mr-4',
    xs: 'mr-3',
    huge: 'mr-8',
    large: 'mr-6',
    medium: 'mr-5',
    small: 'mr-4',
    mini: 'mr-3',
  },
  button: {
    xl: 'mr-8',
    l: 'mr-5',
    m: 'mr-4',
    s: 'mr-4',
    xs: 'mr-3',
    huge: 'mr-8',
    large: 'mr-5',
    medium: 'mr-4',
    small: 'mr-4',
    mini: 'mr-3',
  },
  buttonBg: {
    xl: 'mr-1',
    l: 'mr-1',
    m: 'mr-1',
    s: 'mr-1',
    xs: 'mr-1',
    huge: 'mr-1',
    large: 'mr-1',
    medium: 'mr-1',
    small: 'mr-1',
    mini: 'mr-1',
  },
  text: {
    xl: 'mr-8',
    l: 'mr-5',
    m: 'mr-4',
    s: 'mr-4',
    xs: 'mr-3',
    huge: 'mr-8',
    large: 'mr-5',
    medium: 'mr-4',
    small: 'mr-4',
    mini: 'mr-3',
  },
};

export const BUTTON_TYPE_COLOR_CLASS: Record<TabsButtonType, string> = {
  default: 'aria-selected:text-base-bds-gray-t1-title aria-selected:bg-base-bds-gray-bg-float aria-selected:shadow-bds-shadow-l1',
  primary: 'aria-selected:text-base-bds-static-black aria-selected:bg-brandColor-bds-brand-700-normal',
  primaryLite: 'aria-selected:text-brandColor-bds-brand-900-text aria-selected:bg-brandColor-bds-brand-100-bg',
  tradeLong: 'aria-selected:text-base-bds-static-white aria-selected:bg-greenColor-bds-green-700-normal',
  tradeLongLite: 'aria-selected:text-greenColor-bds-green-800-pressed aria-selected:bg-greenColor-bds-green-100-bg',
  tradeShort: 'aria-selected:text-base-bds-static-white aria-selected:bg-redColor-bds-red-700-normal',
  tradeShortLite: 'aria-selected:text-redColor-bds-red-800-pressed aria-selected:bg-redColor-bds-red-100-bg',
};

export const BUTTON_TYPE_ITEM_OTHER_CLASS: Record<string, string> = {
  xl: 'rounded-lg px-6',
  l: 'rounded-lg px-6',
  m: 'rounded-md px-5',
  s: 'rounded-md px-4',
  xs: 'rounded px-3',
  huge: 'rounded-lg px-6',
  large: 'rounded-lg px-6',
  medium: 'rounded-md px-5',
  small: 'rounded-md px-4',
  mini: 'rounded px-3',
};

export const BUTTON_BG_TYPE_ITEM_BOX_CLASS: Record<string, string> = {
  xl: 'rounded-lg p-1',
  l: 'rounded-lg p-1',
  m: 'rounded-lg p-1',
  s: 'rounded-lg p-0.5',
  xs: 'rounded-lg p-0.5',
  huge: 'rounded-lg p-1',
  large: 'rounded-lg p-1',
  medium: 'rounded-lg p-1',
  small: 'rounded-lg p-0.5',
  mini: 'rounded-lg p-0.5',
};

export const TEXT_TAB_ITEM_CLASS: Record<string, string> = {
  xl: 'font-semibold text-2xl aria-selected:text-base-bds-gray-t1-title',
  l: 'font-semibold text-xl aria-selected:text-base-bds-gray-t1-title',
  m: 'font-semibold text-base aria-selected:text-brandColor-bds-brand-900-text',
  s: 'font-medium text-sm aria-selected:text-brandColor-bds-brand-900-text',
  xs: 'font-medium text-xs aria-selected:text-brandColor-bds-brand-900-text',
  huge: 'font-semibold text-2xl aria-selected:text-base-bds-gray-t1-title',
  large: 'font-semibold text-xl aria-selected:text-base-bds-gray-t1-title',
  medium: 'font-semibold text-base aria-selected:text-brandColor-bds-brand-900-text',
  small: 'font-medium text-sm aria-selected:text-brandColor-bds-brand-900-text',
  mini: 'font-medium text-xs aria-selected:text-brandColor-bds-brand-900-text',
};

export const TAB_TITLE_BOX_CLASS: Record<string, string> = {
  xl: 'h-14',
  l: 'h-12',
  m: 'h-10',
  s: 'h-8',
  xs: 'h-6',
  huge: 'h-16',
  large: 'h-12',
  medium: 'h-10',
  small: 'h-8',
  mini: 'h-6',
};

export const EQUAL_DIVIDED_TAB_ITEM_LINE_HEIGHT: Record<string, string> = {
  xl: '3rem',
  l: '2.5rem',
  m: '2rem',
  s: '1.75rem',
  xs: '1.25rem',
  huge: '3rem',
  large: '2.5rem',
  medium: '2rem',
  small: '1.75rem',
  mini: '1.25rem',
};

export const getGutterDefaultSize = (options: { tabType: TabsType; size: string; isRTL: boolean }) => {
  const { tabType, size, isRTL } = options;
  return (isRTL ? DEFAULT_TAB_BAR_GUTTER_RTL : DEFAULT_TAB_BAR_GUTTER_LTR)[tabType][size];
};

export const getButtonTypeColorClass = (options: {
  buttonType: TabsButtonType;
  tabType: TabsType;
  isMobile: boolean;
  disabled?: boolean;
}) => {
  const { buttonType, tabType, isMobile, disabled } = options;
  const isButtonBg = tabType === 'buttonBg';
  const commonHoverBtnClass = !isMobile
    ? `${isButtonBg ? 'hover:bg-base-bds-trans-hover' : ''} ${
        !isButtonBg ? 'hover:text-base-bds-gray-t3' : 'hover:text-base-bds-gray-t1-title'
      }`
    : '';
  return `${BUTTON_TYPE_COLOR_CLASS[buttonType]} ${disabled ? '' : commonHoverBtnClass}`;
};
