import { useEffect, useState } from 'react';

let globalIsRTL = false;
let hasInitialized = false;
const listeners = new Set<() => void>();

const setGlobalIsRTL = (isRTL: boolean) => {
  globalIsRTL = isRTL;
  listeners.forEach((fn) => fn());
};

export const useRTL = (): boolean => {
  const [isRTL, setIsRtl] = useState(globalIsRTL);

  useEffect(() => {
    const listener = () => {
      setIsRtl(globalIsRTL);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    if (!hasInitialized && typeof document !== 'undefined') {
      hasInitialized = true;
      setGlobalIsRTL(document.documentElement.dir === 'rtl');
      
      const observer = new MutationObserver(() => {
        setGlobalIsRTL(document.documentElement.dir === 'rtl');
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir'],
      });
    }
  }, []);

  return isRTL;
};
