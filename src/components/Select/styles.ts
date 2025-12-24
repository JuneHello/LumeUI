import { css } from '@emotion/css';

export const styles = {
  molySelectContent: css`
    box-shadow: 0px 0px 0px 5px rgba(247, 166, 0, 0.12);
    border-color: var(--bds-brand-800-pressed);
  `,
};

export const dropDownStyles = css`
  @keyframes rcSelectDropdownSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @keyframes rcSelectDropdownSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
  }

  @keyframes rcSelectSlideDownIn {
    0% {
      transform: scaleY(0.8);
      transform-origin: 100% 100%;
      opacity: 0;
    }

    100% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }
  }

  @keyframes rcSelectSlideDownOut {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 100%;
      opacity: 1;
    }

    100% {
      transform: scaleY(0.8);
      transform-origin: 100% 100%;
      opacity: 0;
    }
  }

  &.rc-select-dropdown {
    &-slide-up-enter,
    &-slide-up-appear {
      animation-duration: 0.15s;
      animation-fill-mode: both;
      transform-origin: 0 0;
      opacity: 0;
      animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
      animation-play-state: paused;
    }

    &-slide-up-leave {
      animation-duration: 0.15s;
      animation-fill-mode: both;
      transform-origin: 0 0;
      opacity: 1;
      animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
      animation-play-state: paused;
    }

    &-slide-up-enter&-slide-up-enter-active&-placement-bottomLeft,
    &-slide-up-enter&-slide-up-enter-active&-placement-bottomRight,
    &-slide-up-appear&-slide-up-appear-active&-placement-bottomLeft,
    &-slide-up-appear&-slide-up-appear-active&-placement-bottomRight {
      animation-name: rcSelectDropdownSlideUpIn;
      animation-play-state: running;
    }

    &-slide-up-leave&-slide-up-leave-active&-placement-bottomLeft,
    &-slide-up-leave&-slide-up-leave-active&-placement-bottomRight {
      animation-name: rcSelectDropdownSlideUpOut;
      animation-play-state: running;
    }

    &-slide-up-enter&-slide-up-enter-active&-placement-topLeft,
    &-slide-up-enter&-slide-up-enter-active&-placement-topRight,
    &-slide-up-appear&-slide-up-appear-active&-placement-topLeft,
    &-slide-up-appear&-slide-up-appear-active&-placement-topRight {
      animation-name: rcSelectSlideDownIn;
      animation-play-state: running;
    }

    &-slide-up-leave&-slide-up-leave-active&-placement-topLeft,
    &-slide-up-leave&-slide-up-leave-active&-placement-topRight {
      animation-name: rcSelectSlideDownOut;
      animation-play-state: running;
    }
  }

  &.rc-select-dropdown-hidden {
    display: none;
  }

  .rc-select-item-option-selected {
    display: none;
  }

  .custom-select-option-selector {
    display: flex;
  }

  .rc-select-item-option-active {
    background: var(--bds-trans-hover);
  }
`;

export const optionStyles = css`
  .rc-select-item-option-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`;
