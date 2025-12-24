import { HTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';

export type TextSize = 12 | 14 | 16 | 18 | 20 | 24;
export type TextType = 'white' | 'secondary' | 'success' | 'warning' | 'danger';

export interface TextEllipsis {
  rows: number;
}

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TextSize;
  type?: TextType;
  children?: ReactNode;
  ellipsis?: boolean | TextEllipsis;
  disabled?: boolean;
}

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  children?: ReactNode;
}

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  blank?: boolean;
  type?: TextType;
  size?: TextSize;
  children?: ReactNode;
  ellipsis?: boolean;
  disabled?: boolean;
}
