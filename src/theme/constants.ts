export const NumberTokens = {
  XXS: 2,
  XS: 4,
  S: 8,
  M: 12,
  L: 16,
  XL: 24,
  XXL: 32,
  XXXL: 40,
  XXXXL: 48,
} as const;

export type NumberTokenKey = keyof typeof NumberTokens;
