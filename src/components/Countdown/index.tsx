'use client';

import dayjs from 'dayjs';
import { useEffect, useMemo, useRef, useState, memo } from 'react';
import { cn } from "../../lib/utils";
import { injectGlobal } from '@emotion/css';

const isBrowser = typeof window !== 'undefined';

// --- Styles ---
export const injectCountdownStyles = () => {
  return injectGlobal`
  .moly-countdown {
    display: inline-flex;
    align-items: center;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &.full {
        flex-direction: column;
      }

      .group {
        display: flex;
        flex-direction: row;

        .num {
          margin-left: 2px;
        }
      }

      &:first-of-type {
        margin-left: 0 !important;
      }

      .num {
        text-align: center;
        font-family: var(--bds-font-family);
        font-weight: 600;
        background-size: contain;
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        overflow: hidden;

        &:first-of-type {
          margin-left: 0 !important;
        }

        .inner {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 4px 4px 0 0;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
      }

      .desc {
        font-family: var(--bds-font-family);
        font-style: normal;
        font-weight: 500;
        color: #81858c;
      }
    }

    &.strong {
      .num {
        border: 1px solid #595d61;
        color: #F9FAFB;
        background: url('https://fh-static.bycsi.com/dark-dash-8c6da6523852ec4100a6eceae36d2ffc.svg')
          center no-repeat;
        background-color: #121214;

        &::after {
          content: '';
          background-color: transparent;
        }
      }

      .desc {
        color: #121214;
      }
    }

    .num {
      border: 1px solid rgba(56, 68, 82, 0.06);
      color: #121214;
      background: url('https://fh-static.bycsi.com/light-dash-ffacc8945fd5a333a45bca6062a711af.svg')
        center no-repeat;
      background-color: #f3f5f7;

      &::after {
        content: '';
        background-color: white;
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
        bottom: 0;
        z-index: 1;
      }
    }

    &.xsmall {
      .item {
        margin-left: 8px;
      }

      .num {
        font-size: 14px;
        line-height: 20px;
        min-width: 24px;
        height: 20px;
        border-radius: 2px;
        margin-left: 8px;
        background-image: unset;
        border-width: 0;

        &::before {
          border-radius: 4px 4px 0 0;
        }

        &::after {
          background-color: transparent;
        }

        &.three {
          min-width: 32px;
        }
      }

      .full {
        .num {
          width: 16px;
          min-width: 16px;
          margin-left: 2px;
        }

        .desc {
          font-size: 10px;
          line-height: 14px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 14px;
        line-height: 22px;
        margin-left: 2px;
      }
    }

    &.small {
      .item {
        margin-left: 8px;
      }

      .num {
        font-size: 16px;
        line-height: 24px;
        min-width: 32px;
        height: 24px;
        border-radius: 4px;
        margin-left: 8px;
        background-image: unset;
        border-width: 0;

        &::before {
          border-radius: 4px 4px 0 0;
        }

        &::after {
          background-color: transparent;
        }

        &.three {
          min-width: 40px;
        }
      }

      .full {
        .num {
          width: 18px;
          min-width: 18px;
          margin-left: 2px;
        }

        .desc {
          font-size: 10px;
          line-height: 14px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 14px;
        line-height: 22px;
        margin-left: 4px;
      }
    }

    &.middle {
      .item {
        margin-left: 12px;
      }

      .num {
        font-size: 24px;
        line-height: 32px;
        min-width: 48px;
        height: 32px;
        border-radius: 4px;
        margin-left: 12px;
        background-image: unset;
        border-width: 0;

        &::before {
          border-radius: 4px 4px 0 0;
        }

        &::after {
          background-color: transparent;
        }

        &.three {
          min-width: 64px;
        }
      }

      .full {
        .num {
          width: 26px;
          min-width: 26px;
          margin-left: 4px;
        }

        .desc {
          font-size: 12px;
          line-height: 18px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 18px;
        line-height: 26px;
        margin-left: 6px;
      }
    }

    &.large {
      .item {
        margin-left: 12px;
      }

      .num {
        font-size: 32px;
        line-height: 48px;
        min-width: 64px;
        height: 48px;
        border-radius: 6px;
        margin-left: 12px;

        &::before {
          border-radius: 6px 6px 0 0;
        }

        &.three {
          min-width: 80px;
        }
      }

      .full {
        .num {
          width: 36px;
          min-width: 36px;
          margin-left: 6px;
        }

        .desc {
          font-size: 14px;
          line-height: 22px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 24px;
        line-height: 32px;
        margin-left: 6px;
      }
    }

    &.xlarge {
      .item {
        margin-left: 20px;
      }

      .num {
        font-size: 48px;
        line-height: 64px;
        min-width: 88px;
        height: 64px;
        border-radius: 8px;
        margin-left: 20px;

        &::before {
          border-radius: 8px 8px 0 0;
        }

        &.three {
          min-width: 120px;
        }
      }

      .full {
        .num {
          width: 48px;
          min-width: 48px;
          margin-left: 8px;
        }

        .desc {
          font-size: 16px;
          line-height: 24px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 32px;
        line-height: 40px;
        margin-left: 8px;
        font-weight: 700;
      }
    }
  }

  html.moly-theme-dark,
  .moly-theme-component-dark {
    .moly-countdown {
      .num {
        border: 1px solid #595d61;
        color: white;
        background: url('https://fh-static.bycsi.com/dark-dash-8c6da6523852ec4100a6eceae36d2ffc.svg')
          center no-repeat;
        background-color: rgba(192, 210, 231, 0.12);


        &::after {
          content: '';
          background-color: #16171A;
        }
      }

      .full {
        .desc {
          color: #ADB1B8;
        }
      }

      &.strong {
        .num {
          border: 1px solid rgba(56, 68, 82, 0.06);
          color: #1E2023;
          background: url('https://fh-static.bycsi.com/light-dash-ffacc8945fd5a333a45bca6062a711af.svg')
            center no-repeat;
          background-color: #f3f5f7;

          &::after {
            content: '';
            background-color: white;
            position: absolute;
            width: 100%;
            height: 50%;
            left: 0;
            bottom: 0;
            z-index: 1;
          }
        }

        .desc {
          color: white;
        }

        .full {
          .desc {
            color: #ADB1B8;
          }
        }
      }
    }
  }
`;
};

// --- Hook ---
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

const calcLeft = (target: dayjs.ConfigType) => {
  if (!target) {
    return 0;
  }
  const left = dayjs(target).valueOf() - Date.now();
  return left < 0 ? 0 : left;
};

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

export interface Options {
  leftTime?: number;
  targetDate?: dayjs.ConfigType;
  interval?: number;
  onEnd?: () => void;
}

export const useCountdown = (options: Options = {}) => {
  const { leftTime, targetDate, interval = 1000, onEnd } = options;

  const target = useMemo(() => {
    if ('leftTime' in options) {
      return isNumber(leftTime) && leftTime > 0 ? Date.now() + leftTime : undefined;
    } else {
      return targetDate;
    }
  }, [leftTime, targetDate]);

  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));
  const onEndRef = useLatest(onEnd);

  useEffect(() => {
    if (!target) {
      setTimeLeft(0);
      return;
    }

    setTimeLeft(calcLeft(target));
    const timer = setInterval(() => {
      const targetLeft = calcLeft(target);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);
  return [timeLeft, formattedRes] as const;
};

// --- Component ---
export type TimeUnit = 'day' | 'hour' | 'minute' | 'second';

export interface DisplayConfig {
  day?: boolean;
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
}

export interface CountdownProps {
  targetTimestamp: number;
  className?: string;
  mode?: 'full' | 'easy';
  size?: 'default' | 'xsmall' | 'small' | 'middle' | 'large' | 'xlarge';
  display?: DisplayConfig;
  strong?: boolean;
  onEnd?: () => void;
  onChange?: (diffTs: number, ts: number) => void;
}

const defaultDisplayConfig: DisplayConfig = {
  day: true,
  hour: true,
  minute: true,
  second: true,
};

const formatNum = (num: number) => (num < 10 ? `0${num}` : `${num}`);

export const timeUnitMap: Record<TimeUnit, string> = {
  day: 'D',
  hour: 'H',
  minute: 'M',
  second: 'S',
};

export const fulltimeUnitMap: Record<TimeUnit, string> = {
  day: 'DAY',
  hour: 'HOUR',
  minute: 'MINUTE',
  second: 'SECOND',
};

const CountdownItem = ({ num, mode, unit }: { num: number; mode: 'full' | 'easy'; unit: TimeUnit }) => {
  const isEasyMode = mode === 'easy';
  const numStr = formatNum(num);

  if (isEasyMode) {
    return (
      <div className="item">
        <div className={cn('num', { three: numStr.length >= 3 })}>
          <span className="inner">{numStr}</span>
        </div>
        <span className="desc">{timeUnitMap[unit]}</span>
      </div>
    );
  }

  const nums = numStr.split('');
  return (
    <div className={cn('item', 'full')}>
      <div className="group">
        {nums.map((n, idx) => (
          <span className="num" key={idx}>
            <span className="inner">{n}</span>
          </span>
        ))}
      </div>
      <span className="desc">{fulltimeUnitMap[unit]}</span>
    </div>
  );
};

injectCountdownStyles();

const CountdownComponent: React.FC<CountdownProps> = ({
  targetTimestamp,
  className,
  strong,
  size,
  onEnd,
  onChange,
  display = defaultDisplayConfig,
  mode = 'easy',
}) => {
  const [, { days, hours, minutes, seconds }] = useCountdown({
    targetDate: targetTimestamp,
    onEnd,
  });

  useEffect(() => {
    if (onChange) {
      onChange(targetTimestamp - Date.now(), Date.now());
    }
  }, [seconds, targetTimestamp, onChange]);

  if (!isBrowser) {
    return <div className={cn('moly-countdown', className)} />;
  }

  return (
    <div
      className={cn('moly-countdown', `${size || 'middle'}`, className, {
        strong: strong,
      })}
    >
      {display.day && <CountdownItem num={days} mode={mode} unit="day" />}
      {display.hour && <CountdownItem num={hours} mode={mode} unit="hour" />}
      {display.minute && <CountdownItem num={minutes} mode={mode} unit="minute" />}
      {display.second && <CountdownItem num={seconds} mode={mode} unit="second" />}
    </div>
  );
};

export const Countdown = memo(CountdownComponent);
export default Countdown;
