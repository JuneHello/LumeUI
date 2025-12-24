import { css } from '@emotion/css';

export const molyModalOpen = css`
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  background-color: var(--bds-trans-mask);
  position: fixed;
  inset: 0px;
  height: 100%;
  pointer-events: none;
  animation: overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const molyModalClose = css`
  @keyframes overlayHidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: overlayHidden 300ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const molyModalContainer = css`
  background-color: var(--bds-gray-bg-card);
  box-shadow: var(--bds-shadow-l2);
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  outline: none;

  box-sizing: border-box;

  color: var(--bds-gray-t1-title);

  @keyframes DialogContentShow {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes DialogContentHide {
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
  }

  @keyframes DialogContentBottomShow {
    from {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%) translateX(-50%);
      opacity: 1;
    }
  }

  @keyframes DialogContentBottomHide {
    from {
      transform: translateY(0%) translateX(-50%);
      opacity: 1;
    }
    to {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
  }

  &[data-direction='default'] {
    &[data-open='open'] {
      animation: DialogContentShow 300ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
    }
    &[data-open='closed'] {
      animation: DialogContentHide 230ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
    }
  }

  &[data-direction='bottom'] {
    bottom: 0;
    top: initial;
    transition: transform 1.3s ease-in-out;
    transform: translateX(-50%) translateY(100%);
    &[data-open='open'] {
      animation: DialogContentBottomShow 300ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: both;
    }

    &[data-open='closed'] {
      animation: DialogContentBottomHide 230ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
    }
  }
`;

export const molyModalContent = css`
  margin-top: 24px;
  font-size: 14px;
  line-height: 22px;

  max-height: calc(100vh - 220px);
  overflow-y: auto;

  &.unhave-header {
    margin-top: 0px;
  }
`;

export const molyModalContentH5 = css`
  max-height: calc(100vh - 112px);
`;

export const molyModalDraggableIcon = css`
  position: absolute;
  left: 4px;
  top: 24px;
  width: 32px;
  height: 32px;
`;
