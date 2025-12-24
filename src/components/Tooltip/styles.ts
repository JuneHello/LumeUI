import { css, injectGlobal } from '@emotion/css';

export const tooltipStyles = {
  molyTooltipUnderline: css`
    > * {
      text-decoration-line: underline;
      text-decoration-color: var(--gray-tt-4-dis, #d5dae0);
      text-decoration-style: dashed;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
    }
    > * * {
      text-decoration: inherit;
    }
  `,
};

export const globalTooltipCss = () =>
  injectGlobal`
  .moly-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-size: 12px;
    line-height: 1.5;

    @keyframes contentShow {
      0% {
        display: none;
        opacity: 0;
        transform: scale(1);
      }
      50% {
        display: none;
        opacity: 0;
        transform: scale(0.7);
      }
      100% {
        display: block;
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes contentHide {
      0% {
        display: block;
        opacity: 1;
        transform: scale(1);
      }
      50% {
        display: block;
        opacity: 0;
        transform: scale(0.7);
      }
      100% {
        display: none;
        opacity: 0;
        transform: scale(1);
      }
    }
    @keyframes arrowShow {
      0% {
        display: none;
        opacity: 0;
      }
      50% {
        display: block;
        opacity: 0;
      }
      100% {
        display: block;
        opacity: 1;
      }
    }
    @keyframes arrowHide {
      0% {
        display: block;
        opacity: 1;
      }
      50% {
        display: block;
        opacity: 0;
      }
      100% {
        display: none;
        opacity: 0;
      }
    }
    @keyframes tooltipHide {
      0% {
        display: block;
      }
      100% {
        display: none;
      }
    }

    &-hidden {
      .moly-tooltip-content {
        animation: tooltipHide 1500ms linear;
        display: none;
      }
      .moly-tooltip-inner {
        animation: contentHide 250ms ease-in;
        display: none;
      }
      .moly-tooltip-arrow {
        animation: arrowHide 250ms ease-in forwards;
        display: none;
      }
    }

    &-inner {
      padding: 8px 12px;
      max-width: 280px;
      min-height: 16px;
      text-align: left;
      font-family: var(--bds-font-family);
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--bds-gray-t1-title);
      background-color: var(--bds-gray-ele-border);
      border-radius: 8px;

      animation: contentShow 150ms ease-in;
      transform: inherit;
    }

    &-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      animation: arrowShow 150ms ease-out forwards;
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

      &-top {
        .moly-tooltip-inner {
          transform-origin: bottom;
        }
      }

      &-topLeft {
        .moly-tooltip-inner {
          transform-origin: bottom left;
        }
      }

       &-topRight {
        .moly-tooltip-inner {
          transform-origin: bottom right;
        }
      }

      &-right,
      &-rightTop,
      &-rightBottom {
        padding-left: 6px;
      }

      &-right {
        .moly-tooltip-inner {
          transform-origin: left;
        }
      }

      &-rightTop {
        .moly-tooltip-inner {
          transform-origin: left top;
        }
      }

       &-rightBottom {
        .moly-tooltip-inner {
          transform-origin: left bottom;
        }
      }

      &-bottom,
      &-bottomLeft,
      &-bottomRight {
        padding-top: 6px;
      }

      &-bottom {
        .moly-tooltip-inner {
          transform-origin: top;
        }
      }

      &-bottomLeft {
        .moly-tooltip-inner {
          transform-origin: top left;
        }
      }

       &-bottomRight {
        .moly-tooltip-inner {
          transform-origin: top right;
        }
      }

      &-left,
      &-leftTop,
      &-leftBottom {
        padding-right: 6px;
      }

      &-left {
        .moly-tooltip-inner {
          transform-origin: right;
        }
      }

      &-leftTop {
        .moly-tooltip-inner {
          transform-origin: right top;
        }
      }

       &-leftBottom {
        .moly-tooltip-inner {
          transform-origin: right bottom;
        }
      }
    }
    
    &-placement {
      &-top.no-arrow,
      &-topLeft.no-arrow,
      &-topRight.no-arrow {
        padding-bottom: 0;
      }

      &-right.no-arrow,
      &-rightTop.no-arrow,
      &-rightBottom.no-arrow {
        padding-left: 0;
      }

      &-bottom.no-arrow,
      &-bottomLeft.no-arrow,
      &-bottomRight.no-arrow {
        padding-top: 0;
      }

      &-left.no-arrow,
      &-leftTop.no-arrow,
      &-leftBottom.no-arrow {
        padding-right: 0;
      }
    }

    &.no-animate {
      .moly-tooltip-hidden {
        .moly-tooltip-content {
          animation: none;
        }
        .moly-tooltip-inner {
          animation: none;
        }
        .moly-tooltip-arrow {
          animation: none;
        }
      }
      .moly-tooltip-inner {
        animation: none;
      }
  
      .moly-tooltip-arrow {
        animation: none;
      }
    }
  }
  [dir=rtl] .moly-tooltip {
    &-inner {
      text-align: right;
    }
  }
`;
