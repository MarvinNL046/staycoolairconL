import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number | string;
  height: number | string;
  priority?: boolean;
  aspectRatio?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  priority = false,
  aspectRatio = 1, // Default to square aspect ratio
  objectFit = 'contain' // Default to contain to ensure the entire image is visible
}: LazyImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Calculate dimensions
  const widthStyle = typeof width === 'number' ? `${width}px` : width;
  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  // Create wrapper style with aspect ratio if provided
  const wrapperStyle: React.CSSProperties = {
    width: widthStyle,
    height: aspectRatio ? 'auto' : heightStyle,
    position: 'relative',
    backgroundColor: '#f3f4f6',
    overflow: 'hidden',
    ...(aspectRatio && {
      paddingBottom: `${(1 / aspectRatio) * 100}%`
    })
  };

  // Create image container style
  const imageContainerStyle: React.CSSProperties = {
    position: aspectRatio ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={wrapperStyle}>
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-sm">Afbeelding niet beschikbaar</span>
        </div>
      ) : (
        <div style={imageContainerStyle}>
          <LazyLoadImage
            src={src}
            alt={alt}
            effect="blur"
            className={`${className} object-${objectFit} w-full h-full transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            width="100%"
            height="100%"
            onError={() => setError(true)}
            afterLoad={() => setLoaded(true)}
            threshold={300}
            placeholder={
              <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            }
            wrapperProps={{
              style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
          />
          {!loaded && !error && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse">
              <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 animate-shimmer" 
                   style={{
                     backgroundSize: '200% 100%',
                     animation: 'shimmer 1.5s infinite'
                   }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
