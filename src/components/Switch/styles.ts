import { css } from '@emotion/css';

export const molySwitch = css`
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
    opacity: 0.35;
  }
`;

export const molySwitchThumb = css`
  background-color: var(--bds-static-white);
`;
