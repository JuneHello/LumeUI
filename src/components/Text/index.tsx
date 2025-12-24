import React from 'react';
import { cn } from '../../lib/utils';
import { TEXT_STYLE } from './styles';
import { TextProps, TitleProps, TextLinkProps, TextEllipsis } from './types';

const TextComponent: React.FC<TextProps> = (props) => {
  const {
    className,
    style,
    size = 14,
    type,
    children,
    ellipsis,
    disabled,
    ...otherProps
  } = props;

  const newStyle: React.CSSProperties = { ...style };
  if (ellipsis && typeof ellipsis !== 'boolean' && (ellipsis as TextEllipsis).rows > 0) {
    newStyle.WebkitLineClamp = (ellipsis as TextEllipsis).rows;
  }

  return (
    <span
      className={cn(
        'moly-text',
        type ? TEXT_STYLE.color[type] : '',
        TEXT_STYLE.size[size],
        className,
        {
          'line-clamp-1': ellipsis === true,
          'line-clamp': ellipsis && typeof ellipsis !== 'boolean',
        },
        disabled && 'text-[var(--bds-gray-t4-dis)] cursor-not-allowed'
      )}
      style={newStyle}
      {...otherProps}
    >
      {children}
    </span>
  );
};

const Title: React.FC<TitleProps> = ({ level = 1, className, children, style, ...props }) => {
  const customStyle: React.CSSProperties = {
    ...style,
    fontSize: `var(--bds-font-size-h${level})`,
    lineHeight: `var(--bds-line-height-h${level})`,
  };

  const Tag = `h${level}` as React.ElementType;

  return (
    <Tag
      className={cn(level === 1 ? 'text-[] leading-[var(--bds-line-height-h1)]' : '', className)}
      style={customStyle}
      {...props}
    >
      {children}
    </Tag>
  );
};

const Link: React.FC<TextLinkProps> = (props) => {
  const {
    className,
    blank,
    type,
    size = 14,
    children,
    ellipsis,
    disabled,
    href,
    ...rest
  } = props;

  const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = { ...rest };
  if (blank) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }
  if (!disabled) {
    linkProps.href = href;
  }

  return (
    <a
      className={cn(
        'no-underline text-inherit',
        !disabled && 'hover:!text-[var(--bds-brand-600-hover)]',
        type ? TEXT_STYLE.color[type] : '',
        TEXT_STYLE.size[size],
        {
          truncate: ellipsis,
        },
        disabled && 'text-[var(--bds-gray-t4-dis)] cursor-not-allowed',
        className
      )}
      {...linkProps}
    >
      {children}
    </a>
  );
};

type TextType = typeof TextComponent & {
  Title: typeof Title;
  Link: typeof Link;
};

const Text = TextComponent as TextType;
Text.Title = Title;
Text.Link = Link;

export { Text };
export default Text;
