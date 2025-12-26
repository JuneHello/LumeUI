import Avatar from './Avatar';
import AvatarImage from './AvatarImage';
import AvatarFallback from './AvatarFallback';
import AvatarGroup from './AvatarGroup';
import { getInitials } from './utils';
import type { LoadingStatus, AvatarSize } from './utils';

// 导出类型
export type { LoadingStatus, AvatarSize };
export type { AvatarProps } from './Avatar';
export type { AvatarImageProps } from './AvatarImage';
export type { AvatarFallbackProps } from './AvatarFallback';
export type { AvatarGroupProps } from './AvatarGroup';

// 导出子组件
export { AvatarImage, AvatarFallback, AvatarGroup };

// 导出工具函数
export { getInitials };

export default Avatar;
