import { css } from '@emotion/css';

export const container = css`
  position: relative;
  width: 100%;
  height: 14px;
  padding: 10px 0px;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const sizeStyle = {
  small: css`
    --item-size: 12px;
  `,
  medium: css`
    --item-size: 14px;
  `,
};

export const markStyle = {
  false: css`
    --mark-text-display: none;
  `,
  true: css`
    --mark-text-display: inline-block;
  `,
};

export const tooltipStyles = {
  molyTooltip: css`
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-size: 12px;
    line-height: 1.5;
    margin: 10px;
    &-hidden {
      display: none;
    }

    &-inner {
      padding: 8px 12px;
      min-height: 16px;
      text-align: left;
      font-family: var(--bds-font-family);
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--bds-gray-t1-title);
      background-color: var(--bds-gray-ele-border);
      border-radius: 8px;
    }

    &-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }

    &-placement-top &-arrow,
    &-placement-topLeft &-arrow,
    &-placement-topRight &-arrow {
      bottom: 0;
      margin-left: -6px;
      border-width: 6px 6px 0;
      border-top-color: var(--bds-gray-ele-border);
    }
    &-placement-top &-arrow {
      left: 50%;
    }
    &-placement-topLeft &-arrow {
      left: 22px !important;
    }
    &-placement-topRight &-arrow {
      left: auto !important;
      right: 16px !important;
    }

    &-placement-right &-arrow,
    &-placement-rightTop &-arrow,
    &-placement-rightBottom &-arrow {
      left: 0;
      margin-top: -6px;
      border-width: 6px 6px 6px 0;
      border-right-color: var(--bds-gray-ele-border);
    }
    &-placement-right &-arrow {
      top: 50%;
    }
    &-placement-rightTop &-arrow {
      top: 16px !important;
      margin-top: 0;
    }
    &-placement-rightBottom &-arrow {
      top: auto !important;
      bottom: 16px !important;
    }

    &-placement-bottom &-arrow,
    &-placement-bottomLeft &-arrow,
    &-placement-bottomRight &-arrow {
      top: 0px;
      margin-left: -6px;
      border-width: 0 6px 6px;
      border-bottom-color: var(--bds-gray-ele-border);
    }
    &-placement-bottom &-arrow {
      left: 50%;
    }
    &-placement-bottomLeft &-arrow {
      left: 22px !important;
    }
    &-placement-bottomRight &-arrow {
      left: auto !important;
      right: 16px !important;
    }

    &-placement-left &-arrow,
    &-placement-leftTop &-arrow,
    &-placement-leftBottom &-arrow {
      right: 0;
      margin-top: -6px;
      border-width: 6px 0 6px 6px;
      border-left-color: var(--bds-gray-ele-border);
    }
    &-placement-left &-arrow {
      top: 50%;
    }
    &-placement-leftTop &-arrow {
      top: 16px !important;
      margin-top: 0;
    }
    &-placement-leftBottom &-arrow {
      top: auto !important;
      bottom: 16px !important;
    }

    &-placement {
      &-top,
      &-topLeft,
      &-topRight {
        padding-bottom: 6px;
      }

      &-right,
      &-rightTop,
      &-rightBottom {
        padding-left: 6px;
      }

      &-bottom,
      &-bottomLeft,
      &-bottomRight {
        padding-top: 6px;
      }

      &-left,
      &-leftTop,
      &-leftBottom {
        padding-right: 6px;
      }
    }
  `,
};

export const getSliderStyles = (isRTL: boolean, primaryColor: string, dotBgColor: string) => css`
  .moly-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .moly-slider-rail {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: var(--bds-gray-ele-border, #e9edf2);
    border-radius: 6px;
  }
  .moly-slider-track {
    position: absolute;
    height: 4px;
    background-color: ${primaryColor};
    border-radius: 6px;
  }
  .moly-slider-track-draggable {
    z-index: 1;
    box-sizing: content-box;
    background-clip: content-box;
    border-top: 5px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    transform: translateY(-5px);
  }
  .moly-slider-handle {
    position: absolute;
    z-index: 1;
    width: 20px;
    height: 20px;
    margin-top: -8px;
    background-color: ${primaryColor};
    border-radius: 50%;
    cursor: pointer;
    opacity: 1;
    touch-action: pan-x;
  }
  .moly-slider-handle-dragging.moly-slider-handle-dragging.moly-slider-handle-dragging {
    border-color: #2db7f5;
    box-shadow: 0 0 0 5px rgba(45, 183, 245, 0.5);
  }
  .moly-slider-handle:focus {
    outline: none;
    box-shadow: none;
  }
  .moly-slider-handle:focus-visible {
    border-color: #2db7f5;
    box-shadow: 0 0 0 3px rgba(45, 183, 245, 0.5);
  }

  .moly-slider-handle:hover {
    border-color: ${primaryColor};
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: 100ms;
    transform: ${isRTL ? 'translateX(50%)' : 'translateX(-50%)'} translateY(-1px) !important;
    width: 22px !important;
    height: 22px !important;
  }

  .moly-slider-handle::after {
    content: '';
    height: 8px;
    width: 8px;
    display: block;
    position: relative;
    left: ${isRTL ? '0px' : '3px'};
    right: ${isRTL ? '3px' : '0px'};
    top: 3px;
    border: 3px solid ${primaryColor};
    border-radius: 8px;
  }

  [dir='rtl'].moly-slider-handle::after {
    right: 3px;
  }

  .moly-slider-handle:hover::after {
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: 100ms;
    height: 10px;
    width: 10px;
    left: ${isRTL ? '0px' : '3px'};
    right: ${isRTL ? '3px' : '0px'};
    top: 3px;
    border-radius: 14px;
  }

  .moly-slider-handle:active::after {
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: 100ms;
    height: 10px;
    width: 10px;
    left: ${isRTL ? '0px' : '3px'};
    right: ${isRTL ? '3px' : '0px'};
    top: 3px;
    border-radius: 14px;
  }

  .moly-slider-handle:active {
    border-color: #2db7f5;
    box-shadow: 0 0 5px rgba(45, 183, 245, 0.2);
    cursor: -webkit-grabbing;
    cursor: pointer;
    transform: ${isRTL ? 'translateX(50%)' : 'translateX(-50%)'} translateY(-1px) !important;
    width: 22px !important;
    height: 22px !important;
  }
  .moly-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: var(--item-size);
    user-select: none;
    line-height: 22px;
  }
  .moly-slider-mark:first-child {
    transform: translateX(-100%) !important;
  }
  .moly-slider-mark-text {
    position: absolute;
    display: inline-block;
    color: var(--bds-gray-t2);
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    display: var(--mark-text-display);
  }
  .moly-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .moly-slider-step:first-child {
    transform: translateX(0%) !important;
  }
  .moly-slider-dot {
    position: absolute;
    bottom: -3px;
    width: 10px;
    height: 10px;
    vertical-align: middle;
    border: 2px solid var(--bds-gray-ele-border, #e9edf2);
    background-color: ${dotBgColor};
    border-radius: 50%;
    cursor: pointer;
  }
  .moly-slider-dot-active {
    background-color: ${dotBgColor};
    border-color: ${primaryColor};
    width: 10px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
  }
  .moly-slider-disabled {
    background-color: #e9e9e9;
  }
  .moly-slider-disabled .moly-slider-track {
    background-color: #ccc;
  }
  .moly-slider-disabled .moly-slider-handle,
  .moly-slider-disabled .moly-slider-dot {
    background-color: #fff;
    border-color: #ccc;
    box-shadow: none;
    cursor: not-allowed;
  }
  .moly-slider-disabled .moly-slider-mark-text,
  .moly-slider-disabled .moly-slider-dot {
    cursor: not-allowed !important;
  }
`;
