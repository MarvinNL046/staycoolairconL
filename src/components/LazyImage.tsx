import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number | string;  // Make width required
  height: number | string; // Make height required
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width,
  height
}: LazyImageProps) {
  // Only optimize Unsplash URLs, use local images directly
  const imageUrl = src.includes('unsplash.com') 
    ? `${src}&auto=format&q=80&w=1280&fit=crop` 
    : src;

  const placeholderUrl = src.includes('unsplash.com')
    ? `${src}&auto=format&q=10&w=50&blur=20`
    : undefined;

  // Create wrapper style to prevent layout shifts
  const wrapperStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    display: 'block',
    backgroundColor: '#f3f4f6', // Light gray placeholder
    overflow: 'hidden',
  };

  return (
    <div style={wrapperStyle}>
      <LazyLoadImage
        src={imageUrl}
        alt={alt}
        effect="blur"
        className={`${className} object-cover w-full h-full`}
        loading="lazy"
        width="100%"
        height="100%"
        placeholderSrc={placeholderUrl}
        wrapperClassName="w-full h-full"
      />
    </div>
  );
}
