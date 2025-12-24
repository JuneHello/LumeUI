import { css, injectGlobal } from '@emotion/css';

export const injectResultStyles = () => {
  injectGlobal`
    @keyframes rotate {
      0% {
          transform: rotate(0deg);
          animation: shake 0.5s ease-in-out infinite alternate;
      }
      100% {
          transform: rotate(360deg);
      }
    }
    .moly-result {
      font-family: var(--bds-font-family);
      .moly-result-title {
        margin-top: 16px;
      }
    }

    .moly-result-image {
      img {
        height: 100%;
      }
    }

    .moly-result-large {
      .moly-btn {
        min-width: 188px;
      }
      .moly-result-image {
        height: 72px;
      }
      .moly-result-subtitle {
        margin-top: 8px;
      }
    }

    .moly-result-medium {
      .moly-btn {
        min-width: 130px;
      }
      .moly-result-image {
        height: 64px;
      }
      .moly-result-subtitle {
        margin-top: 4px;
      }
    }

    .moly-result-small {
      .moly-btn {
        min-width: 130px;
      }
      .moly-result-image {
        height: 56px;
      }
      .moly-result-subtitle {
        margin-top: 0;
      }
    }
  `;
};

export const molyText12 = css`
  font-size: var(--bds-font-size-12);
  line-height: var(--bds-line-height-12);
`;
export const molyText14 = css`
  font-size: var(--bds-font-size-14);
  line-height: var(--bds-line-height-14);
`;
export const molyText16 = css`
  font-size: var(--bds-font-size-16);
  line-height: var(--bds-line-height-16);
`;
export const molyText18 = css`
  font-size: var(--bds-font-size-18);
  line-height: var(--bds-line-height-18);
`;
export const molyTitle = css`
  color: var(--bds-gray-t1-title);
  max-width: 400px;
  font-weight: 600;
`;
export const molySubTitle = css`
  color: var(--bds-gray-t2);
  max-width: 400px;
`;
export const molyMargin32 = css`
  margin-top: 32px;
`;
export const molyMargin20 = css`
  margin-top: 20px;
`;
export const molyMargin16 = css`
  margin-top: 16px;
`;
export const molyResult = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
