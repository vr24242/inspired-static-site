import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mysteryImage from '@/assets/mystery-portrait.jpg';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: mysteryImage,
    alt: "Mystery Portrait 1",
    title: "The Enigmatic Beauty"
  },
  {
    id: 2,
    src: mysteryImage,
    alt: "Mystery Portrait 2", 
    title: "Ethereal Grace"
  },
  {
    id: 3,
    src: mysteryImage,
    alt: "Mystery Portrait 3",
    title: "Timeless Elegance"
  }
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mystery-border">
        <div 
          className="relative w-full h-full group cursor-pointer"
          onClick={toggleBlur}
        >
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isBlurred ? 'blur-[20px] scale-110' : 'blur-none scale-100'
            }`}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Blur notice */}
          {isBlurred && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="backdrop-blur-mystery rounded-lg p-6 text-center animate-fade-in">
                <p className="text-lg font-medium text-mystery-text mb-2">
                  Image blurred for privacy
                </p>
                <p className="text-sm text-mystery-text-muted">
                  Click to reveal
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 border-0 text-white w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 border-0 text-white w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Image Title */}
      <div className="text-center mt-6">
        <h3 className="text-2xl font-light text-mystery-text animate-fade-in">
          {carouselImages[currentIndex].title}
        </h3>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-mystery-accent shadow-lg animate-glow'
                : 'bg-mystery-border hover:bg-mystery-text-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};