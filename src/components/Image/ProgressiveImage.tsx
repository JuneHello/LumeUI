'use client';

import React, { useEffect, useMemo, useState, FC } from 'react';
import { loadImage } from "./utils";

export interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  blur_src: string;
}

export const ProgressiveImage: FC<ProgressiveImageProps> = (props) => {
  const { src, blur_src, style, onLoad, ...others } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImage(src)
      .then(() => setLoading(false))
      .catch((err) => {
        console.error(`load original image failed: ${src}, ${err}`);
      });
  }, [src]);

  const _style = useMemo(() => {
    return {
      filter: `blur(${loading ? 8 : 0}px)`,
      transition: 'filter 0.5s ease-in-out',
      ...style,
    };
  }, [loading, style]);

  return (
    <img
      srcSet={loading ? blur_src : src}
      style={_style}
      onLoad={loading ? undefined : onLoad}
      {...others}
    />
  );
};
