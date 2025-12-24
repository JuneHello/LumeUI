import React, { useEffect, useLayoutEffect, useState, Fragment, ReactNode } from 'react';
import RcSelect, { Option } from 'rc-select';
import { cn } from '../../lib/utils';
import { ArrowdownIcon, CheckIcon, EmptyIcon } from '../../icons';
import Divider from '../Divider';
import Empty from '../Empty';
import Search from '../Search';
import Tag from '../Tag';
import { useSelectHover } from './useSelectHover';
import { dropDownStyles, optionStyles } from './styles';
import { ISelectProps, ISelectOption } from './types';

const defaultOptionLabel = (val?: string) => {
  return (
    <div className={cn('truncate')} title={val}>
      {val}
    </div>
  );
};

const fontSizeVariable = {
  xs: ['text-[12px] font-medium leading-[18px]'],
  small: ['text-[12px] font-medium leading-[18px]'],
  medium: ['text-[16px] font-medium leading-6'],
  large: ['text-[20px] font-medium leading-7'],
};

const containerVariable = {
  xs: ['min-h-[32px] h-auto px-[8px] py-[7px] rounded-[4px]'],
  small: ['min-h-[40px] h-auto px-[12px] rounded-[4px]'],
  medium: ['min-h-[48px] h-auto px-[16px] rounded-[8px]'],
  large: ['min-h-[64px] h-auto px-[16px] rounded-[8px]'],
};

const Select: React.FC<ISelectProps> = (props) => {
  const {
    arrowRotate = true,
    tabIndex = 1,
    customButton,
    contentCenter,
    allowClear,
    notFoundText,
    defaultValue,
    onChange,
    options = [],
    showSearch,
    mode = 'combobox',
    placeholder = 'please select',
    size = 'medium',
    tagSize,
    RenderNode,
    valueRender,
    value,
    autoWidth,
    width: initialWidth,
    height: initialHeight,
    className,
    placement,
    direction = 'ltr',
    dropDownWidth,
    getPopupContainer,
    onDropdownVisibleChange,
    optionClass,
    dropdownClassName,
    shadowRootDelayTime,
    virtual = true,
    hoverAction,
    hoverTime = 300,
    dropdownOpen,
    unEnabledDefaultVisible,
    ...rest
  } = props;

  let width = initialWidth;
  let height = initialHeight;

  if (!width && !autoWidth) {
    width = size === 'medium' ? 380 : 276;
  }
  if (!height) {
    if (size === 'medium') {
      height = 48;
    } else if (size === 'xs') {
      height = 32;
    } else {
      height = 40;
    }
  }

  const [labelId] = useState('label_' + (Math.random() * 100000000).toFixed(0));
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [selectValue, setSelectValue] = useState<any>(
    ['tags', 'multiple'].includes(mode) && !Array.isArray(value) ? [] : value
  );
  const [rcId] = useState('rc_' + (Math.random() * 100000000).toFixed(0));
  const [popUpContainer, setPopUpContainer] = useState<HTMLElement>(document.body);

  useEffect(() => {
    if (dropdownOpen !== undefined) {
      setDropdownVisible(dropdownOpen);
    }
  }, [dropdownOpen]);

  const {
    mouseEnterHandler,
    mouseLeaveHandler,
    dropdownMouseEnterHandler,
    dropdownMouseLeaveHandler,
  } = useSelectHover({
    hoverAction,
    hoverTime,
    setDropdownVisible,
    onDropdownVisibleChange,
  });

  useLayoutEffect(() => {
    let element = document.querySelector(`.${rcId}`);
    while (
      element &&
      !element.parentElement?.classList.contains('moly-modal')
    ) {
      element = element.parentElement as HTMLElement;
    }
    setPopUpContainer((element?.parentElement as HTMLElement) || document.body);
  }, [rcId]);

  useEffect(() => {
    if (value !== undefined) {
      setSelectValue(value);
    } else if (defaultValue !== undefined) {
      setSelectValue(defaultValue);
    }
  }, [value, defaultValue]);

  const removeTags = (val: string | number) => {
    if (Array.isArray(selectValue)) {
      const values = selectValue.filter((v: any) => v !== val);
      setSelectValue([...values]);
      onChange?.([...values]);
    }
  };

  const defaultRenderValue = () => {
    if (mode === 'combobox') {
      if (selectValue === undefined || selectValue === null || selectValue === '') {
        return <Fragment />;
      }
      const option = options.find((item) => item.value === selectValue);
      return (
        <div
          className={cn('truncate inline-block flex-1', {
            'text-base-bds-gray-t4-dis': props.disabled,
          })}
        >
          {option?.label || selectValue}
        </div>
      );
    }

    if (Array.isArray(selectValue) && selectValue.length > 0) {
      const labels = selectValue.map((val: any) => {
        const option = options.find((item) => item.value === val);
        return option?.label || val;
      });

      if (mode === 'tags') {
        let tag_size = tagSize as any;
        if (!tagSize && size === 'medium') {
          tag_size = 'large';
        }
        return (
          <div className="flex-1">
            <div
              className={cn('flex flex-wrap', {
                'gap-[6px]': !tagSize || tagSize === 'normal',
                'gap-[4px]': tagSize === 'small' || size === 'small',
              })}
            >
              {labels.map((v, idx) => (
                <Tag
                  key={`${v}_${idx}`}
                  variant="light"
                  closeIcon
                  className="w-auto"
                  size={tag_size}
                  onClose={(e) => {
                    e?.preventDefault();
                    e?.stopPropagation();
                    const valToRemove = selectValue[idx];
                    removeTags(valToRemove);
                  }}
                >
                  {v}
                </Tag>
              ))}
            </div>
          </div>
        );
      }
      const widthStr = size === 'medium' || !size ? 'calc(100% - 16px)' : 'calc(100% - 14px)';
      return (
        <div style={{ width: widthStr }}>
          + {labels.length}
        </div>
      );
    }
    return null;
  };

  const filterResult = options.filter((item) => {
    if (!filterValue) return true;
    const label = item.label?.toString().toLowerCase() || '';
    const val = item.value?.toString().toLowerCase() || '';
    const search = filterValue.toLowerCase();
    return label.includes(search) || val.includes(search);
  });

  const placeHolderRender = () => {
    if (mode === 'combobox') {
      if (selectValue !== undefined && selectValue !== null && selectValue !== '') {
        return null;
      }
    } else if (Array.isArray(selectValue) && selectValue.length > 0) {
      return null;
    }
    return (
      <div
        className={cn('truncate inline-block flex-1 text-base-bds-gray-t3', {
          'text-base-bds-gray-t4-dis': props.disabled,
        })}
      >
        {placeholder}
      </div>
    );
  };

  const customRenderValue = () => {
    if (selectValue === undefined || (Array.isArray(selectValue) && selectValue.length === 0)) {
      return <Fragment />;
    }
    if (['tags', 'multiple'].includes(mode)) {
      if (Array.isArray(selectValue)) {
        const optionItems = selectValue.map((v) => options.find((item) => item.value === v));
        return <div className="flex-1">{valueRender?.(selectValue, optionItems)}</div>;
      }
    } else {
      const option = options.find((item) => item.value === selectValue);
      return <div className="flex-1">{valueRender?.(selectValue, option)}</div>;
    }
    return null;
  };

  const dropDownStyleCss: React.CSSProperties = {
    background: 'var(--bds-gray-bg-float)',
    border: '1px solid var(--bds-gray-ele-line)',
    boxShadow: 'var(--bds-shadow-l1)',
    borderRadius: '8px',
  };
  if (dropDownWidth) {
    dropDownStyleCss.width = dropDownWidth === 'auto' ? undefined : dropDownWidth;
  }

  let realPlacement = placement;
  if (direction === 'rtl' && !realPlacement) {
    realPlacement = 'bottomRight';
  }

  const connectClassAndOption = (child: ISelectOption) => (
    <Option
      key={child.value}
      disabled={child.disabled}
      data-changed={child.value === selectValue}
      value={child.value!}
      className={cn(
        'custom-select-option-selector',
        optionStyles,
        'last:mb-0 w-full cursor-pointer rounded-md font-normal select-none items-center py-[8px] pr-2 outline-none h-[40px] text-base px-[12px]',
        'text-base-bds-gray-t1-title',
        'focus:bg-base-bds-trans-hover',
        'whitespace-nowrap overflow-hidden text-ellipsis',
        'flex',
        'rc-select-item-option-selected:inline-block',
        'rc-select-item-option-active:bg-base-bds-trans-hover',
        'aria-[selected=true]:text-brandColor-bds-brand-900-text',
        'data-[changed=true]:text-brandColor-bds-brand-900-text',
        'data-[changed=true]:font-medium transition ease-in-out duration-150',
        {
          'hover:bg-base-bds-trans-hover': !child.disabled,
          'text-[#ADB1B8] cursor-not-allowed': child.disabled,
          'text-center': contentCenter,
          'h-[26px] py-[4px] px-[8px] text-xs': size === 'small' || size === 'xs',
          'gap-2': mode !== 'combobox',
        },
        optionClass
      )}
    >
      {RenderNode ? RenderNode(child) : defaultOptionLabel(child.label)}
    </Option>
  );

  const connectClassAndOptionGroupLabel = (item: ISelectOption, idx: number) => (
    <Option
      key={`rc_option_grp_${idx}_${item.label}`}
      disabled
      className={cn(
        'custom-select-option-selector',
        optionStyles,
        'last:mb-0 w-full cursor-pointer rounded-md font-normal select-none items-center py-[8px] pr-2 outline-none h-[40px] text-base px-[12px]',
        'text-base-bds-gray-t2 text-sm cursor-default flex',
        {
          'h-[26px] py-[4px] px-[8px] text-xs': size === 'small' || size === 'xs',
          'gap-2': mode !== 'combobox',
          'text-center': contentCenter,
        },
        optionClass,
        item.className
      )}
    >
      {item.label}
    </Option>
  );

  const mapOptionRender = () => {
    const list: ReactNode[] = [];
    filterResult.forEach((item, idx) => {
      if (item.options) {
        list.push(connectClassAndOptionGroupLabel(item, idx));
        item.options.forEach((child) => {
          list.push(connectClassAndOption(child));
        });
      } else if (item.type === 'divider') {
        list.push(
          <Option key={`rc_divider_${idx}`} disabled className="h-auto">
            <Divider style={{ marginTop: '0px', marginBottom: '4px' }} />
          </Option>
        );
      } else {
        list.push(connectClassAndOption(item));
      }
    });
    return list;
  };

  const visibleChangeHandler = (visible: boolean) => {
    if (!visible && shadowRootDelayTime) {
      (window as any).shadowRootTimeOutHidden = setTimeout(() => {
        if ((window as any).selectDropDownClick) {
          (window as any).selectDropDownClick = false;
          return;
        }
        setDropdownVisible(false);
        setFilterValue('');
        onDropdownVisibleChange?.(false);
      }, shadowRootDelayTime);
      return;
    }
    setDropdownVisible(visible);
    setFilterValue('');
    onDropdownVisibleChange?.(visible);
  };

  return (
    <RcSelect
      {...rest}
      virtual={virtual}
      onDropdownVisibleChange={(visible) => {
        if (unEnabledDefaultVisible) return;
        visibleChangeHandler(visible);
      }}
      open={dropdownVisible}
      optionFilterProp="text"
      value={selectValue}
      mode={mode as any}
      placeholder={placeholder}
      onChange={(val) => {
        let molyValueIntercept = false;
        onChange?.(val, {
          stopPropagation: () => {
            molyValueIntercept = true;
          },
        });
        if (!molyValueIntercept) {
          setSelectValue(val);
        }
      }}
      menuItemSelectedIcon={({ isSelected }) => (isSelected ? <CheckIcon /> : '')}
      notFoundContent={
        <div className="font-IBM text-center pb-[12px]">
          <Empty
            size="small"
            title=""
            status="noSearchResult"
            subTitle={notFoundText || ''}
          />
        </div>
      }
      getRawInputElement={() => (
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          {customButton || (
            <div
              style={{
                width,
                height: mode === 'tags' ? 'auto' : height,
                minWidth: width,
                maxWidth: width,
              }}
              tabIndex={tabIndex}
              className={cn(
                rcId,
                'font-IBM transition duration-150 ease-in-out',
                'focus-visible:shadow-select-shadow focus-visible:outline-none',
                'bg-base-bds-gray-ele-line text-base-bds-gray-t1-title border-none box-border',
                'hover:bg-base-bds-gray-ele-border py-[12px]',
                fontSizeVariable[size as keyof typeof fontSizeVariable],
                containerVariable[size as keyof typeof containerVariable],
                {
                  'py-[11px]': mode === 'tags',
                  'py-[7px]': mode === 'tags' && size === 'xs',
                  'h-auto': mode === 'tags',
                  'bg-base-bds-gray-ele-edge': props.disabled,
                },
                className
              )}
            >
              <div>
                <Fragment>
                  <label htmlFor={labelId} />
                  <div
                    className={cn('font-IBM relative cursor-pointer', {
                      group: selectValue && allowClear,
                      'flex relative': mode === 'tags',
                    })}
                  >
                    <div
                      className={cn('flex items-center w-full gap-[8px]', {
                        'h-auto sticky': mode === 'tags',
                      })}
                    >
                      {placeHolderRender()}
                      {valueRender && customRenderValue()}
                      {!valueRender && defaultRenderValue()}
                      {allowClear && (
                        <EmptyIcon
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const newVal = mode === 'combobox' ? '' : [];
                            setSelectValue(newVal);
                            onChange?.(newVal);
                          }}
                          className={cn(
                            'cursor-pointer group-hover:duration-150 group-hover:ease-out group-hover:transition-all w-[20px] h-[20px]',
                            'text-[#81858C] absolute opacity-0 group-hover:static group-hover:inline-block group-hover:opacity-100',
                            {
                              'w-[16px] h-[16px]': ['xs', 'small'].includes(size),
                            }
                          )}
                        />
                      )}
                      <ArrowdownIcon
                        className={cn(
                          'text-[#81858C] cursor-pointer transition-all group-hover:hidden w-[20px] h-[20px]',
                          {
                            'text-base-bds-gray-t4-dis': props.disabled,
                            'rotate-180': dropdownVisible && arrowRotate,
                            'w-[16px] h-[16px]': ['xs', 'small'].includes(size),
                          }
                        )}
                      />
                    </div>
                  </div>
                </Fragment>
              </div>
            </div>
          )}
        </div>
      )}
      placement={realPlacement}
      animation="slide-up"
      dropdownStyle={dropDownStyleCss}
      dropdownClassName={cn(
        dropDownStyles,
        'font-IBM absolute z-[10000] pointer-events-auto text-base-bds-gray-t1-title border-none',
        'bg-base-bds-gray-bg-card border-base-bds-gray-ele-line shadow-boxShadow-bds-shadow-l1 p-[4px]',
        dropdownClassName
      )}
      dropdownRender={(menu) => {
        let searchSize: any = 'small';
        if (size === 'medium') {
          searchSize = 'small';
        } else if (size === 'small' || size === 'xs') {
          searchSize = 'xs';
        }
        return (
          <div onMouseEnter={dropdownMouseEnterHandler} onMouseLeave={dropdownMouseLeaveHandler}>
            <Fragment>
              {showSearch && (
                <div
                  onMouseDown={(evt) => {
                    evt.stopPropagation();
                    if (shadowRootDelayTime) {
                      (window as any).selectDropDownClick = true;
                      clearTimeout((window as any).shadowRootTimeOutHidden);
                    }
                  }}
                >
                  <Search
                    size={searchSize}
                    id={labelId}
                    value={filterValue}
                    onChange={(e: any) => {
                      setFilterValue(e.target.value);
                    }}
                    className={cn('w-auto mb-[10px]', {
                      'mx-[2px] h-[40px]': size === 'small',
                    })}
                  />
                </div>
              )}
              {menu}
            </Fragment>
          </div>
        );
      }}
      getPopupContainer={() => {
        if (getPopupContainer) return getPopupContainer();
        return popUpContainer;
      }}
    >
      {mapOptionRender()}
    </RcSelect>
  );
};

Select.displayName = 'Select';

export default Select;
