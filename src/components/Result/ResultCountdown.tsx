import React, { useEffect, useRef, useState } from 'react';
import { injectGlobal } from '@emotion/css';
import { ResultSize, ResultTheme } from './types';
import { sizeMapWidth } from './ResultClock';

injectGlobal`
  .moly-progress-circle {
    --percent: 0;
    --size: 66px;
    --border-width: 6px;
    --color: #F7A600;
    --inactive-color: rgba(247, 166, 0, 0.16);
    position: relative;
    border-radius: 50%;
  }
  .moly-progress-circle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
  }
  .moly-progress-circle > svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .moly-progress-circle circle:last-child {
    --r: calc((var(--size) - var(--border-width)) / 2);
    r: var(--r);
    fill: none;
    stroke-width: var(--border-width);
    stroke-linecap: round;
    transition: stroke-dasharray .4s linear, stroke .3s;
  }
  .moly-progress-value {
    opacity: var(--percent);
  }
`;

interface ResultCountdownProps {
  size?: ResultSize;
  theme?: ResultTheme;
  time?: number;
}

const ResultCountdown: React.FC<ResultCountdownProps> = ({ size = 'large', theme = 'light', time = 5 }) => {
  const [countdown, setCountdown] = useState(time);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  const step = useCallback(() => {
    const stepNumber = 100 / time;
    setCountdown((prev) => {
      const next = prev - 1;
      percentRef.current += stepNumber;
      if (progressRef.current) {
        progressRef.current.style.setProperty('--percent', percentRef.current.toString());
      }
      if (percentRef.current < 100) {
        timerRef.current = window.setTimeout(step, 1000);
      }
      return next;
    });
  }, [time]);

  useEffect(() => {
    timerRef.current = window.setTimeout(step, 1000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [step]);

  const width = sizeMapWidth[size] || 72;

  return (
    <div
      className="moly-progress-circle"
      ref={progressRef}
      style={{ width, height: width }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={width} fill="none" viewBox="0 0 72 72">
        <path
          fill="#F7A600"
          fillOpacity={0.16}
          d="M36 9C21.088 9 9 21.088 9 36s12.088 27 27 27 27-12.088 27-27S50.912 9 36 9ZM3 36C3 17.775 17.775 3 36 3s33 14.775 33 33-14.775 33-33 33S3 54.225 3 36Z"
        />
        <circle cx={36} cy={36} r={33} fill="#F7A600" fillOpacity={0.16} />
        <circle
          stroke="var(--color)"
          cx={36}
          cy={36}
          r={33}
          className="moly-progress-value"
          style={{
            strokeDasharray: `calc(2 * 3.1415 * 33 * (var(--percent) / 100)), 1000`,
          }}
        />
      </svg>
      <div
        className="moly-progress-circle-text"
        style={{ color: theme === 'dark' ? '#fff' : '#121214' }}
      >
        {countdown}
      </div>
    </div>
  );
};

export default ResultCountdown;

import { useCallback } from 'react';
