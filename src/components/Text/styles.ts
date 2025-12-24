import { css } from '@emotion/css';

export const molyText12 = css`
  font-size: var(--bds-font-size-12);
  line-height: var(--bds-line-height-12);
`;

export const molyText14 = css`
  font-size: var(--bds-font-size-14);
  line-height: var(--bds-line-height-14);
`;

export const molyText16 = css`
  font-size: var(--bds-font-size-16);
  line-height: var(--bds-line-height-16);
`;

export const molyText18 = css`
  font-size: var(--bds-font-size-18);
  line-height: var(--bds-line-height-18);
`;

export const molyText20 = css`
  font-size: var(--bds-font-size-20);
  line-height: var(--bds-line-height-20);
`;

export const molyText24 = css`
  font-size: var(--bds-font-size-24);
  line-height: var(--bds-line-height-24);
`;

export const TEXT_STYLE = {
  color: {
    white: 'text-[var(--bds-static-white)]',
    secondary: 'text-[var(--bds-gray-t2)]',
    success: 'text-[var(--bds-green-800-pressed)]',
    warning: 'text-[var(--bds-brand-700-normal)]',
    danger: 'text-[var(--bds-red-700-normal)]',
  },
  size: {
    12: molyText12,
    14: molyText14,
    16: molyText16,
    18: molyText18,
    20: molyText20,
    24: molyText24,
  },
};
