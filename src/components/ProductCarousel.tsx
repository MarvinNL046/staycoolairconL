import React, { useState, useCallback, memo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
}

// Memoized slide variants to prevent recreation on each render
const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

// Constants defined outside component to avoid recreation on each render
const swipeConfidenceThreshold = 3000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function ProductCarouselBase({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Memoized pagination function to avoid recreation on each render
  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  }, [images.length]);

  // Using a lightweight transition preset for better performance
  const optimizedTransition = {
    x: { type: "tween", duration: 0.3, ease: "easeInOut" },
    opacity: { duration: 0.2 }
  };

  return (
    <div 
      className="relative w-full bg-white rounded-lg sm:rounded-2xl shadow-lg overflow-hidden will-change-transform"
      style={{ aspectRatio: '1/1' }}
      role="region"
      aria-label="Product image carousel"
    >
      {/* Image container */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={optimizedTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 touch-pan-y"
          >
            <LazyImage
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              width="100%"
              height="100%"
              aspectRatio={1}
              priority={currentIndex === 0}
              objectFit="contain"
              className=""
            />
          </m.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
            onClick={() => paginate(1)}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
          </button>

          {/* Thumbnails */}
          <div 
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10"
            role="tablist"
            aria-label="Product images"
          >
            {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > currentIndex ? 1 : -1;
                setDirection(newDirection);
                setCurrentIndex(index);
              }}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-3 sm:w-4' 
                    : 'bg-white/60 hover:bg-white'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Image ${index + 1} of ${images.length}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Export memoized component to prevent unnecessary re-renders
const ProductCarousel = memo(ProductCarouselBase);
export default ProductCarousel;
