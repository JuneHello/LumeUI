import * as SwitchPrimitives from '@radix-ui/react-switch';
import { ReactNode } from 'react';

export interface SwitchProps extends Omit<SwitchPrimitives.SwitchProps, 'onCheckedChange'> {
  size?: 'small' | 'default';
  loading?: boolean;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}
