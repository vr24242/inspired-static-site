import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import harshitaImg1 from '@/assets/harshita-1.jpg';
import harshitaImg2 from '@/assets/harshita-2.jpg';
import harshitaImg3 from '@/assets/harshita-3.jpg';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: harshitaImg1,
    alt: "Harshita Portrait 1",
    title: "Radiant Beauty"
  },
  {
    id: 2,
    src: harshitaImg2,
    alt: "Harshita Portrait 2", 
    title: "Graceful Elegance"
  },
  {
    id: 3,
    src: harshitaImg3,
    alt: "Harshita Portrait 3",
    title: "Pure Charm"
  }
];

export const ImageCarousel = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mystery-border">
        <div 
          className="relative w-full h-full group cursor-pointer"
          onClick={toggleBlur}
        >
          <img
            src={harshitaImg1}
            alt="Harshita - Beautiful woman in the universe"
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
      </div>

      {/* Image Title */}
      <div className="text-center mt-6">
        <h3 className="text-2xl font-light text-mystery-text animate-fade-in">
          Radiant Beauty
        </h3>
      </div>
    </div>
  );
};