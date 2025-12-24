import { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import { VariantProps } from 'class-variance-authority';
import { textVariants } from './styles';

export type TextLinkSize = 'small' | 'normal' | 'large' | 'xlarge';
export type TextLinkVariant = 'primary' | 'secondary' | 'tertiary';

export interface TextLinkProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof textVariants> {
  href?: string;
  closeIcon?: boolean;
  disabled?: boolean;
  color?: string;
  opensWindow?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
}
