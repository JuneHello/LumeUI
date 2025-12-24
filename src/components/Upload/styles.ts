import { injectGlobal } from '@emotion/css';

export const injectUploadStyles = () =>
  injectGlobal`
  .moly-upload {
    display: flex;
    gap: 8px;
  }

  .moly-upload-item {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: var(--bds-gray-bg-page);
    border-radius: 4px;
  }

  .moly-upload-btn-disabled {
    cursor: not-allowed !important;
  }

  .moly-upload-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--bds-gray-t3);
  }

  .moly-upload-btn-hide {
    display: none;
  }

  .moly-upload-btn-text {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
  }

  .moly-upload-plus-icon {
    width: 24px;
    height: 24px;
  }

  .moly-upload-remove-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 0 0 0 4px;
    background-color: var(--bds-gray-bg-page);
    cursor: pointer;
  }

  .moly-upload-close-icon {
    width: 12px;
    height: 12px;
    color: var(--bds-gray-t3);
  }

  .moly-upload-img,
  .moly-upload-file {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 6px;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: var(--bds-gray-t1-title);
  }

  .moly-upload-img img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;
  }

  .moly-upload-percent {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .moly-upload-percent span {
    width: 0;
    height: 4px;
    border-radius: 2px;
    background-color: var(--bds-brand-700-normal);
  }
`;
