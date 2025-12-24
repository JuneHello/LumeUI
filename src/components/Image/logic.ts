import { FormatOption, QualityOption, ResizeOption } from './types';
import { isSupportAvif, isSupportWebp, SupportedWritingFormats, isSupportedDomain, toRelativePath } from './utils';

export function handleImageFormat(format?: FormatOption) {
  if (!format) return undefined;
  const webpok = isSupportWebp();
  const avifok = isSupportAvif();

  if (format === 'auto') {
    if (avifok) return 'avif';
    if (webpok) return 'webp';
    return undefined;
  }

  if (format === 'avif') return avifok ? 'avif' : undefined;
  if (format === 'webp') return webpok ? 'webp' : undefined;

  if (SupportedWritingFormats.includes(format)) {
    return format;
  }

  console.error(`Unsupported image format: ${format}`);
  return undefined;
}

const DefaultQuality = 80;
const FormatDefaultQuality = new Map([['webp', 80], ['avif', 60]]);

export function handleImageQuality(quality?: QualityOption, format?: FormatOption) {
  if (typeof quality === 'number') {
    if (quality > 0 && quality <= 100) return quality;
    console.warn(`quality should be larger than 0 and less than or equal to 100, but got ${quality}`);
  }

  const result_format = handleImageFormat(format);
  if (!result_format) return undefined;

  return FormatDefaultQuality.get(result_format) || DefaultQuality;
}

export function handleImageResize(resize?: ResizeOption) {
  if (!resize) return undefined;
  const { width, height, ratio = 1, ...options } = resize;
  const res: Record<string, any> = { ...options };
  const w = Number(width);
  const h = Number(height);
  if (!isNaN(w)) res.width = Math.round(w * ratio);
  if (!isNaN(h)) res.height = Math.round(h * ratio);
  return Object.keys(res).length > 0 ? res : undefined;
}

export function handleThumbnailResize(resize?: ResizeOption, scale = 0.1) {
  if (!resize) return undefined;
  const resize_cp = { ...resize };
  if (resize_cp.width) resize_cp.width = Number(resize_cp.width) * scale;
  if (resize_cp.height) resize_cp.height = Number(resize_cp.height) * scale;
  return handleImageResize(resize_cp);
}

export function getProcessedUrl(src: string, options: { format?: FormatOption; quality?: QualityOption; resize?: ResizeOption; thumbnail?: boolean }) {
  if (!src) return '';
  if (!isSupportedDomain(src)) return src;
  const { resize, format, quality, thumbnail } = options;

  const final_format = handleImageFormat(format);
  const final_quality = handleImageQuality(quality, format);
  const final_resize = thumbnail ? handleThumbnailResize(resize) : handleImageResize(resize);

  const base_url = toRelativePath(src);
  const params = new URLSearchParams();
  if (final_format) params.set('format', final_format);
  if (final_quality) params.set('quality', String(final_quality));
  if (final_resize) {
    const resize_arr: string[] = [];
    Object.keys(final_resize).forEach((key) => {
      const value = final_resize[key];
      if (value) {
        resize_arr.push(`${key}/${value}`);
      }
    });
    if (resize_arr.length > 0) {
      params.set('resize', resize_arr.join(','));
    }
  }
  return `${base_url}?${params.toString()}`;
}

const PixelRatios = [1, 1.5, 2, 2.5, 3];
export function getProcessedSrcset(src: string, options: { format?: FormatOption; quality?: QualityOption; resize?: ResizeOption }) {
  const srcset: string[] = [];
  PixelRatios.forEach((ratio) => {
    const processed_url = getProcessedUrl(src, {
      ...options,
      resize: { ...options.resize, ratio },
    });
    srcset.push(`${processed_url} ${ratio}x`);
  });
  return srcset.join(', ');
}
