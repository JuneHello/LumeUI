import { clsx, type ClassValue } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isHexColor(color?: string): boolean {
  if (!color) return false;
  return /^#[0-9A-F]{6}$/i.test(color);
}

export function opacityColorByPercent(color: string, percent: number): string {
  if (!isHexColor(color)) return color;
  const opacity = Math.round(percent * 255);
  return `${color}${opacity.toString(16).padStart(2, '0').toUpperCase()}`;
}

export function getValues<T>(vals: (T | undefined | null)[], defaultVal: T): T {
  const index = vals.findIndex((v) => v !== undefined && v !== null);
  if (index === -1) return defaultVal;
  return vals[index] as T;
}

declare global {
  interface Window {
    __moly__?: {
      dt: string;
    };
  }
}

export function logVersion() {
  if (typeof window !== 'undefined') {
    window.__moly__ = {
      dt: dayjs().format(),
    };
  }
}
