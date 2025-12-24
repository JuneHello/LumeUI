import type { UploadProps as RcUploadProps } from 'rc-upload';
import { ReactNode } from 'react';

export interface UploadFile {
  uid: string;
  type: string;
  name: string;
  status: 'uploading' | 'done' | 'removed';
  url: string;
  success: boolean;
  percent: number;
  response?: any;
}

export interface MolyUploadProps {
  uploadText?: string;
  action?: string;
  accept?: RcUploadProps['accept'];
  disabled?: boolean;
  headers?: RcUploadProps['headers'];
  maxCount?: number;
  maxSize?: number;
  method?: RcUploadProps['method'];
  directory?: boolean;
  data?: RcUploadProps['data'];
  withCredentials?: boolean;
  multiple?: boolean;
  onStart?: (file: UploadFile) => void;
  onError?: (error: Error, ret: Record<string, unknown>, file: UploadFile | undefined) => void;
  onSuccess?: (file: UploadFile) => void;
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
  value?: UploadFile[];
  onProgress?: (file: UploadFile) => void;
  beforeUpload?: RcUploadProps['beforeUpload'];
  customRequest?: RcUploadProps['customRequest'];
  onRemove?: (file: UploadFile) => void;
  children?: ReactNode;
}
