'use client';

import React, { useState } from 'react';
import RcUpload from 'rc-upload';
import { cn } from '../../lib/utils';
import { CloseIcon, PlusIcon } from '../../icons';
import { useToast, ToastContainer, EToastType } from '../Toast';
import { injectUploadStyles } from './styles';
import { MolyUploadProps, UploadFile } from './types';

injectUploadStyles();

const Upload: React.FC<MolyUploadProps> = (props) => {
  const {
    onChange: propsOnChange,
    value: defaultValue = [],
    uploadText,
    maxCount,
    maxSize,
    multiple,
    beforeUpload: _beforeUpload,
    onError: _onError,
    accept,
    onSuccess: _onSuccess,
    onStart: _onStart,
    onProgress: _onProgress,
    onRemove,
    disabled,
    ...otherProps
  } = props;

  const { toast } = useToast();
  const [value, setValue] = useState<UploadFile[]>(defaultValue || []);

  const deleteFile = (file: UploadFile) => {
    setValue((currentValue) => {
      const delFile = currentValue.find((item) => item.uid === file.uid);
      const newValue = currentValue.filter((item) => item.uid !== file.uid);
      if (delFile) {
        onRemove?.(delFile);
        propsOnChange?.({ ...delFile, status: 'removed' }, newValue);
      }
      return newValue;
    });
  };

  const onUpdate = (uid: string, properties: Partial<UploadFile>, callback?: (file: UploadFile, fileList: UploadFile[]) => void) => {
    setValue((currentValue) => {
      const currentIndex = currentValue.findIndex((item) => item.uid === uid);
      if (currentIndex > -1) {
        const currentFile = { ...currentValue[currentIndex] };
        Object.entries(properties).forEach(([key, val]) => {
          if (key === 'percent' && (val as number) < currentFile.percent) {
            return;
          }
          // @ts-ignore
          currentFile[key] = val;
        });
        const newValue = [...currentValue];
        newValue.splice(currentIndex, 1, currentFile);
        callback?.(currentFile, newValue);
        propsOnChange?.(currentFile, newValue);
        return newValue;
      }
      return currentValue;
    });
  };

  const uploadProps = {
    multiple,
    beforeUpload: (file: File, fileList: File[]) => {
      if (accept) {
        const isSupported = accept.split(',').includes(file.type);
        if (!isSupported) {
          toast({
            iconType: EToastType.WARN,
            title: `Only supports uploading ${accept} format files`,
          });
          return false;
        }
      }
      if (maxSize) {
        const isLimit = file.size / 1024 / 1024 > maxSize;
        if (isLimit) {
          toast({
            iconType: EToastType.WARN,
            title: `File size over ${maxSize}MB`,
          });
          return false;
        }
      }
      if (_beforeUpload) {
        return _beforeUpload(file as any, fileList as any);
      }
      return true;
    },
    onError: (error: Error, ret: Record<string, unknown>, file: any) => {
      deleteFile(file);
      _onError?.(error, ret, value.find((item) => item.uid === file.uid));
    },
    onStart: (file: any) => {
      const img: UploadFile = {
        type: file.type,
        uid: file.uid,
        name: file.name,
        status: 'uploading',
        url: window.URL ? window.URL.createObjectURL(file) : (window as any).webkitURL.createObjectURL(file),
        success: false,
        percent: 10,
      };
      _onStart?.(img);
      setValue((currentValue) => {
        const newValue = [...currentValue, img];
        propsOnChange?.(img, newValue);
        return newValue;
      });
    },
    onSuccess: (response: any, file: any) => {
      const params = typeof response === 'object' && response !== null && !Array.isArray(response) ? response : {};
      onUpdate(file.uid, {
        ...params,
        status: 'done',
        success: true,
        response,
      }, (updatedFile) => {
        _onSuccess?.(updatedFile);
      });
    },
    onProgress: (event: any, file: any) => {
      onUpdate(file.uid, {
        percent: event.percent,
      }, (updatedFile) => {
        _onProgress?.(updatedFile);
      });
    },
    accept,
    disabled,
    ...otherProps,
  };

  const fileNameTruncation = (name: string) => {
    if (name.length > 6) {
      const pre = name.substring(0, 3);
      const dotIndex = name.lastIndexOf('.');
      const after = name.substring(name.length, dotIndex > -1 ? dotIndex - 3 : name.length - 3);
      return `${pre}...${after}`;
    }
    return name;
  };

  return (
    <div className="moly-upload">
      {value.map((item) => {
        const { uid, percent, name, url, status, type } = item;
        return (
          <div className="moly-upload-item" key={uid || name}>
            <span className="moly-upload-remove-btn" onClick={() => deleteFile(item)}>
              <CloseIcon className="moly-upload-close-icon" />
            </span>
            {type.includes('image') ? (
              <span className="moly-upload-img">
                <img src={url} alt={name} />
              </span>
            ) : (
              <span className="moly-upload-file">{fileNameTruncation(name)}</span>
            )}
            {percent <= 100 && status !== 'done' && (
              <span className="moly-upload-percent">
                <span style={{ width: `${percent}%` }} />
              </span>
            )}
          </div>
        );
      })}
      <div className={cn('moly-upload-item', !!maxCount && value.length >= maxCount ? 'moly-upload-btn-hide' : '')}>
        <RcUpload {...uploadProps} className={cn('moly-upload-btn', disabled && 'moly-upload-btn-disabled')}>
          <PlusIcon className="moly-upload-plus-icon" />
          <span className="moly-upload-btn-text">{uploadText}</span>
        </RcUpload>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Upload;
