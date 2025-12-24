import { TextareaHTMLAttributes, ChangeEvent } from 'react';
import { VariantProps } from 'class-variance-authority';
import { textareaVariants } from './styles';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  errorMessage?: string;
  showCount?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
