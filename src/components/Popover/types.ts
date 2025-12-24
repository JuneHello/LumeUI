import { ReactNode } from 'react';

export type PopoverPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom';

export type PopoverTrigger = 'hover' | 'click' | 'focus' | 'contextMenu';

export type PopoverType = 'info' | 'highlight' | 'warning';

export interface PopoverProps {
  title?: ReactNode;
  content?: ReactNode;
  trigger?: PopoverTrigger | PopoverTrigger[];
  type?: PopoverType;
  children?: ReactNode;
  overlayClassName?: string;
  placement?: PopoverPlacement;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  showCloseBtn?: boolean;
  hideAnimate?: boolean;
  showArrow?: boolean;
  noPadding?: boolean;
  disabled?: boolean;
  [key: string]: any; // To support other rc-tooltip props
}
