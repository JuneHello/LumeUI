/**
 * 从用户名生成首字母
 *
 * @param name - 用户全名
 * @returns 1-2 个字符的首字母
 *
 * @example
 * getInitials("张三") // "张"
 * getInitials("John Doe") // "JD"
 * getInitials("Alice") // "A"
 */
export function getInitials(name: string): string {
  if (!name || name.trim().length === 0) {
    return '';
  }

  const trimmedName = name.trim();
  const words = trimmedName.split(/\s+/);

  if (words.length === 1) {
    // 单词名称：返回第一个字符
    return words[0].charAt(0).toUpperCase();
  }

  // 多词名称：返回第一个和最后一个单词的首字母
  const firstInitial = words[0].charAt(0).toUpperCase();
  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();

  return firstInitial + lastInitial;
}

/**
 * LoadingStatus 类型
 * 图片加载状态
 */
export type LoadingStatus = 'lazy' | 'loading' | 'loaded' | 'error';

/**
 * Avatar 尺寸类型
 */
export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';
