import isVisible from 'rc-util/lib/Dom/isVisible';
import { composeRef, supportRef } from 'rc-util/lib/ref';
import React, { useEffect, useRef } from 'react';
import { cn } from '../utils';
import { cloneElement } from './reactNode';
import useWave from './useWave';
import { injectWaveStyles } from './styles';

export interface WaveProps {
  children?: React.ReactNode;
  disabled?: boolean;
  component?: string;
}

const Wave: React.FC<WaveProps> = (props) => {
  const { children, disabled, component } = props;
  const containerRef = useRef<HTMLElement>(null);

  // ============================== Style ===============================
  const prefixCls = 'moly-wave';
  useEffect(() => {
    injectWaveStyles();
  }, []);

  // =============================== Wave ===============================
  const showWave = useWave(containerRef, cn(prefixCls), component);

  // ============================== Effect ==============================
  useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }

    const onClick = (e: MouseEvent) => {
      if (
        !isVisible(e.target as HTMLElement) ||
        !node.getAttribute ||
        node.getAttribute('disabled') ||
        (node as any).disabled ||
        node.className.includes('-leave')
      ) {
        return;
      }
      showWave(e);
    };

    node.addEventListener('click', onClick, true);
    return () => {
      node.removeEventListener('click', onClick, true);
    };
  }, [disabled, showWave]);

  // ============================== Render ==============================
  if (!React.isValidElement(children)) {
    return (children as React.ReactElement) ?? null;
  }

  const ref = supportRef(children) ? composeRef((children as any).ref, containerRef) : containerRef;

  return cloneElement(children, {
    ref,
  }) as React.ReactElement;
};

Wave.displayName = 'Wave';

export default Wave;
export { Wave };
