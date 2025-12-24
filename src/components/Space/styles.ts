import { css } from '@emotion/css';

export const molySpaceCompact = css`
  &.moly-space-vertical {
    display: inline-block;
  }

  &.moly-space-vertical .moly-space-item {
    width: 100%;
  }

  &.moly-space-vertical .moly-space-item > button {
    width: 100%;
  }

  &
    .moly-space-item:not(.moly-space-item-first):not(.moly-space-item-last)
    > button {
    border-radius: 0;
  }

  & .moly-space-item {
    position: relative;
  }

  &:not(.moly-space-vertical) .moly-space-item-first ~ .moly-space-item {
    margin-left: -1px;
  }

  &.moly-space-vertical .moly-space-item-first ~ .moly-space-item {
    margin-top: -1px;
  }

  & .moly-space-item-first ~ .moly-space-item::before {
    position: absolute;
    background-color: var(--bds-static-border-color);
    content: ' ';
  }

  &:not(.moly-space-vertical)
    .moly-space-item-first
    ~ .moly-space-item::before {
    width: 1px;
    height: 100%;
  }

  &.moly-space-vertical .moly-space-item-first ~ .moly-space-item::before {
    width: 100%;
    height: 1px;
  }

  &:not(.moly-space-vertical) .moly-space-item-first > button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:not(.moly-space-vertical) .moly-space-item-last > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.moly-space-vertical .moly-space-item-first > button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.moly-space-vertical .moly-space-item-last > button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & .moly-space-item > button:hover {
    position: relative;
    z-index: 2;
  }

  &:not([data-disabled]):hover {
    background-color: var(--bds-gray-t2);
  }

  &[data-state='checked'] {
    background-color: var(--bds-brand-700-normal);
  }

  &[data-state='checked']:not([data-disabled]):hover {
    background-color: var(--bds-brand-600-hover);
  }

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-state='checked'][data-disabled] {
    opacity: 0.35;
  }

  &[data-state='unchecked'][data-disabled] {
    background-color: var(--bds-gray-t4-dis);
  }
`;
