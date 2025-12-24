import { css } from '@emotion/css';
import { cva } from 'class-variance-authority';

export const borderGradient = css`
  background-clip: padding-box, border-box;
  border: 1px solid transparent;
`;

export const nonVipBorder = css`
  border: 1px solid #adb1b8;
`;

export const nonVipFont = css`
  background-image: linear-gradient(var(--bds-non-vip), var(--bds-non-vip));
`;

export const vip1Border = css`
  border: 1px solid #d27e82;
`;

export const vip1Font = css`
  background-image: var(--bds-vip1-text);
`;

export const vip2Border = css`
  border: 1px solid #8fb6dd;
`;

export const vip2Font = css`
  background-image: var(--bds-vip2-text);
`;

export const vip3Border = css`
  border: 1px solid #2cd185;
`;

export const vip3Font = css`
  background-image: var(--bds-vip3-text);
`;

export const vip4Border = css`
  border: 1px solid #d88b5a;
`;

export const vip4Font = css`
  background-image: var(--bds-vip4-text);
`;

export const vip5Border = css`
  border: 1px solid #dfac61;
`;

export const vip5Font = css`
  background-image: var(--bds-vip5-text);
`;

export const vipSupremeBorder = css`
  border: 1px solid #b3b3b3;
`;

export const vipSupremeFont = css`
  background-image: var(--bds-vip-supreme-text);
`;

export const vipDefaultBorder = css`
  border: 1px solid #f2973c;
`;

export const vipDefaultFont = css`
  background-image: var(--bds-vip-default-gold-tag);
`;

export const fontGradient = css`
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
`;

export const vipBlack = css`
  background: #1e2023;
  & > span {
    background-clip: text !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-image: var(--bds-vip-default-gold);
  }
`;

export const prefixCls = css`
  background: #1e2023;
  padding: 0 4px;

  & > span {
    background-image: var(--bds-vip-default-gold-tag);
  }
`;

export const tagVariants = cva(
  [
    'whitespace-nowrap font-medium',
    'inline-flex items-center gap-1',
    'ps-2 pe-2',
    'rounded',
    'data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        small: ['text-xs leading-[16.8px] h-[16.8px] scale-[0.83333] ps-[4px] pe-[4px]'],
        normal: ['text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px]'],
        large: ['text-sm leading-[24px] h-[24px] ps-[6px] pe-[6px]'],
        xlarge: ['text-base leading-[32px] h-[32px] ps-[8px] pe-[8px]'],
      },
      variant: {
        default: [],
        primary: ['text-white'],
        light: [],
        'vip-fill': ['text-bds-static-black font-regular'],
        'vip-stroke': ['font-regular', fontGradient],
        'vip-only': ['font-regular'],
        'vip-benefits': ['font-regular ps-0 overflow-hidden'],
      },
      color: {
        neutral: [],
        red: [],
        green: [],
        brand: [],
        'reddish-gradient': [],
        'brand-gradient': [],
        'non-vip': [],
        vip1: [],
        vip2: [],
        vip3: [],
        vip4: [],
        vip5: [],
        'vip-supreme': [],
        'vip-default': [],
        'vip-black': [vipBlack],
        'vip-gold': ['text-bds-static-black bg-bds-vip-default-gold-tag'],
      },
      shape: {
        normal: [],
        leaf: ['rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none'],
        'invert-leaf': ['rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none'],
        corner: ['rounded-tr-none rounded-bl-none rounded-tl-none rounded-br-lg'],
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        color: 'neutral',
        className: ['bg-base-bds-gray-ele-line text-base-bds-gray-t2'],
      },
      {
        variant: 'default',
        color: 'red',
        className: ['bg-redColor-bds-red-100-bg text-redColor-bds-red-700-normal'],
      },
      {
        variant: 'default',
        color: 'green',
        className: ['bg-greenColor-bds-green-100-bg text-greenColor-bds-green-700-normal'],
      },
      {
        variant: 'default',
        color: 'brand',
        className: ['bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text'],
      },
      {
        variant: 'primary',
        color: 'neutral',
        className: ['bg-base-bds-gray-t2 '],
      },
      {
        variant: 'primary',
        color: 'red',
        className: ['bg-redColor-bds-red-700-normal'],
      },
      {
        variant: 'primary',
        color: 'green',
        className: ['bg-greenColor-bds-green-700-normal'],
      },
      {
        variant: 'primary',
        color: 'brand',
        className: ['bg-brandColor-bds-brand-700-normal'],
      },
      {
        variant: 'primary',
        color: 'reddish-gradient',
        className: ['bg-bds-gradient-reddish'],
      },
      {
        variant: 'primary',
        color: 'brand-gradient',
        className: ['bg-bds-gradient-brand text-base-bds-gray-t1-title'],
      },
      {
        variant: 'light',
        color: 'neutral',
        className: [
          'border border-solid border-base-bds-gray-t4-dis',
          'text-base-bds-gray-t2',
          'data-[disabled]:bg-transparent data-[disabled]:border-base-bds-gray-ele-border',
        ],
      },
      {
        variant: 'vip-fill',
        color: 'non-vip',
        className: ['bg-bds-non-vip'],
      },
      {
        variant: 'vip-fill',
        color: 'vip1',
        className: ['bg-bds-vip1-text'],
      },
      {
        variant: 'vip-fill',
        color: 'vip2',
        className: ['bg-bds-vip2-text'],
      },
      {
        variant: 'vip-fill',
        color: 'vip3',
        className: ['bg-bds-vip3-text'],
      },
      {
        variant: 'vip-fill',
        color: 'vip4',
        className: ['bg-bds-vip4-text'],
      },
      {
        variant: 'vip-fill',
        color: 'vip5',
        className: ['bg-bds-vip5-text'],
      },
      {
        variant: 'vip-fill',
        color: 'vip-supreme',
        className: ['bg-bds-vip-supreme-text'],
      },
      {
        variant: 'vip-fill',
        color: 'vip-default',
        className: ['bg-bds-vip-default-gold-tag'],
      },
      {
        variant: 'vip-stroke',
        color: 'non-vip',
        className: [nonVipBorder, nonVipFont],
      },
      {
        variant: 'vip-stroke',
        color: 'vip1',
        className: [vip1Border, vip1Font],
      },
      {
        variant: 'vip-stroke',
        color: 'vip2',
        className: [vip2Border, vip2Font],
      },
      {
        variant: 'vip-stroke',
        color: 'vip3',
        className: [vip3Border, vip3Font],
      },
      {
        variant: 'vip-stroke',
        color: 'vip4',
        className: [vip4Border, vip4Font],
      },
      {
        variant: 'vip-stroke',
        color: 'vip5',
        className: [vip5Border, vip5Font],
      },
      {
        variant: 'vip-stroke',
        color: 'vip-supreme',
        className: [vipSupremeBorder, vipSupremeFont],
      },
      {
        variant: 'vip-stroke',
        color: 'vip-default',
        className: [vipDefaultBorder, vipDefaultFont],
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'normal',
      color: 'neutral',
      shape: 'normal',
    },
  }
);
