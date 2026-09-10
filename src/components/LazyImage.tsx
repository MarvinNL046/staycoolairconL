import React,{ useState,useMemo,memo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  aspectRatio?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

function LazyImageBase({
  src, 
  alt, 
  className = '', 
  width = '100%',
  height = '100%',
  priority = false,
  aspectRatio = 1, // Default to square aspect ratio
  objectFit = 'contain' // Default to contain to ensure the entire image is visible
}: LazyImageProps) {
  const [error, setError] = useState(false);

  // Memoize styles to prevent recalculation on each render
  const { wrapperStyle, imageContainerStyle } = useMemo(() => {
    const widthStyle = typeof width === 'number' ? `${width}px` : width;
    const heightStyle = typeof height === 'number' ? `${height}px` : height;
    
    return {
      wrapperStyle: {
        width: widthStyle,
        height: aspectRatio ? 'auto' : heightStyle,
        position: 'relative',
        backgroundColor: '#f3f4f6',
        overflow: 'hidden',
        willChange: 'transform, opacity',
        ...(aspectRatio && {
          paddingBottom: `${(1 / aspectRatio) * 100}%`
        })
      } as React.CSSProperties,
      
      imageContainerStyle: {
        position: aspectRatio ? 'absolute' : 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      } as React.CSSProperties
    };
  }, [width, height, aspectRatio]);

  return (
    <div style={wrapperStyle}>
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-sm">Afbeelding niet beschikbaar</span>
        </div>
      ) : (
        <div style={imageContainerStyle}>
          <img
            src={src}
            alt={alt}
            className={`${className} block w-full h-full`}
            style={{ objectFit }}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            width={typeof width === 'number' ? width : undefined}
            height={typeof height === 'number' ? height : undefined}
            onError={() => setError(true)}
          />
        </div>
      )}
    </div>
  );
}

// Export memoized component to prevent unnecessary re-renders
const LazyImage = memo(LazyImageBase);
export default LazyImage;
