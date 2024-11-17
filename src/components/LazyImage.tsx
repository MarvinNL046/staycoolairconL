import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width = '100%',
  height = '100%'
}: LazyImageProps) {
  // Alleen Unsplash URLs optimaliseren, lokale afbeeldingen direct gebruiken
  const imageUrl = src.includes('unsplash.com') 
    ? `${src}&auto=format&q=80&w=1280&fit=crop` 
    : src;

  const placeholderUrl = src.includes('unsplash.com')
    ? `${src}&auto=format&q=10&w=50&blur=20`
    : undefined;

  return (
    <LazyLoadImage
      src={imageUrl}
      alt={alt}
      effect="blur"
      className={className}
      loading="lazy"
      width={width}
      height={height}
      placeholderSrc={placeholderUrl}
    />
  );
}