import { css, injectGlobal } from '@emotion/css';

export const styles = css`
  li.moly-notification-background:not([icontype]) {
    padding: 16px;
  }

  li.moly-notification-background {
    background-color: var(--bds-gray-bg-float);
    padding: 16px 12px 16px 40px;
    box-shadow: var(--bds-shadow-l2);
  }

  li.moly-notification-background[data-state='open'] {
    transition-timing-function: ease-out;
  }
  li.moly-notification-background[data-state='closed'] {
    transition-timing-function: ease-in;
  }
  li.moly-notification-background[data-state='open'],
  li.moly-notification-background[data-state='closed'] {
    animation-duration: 300ms;
  }

  /* 使用absolute布局，实现多行的情况下, icon高度不变 */
  .moly-notification-custom-icon {
    width: 16px;
    height: 16px;
    top: 18px;
  }

  .moly-notification-custom-icon,
  .moly-notification-icon-success,
  .moly-notification-icon-fail,
  .moly-notification-icon-warn,
  .moly-notification-icon-info,
  .moly-notification-icon-process {
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 16px;
    font-size: 16px;
  }

  .moly-notification-icon-success {
    color: var(--bds-green-700-normal);
  }

  .moly-notification-icon-fail,
  .moly-notification-icon-warn {
    color: var(--bds-red-700-normal);
  }

  .moly-notification-icon-info {
    color: var(--bds-brand-700-normal);
  }

  .moly-notification-icon-process {
    color: var(--bds-gray-t2);
  }

  .moly-notification-title-limit-width {
    padding-right: 20px;
  }
  .moly-notification-title {
    color: var(--bds-gray-t1-title);
    /* 超出2行显示 ... */
    display: -moz-box;
    display: -webkit-box;
    display: box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  button[moly-notification-close],
  button[moly-notification-close]:focus {
    outline: none;
    box-shadow: none;
    background-color: transparent;
    margin-left: 0;
  }
  .moly-notification-description,
  button[moly-notification-close] {
    color: var(--bds-gray-t2);
  }

  .moly-notification-description {
    /* 超出4行显示 ... */
    display: -moz-box;
    display: -webkit-box;
    display: box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  .moly-notification-arrow-right {
    position: relative;
    top: 2px;
    margin-left: 2px;
  }

  /* 阿语适配 */
  li.moly-notification-background-rtl {
    direction: rtl;
    padding: 16px 40px 16px 16px;

    .moly-notification-title-limit-width {
      padding-left: 20px;
      padding-right: 0;
    }

    .moly-notification-custom-icon,
    .moly-notification-icon-success,
    .moly-notification-icon-fail,
    .moly-notification-icon-warn,
    .moly-notification-icon-info,
    .moly-notification-icon-process {
      left: unset;
      right: 16px;
    }

    .moly-notification-title,
    .moly-notification-description {
      text-align: right;
      word-break: break-word;
    }

    button[moly-notification-close] {
      top: 12px;
      right: unset;
      left: -10px;
    }

    .moly-notification-arrow-right {
      display: inline-block;
      margin-right: 2px;
      margin-left: 0;
      transform: rotate(180deg);
    }
  }
`;

export const injectNotificationStyles = () => {
  return injectGlobal`
    .moly-notification-viewport-left {
      left: 0;
    }
    .moly-notification-viewport-right {
      right: 0;
    }
  `;
};
