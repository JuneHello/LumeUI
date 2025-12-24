import { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import { VariantProps } from 'class-variance-authority';
import { tagVariants } from './styles';

export type TagSize = 'small' | 'normal' | 'large' | 'xlarge';
export type TagVariant = 'default' | 'primary' | 'light' | 'vip-fill' | 'vip-stroke' | 'vip-only' | 'vip-benefits';
export type TagColor =
  | 'neutral'
  | 'red'
  | 'green'
  | 'brand'
  | 'reddish-gradient'
  | 'brand-gradient'
  | 'non-vip'
  | 'vip1'
  | 'vip2'
  | 'vip3'
  | 'vip4'
  | 'vip5'
  | 'vip-supreme'
  | 'vip-default'
  | 'vip-black'
  | 'vip-gold';
export type TagShape = 'normal' | 'leaf' | 'invert-leaf' | 'corner';

export interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'>, Omit<VariantProps<typeof tagVariants>, 'color'> {
  closeIcon?: boolean;
  arrowIcon?: boolean;
  disabled?: boolean;
  onClose?: (e?: MouseEvent<SVGElement>) => void;
  prefix?: ReactNode;
  children?: ReactNode;
  color?: TagColor | string;
}
