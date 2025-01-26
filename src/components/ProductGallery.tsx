import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  images: Image[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative w-full">
      <div
        className={`group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
        onClick={toggleZoom}
        onMouseMove={handleMouseMove}
      >
        <div className={`relative h-full w-full transition-all duration-300 ${isZoomed ? 'scale-150' : 'scale-100'
          }`}>
          <img
            src={images[currentImage].url}
            alt={images[currentImage].alt}
            className="h-full w-full object-cover object-center transition-transform duration-500"
            style={isZoomed ? {
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
            } : undefined}
          />
        </div>

        {!isZoomed && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100 md:opacity-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100 md:opacity-0"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 right-4 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:opacity-0">
              <ZoomIn className="h-5 w-5" />
            </div>
          </>
        )}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => {
              setCurrentImage(index);
              setIsZoomed(false);
            }}
            className={`group relative aspect-square overflow-hidden rounded-lg transition-all duration-300 hover:ring-2 hover:ring-blue-400 ${currentImage === index
              ? 'ring-2 ring-blue-500'
              : 'ring-1 ring-gray-200'
              }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-white/10 transition-opacity duration-300 ${currentImage === index ? 'opacity-0' : 'group-hover:opacity-0'
              }`} />
          </button>
        ))}
      </div>
    </div>
  );
}