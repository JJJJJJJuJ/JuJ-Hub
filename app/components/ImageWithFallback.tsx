'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

const ImageWithFallback = ({
  src,
  alt,
  fill = false,
  className = '',
  sizes = '100vw',
  quality = 85,
  ...rest
}: ImageWithFallbackProps & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'fill' | 'sizes' | 'quality'>) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  
  // 使用更小的内联占位符（优化加载性能）
  const placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjQyNDM2Ii8+PC9zdmc+';
  
  const handleError = () => {
    if (imgSrc !== placeholderSrc) {
      setImgSrc(placeholderSrc);
      setLoadError(true);
    }
  };
  
  const handleLoad = () => {
    setImgLoaded(true);
  };

  useEffect(() => {
    // 当src更改时重置状态
    setImgSrc(src);
    setImgLoaded(false);
    setLoadError(false);
  }, [src]);

  return (
    <>
      {/* 加载占位符 - 简化为更轻量级的版本 */}
      {!imgLoaded && (
        <div className="absolute inset-0 bg-gray-800/60 rounded-lg" />
      )}
      
      {/* 图像组件 */}
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        className={`${className} ${imgLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${loadError ? 'object-contain' : ''}`}
        sizes={sizes}
        onError={handleError}
        onLoad={handleLoad}
        quality={quality}
        priority={rest.priority || false}
        loading={rest.loading || "lazy"}
        placeholder="blur"
        blurDataURL={placeholderSrc}
        {...rest}
      />
    </>
  );
};

export default ImageWithFallback; 