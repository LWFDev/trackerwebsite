import React, { useState, useEffect, useRef } from 'react';

interface UseImageOptimizationProps {
  src: string;
  alt: string;
  sizes?: string;
}

export const useImageOptimization = ({ src, alt, sizes }: UseImageOptimizationProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => setIsLoaded(true);

  return {
    imgRef,
    isLoaded,
    isInView,
    handleLoad,
    shouldLoad: isInView,
    imgProps: {
      ref: imgRef,
      onLoad: handleLoad,
      loading: 'lazy' as const,
      sizes: sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
      style: { 
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }
    }
  };
};

interface OptimizedImageProps extends UseImageOptimizationProps {
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, sizes }) => {
  const { imgProps, shouldLoad } = useImageOptimization({ src, alt, sizes });

  if (!shouldLoad) {
    return (
      <div 
        ref={imgProps.ref}
        className={`${className || ''} bg-gray-200 dark:bg-gray-700 animate-pulse`}
        style={{ minHeight: '32px', minWidth: '32px' }}
      />
    );
  }

  return (
    <img
      {...imgProps}
      src={src}
      alt={alt}
      className={className}
    />
  );
};