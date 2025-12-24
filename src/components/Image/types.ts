export type FormatOption = 'auto' | 'png' | 'jpg' | 'jpeg' | 'webp' | 'avif' | string;
export type QualityOption = number;
export interface ResizeOption {
  width?: number | string;
  height?: number | string;
  ratio?: number;
  [key: string]: any;
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  format?: FormatOption;
  resize?: ResizeOption;
  quality?: QualityOption;
  progressive?: boolean;
  s3_process_disabled?: boolean;
  loading?: 'lazy' | 'eager';
  fallback_to_origin_src?: boolean;
}

export interface ImageContextProps {
  loading?: 'lazy' | 'eager';
  s3_process_disabled?: boolean;
}
