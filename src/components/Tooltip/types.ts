import { ReactNode, CSSProperties } from 'react';

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export type TooltipTrigger = 'hover' | 'click' | 'focus';

export interface TooltipProps {
  children?: ReactNode;
  title?: ReactNode;
  placement?: TooltipPlacement;
  defaultOpen?: boolean;
  popupContainer?: HTMLElement;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  trigger?: TooltipTrigger | TooltipTrigger[];
  open?: boolean;
  zIndex?: number;
  onOpenChange?: (open: boolean) => void;
  destroyTooltipOnHide?: boolean;
  hasDashedLine?: boolean;
  stopPropagation?: boolean;
  hideAnimation?: boolean;
  hideWrapper?: boolean;
  showArrow?: boolean;
  disabled?: boolean;
}
