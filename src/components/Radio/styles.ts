import { css } from '@emotion/css';

export const themes = css`
  --gray-tt-1: var(--bds-gray-t1-title);
  --gray-tt-3: var(--bds-gray-t3);
  --gray-line-01: var(--bds-gray-ele-line);
  --gray-line-02: var(--bds-gray-t2);
  --gray-border-01: var(--bds-gray-ele-border);
  --gray-border-02: var(--bds-gray-t4-dis);
  --brand-color-01: var(--bds-brand-700-normal);
  --bg-color-01: transparent;
`;

export const sizeStyle = {
  small: css`
    --item-size: 14px;
    --indicator-size: 7px;
    --item-margin-top: 2px;
    --title-size: 12px;
    --title-line-height: 18px;
  `,
  medium: css`
    --item-size: 16px;
    --indicator-size: 8px;
    --item-margin-top: 2px;
    --title-size: 14px;
    --title-line-height: 22px;
  `,
};

export const styles = css`
  /* reset */
  button {
    all: unset;
  }

  .radio-group-root {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .radio-group-root.horizontal {
    flex-direction: row;
  }
  .radio-group-root.horizontal-reverse {
    flex-direction: row-reverse;
  }
  .radio-group-root.vertical {
    flex-direction: column;
  }
  .radio-group-root.vertical-reverse {
    flex-direction: column-reverse;
  }
  .radio-group-item__wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .radio-group-item__wrap.disabled,
  .radio-group-item__wrap.disabled label {
    cursor: not-allowed;
  }

  .radio-group-item {
    background-color: var(--bg-color-01);
    width: var(--item-size);
    height: var(--item-size);
    flex: 0 0 var(--item-size);
    border-radius: 100%;
    border: 1px solid var(--gray-line-02);
    align-self: flex-start;
    margin-top: var(--item-margin-top);
  }
  .radio-group-item[aria-checked='true'] {
    border: 1px solid var(--brand-color-01);
  }
  .radio-group-item:focus {
    border: 1px solid var(--brand-color-01);
  }

  .radio-group-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .radio-group-indicator::after {
    content: '';
    display: block;
    width: var(--indicator-size);
    height: var(--indicator-size);
    border-radius: 50%;
    background-color: var(--brand-color-01);
  }

  .radio-group-root .radio-group-item__label {
    color: var(--gray-tt-1);
    padding-left: 8px;
    font-family: IBM Plex Sans;
    font-size: var(--title-size);
    font-style: normal;
    font-weight: 400;
    line-height: var(--title-line-height);
    cursor: pointer;
  }
  // hover
  .radio-group-item__wrap:not(.disabled):hover .radio-group-item {
    border-color: var(--brand-color-01);
  }
  .radio-group-item__wrap.disabled .radio-group-item__label {
    color: var(--gray-tt-3);
  }
  .radio-group-item__wrap.disabled .radio-group-item {
    border: 1px solid var(--gray-line-01);
    background-color: var(--gray-border-01);
  }
  .radio-group-item__wrap.disabled .radio-group-indicator::after {
    background-color: var(--gray-border-02);
  }
`;
