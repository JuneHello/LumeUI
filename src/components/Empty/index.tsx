'use client';

import { useTheme } from "../../hooks";
import { cn } from "../../lib/utils";
import { injectGlobal, css } from '@emotion/css';
import React from 'react';

const molyText12 = css`
  font-size: var(--bds-font-size-12);
  line-height: var(--bds-line-height-12);
`;
const molyText14 = css`
  font-size: var(--bds-font-size-14);
  line-height: var(--bds-line-height-14);
`;
const molyText16 = css`
  font-size: var(--bds-font-size-16);
  line-height: var(--bds-line-height-16);
`;
const molyText18 = css`
  font-size: var(--bds-font-size-18);
  line-height: var(--bds-line-height-18);
`;
const molyTitle = css`
  color: var(--bds-gray-t1-title);
  max-width: 400px;
  font-weight: 600;
`;
const molySubTitle = css`
  color: var(--bds-gray-t2);
  max-width: 400px;
`;
const molyMargin32 = css`
  margin-top: 32px;
`;
const molyMargin20 = css`
  margin-top: 20px;
`;
const molyMargin16 = css`
  margin-top: 16px;
`;
const molyEmptyBase = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

injectGlobal`
.moly-empty {
  font-family: var(--bds-font-family);
  .moly-empty-title {
    margin-top:16px;
  }
}

.moly-empty-image {
  img {
    height: 100%;
  }
}

.moly-empty-large {
  .moly-btn {
    min-width: 188px;
  }
  .moly-empty-image {
    height: 120px;
  }
  .moly-empty-subtitle{
    margin-top: 8px;
  }
}

.moly-empty-medium {
  .moly-btn {
    min-width: 130px;
  }

  .moly-empty-image {
    height: 120px;
  }

  .moly-empty-subtitle{
    margin-top: 4px;
  }
}

.moly-empty-small {
  .moly-empty-image {
    height: 90px;
  }

  .moly-empty-subtitle{
    margin-top: 0px;
  }
}
`;

const styles = {
  molyText12,
  molyText14,
  molyText16,
  molyText18,
  molyTitle,
  molySubTitle,
  molyMargin32,
  molyMargin20,
  molyMargin16,
  molyEmpty: molyEmptyBase,
};

export type EmptyStatus = 'noData' | 'noSearchResult' | 'databaseError' | 'networkError';

export interface EmptyProps {
  image?: React.ReactNode;
  imageStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  status?: EmptyStatus;
  theme?: 'light' | 'dark';
}

export const Empty: React.FC<EmptyProps> = (props) => {
  const {
    image,
    imageStyle,
    className,
    style,
    children,
    title,
    subTitle,
    extra,
    size = 'large',
    status = 'noData',
    theme,
  } = props;

  const width = size !== 'small' ? 160 : 120;
  const [color] = useTheme();
  const realTheme = (theme || color) as 'light' | 'dark';

  const EMPTY_STYLE = {
    light: {
      noData: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-753b8f8574e14122b16bb109f8cac606.svg"
          alt="noData"
          width={width}
        />
      ),
      noSearchResult: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-6ada0380d35943e0b6ff16e2b73fb41f.svg"
          alt="noSearchResult"
          width={width}
        />
      ),
      databaseError: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-436b6f94d7d54763a29d53bd4d091ab9.svg"
          alt="databaseError"
          width={width}
        />
      ),
      networkError: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-f536ecc64c7e4e84bd5ebed90d00f7c8.svg"
          alt="networkError"
          width={width}
        />
      ),
    },
    dark: {
      noData: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-5aee707461684b3386f5974665bbc449.svg"
          alt="noData"
          width={width}
        />
      ),
      noSearchResult: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-96d75d0c274b419aa999c026a272ca53.svg"
          alt="noSearchResult"
          width={width}
        />
      ),
      databaseError: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-01638283da294c6081d53e8105642e9a.svg"
          alt="databaseError"
          width={width}
        />
      ),
      networkError: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-f91bf0d0b23445ada4bf5d5ac5204d7e.svg"
          alt="networkError"
          width={width}
        />
      ),
    },
    title: {
      large: styles.molyText18,
      medium: styles.molyText16,
      small: styles.molyText14,
    },
    subTitle: {
      large: styles.molyText16,
      medium: styles.molyText14,
      small: styles.molyText12,
    },
    extra: {
      large: styles.molyMargin32,
      medium: styles.molyMargin20,
      small: styles.molyMargin16,
    },
  };

  const ExceptionStatus = Object.keys(EMPTY_STYLE['light']) as EmptyStatus[];
  let imageNode: React.ReactNode = null;
  const des = title || subTitle;
  const alt = typeof des === 'string' ? des : 'empty';

  if (typeof image === 'string') {
    imageNode = <img alt={alt} src={image} />;
  } else if (image) {
    imageNode = image;
  } else if (ExceptionStatus.includes(status)) {
    imageNode = EMPTY_STYLE[realTheme][status];
  } else {
    imageNode = EMPTY_STYLE[realTheme]['noData'];
  }

  return (
    <div
      style={style}
      className={cn(
        className,
        styles.molyEmpty,
        'moly-empty',
        `moly-empty-${size}`,
        `moly-empty-${realTheme}`
      )}
    >
      <div className={cn("moly-empty-image")} style={imageStyle}>
        {imageNode}
      </div>
      {title && (
        <div className={cn("moly-empty-title", styles.molyTitle, EMPTY_STYLE.title[size])}>
          {title}
        </div>
      )}
      {subTitle && (
        <div
          className={cn("moly-empty-subtitle", styles.molySubTitle, EMPTY_STYLE.subTitle[size])}
        >
          {subTitle}
        </div>
      )}
      {extra && <div className={cn('moly-empty-extra', EMPTY_STYLE.extra[size])}>{extra}</div>}
      {children && <div className={cn("moly-empty-content")}>{children}</div>}
    </div>
  );
};

export default Empty;
