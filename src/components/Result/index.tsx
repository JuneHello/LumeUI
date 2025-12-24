import React from 'react';
import { useTheme } from '../../hooks';
import { cn } from '../../lib/utils';
import ResultClock from './ResultClock';
import ResultCountdown from './ResultCountdown';
import { ResultProps, ResultTheme } from './types';
import * as styles from './styles';

styles.injectResultStyles();

const sizeMapWidth = {
  large: 72,
  medium: 64,
  small: 56,
};

const Result: React.FC<ResultProps> = (props) => {
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
    status = 'success',
    theme,
    countdown = 5,
  } = props;

  const [color] = useTheme();
  const realTheme = (theme || color) as ResultTheme;
  const width = sizeMapWidth[size] || 72;

  const RESULT_STYLE = {
    light: {
      success: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-a94c1c9e32e74d0696a47a434310a189.svg"
          alt="success"
          width={width}
        />
      ),
      error: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-84f00a214fb54eacbc2ec92086433b3f.svg"
          alt="error"
          width={width}
        />
      ),
      pending: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-ce5dd07f6a53413f825a09b9a5579d99.svg"
          alt="pending"
          width={width}
        />
      ),
      warning: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-88a487697968406faa1aa1918f1287e8.svg"
          alt="warning"
          width={width}
        />
      ),
      clock: <ResultClock size={size} theme={realTheme} />,
      countdown: <ResultCountdown size={size} theme={realTheme} time={countdown} />,
    },
    dark: {
      success: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-a94c1c9e32e74d0696a47a434310a189.svg"
          alt="success"
          width={width}
        />
      ),
      error: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-84f00a214fb54eacbc2ec92086433b3f.svg"
          alt="error"
          width={width}
        />
      ),
      pending: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-9ab07951251a4721b61bfc2301466ced.svg"
          alt="pending"
          width={width}
        />
      ),
      warning: (
        <img
          src="https://s1.bycsi.com/bybit/deadpool/image-88a487697968406faa1aa1918f1287e8.svg"
          alt="warning"
          width={width}
        />
      ),
      clock: <ResultClock size={size} theme={realTheme} />,
      countdown: <ResultCountdown size={size} theme={realTheme} time={countdown} />,
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

  const ExceptionStatus = Object.keys(RESULT_STYLE['light']);
  let imageNode: React.ReactNode = null;

  const des = title || subTitle;
  const altText = typeof des === 'string' ? des : 'result';

  if (typeof image === 'string') {
    imageNode = <img alt={altText} src={image} />;
  } else if (image) {
    imageNode = image;
  } else if (ExceptionStatus.includes(status)) {
    imageNode = RESULT_STYLE[realTheme][status as keyof typeof RESULT_STYLE['light']];
  } else {
    return null;
  }

  return (
    <div
      style={style}
      className={cn(className, styles.molyResult, `moly-result-${size}`, `moly-result-${realTheme}`, 'moly-result')}
    >
      <div className={cn('moly-result-image')} style={imageStyle}>
        {imageNode}
      </div>
      {title && (
        <div className={cn('moly-result-title', styles.molyTitle, RESULT_STYLE.title[size as import('./types').ResultSize])}>
          {title}
        </div>
      )}
      {subTitle && (
        <div className={cn('moly-result-subtitle', styles.molySubTitle, RESULT_STYLE.subTitle[size as import('./types').ResultSize])}>
          {subTitle}
        </div>
      )}
      {extra && <div className={cn('moly-result-extra', RESULT_STYLE.extra[size as import('./types').ResultSize])}>{extra}</div>}
      {children && <div className={cn('moly-result-content')}>{children}</div>}
    </div>
  );
};

export default Result;
