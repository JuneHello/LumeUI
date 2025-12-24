import * as Accordion from '@radix-ui/react-accordion';
import React, { useMemo, useState } from 'react';
import { TextLink } from "../TextLink";
import * as styles from "./styles";
import { cn } from "../../lib/utils";
import { ArrowchevronDownIcon } from '../../icons';

export interface CollapseItem {
  key?: string;
  label?: React.ReactNode | string;
  children?: React.ReactNode;
}

export interface CollapseProps {
  items?: CollapseItem[];
  className?: string;
  moreLink?: string;
  onChange?: (value: string | string[]) => void;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  icon?: React.ReactNode;
  moreText?: string;
}

export interface TriggerProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, TriggerProps & React.ComponentPropsWithoutRef<typeof Accordion.Trigger>>(
  ({ children, className, icon, ...props }, forwardedRef) => {
    return (
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger
          ref={forwardedRef}
          className={cn(
            styles.AccordionTrigger,
            className,
            'transition-all focus-visible:outline-none ring-focus-default focus-visible:ring-[5px] ring-btn-default rounded-lg'
          )}
          {...props}
        >
          <span className={styles.AccordionTitleContent}>{children}</span>
          {icon ? (
            <div className="moly-collaspe-custom-icon transition-all">{icon}</div>
          ) : (
            <ArrowchevronDownIcon className={`moly-icon ${styles.AccordionChevron} transition-all`} />
          )}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

const AccordionContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Accordion.Content>>(
  ({ children, className, ...props }, ref) => (
    <Accordion.Content className={cn(styles.AccordionContent, className)} ref={ref} {...props}>
      <div className={styles.AccordionContentText}>{children}</div>
    </Accordion.Content>
  )
);

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      className,
      items,
      moreLink,
      onChange,
      type = 'single',
      collapsible,
      defaultValue,
      value,
      icon,
      moreText,
      ...props
    },
    ref
  ) => {
    const [showAll, setShowAll] = useState(false);

    const filterItems = useMemo(() => {
      if (showAll || (items && items.length < 8)) {
        return items;
      }
      return items?.slice(0, 8);
    }, [showAll, items]);

    return (
      <Accordion.Root
        className={cn('moly-collapse', styles.AccordionRoot, className)}
        type={type as any}
        onValueChange={onChange as any}
        ref={ref}
        collapsible={collapsible}
        defaultValue={defaultValue as any}
        value={value as any}
      >
        {filterItems &&
          filterItems.length > 0 &&
          filterItems.map((item) => (
            <Accordion.Item
              className={styles.AccordionItem}
              value={item.key || ''}
              key={item.key}
            >
              <AccordionTrigger icon={icon}>{item.label}</AccordionTrigger>
              <AccordionContent>{item.children}</AccordionContent>
            </Accordion.Item>
          ))}
        {items && items.length > 8 && !showAll && (
          <TextLink
            className={styles.viewMore}
            variant="primary"
            closeIcon={true}
            size="xlarge"
            onClick={() => setShowAll(true)}
          >
            {moreText ?? 'View more'}
            <ArrowchevronDownIcon />
          </TextLink>
        )}
        {moreLink && (
          <TextLink
            className={styles.viewMore}
            variant="primary"
            size="xlarge"
            onClick={() => window.open(moreLink)}
          >
            {moreText ?? 'View more'}
          </TextLink>
        )}
      </Accordion.Root>
    );
  }
);

Collapse.displayName = 'Collapse';

export default Collapse;
