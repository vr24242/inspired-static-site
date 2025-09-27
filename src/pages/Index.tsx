import { HeroSection } from '@/components/HeroSection';
import { ImageCarousel } from '@/components/ImageCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-mystery-bg">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ImageCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-mystery-border">
        <p className="text-mystery-text-muted text-sm">
          A tribute to Harshita's universal beauty and elegance
        </p>
      </footer>
    </div>
  );
};

export default Index;
