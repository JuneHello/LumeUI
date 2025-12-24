import { injectGlobal } from '@emotion/css';

export const injectRateStyles = () => {
  return injectGlobal`
.moly-rate-rtl.moly-rate {
  direction: rtl;
}
.moly-rate {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--bds-brand-700-normal);
  font-size: 20px;
  line-height: 1;
  list-style: none;
  display: inline-block;
  outline: none;

  >div:not(:last-child) {
    margin-inline-end: 24px;
  }

  &-disabled.moly-rate .moly-rate-star {
    cursor: default;

    >div:hover {
      transform: scale(1);
    }
  }

  &-star {
    font-size: 32px;
    position: relative;
    display: inline-block;
    color: inherit;
    cursor: pointer;

    &:not(:last-child) {
      margin-inline-end: 24px;
    }

    >div {
      max-height: 32px;
      transition: all .2s, outline 0s;

      &:hover {
        transform: scale(1.125)
      }

      &:focus {
        outline: 0;
      }
    }

    // 默认starbg
    &-first,
    &-second {
      color: #E9EDF2;
      transition: all .2s;
      user-select: none
    }

    &-first {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
      opacity: 0;
    }

    &-half .moly-rate-star-first,
    &-half .moly-rate-star-second {
      opacity: 1;
    }

    &-half .moly-rate-star-first,
    &-full .moly-rate-star-second {
      color: inherit;
    }
  }
}

.moly-rate-small {
  >div:not(:last-child) {
    margin-inline-end: 16px;
  }

  .moly-rate-star {
    font-size: 20px;

    &:not(:last-child) {
      margin-inline-end: 16px;
    }

    >div {
      max-height: 24px;

      &:hover {
        transform: scale(1.1458)
      }
    }
  }
}

.moly-rate-dark {

  .moly-rate-star-first,
  .moly-rate-star-second {
    color: #404347;
  }

  .moly-rate-star-half .moly-rate-star-first,
  .moly-rate-star-full .moly-rate-star-second {
    color: inherit;
  }
}
`;
};
