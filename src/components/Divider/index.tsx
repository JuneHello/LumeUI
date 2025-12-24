import { cn } from "../../lib/utils";
import React from 'react';
import { css } from '@emotion/css';

const lights = css`
  --line-color: var(--bds-gray-ele-borde, #e9edf2);
  --color: var(--bds-gray-t3, #71757a);
`;

const darks = css`
  --line-color: var(--bds-gray-ele-border, #404347);
  --color: var(--bds-gray-t3, #71757a);
`;

const dividerBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  font-family: var(--bds-font-family);
  color: var(--color);

  &::before {
    content: '';
    flex: 1;
    min-width: 10px;
    border-bottom: 1px var(--border-style) var(--line-color);
  }
  &::after {
    content: '';
    flex: 1;
    min-width: 10px;
    border-bottom: 1px var(--border-style) var(--line-color);
  }
`;

const horizontal = css`
  flex-direction: row;
`;

const vertical = css`
  flex-direction: column;

  &::before,
  &::after {
    border-bottom: none;
    border-left: 1px var(--border-style) var(--line-color);
  }
`;

const dashed = css`
  --border-style: dashed;
`;

const solid = css`
  --border-style: solid;
`;

const dividerContent = css`
  white-space: nowrap;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const start = css`
  justify-content: flex-start;
  &:before {
    flex: 0;
  }
`;

const end = css`
  justify-content: flex-end;
  &:after {
    flex: 0;
  }
`;

const center = css`
  justify-content: center;
`;

const styles: Record<string, string> = {
  divider: dividerBase,
  horizontal,
  vertical,
  dashed,
  solid,
  dividerContent,
  start,
  end,
  center,
  lightTheme: lights,
  darkTheme: darks,
};

export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: 'horizontal' | 'vertical';
  orientation?: 'start' | 'center' | 'end';
  line?: 'solid' | 'dashed';
  theme?: 'light' | 'dark';
}

export const Divider: React.FC<DividerProps> = ({
  className,
  style,
  children,
  type = 'horizontal',
  orientation = 'center',
  line = 'solid',
  theme,
}) => {
  return (
    <div
      style={style}
      className={cn(
        className,
        styles.divider,
        styles[type],
        styles[line],
        styles[orientation],
        theme === 'dark' ? styles.darkTheme : styles.lightTheme
      )}
    >
      {children ? <span className={styles.dividerContent}>{children}</span> : null}
    </div>
  );
};

export default Divider;
