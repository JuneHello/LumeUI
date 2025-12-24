'use client';

import React, { memo, useContext, useEffect, useState, FC } from 'react';
import { getValues } from "../../lib/utils";
import { ProgressiveImage } from "./ProgressiveImage";
import { getProcessedSrcset, getProcessedUrl } from "./logic";
import { isImageValid, isSupportedDomain } from "./utils";
import { ImageProps, ImageContextProps } from './types';

const ImageContext = React.createContext<ImageContextProps>({});
export const ImageProvider = ImageContext.Provider;

export const Image: FC<ImageProps> = memo((props) => {
  const {
    src,
    format = 'auto',
    resize,
    quality,
    progressive,
    loading,
    s3_process_disabled,
    fallback_to_origin_src = true,
    ...others
  } = props;

  const [isFallback, setIsFallback] = useState(false);
  const vals = useContext(ImageContext);

  const s3_disable_option = !isSupportedDomain(src) || getValues([s3_process_disabled, vals.s3_process_disabled], false);
  const loading_option = getValues([loading, vals.loading], 'lazy') as 'lazy' | 'eager';

  const final_url = !s3_disable_option ? getProcessedSrcset(src, {
    format,
    resize,
    quality,
  }) : src;

  const progressive_enabled = progressive && !s3_disable_option;

  useEffect(() => {
    isImageValid(final_url)
      .then((valid) => {
        if (!valid) {
          console.warn(`[invalid] image: ${src}`);
          if (fallback_to_origin_src) {
            setIsFallback(true);
          }
        }
      })
      .catch((err) => {
        console.warn(`detect image valid error: ${err}`);
        setIsFallback(true);
      });
  }, [final_url, src, fallback_to_origin_src]);

  if (isFallback) {
    return <img src={src} loading={loading_option} {...others} />;
  }

  if (progressive_enabled) {
    const blur_src = getProcessedUrl(src, {
      format,
      resize,
      quality,
      thumbnail: true,
    });
    return (
      <ProgressiveImage
        src={final_url}
        blur_src={blur_src}
        loading={loading_option}
        {...others}
      />
    );
  }

  return <img srcSet={final_url} loading={loading_option} {...others} />;
});

Image.displayName = 'Image';

export default Image;
