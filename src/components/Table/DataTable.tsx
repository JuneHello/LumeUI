import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useState, Fragment } from 'react';
import { cn } from '../../lib/utils';
import { Empty } from '../Empty';
import { Spin } from '../Spin';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './TableComponents';
import { ErrorTypeStr, DataTableProps } from './types';

const ERROR_INFO = {
  [ErrorTypeStr.SYSTEM]: {
    img: '//s1.bycsi.com/bybit/deadpool/image-c1e7653506224aca8575be2d20df897a.png',
    text: 'System error. Please try again later.',
  },
  [ErrorTypeStr.NETWORK]: {
    img: '//s1.bycsi.com/bybit/deadpool/image-0ad9ab6dd3d445d5a32a443f630aa983.png',
    text: 'Network error. Please try again later.',
  },
};

export function DataTable<TData, TValue>(props: DataTableProps<TData, TValue>) {
  const {
    columns,
    data,
    height = 'auto',
    loading = false,
    isLite = false,
    error,
    rowSplitStyle = 'normal',
    cellSpaceStyle = 'normal',
    showRowSelection = true,
    className,
    emptyText = 'No Records',
    errorText,
    onRowClick,
  } = props;

  const [expanded, setExpanded] = useState({});

  const table = useReactTable({
    getRowId: (originalRow: any, index: number) => {
      const rowId = originalRow?.id || index.toString();
      return rowId;
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <Table className={cn('font-IBM', className)} height={height}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={cn(
                  'p-[12px] gap-[8px] font-IBM text-[12px] font-[400] leading-bds-line-height-12 text-base-bds-gray-t2',
                  isLite ? 'border-solid border-b border-base-bds-gray-ele-border' : 'bg-base-bds-gray-bg-edge'
                )}
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="relative">
        {error ? (
          <TableRow>
            <TableCell colSpan={columns.length} className="w-full">
              <div className="h-[300px] pt-[71px] mx-auto flex flex-col items-center gap-[16px]">
                <Empty
                  title=""
                  subTitle={`${errorText || ERROR_INFO[error.type].text} (Code: ${error.code})`}
                  status={error.type === ErrorTypeStr.NETWORK ? 'networkError' : 'databaseError'}
                />
              </div>
            </TableCell>
          </TableRow>
        ) : table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <TableRow
                data-state={row.getIsSelected() && 'selected'}
                className={cn(
                  'transition',
                  showRowSelection ? 'hover:bg-base-bds-trans-hover' : 'hover:bg-inherit',
                  onRowClick ? 'cursor-pointer' : ''
                )}
                onClick={(event) => onRowClick?.(event, row.id)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      'px-[12px] font-IBM text-[14px] font-[500] leading-bds-line-height-14 text-base-bds-gray-t1-title',
                      cellSpaceStyle === 'normal' && 'py-[12px]',
                      cellSpaceStyle === 'small' && 'py-[8px]',
                      cellSpaceStyle === 'large' && 'py-[16px]',
                      rowSplitStyle !== 'none' && 'border-solid border-b',
                      rowSplitStyle === 'strong'
                        ? 'border-base-bds-gray-ele-border'
                        : 'border-base-bds-gray-ele-line'
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
              {!!row.getIsExpanded() && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className={cn(
                      'px-[40px] py-[16px] font-IBM text-base-bds-gray-t1-title bg-base-bds-gray-bg-edge'
                    )}
                  >
                    {row.getValue('extend') as React.ReactNode}
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="w-full">
              <div className="h-[300px] pt-[71px] mx-auto flex flex-col items-center gap-[16px]">
                <Empty title="" subTitle={emptyText} />
              </div>
            </TableCell>
          </TableRow>
        )}
        {loading && (
          <TableRow>
            <TableCell colSpan={columns.length} className="w-full">
              <div
                className={cn(
                  'absolute left-0 top-0 w-full h-full opacity-90 bg-base-bds-gray-bg-card flex justify-center items-center'
                )}
              >
                <Spin />
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable;
