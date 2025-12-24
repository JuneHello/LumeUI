import React, { memo, forwardRef } from 'react';
import Input from '../Input';
import { cn } from '../../lib/utils';
import { SearchIcon } from '../../icons';
import { SearchProps } from './types';

const Search = memo(
  forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
    const { size = 'small', ...rest } = props;

    return (
      <Input
        ref={ref}
        {...rest}
        size={size}
        prefix={
          <SearchIcon
            className={cn('text-base-bds-gray-t2', {
              'w-4 h-4': size === 'xs' || size === 'small',
              'w-5 h-5': size === 'medium' || size === 'x-large',
            })}
          />
        }
        allowClear
      />
    );
  })
);

Search.displayName = 'Search';

export default Search;
