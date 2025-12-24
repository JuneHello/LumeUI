import { css } from '@emotion/css';

export const tabTitleScrollBar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const singleLine = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const activeTabBottomLineClass = 'after:bg-brandColor-bds-brand-700-normal after:w-full after:block after:left-0 after:bottom-0 after:h-0.5 after:absolute';
