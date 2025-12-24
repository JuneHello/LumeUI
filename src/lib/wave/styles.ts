import { injectGlobal } from '@emotion/css';

export const componentCls = 'moly-wave-motion';
const motionEaseOutCirc = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
const motionEaseInOut = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

export const injectWaveStyles = () => {
  return injectGlobal`
  .${componentCls} {
    position: absolute;
    background: transparent;
    pointer-events: none;
    box-sizing: border-box;
    color: var(--wave-color);

    box-shadow: 0 0 0 0 currentColor;
    opacity: 1;

    &-appear {
      transition: box-shadow 0.4s ${motionEaseOutCirc}, opacity 2s ${motionEaseOutCirc};

      &-active {
        box-shadow: 0 0 0 6px currentcolor;
        opacity: 0;
      }

      &.wave-quick {
        transition: box-shadow 0.3s ${motionEaseInOut}, opacity 0.35s ${motionEaseInOut};
      }
    }
  }
`;
};
