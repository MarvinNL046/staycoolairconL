import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Helper function to generate srcSet for local images
const generateSrcSet = (src: string): string | undefined => {
  if (src.includes('unsplash.com')) return undefined;
  
  // Only process local images
  if (!src.includes('/images/')) return undefined;

  const sizes = [320, 640, 960, 1280];
  const extension = src.split('.').pop() || '';
  const basePath = src.substring(0, src.lastIndexOf('.'));

  // Generate srcset with both original format and WebP
  const srcSetParts = sizes.map(size => {
    const originalSrc = `${basePath}-${size}.${extension}`;
    const webpSrc = `${basePath}-${size}.webp`;
    return `${originalSrc} ${size}w, ${webpSrc} ${size}w`;
  });

  return srcSetParts.join(', ');
};

// Helper function to generate sizes attribute
const generateSizes = (width: number | string): string => {
  if (typeof width === 'number') {
    return `(max-width: ${width}px) 100vw, ${width}px`;
  }
  return '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw';
};

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number | string;
  height: number | string;
  priority?: boolean;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  priority = false
}: LazyImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Handle different image sources
  const imageUrl = src.includes('unsplash.com')
    ? `${src}&auto=format&q=80&w=1280&fit=crop`
    : src;

  // Generate tiny placeholder for blur effect
  const placeholderUrl = src.includes('unsplash.com')
    ? `${src}&auto=format&q=10&w=50&blur=20`
    : src; // Use original image as placeholder for local images

  // Generate srcset for responsive images
  const srcSet = generateSrcSet(src);
  const sizes = generateSizes(width);

  // Create wrapper style to prevent layout shifts
  const wrapperStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    display: 'block',
    backgroundColor: '#f3f4f6', // Light gray placeholder
    overflow: 'hidden',
    position: 'relative',
  };

  return (
    <div style={wrapperStyle}>
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-sm">Afbeelding niet beschikbaar</span>
        </div>
      ) : (
        <>
          <LazyLoadImage
            src={imageUrl}
            alt={alt}
            effect="blur"
            className={`${className} object-cover w-full h-full transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            width="100%"
            height="100%"
            placeholderSrc={placeholderUrl}
            wrapperClassName="w-full h-full"
            srcSet={srcSet}
            sizes={sizes}
            onError={() => setError(true)}
            afterLoad={() => setLoaded(true)}
            threshold={300}
          />
          {!loaded && !error && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          )}
        </>
      )}
    </div>
  );
}
