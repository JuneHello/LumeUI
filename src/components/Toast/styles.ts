import { css } from '@emotion/css';

export const toastStyles = css`
  margin-top: 64px;

  .moly-toast-background {
    max-width: 480px;
    width: auto;
    background-color: var(--bds-gray-bg-float);
    padding: 12px 16px 12px 40px;
    box-shadow: var(--bds-shadow-l2);
  }

  .moly-toast-background[data-state='open'] {
    transition-timing-function: ease-in;
  }
  .moly-toast-background[data-state='closed'] {
    transition-timing-function: ease-out;
  }

  .moly-toast-icon-success,
  .moly-toast-icon-fail,
  .moly-toast-icon-warn,
  .moly-toast-icon-info,
  .moly-toast-icon-process {
    display: inline-block;
    position: absolute;
    top: 14px;
    left: 16px;
    font-size: 16px;
  }

  .moly-toast-icon-success {
    color: var(--bds-green-700-normal);
  }

  .moly-toast-icon-fail,
  .moly-toast-icon-warn {
    color: var(--bds-red-700-normal);
  }

  .moly-toast-icon-info {
    color: var(--bds-brand-700-normal);
  }

  .moly-toast-icon-process {
    color: var(--bds-gray-t2);
  }

  .moly-toast-title {
    color: var(--bds-gray-t1-title);
    word-break: break-word;
  }

  /* RTL Support */
  .moly-toast-background-rtl {
    direction: rtl;
    padding: 12px 40px 12px 16px;
    .moly-toast-icon-success,
    .moly-toast-icon-fail,
    .moly-toast-icon-warn,
    .moly-toast-icon-info,
    .moly-toast-icon-process {
      left: unset;
      right: 16px;
    }
  }

  @media (max-width: 767px) {
    margin-top: 16px;

    li.moly-toast-background {
      max-width: calc(100vw - 32px);
    }
  }
`;
