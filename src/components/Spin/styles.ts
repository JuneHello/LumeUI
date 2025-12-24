import { css, keyframes } from '@emotion/css';

const createIframe = (translate: string, up: string, down: string) => keyframes`
  0%, 100% {
    transform: translate(${translate}, ${up});
  }
  50% {
    transform: translate(${translate}, ${down});
  }
`;

export const molySpinKeyframes = {
  'moly-spin': createIframe('0', '-25%', '25%'),
  'moly-spin-1': createIframe('19%', '-25%', '25%'),
  'moly-spin-2': createIframe('45%', '-25%', '25%'),
  'moly-spin-3': createIframe('70%', '-50%', '0%'),
  'moly-spin-4': createIframe('80%', '-25%', '25%'),
};

export const molySpinAnimate = css`
  animation: bybit 1s linear infinite;
`;

export const molySpinTextColor = css`
  color: var(--bds-gray-t1-title);
`;
