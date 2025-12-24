import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import React, { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import { useRTL } from '../../hooks/useRTL';
import { cn } from '../../lib/utils';
import SliderBtnIcon, { ExtraContent } from './SliderBtnIcon';
import {
  BUTTON_BG_TYPE_ITEM_BOX_CLASS,
  getGutterDefaultSize,
  SLIDE_ICON_WIDTH,
  TAB_TITLE_BOX_CLASS,
} from './constants';
import { renderTabItem } from './utils';
import * as styles from './styles';
import { TabsProps } from './types';

const buttonVariants = cva('', {
  variants: {
    size: {
      huge: 'text-xl h-14',
      large: 'text-lg h-12',
      medium: 'text-base h-10',
      small: 'text-sm h-8',
      mini: 'text-xs h-6',
      xl: 'text-xl h-14',
      l: 'text-lg h-12',
      m: 'text-base h-10',
      s: 'text-sm h-8',
      xs: 'text-xs h-6',
    },
    tabType: {
      title: '',
      buttonBg: 'color-base-bds-gray-t1',
      button: 'color-base-bds-gray-t2 bg-base-bds-gray-ele-edge',
      text: '',
    },
  },
  defaultVariants: {
    size: 'large',
    tabType: 'title',
  },
});

const TabsList = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(
  (props, ref) => <TabsPrimitive.List ref={ref} {...props} />
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(
  ({ className, ...props }, ref) => <TabsPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(
  ({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    className,
    tabTitleClassName,
    activeKey,
    defaultActiveKey,
    items = [],
    size = 'large',
    tabBarExtraContent,
    tabBarGutter,
    tabBarWithContentGutter,
    tabType = 'title',
    onChange,
    buttonType = 'default',
    showScrollButton,
    isEqualDivided = false,
    isMobile = false,
    ...rest
  } = props;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [arrowShow, setArrowShow] = useState(false);
  const [leftArrowShow, setLeftArrowShow] = useState(false);
  const [rightArrowShow, setRightArrowShow] = useState(true);
  const [isItemTransActive, setIsItemTransActive] = useState(true);
  const [showBottomAfterLine, setShowBottomAfterLine] = useState(true);
  const [tabActiveBar, setTabActiveBar] = useState({ width: 0, left: 0 });
  const [currentActiveKey, setCurrentActiveKey] = useState<string | undefined>(activeKey || defaultActiveKey);

  const isRTL = useRTL();

  const currentKey = activeKey ?? currentActiveKey;

  const defaultTabBarGutterClass = useMemo(
    () => getGutterDefaultSize({ tabType, isRTL, size }),
    [tabType, isRTL, size]
  );

  const tabTitleMargin = useMemo(
    () =>
      tabBarGutter !== undefined
        ? isRTL
          ? { marginRight: `${tabBarGutter}px` }
          : { marginLeft: `${tabBarGutter}px` }
        : {},
    [tabBarGutter, isRTL]
  );

  useEffect(() => {
    const sWidth = scrollRef.current?.scrollWidth || 0;
    const cWidth = scrollRef.current?.clientWidth || 0;
    setArrowShow(sWidth !== cWidth);
  }, [items]);

  const onScrollCapture = () => {
    if (showScrollButton) {
      const sLeft = Math.abs(scrollRef.current?.scrollLeft || 0);
      const sWidth = scrollRef.current?.scrollWidth || 0;
      const cWidth = scrollRef.current?.clientWidth || 0;
      const totalScrollWidth = sWidth - cWidth;
      setLeftArrowShow(sLeft >= 10);
      setRightArrowShow(totalScrollWidth - sLeft >= 10);
    }
  };

  useEffect(() => {
    onScrollCapture();
  }, [showScrollButton]);

  const onArrowClickPrev = () => {
    const showArrowCount = [leftArrowShow, rightArrowShow].filter(Boolean).length;
    const sLeft = scrollRef.current?.scrollLeft || 0;
    const cWidth = scrollRef.current?.clientWidth || 0;
    const nextPrev = isRTL
      ? Math.min(sLeft + (cWidth + showArrowCount * SLIDE_ICON_WIDTH) / 2, 0)
      : Math.max(sLeft - (cWidth + showArrowCount * SLIDE_ICON_WIDTH) / 2, 0);
    scrollRef.current?.scrollTo({ left: nextPrev, behavior: 'smooth' });
  };

  const onArrowClickNext = () => {
    const showArrowCount = [leftArrowShow, rightArrowShow].filter(Boolean).length;
    const sLeft = scrollRef.current?.scrollLeft || 0;
    const sWidth = scrollRef.current?.scrollWidth || 0;
    const cWidth = scrollRef.current?.clientWidth || 0;
    const nextNext = isRTL
      ? Math.min(sLeft - (cWidth + showArrowCount * SLIDE_ICON_WIDTH) / 2, sWidth)
      : Math.min(sLeft + (cWidth + showArrowCount * SLIDE_ICON_WIDTH) / 2, sWidth);
    scrollRef.current?.scrollTo({ left: nextNext, behavior: 'smooth' });
  };

  const setBottomActiveLinePosition = () => {
    const activeIndex = items.findIndex((item) => item.key === currentKey);
    const activeDomClient = scrollRef.current?.children[activeIndex] as HTMLElement;
    const clientWidth = activeDomClient?.clientWidth || 0;
    const offsetLeft = activeDomClient?.offsetLeft || 0;
    setShowBottomAfterLine(clientWidth === 0);
    setTabActiveBar({ width: clientWidth, left: offsetLeft });
  };

  useEffect(() => {
    if (tabType === 'title') {
      setBottomActiveLinePosition();
    }
  }, [currentKey, isRTL, items, tabType]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const activeIndex = items.findIndex((item) => item.key === (currentKey || defaultActiveKey));
    const activeDomClient = scrollRef.current.children[activeIndex] as HTMLElement;
    if (!activeDomClient) return;

    const totalWidth = scrollRef.current.clientWidth || 0;
    const scrollLeftValue = scrollRef.current.scrollLeft || 0;
    const { clientWidth = 0, offsetLeft = 0 } = activeDomClient;

    const cRight = totalWidth - (offsetLeft - scrollLeftValue) - clientWidth;
    const cLeft = offsetLeft - scrollLeftValue;

    if (cLeft < 0) {
      scrollRef.current.scrollTo({ left: offsetLeft - 2, behavior: 'smooth' });
    }
    if (cRight < 0) {
      scrollRef.current.scrollTo({ left: offsetLeft - totalWidth + clientWidth + 2, behavior: 'smooth' });
    }
  }, [currentKey, items, defaultActiveKey]);

  useEffect(() => {
    if (tabType === 'title') {
      setIsItemTransActive(false);
      setBottomActiveLinePosition();
      setTimeout(() => setIsItemTransActive(true), 0);
    }
  }, [size, isEqualDivided]);

  const onTabChange = (value: string) => {
    setCurrentActiveKey(value);
    onChange?.(value);
  };

  return (
    <TabsPrimitive.Root
      className={cn('moly-tabs', className)}
      value={currentKey}
      defaultValue={defaultActiveKey}
      onValueChange={onTabChange}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...rest}
    >
      <TabsList
        className={cn(
          'flex items-center text-base-bds-gray-t2 font-semibold relative',
          { 'border-b border-base-bds-gray-ele-line border-solid': tabType === 'title' },
          tabTitleClassName,
          TAB_TITLE_BOX_CLASS[size]
        )}
      >
        <ExtraContent position="left" extra={tabBarExtraContent} />
        {showScrollButton && arrowShow && leftArrowShow && (
          <SliderBtnIcon
            className="bg-base-bds-gray-bg-card hover:bg-base-bds-gray-ele-edge text-base-bds-gray-t2 rounded-sm"
            direction={isRTL ? 'right' : 'left'}
            handleClick={onArrowClickPrev}
          />
        )}
        <div
          className={cn(
            styles.tabTitleScrollBar,
            'items-center flex overflow-x-auto scroll-smooth relative',
            {
              'flex-1': isEqualDivided,
              'bg-base-bds-gray-ele-line': tabType === 'buttonBg',
            },
            tabType === 'buttonBg' && BUTTON_BG_TYPE_ITEM_BOX_CLASS[size],
            tabType === 'buttonBg' && buttonVariants({ size, tabType })
          )}
          ref={scrollRef}
          onScrollCapture={onScrollCapture}
        >
          {items.map((item, index) => (
            <TabsTrigger key={`tab-lis-${item.key}`} value={item.key} disabled={item.disabled} asChild>
              {renderTabItem({
                label: item.label,
                tabType,
                buttonType,
                size,
                tabClass: index === 0 ? undefined : defaultTabBarGutterClass,
                tabStyle: index === 0 ? undefined : tabTitleMargin,
                isEqualDivided,
                singleLineClass: styles.singleLine,
                showActiveBottomLine: currentKey === item.key && !showBottomAfterLine,
                buttonVariants,
                isMobile,
                disabled: item.disabled,
              })}
            </TabsTrigger>
          ))}
          {tabType === 'title' && (
            <div
              style={{ ...tabActiveBar, position: 'absolute' }}
              className={cn('bottom-0 bg-brandColor-bds-brand-700-normal h-0.5', {
                'transition-all': isItemTransActive,
              })}
            />
          )}
        </div>
        {showScrollButton && arrowShow && rightArrowShow && (
          <SliderBtnIcon
            className="bg-base-bds-gray-bg-card hover:bg-base-bds-trans-hover text-base-bds-gray-t2 rounded-sm"
            direction={isRTL ? 'left' : 'right'}
            handleClick={onArrowClickNext}
          />
        )}
        {tabBarExtraContent && <div className="flex-1" />}
        <ExtraContent position="right" extra={tabBarExtraContent} />
      </TabsList>
      <div
        className="moly-tabs-content"
        style={tabBarWithContentGutter ? { marginTop: `${tabBarWithContentGutter}px` } : {}}
      >
        {items.map((item) => (
          <TabsContent key={`tab-cont-${item.key}`} value={item.key}>
            {item.children}
          </TabsContent>
        ))}
      </div>
    </TabsPrimitive.Root>
  );
};

export default Tabs;
