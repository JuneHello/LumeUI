import { injectGlobal } from '@emotion/css';

export const injectPopoverStyles = () => {
  return injectGlobal`
  .moly-popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1030;
    cursor: auto;
    user-select: text;
    white-space: normal;
    text-align: left;

    @keyframes contentShow {
      0% {
        display: none;
        opacity: 0;
        transform: scale(1);
      }
      50% {
        display: block;
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
    @keyframes popoverHide {
      0% {
        display: block;
      }
      100% {
        display: none;
      }
    }

    &-hidden {
      .moly-popover-content {
        animation: popoverHide 2500ms linear;
        display: none;
        
        .moly-popover-inner {
          animation: contentHide 250ms ease-in;
          display: none;
        }
      }
      .moly-popover-arrow {
        animation: arrowHide 250ms ease-in forwards;
        display: none;
      }
    }

    &-rotate {
      transform: rotateY(180deg);
    }

    &-content{
      box-shadow: 0px 0px 24px 0px rgba(18, 18, 20, 0.10);
      border-radius: 8px;
      overflow: hidden;

      .moly-popover-inner {
        border: none;
        border-radius: 8px;
        background-color: var(--bds-gray-bg-float);
        position: relative;
        min-width: 180px;

        animation: contentShow 150ms ease-in;
        transform: inherit;

        .moly-popover-title {
          padding: 12px 12px 0 12px;
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          border-bottom: none;
          color: var(--bds-gray-t1-title);
          display: flex;
          align-items: center;
        }

        .moly-popover-inner-content {
          padding: 2px 12px 12px 12px;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          color: var(--bds-gray-t1-title);
        }
      }
    }

    &.moly-popover-no-padding {
      .moly-popover-content {
        .moly-popover-inner {
          .moly-popover-title {
            padding: 0;
          }
          .moly-popover-inner-content {
            padding: 2px 0 0 0;
          }
        }
      }
    }

    // Arrow
    &-arrow {
      border-width: 6px;
      position: absolute;
      display: block;
      border-color: transparent;
      border-style: solid;
      animation: arrowShow 250ms ease-out forwards;
    }

    &.moly-popover-placement-top,
    &.moly-popover-placement-topLeft,
    &.moly-popover-placement-topRight {
      padding-bottom: 6px;
      .moly-popover-arrow {
        border-top-color: var(--bds-gray-bg-float);
        border-bottom-width: 0;
      }
    }
    
    &.moly-popover-placement-top,
    &.moly-popover-info.moly-popover-placement-top,
    &.moly-popover-highlight.moly-popover-placement-top,
    &.moly-popover-warning.moly-popover-placement-top, {
      .moly-popover-inner {
        transform-origin: bottom;
      }
    }

    &.moly-popover-placement-topLeft,
    &.moly-popover-info.moly-popover-placement-topLeft,
    &.moly-popover-highlight.moly-popover-placement-topLeft,
    &.moly-popover-warning.moly-popover-placement-topLeft,  {
      .moly-popover-inner {
        transform-origin: bottom left;
      }
    }

    &.moly-popover-placement-topRight,
    &.moly-popover-info.moly-popover-placement-topRight,
    &.moly-popover-highlight.moly-popover-placement-topRight,
    &.moly-popover-warning.moly-popover-placement-topRight,  {
      .moly-popover-inner {
        transform-origin: bottom right;
      }
    }

    &-placement-top &-arrow {
      margin-left: -6px;
    }
    &-placement-topLeft &-arrow {
      bottom: 0;
      left: 16px;
    }
    &-placement-topRight &-arrow {
      bottom: 0;
      right: 16px;
    }

    &.moly-popover-placement-right,
    &.moly-popover-placement-rightTop,
    &.moly-popover-placement-rightBottom {
      padding-left: 6px;
      //transform-origin: left;
      .moly-popover-arrow {
        border-right-color: var(--bds-gray-bg-float);
        border-left-width: 0;
      }
    }

    &.moly-popover-placement-right,
    &.moly-popover-info.moly-popover-placement-right,
    &.moly-popover-highlight.moly-popover-placement-right,
    &.moly-popover-warning.moly-popover-placement-right, {
      .moly-popover-inner {
        transform-origin: left;
      }
    }

    &.moly-popover-placement-rightTop,
    &.moly-popover-info.moly-popover-placement-rightTop,
    &.moly-popover-highlight.moly-popover-placement-rightTop,
    &.moly-popover-warning.moly-popover-placement-rightTop, {
      .moly-popover-inner {
        transform-origin: left top;
      }
    }

    &.moly-popover-placement-rightBottom,
    &.moly-popover-info.moly-popover-placement-rightBottom,
    &.moly-popover-highlight.moly-popover-placement-rightBottom,
    &.moly-popover-warning.moly-popover-placement-rightBottom, {
      .moly-popover-inner {
        transform-origin: left bottom;
      }
    }


    &-placement-right &-arrow {
      margin-top: -6px;
    }
    &-placement-rightTop &-arrow {
      left: 0;
      top: 16px;
    }
    &-placement-rightBottom &-arrow {
      left: 0;
      bottom: 16px;
    }

    &.moly-popover-placement-bottom,
    &.moly-popover-placement-bottomLeft,
    &.moly-popover-placement-bottomRight {
      padding-top: 6px;
      //transform-origin: top;
      .moly-popover-arrow {
        border-bottom-color: var(--bds-gray-bg-float);
        border-top-width: 0;
      }
    }

    &.moly-popover-placement-bottom,
    &.moly-popover-info.moly-popover-placement-bottom,
    &.moly-popover-highlight.moly-popover-placement-bottom,
    &.moly-popover-warning.moly-popover-placement-bottom, {
      .moly-popover-inner {
        transform-origin: top;
      }
    }

    &.moly-popover-placement-bottomLeft,
    &.moly-popover-info.moly-popover-placement-bottomLeft,
    &.moly-popover-highlight.moly-popover-placement-bottomLeft,
    &.moly-popover-warning.moly-popover-placement-bottomLeft, {
      .moly-popover-inner {
        transform-origin: top left;
      }
    }

    &.moly-popover-placement-bottomRight,
    &.moly-popover-info.moly-popover-placement-bottomRight,
    &.moly-popover-highlight.moly-popover-placement-bottomRight,
    &.moly-popover-warning.moly-popover-placement-bottomRight, {
      .moly-popover-inner {
        transform-origin: top right;
      }
    }

    &-placement-bottom &-arrow {
      margin-left: -6px;
    }
    &-placement-bottomLeft &-arrow {
      top: 0;
      left: 16px;
    }
    &-placement-bottomRight &-arrow {
      top: 0;
      right: 16px;
    }

    &.moly-popover-placement-left,
    &.moly-popover-placement-leftTop,
    &.moly-popover-placement-leftBottom {
      padding-right: 6px;
      //transform-origin: right;
      .moly-popover-arrow {
        border-left-color: var(--bds-gray-bg-float);
        border-right-width: 0;
      }
    }

    &.moly-popover-placement-left,
    &.moly-popover-info.moly-popover-placement-left,
    &.moly-popover-highlight.moly-popover-placement-left,
    &.moly-popover-warning.moly-popover-placement-left, {
      .moly-popover-inner {
        transform-origin: right;
      }
    }

    &.moly-popover-placement-leftTop,
    &.moly-popover-info.moly-popover-placement-leftTop,
    &.moly-popover-highlight.moly-popover-placement-leftTop,
    &.moly-popover-warning.moly-popover-placement-leftTop, {
      .moly-popover-inner {
        transform-origin: right top;
      }
    }

    &.moly-popover-placement-leftBottom,
    &.moly-popover-info.moly-popover-placement-leftBottom,
    &.moly-popover-highlight.moly-popover-placement-leftBottom,
    &.moly-popover-warning.moly-popover-placement-leftBottom, {
      .moly-popover-inner {
        transform-origin: right bottom;
      }
    }

    &-placement-left &-arrow {
      margin-top: -6px;
    }
    &-placement-leftTop &-arrow {
      right: 0;
      top: 16px;
    }
    &-placement-leftBottom &-arrow {
      right: 0;
      bottom: 16px;
    }

    // Info
    &.moly-popover-info{
      .moly-popover-content{
        .moly-popover-inner{
          background-color: var(--bds-gray-bg-float);

          .moly-popover-title {
            color: var(--bds-gray-t1-title);
          }

          .moly-popover-inner-content {
            color: var(--bds-gray-t1-title);
          }
        }
      }
    }
    &.moly-popover-info.moly-popover-placement-top,
    &.moly-popover-info.moly-popover-placement-topLeft,
    &.moly-popover-info.moly-popover-placement-topRight {
      .moly-popover-arrow {
        border-top-color: var(--bds-gray-bg-float);
      }
    }
    &.moly-popover-info.moly-popover-placement-right,
    &.moly-popover-info.moly-popover-placement-rightTop,
    &.moly-popover-info.moly-popover-placement-rightBottom {
      .moly-popover-arrow {
        border-right-color: var(--bds-gray-bg-float);
      }
    }
    &.moly-popover-info.moly-popover-placement-bottom,
    &.moly-popover-info.moly-popover-placement-bottomLeft,
    &.moly-popover-info.moly-popover-placement-bottomRight {
      .moly-popover-arrow {
        border-bottom-color: var(--bds-gray-bg-float);
      }
    }
    &.moly-popover-info.moly-popover-placement-left,
    &.moly-popover-info.moly-popover-placement-leftTop,
    &.moly-popover-info.moly-popover-placement-leftBottom {
      .moly-popover-arrow {
        border-left-color: var(--bds-gray-bg-float);
      }
    }

    // Highlight
    &.moly-popover-highlight{
      .moly-popover-content{
        .moly-popover-inner{
          background-color: var(--bds-brand-700-normal);

          .moly-popover-title {
            color: var(--bds-static-black);
          }

          .moly-popover-inner-content {
            color: var(--bds-static-black);
          }
        }
      }
    }
    &.moly-popover-highlight.moly-popover-placement-top,
    &.moly-popover-highlight.moly-popover-placement-topLeft,
    &.moly-popover-highlight.moly-popover-placement-topRight {
      .moly-popover-arrow {
        border-top-color: var(--bds-brand-700-normal);
      }
    }
    &.moly-popover-highlight.moly-popover-placement-right,
    &.moly-popover-highlight.moly-popover-placement-rightTop,
    &.moly-popover-highlight.moly-popover-placement-rightBottom {
      .moly-popover-arrow {
        border-right-color: var(--bds-brand-700-normal);
      }
    }
    &.moly-popover-highlight.moly-popover-placement-bottom,
    &.moly-popover-highlight.moly-popover-placement-bottomLeft,
    &.moly-popover-highlight.moly-popover-placement-bottomRight {
      .moly-popover-arrow {
        border-bottom-color: var(--bds-brand-700-normal);
      }
    }
    &.moly-popover-highlight.moly-popover-placement-left,
    &.moly-popover-highlight.moly-popover-placement-leftTop,
    &.moly-popover-highlight.moly-popover-placement-leftBottom {
      .moly-popover-arrow {
        border-left-color: var(--bds-brand-700-normal);
      }
    }

    // Warning
    &.moly-popover-warning{
      .moly-popover-content{
        .moly-popover-inner{
          background-color: var(--bds-red-700-normal);

          .moly-popover-title {
            color: var(--bds-static-white);
          }

          .moly-popover-inner-content {
            color: var(--bds-static-white);
          }
        }
      }
    }
    &.moly-popover-warning.moly-popover-placement-top,
    &.moly-popover-warning.moly-popover-placement-topLeft,
    &.moly-popover-warning.moly-popover-placement-topRight {
      .moly-popover-arrow {
        border-top-color: var(--bds-red-700-normal);
      }
    }
    &.moly-popover-warning.moly-popover-placement-right,
    &.moly-popover-warning.moly-popover-placement-rightTop,
    &.moly-popover-warning.moly-popover-placement-rightBottom {
      .moly-popover-arrow {
        border-right-color: var(--bds-red-700-normal);
      }
    }
    &.moly-popover-warning.moly-popover-placement-bottom,
    &.moly-popover-warning.moly-popover-placement-bottomLeft,
    &.moly-popover-warning.moly-popover-placement-bottomRight {
      .moly-popover-arrow {
        border-bottom-color: var(--bds-red-700-normal);
      }
    }
    &.moly-popover-warning.moly-popover-placement-left,
    &.moly-popover-warning.moly-popover-placement-leftTop,
    &.moly-popover-warning.moly-popover-placement-leftBottom {
      .moly-popover-arrow {
        border-left-color: var(--bds-red-700-normal);
      }
    }

    &.moly-popover-no-animate {
      .moly-popover-content {
        animation: none;
      }
      .moly-popover-inner {
        animation: none;
      }
      .moly-popover-arrow {
        animation: none;
      }
    }
  }
  `;
};
