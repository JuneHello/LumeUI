import { css } from '@emotion/css';
import { AvatarSize } from './utils';

const avatarToken = {
  avatarSizeSmall: 'var(--bds-avatar-size-small, 24px)',
  avatarSizeMedium: 'var(--bds-avatar-size-medium, 32px)',
  avatarSizeLarge: 'var(--bds-avatar-size-large, 40px)',
  avatarSizeXlarge: 'var(--bds-avatar-size-xlarge, 64px)',
  avatarBorderRadius: 'var(--bds-avatar-border-radius, 50%)',
  avatarFallbackBg: 'var(--bds-avatar-fallback-bg, var(--base-bds-gray-t3))',
  avatarFallbackText: 'var(--bds-avatar-fallback-text, var(--base-bds-gray-t1-title))',
  avatarGroupSpacing: 'var(--bds-avatar-group-spacing, -8px)',
  avatarFontWeight: 'var(--bds-font-weight-medium, 500)',
  avatarFontFamily: 'var(--bds-font-family, inherit)',
};

export interface UseStylesProps {
  size?: AvatarSize;
}

export const useStyles = (prefixCls: string, props: UseStylesProps = {}) => {
  const { size = 'medium' } = props;
  const token = avatarToken;

  // 根据尺寸获取对应的尺寸值
  const getSizeValue = () => {
    switch (size) {
      case 'small':
        return token.avatarSizeSmall;
      case 'medium':
        return token.avatarSizeMedium;
      case 'large':
        return token.avatarSizeLarge;
      case 'xlarge':
        return token.avatarSizeXlarge;
      default:
        return token.avatarSizeMedium;
    }
  };

  const avatarRoot = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: ${getSizeValue()};
    height: ${getSizeValue()};
    border-radius: ${token.avatarBorderRadius};
    font-family: ${token.avatarFontFamily};
    font-weight: ${token.avatarFontWeight};
  `;

  const avatarImage = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${token.avatarBorderRadius};
  `;

  const avatarFallback = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${token.avatarFallbackBg};
    color: ${token.avatarFallbackText};
    font-size: calc(${getSizeValue()} * 0.4);
    font-weight: ${token.avatarFontWeight};
    line-height: 1;
  `;

  const avatarGroup = css`
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    gap: 0;

    & > * {
      margin-left: ${token.avatarGroupSpacing};

      &:first-child {
        margin-left: 0;
      }
    }

    [data-direction='rtl'] &,
    [dir='rtl'] &,
    [direction='rtl'] & {
      & > * {
        margin-left: 0;
        margin-right: ${token.avatarGroupSpacing};

        &:first-child {
          margin-right: 0;
        }
      }
    }
  `;

  const styles = css`
    &.${prefixCls}-root {
      ${avatarRoot}
    }

    &.${prefixCls}-image {
      ${avatarImage}
    }

    &.${prefixCls}-fallback {
      ${avatarFallback}
    }

    &.${prefixCls}-group {
      ${avatarGroup}
    }
  `;

  return {
    styles: styles,
    theme: token,
  };
};

export default useStyles;
