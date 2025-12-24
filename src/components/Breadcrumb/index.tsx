import { useRTL } from "../../hooks/useRTL";
import { cn } from "../../lib/utils";
import { ArrowchevronLeftIcon, ArrowchevronRightIcon } from '../../icons';
import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';

const Tooltip = lazy(() => import("../Tooltip"));

export interface IBreadcrumbItem {
  key?: React.Key;
  title?: string | number;
  label?: () => React.ReactNode;
  ellipsis?: boolean;
}

export interface IBreadcrumb {
  items: IBreadcrumbItem[];
  separator?: string;
  style?: React.CSSProperties;
  className?: string;
  itemRender?: (item: IBreadcrumbItem, index: number, items: IBreadcrumbItem[]) => React.ReactNode;
}

interface IBreadcrumbItemProps {
  separator?: string;
  children: React.ReactNode;
  key?: React.Key;
  isLast: boolean;
  ellipsis?: boolean;
}

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = ({
  separator,
  children,
  key,
  isLast,
  ellipsis,
}) => {
  const [needTooltip, setNeedTooltip] = useState(false);
  const itemElement = useRef<HTMLSpanElement>(null);
  const isRTL = useRTL();

  const currentSeparator = (
    <span className="text-base-bds-gray-t3 flex items-center">
      {separator || (isRTL ? <ArrowchevronLeftIcon /> : <ArrowchevronRightIcon />)}
    </span>
  );

  useEffect(() => {
    if (!ellipsis) return;
    if (itemElement.current) {
      if (itemElement.current.scrollWidth > itemElement.current.offsetWidth) {
        setNeedTooltip(true);
      }
    }
  }, [ellipsis]);

  const SpanElement = useCallback(
    ({ mr }: { mr: string }) => (
      <span
        ref={itemElement}
        className={cn(
          mr,
          'truncate hover:text-base-bds-gray-t3 cursor-pointer',
          'inline-block',
          'transition-all',
          'font-medium',
          ellipsis ? 'max-w-[200px]' : ''
        )}
        style={{ display: 'inherit' }}
      >
        {children}
      </span>
    ),
    [children, ellipsis]
  );

  const SpanElementToolTips = useCallback(
    () => (
      <Suspense>
        <Tooltip title={children}>
          <SpanElement mr="" />
        </Tooltip>
      </Suspense>
    ),
    [children, SpanElement]
  );

  return (
    <div
      className={cn(
        'flex',
        'items-center',
        isRTL ? 'ml-[6px]' : 'mr-[6px]',
        isLast ? 'text-base-bds-gray-t1-title' : 'text-base-bds-gray-t2'
      )}
      key={key}
    >
      {needTooltip ? <SpanElementToolTips /> : <SpanElement mr={isRTL ? 'ml-[6px]' : 'mr-[6px]'} />}
      {!isLast && currentSeparator}
    </div>
  );
};

const Breadcrumb: React.FC<IBreadcrumb> = ({
  items,
  separator,
  itemRender,
  className,
  style,
}) => {
  return (
    <div className={cn(className, 'flex', 'items-center', 'text-bds-font-size-14')} style={style}>
      {items.map((item, index) => {
        const label = itemRender
          ? itemRender(item, index, items)
          : item.label?.() || item.title;
        return (
          <BreadcrumbItem
            separator={separator}
            children={label}
            key={item.key || index}
            ellipsis={item.ellipsis ?? true}
            isLast={index === items.length - 1}
          />
        );
      })}
    </div>
  );
};

export default Breadcrumb;

