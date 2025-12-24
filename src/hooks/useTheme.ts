import { useEffect, useState } from 'react';

export const getThemeValue = (definedTheme?: string): string => {
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    if (root.classList.contains('moly-theme-dark')) {
      return 'dark';
    }
    return definedTheme || 'light';
  }
  return 'light';
};

export const useTheme = (): [string] => {
  const [theme, setTheme] = useState(getThemeValue());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver(() => {
      setTheme(getThemeValue());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return [theme];
};
