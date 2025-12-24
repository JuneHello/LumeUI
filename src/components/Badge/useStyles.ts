import { css } from '@emotion/css';

const badgeToken = {
  badgeHeight: 'var(--bds-badge-height)',
  badgeHeightSmall: 'var(--bds-badge-height-small)',
  badgeDotSize: 'var(--bds-badge-dot-size)',
  badgeDotSizeSmall: 'var(--bds-badge-dot-size-small)',
  badgePaddingHorizontal: 'var(--bds-badge-padding-horizontal)',
  badgePaddingHorizontalSmall: 'var(--bds-badge-padding-horizontal-small)',
  badgeBgColor: 'var(--bds-badge-bg-color)',
  badgeSupColor: 'var(--bds-badge-sup-text-color)',
  badgeFontWeight: 'var(--bds-font-weight-medium)',
  badgeFontSize: 'var(--bds-badge-font-size)',
  badgeFontSizeSmall: 'var(--bds-badge-font-size-small)',
  badgeTypeSecondaryColor: 'var(--bds-badge-type-secondary-text-color)',
  badgeTypeSecondaryBgColor: 'var(--bds-badge-type-secondary-bg-color)',
  badgeSupTypeSecondaryColor: 'var(--bds-badge-sup-type-secondary-text-color)',
  badgeFontFamily: 'var(--bds-font-family)',
};

export interface UseStylesProps {
  inlineFlex?: boolean;
  size?: 'normal' | 'small';
  isLongerThan2?: boolean;
  hasChild?: boolean;
  isHidden?: boolean;
  countIsCustom?: boolean;
}

export const useStyles = (prefixCls: string, props: UseStylesProps) => {
  const token = badgeToken;

  const badgeCountBase = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: ${props.hasChild ? 'absolute' : 'unset'};
    top: 0;
    right: 0;
    transform: ${props.hasChild ? 'translate(50%, -50%)' : 'none'};
    transform-origin: 0 100%;
    transition: color;
    background: ${token.badgeBgColor};
    border-radius: calc(${token.badgeHeight} / 2);
    color: #fff;
    font-weight: ${token.badgeFontWeight};
    text-align: center;
    white-space: nowrap;

    [direction='rtl'] &,
    [dir='rtl'] &,
    [data-direction='rtl'] & {
      right: unset;
      left: 0;
      transform: ${props.hasChild ? 'translate(-50%, -50%)' : 'none'};
      transform-origin: 0;
    }
  `;

  const badgeCount = css`
    ${badgeCountBase}
  `;

  const styles = css`
    &.${prefixCls} {
      position: ${props.hasChild ? 'relative' : 'unset'};
      display: ${props.inlineFlex ? 'inline-flex' : 'inline-block'};
      ${props.inlineFlex ? 'align-items: center;' : ''}
      line-height: inherit;
      font-family: ${token.badgeFontFamily};
      font-size: ${token.badgeFontSize};

      .${prefixCls}-size-small {
        font-size: ${token.badgeFontSizeSmall};
      }

      .${prefixCls}-dot {
        ${badgeCount};
        width: ${token.badgeDotSize};
        height: ${token.badgeDotSize};
        border-radius: 100%;
        &.${prefixCls}-size-small {
          width: ${token.badgeDotSizeSmall};
          height: ${token.badgeDotSizeSmall};
        }
      }

      .${prefixCls}-sup {
        position: relative;
        top: -0.3em;
        left: -0.35em;
        display: inline-block;
        line-height: 0;
        font-size: 20px;
        font-weight: 600;
        transform: scale(0.5);
        vertical-align: baseline;
        color: ${token.badgeSupColor};
        &.${prefixCls}-size-small {
          top: -0.35em;
          font-size: 16px;
        }
        [direction='rtl'] &,
        [dir='rtl'] &,
        [data-direction='rtl'] & {
          left: unset;
          right: -0.35em;
        }
      }

      .${prefixCls}-count {
        ${badgeCount};
        min-width: ${token.badgeHeight};
        height: ${token.badgeHeight};
        line-height: ${token.badgeHeight};
        padding: ${props.isLongerThan2 ? `0 ${token.badgePaddingHorizontal}` : 'unset'};
        &.${prefixCls}-size-small {
          min-width: ${token.badgeHeightSmall};
          height: ${token.badgeHeightSmall};
          padding: ${props.isLongerThan2 ? `0 ${token.badgePaddingHorizontalSmall}` : 'unset'};
        }
      }

      .${prefixCls}-inline-flex {
        position: static;
        transform: unset;
        margin-left: 4px;
      }

      .${prefixCls}-type-secondary {
        &.${prefixCls}-sup {
          color: ${token.badgeSupTypeSecondaryColor};
        }
        &.${prefixCls}-count {
          color: ${token.badgeTypeSecondaryColor};
          background: ${token.badgeTypeSecondaryBgColor};
        }
      }

      .${prefixCls}-custom-component {
        ${badgeCount};
        font-size: inherit;
        color: inherit;
        background: transparent;
        box-shadow: inherit;
      }
    }
  `;

  return {
    styles: styles,
    theme: token,
  };
};

export default useStyles;
