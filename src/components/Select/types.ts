import { ReactNode, ReactElement } from 'react';

export interface ISelectOption {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  className?: string;
  title?: string;
  type?: 'divider';
  options?: ISelectOption[] | null;
}

export interface ISelectProps {
  autoWidth?: boolean;
  tabIndex?: number;
  customButton?: ReactElement;
  contentCenter?: boolean;
  notFoundText?: string | ReactNode;
  className?: string;
  allowClear?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xs';
  tagSize?: 'small' | 'normal' | 'large' | 'xlarge';
  width?: number | string;
  height?: number | string;
  disabled?: boolean;
  options?: ISelectOption[];
  open?: boolean;
  mode?: 'multiple' | 'combobox' | 'tags';
  showSearch?: boolean;
  value?: number | string | (string | number)[];
  defaultValue?: number | string | (string | number)[];
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
  onChange?: (
    value: any,
    evt?: {
      stopPropagation: () => void;
    }
  ) => boolean | void;
  placeholder?: string;
  RenderNode?: (option: ISelectOption) => ReactNode;
  valueRender?: (value: any, option?: ISelectOption | (ISelectOption | undefined)[]) => ReactNode;
  virtual?: boolean;
  arrowRotate?: boolean;
  direction?: 'ltr' | 'rtl';
  getPopupContainer?: () => HTMLElement;
  hoverTime?: number;
  hoverAction?: boolean;
  dropDownWidth?: number | 'auto';
  onDropdownVisibleChange?: (visible: boolean) => void;
  shadowRootDelayTime?: number;
  dropdownOpen?: boolean;
  unEnabledDefaultVisible?: boolean;
  dropdownClassName?: string;
  optionClass?: string;
}
