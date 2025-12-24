import { cn } from "../../lib/utils";
import React, { memo } from 'react';
import { NumberTokens, NumberTokenKey } from "../../theme/constants";
import { injectGlobal } from '@emotion/css';

export type TBorderRadiusPlacement = 'all' | 'none' | 'top' | 'bottom' | 'left' | 'right';

export const injectCardStyles = () => {
  return injectGlobal`
  .moly-card {
    padding: ${NumberTokens.L}px;
    background-color: var(--bds-gray-bg-card);
  }

  .moly-group-card {
    background-color: var(--bds-gray-bg-card);
  }

  .moly-group-card-first-content {
    padding: ${NumberTokens.L}px;
  }

  .moly-group-card-second-content {
    padding: ${NumberTokens.L}px;
  }

  .moly-group-card-divider {
    border: none;
    border-top: 1px solid var(--bds-gray-ele-line);
  }
`;
};

export const genBorderRadius = (size: NumberTokenKey | number, placement: TBorderRadiusPlacement): React.CSSProperties => {
  const handledSize = typeof size === 'number' ? size : NumberTokens[size] || size;
  if (placement === 'none') {
    return {
      borderRadius: 0,
    };
  }
  if (placement === 'all') {
    return {
      borderRadius: handledSize,
    };
  }
  return {
    borderTopLeftRadius: placement === 'top' || placement === 'left' ? handledSize : 0,
    borderTopRightRadius: placement === 'top' || placement === 'right' ? handledSize : 0,
    borderBottomRightRadius: placement === 'bottom' || placement === 'right' ? handledSize : 0,
    borderBottomLeftRadius: placement === 'bottom' || placement === 'left' ? handledSize : 0,
  };
};

injectCardStyles();

export interface IMolyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  borderRadiusSize?: NumberTokenKey | number;
  borderRadiusPlacement?: TBorderRadiusPlacement;
}

export const Card = memo<IMolyCardProps>((props) => {
  const {
    className,
    style,
    children,
    borderRadiusSize = NumberTokens.M,
    borderRadiusPlacement = 'all',
    ...rest
  } = props;
  return (
    <div
      className={cn('moly-card', className)}
      style={{
        ...style,
        ...genBorderRadius(borderRadiusSize, borderRadiusPlacement),
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

export interface IMolyGroupCardProps extends React.HTMLAttributes<HTMLDivElement> {
  borderRadiusSize?: NumberTokenKey | number;
  borderRadiusPlacement?: TBorderRadiusPlacement;
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  dividerClassName?: string;
}

export const GroupCard = memo<IMolyGroupCardProps>((props) => {
  const {
    className,
    style,
    firstContent,
    secondContent,
    dividerClassName,
    borderRadiusSize = NumberTokens.M,
    borderRadiusPlacement = 'all',
    ...rest
  } = props;
  return (
    <div
      className={cn('moly-group-card', className)}
      style={{
        ...style,
        ...genBorderRadius(borderRadiusSize, borderRadiusPlacement),
      }}
      {...rest}
    >
      <div className="moly-group-card-first-content">{firstContent}</div>
      <hr className={cn('moly-group-card-divider', dividerClassName)} />
      <div className="moly-group-card-second-content">{secondContent}</div>
    </div>
  );
});

export default Card;
