import { useEvent } from 'rc-util';
import raf from 'rc-util/lib/raf';
import * as React from 'react';
import showWaveEffect from './WaveEffect';
import { TARGET_CLS } from './type';

export default function useWave(
  nodeRef: React.RefObject<HTMLElement>,
  className: string,
  component?: string,
) {
  const showWave = useEvent((event: React.MouseEvent | MouseEvent) => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    const targetNode = (node.querySelector(`.${TARGET_CLS}`) as HTMLElement) || node;

    showWaveEffect(targetNode, {
      className,
      component,
      // @ts-ignore
      event,
    });
  });

  const rafId = React.useRef<number>();

  const showDebounceWave = (event: React.MouseEvent | MouseEvent) => {
    raf.cancel(rafId.current!);
    rafId.current = raf(() => {
      showWave(event);
    });
  };

  return showDebounceWave;
}
