import React from 'react';
import { ResultSize, ResultTheme } from './types';

export const clockStyle: React.CSSProperties = {
  transformOrigin: '36px 36px',
  animation: 'rotate 4s linear infinite',
};

export const sizeMapWidth = {
  large: 72,
  medium: 64,
  small: 56,
};

interface ResultClockProps {
  size?: ResultSize;
  theme?: ResultTheme;
}

const ResultClock: React.FC<ResultClockProps> = ({ size = 'large', theme = 'light' }) => {
  const width = sizeMapWidth[size] || 72;
  const fillColor = theme === 'dark' ? '#FFFFFF' : '#121214';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 72 72" fill="none">
      <path
        fill="#C0D2E7"
        fillOpacity={0.12}
        d="M36 9C21.088 9 9 21.088 9 36s12.088 27 27 27 27-12.088 27-27S50.912 9 36 9ZM3 36C3 17.775 17.775 3 36 3s33 14.775 33 33-14.775 33-33 33S3 54.225 3 36Z"
      />
      <circle cx={36} cy={36} r={33} fill="#C0D2E7" fillOpacity={0.12} />
      <path
        d="M36 15C37.6569 15 39 16.2894 39 17.88L39 36.12C39 37.7106 37.6569 39 36 39C34.3431 39 33 37.7106 33 36.12L33 17.88C33 16.2894 34.3431 15 36 15Z"
        fill={fillColor}
      />
      <path
        d="M36 15C37.6569 15 39 16.2894 39 17.88L39 36.12C39 37.7106 37.6569 39 36 39C34.3431 39 33 37.7106 33 36.12L33 17.88C33 16.2894 34.3431 15 36 15Z"
        fill={fillColor}
        style={clockStyle}
      />
    </svg>
  );
};

export default ResultClock;
