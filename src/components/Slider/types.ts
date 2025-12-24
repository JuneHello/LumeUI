import { ReactNode, CSSProperties, FocusEvent } from 'react';

export enum SizeType {
  'small' = 0,
  'medium' = 1,
}

export interface MarkObj {
  style?: CSSProperties;
  label?: ReactNode;
}

export interface SliderProps<ValueType = number | number[]> {
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  keyboard?: boolean;
  autoFocus?: boolean;
  onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
  range?: boolean;
  count?: number;
  min?: number;
  max?: number;
  step?: number | null;
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: (value: ValueType) => void;
  size?: 'small' | 'medium';
  reverse?: boolean;
  vertical?: boolean;
  included?: boolean;
  startPoint?: number;
  trackStyle?: CSSProperties | CSSProperties[];
  handleStyle?: CSSProperties | CSSProperties[];
  railStyle?: CSSProperties;
  dotStyle?: CSSProperties | ((dotValue: number) => CSSProperties);
  activeDotStyle?: CSSProperties | ((dotValue: number) => CSSProperties);
  marks?: Record<string | number, ReactNode | MarkObj>;
  dots?: boolean;
  markTip?: boolean;
  tipFormatter?: (value: number) => ReactNode;
  ToolTip?: boolean;
  primaryColor?: string;
  dotBgColor?: string;
}

export type OffsetType = number | string;
export type AlignPointTopBottom = 't' | 'b' | 'c';
export type AlignPointLeftRight = 'l' | 'r' | 'c';
export type AlignPoint = string;

export interface AlignType {
  points?: (string | AlignPoint)[];
  _experimental?: Record<string, any>;
  offset?: OffsetType[];
  targetOffset?: OffsetType[];
  overflow?: {
    adjustX?: boolean | number;
    adjustY?: boolean | number;
    shiftX?: boolean | number;
    shiftY?: boolean | number;
  };
  autoArrow?: boolean;
  htmlRegion?: 'visible' | 'scroll' | 'visibleFirst';
  dynamicInset?: boolean;
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
  ignoreShake?: boolean;
}

export type BuildInPlacements = Record<string, AlignType>;

export const PlacementAlignMap: BuildInPlacements = {
  left: { points: ['cr', 'cl'] },
  right: { points: ['cl', 'cr'] },
  top: { points: ['bc', 'tc'] },
  bottom: { points: ['tc', 'bc'] },
  topLeft: { points: ['bl', 'tl'] },
  leftTop: { points: ['tr', 'tl'] },
  topRight: { points: ['br', 'tr'] },
  rightTop: { points: ['tl', 'tr'] },
  bottomRight: { points: ['tr', 'br'] },
  rightBottom: { points: ['bl', 'br'] },
  bottomLeft: { points: ['tl', 'bl'] },
  leftBottom: { points: ['br', 'bl'] },
};

export const ArrowCenterPlacementAlignMap: BuildInPlacements = {
  topLeft: { points: ['bl', 'tc'] },
  leftTop: { points: ['tr', 'cl'] },
  topRight: { points: ['br', 'tc'] },
  rightTop: { points: ['tl', 'cr'] },
  bottomRight: { points: ['tr', 'bc'] },
  rightBottom: { points: ['bl', 'cr'] },
  bottomLeft: { points: ['tl', 'bc'] },
  leftBottom: { points: ['br', 'cl'] },
};

export const DisableAutoArrowList = new Set([
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
]);

export const MAX_VERTICAL_CONTENT_RADIUS = 8;
