import CSSMotion from 'rc-motion';
import { render, unmount } from 'rc-util/lib/React/render';
import raf from 'rc-util/lib/raf';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils';
import { componentCls } from './styles';
import { TARGET_CLS } from './type';
import { validateNum } from './utils';

export interface WaveEffectProps {
  className: string;
  target: HTMLElement;
  component?: string;
}

const WaveEffect: React.FC<WaveEffectProps> = (props) => {
  const { className, target, component } = props;
  const divRef = useRef<HTMLDivElement>(null);

  const [borderRadius, setBorderRadius] = useState<number[]>([]);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [enabled, setEnabled] = useState(false);

  const waveStyle: React.CSSProperties & { [key: string]: string | number } = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(' '),
  };

  if (target.classList.contains('ring-btn-green')) {
    waveStyle['--wave-color'] = 'var(--bds-green-100-bg)';
  } else if (target.classList.contains('ring-btn-red')) {
    waveStyle['--wave-color'] = 'var(--bds-red-100-bg)';
  } else {
    waveStyle['--wave-color'] = 'var(--bds-brand-100-bg)';
  }

  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    const isStatic = nodeStyle.position === 'static';

    const { borderLeftWidth, borderTopWidth } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);

    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
    } = nodeStyle;
    setBorderRadius(
      [
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
      ].map((radius) => validateNum(parseFloat(radius))),
    );
  }

  useEffect(() => {
    if (target) {
      const id = raf(() => {
        syncPos();
        setEnabled(true);
      });

      let resizeObserver: ResizeObserver | undefined;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }

      return () => {
        raf.cancel(id);
        resizeObserver?.disconnect();
      };
    }
  }, []);

  if (!enabled) {
    return null;
  }

  const isSmallComponent =
    (component === 'Checkbox' || component === 'Radio') && target?.classList.contains(TARGET_CLS);

  return (
    <CSSMotion
      visible
      motionAppear
      motionName={componentCls}
      motionDeadline={500}
      onAppearEnd={(_, event) => {
        if (event && ('deadline' in event || (event as any).propertyName === 'opacity')) {
          const holder = divRef.current?.parentElement;
          if (holder) {
            unmount(holder).then(() => {
              holder?.remove();
            });
          }
        }
        return false;
      }}
    >
      {({ className: motionClassName }) => (
        <div
          ref={divRef}
          className={cn(
            className,
            {
              'wave-quick': isSmallComponent,
            },
            motionClassName,
          )}
          style={waveStyle}
        />
      )}
    </CSSMotion>
  );
};

const showWaveEffect = (target: HTMLElement, info: Omit<WaveEffectProps, 'target'>) => {
  const { component } = info;

  if (component === 'Checkbox' && !target.querySelector('input')?.checked) {
    return;
  }

  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = '0px';
  holder.style.top = '0px';
  target?.insertBefore(holder, target?.firstChild);

  render(<WaveEffect {...info} target={target} />, holder);
};

export default showWaveEffect;
