import { ColumnDef } from '@tanstack/react-table';
import { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes, ReactNode, MouseEvent } from 'react';

export enum ErrorTypeStr {
  NETWORK = 'NETWORK',
  SYSTEM = 'SYSTEM',
}

export interface ErrorType {
  type: ErrorTypeStr;
  code: string | number;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  height?: string;
  loading?: boolean;
  isLite?: boolean;
  error?: ErrorType;
  rowSplitStyle?: 'normal' | 'strong' | 'none';
  cellSpaceStyle?: 'normal' | 'small' | 'large';
  showRowSelection?: boolean;
  className?: string;
  emptyText?: string;
  errorText?: string;
  onRowClick?: (event: MouseEvent<HTMLTableRowElement>, rowId: string) => void;
}

export interface CustomHTMLTableElement extends HTMLAttributes<HTMLTableElement> {
  height?: string;
}

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;
