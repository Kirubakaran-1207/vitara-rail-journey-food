import { useEffect, useState } from 'react';
import { ArrowRight, Train, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroTrainImage from '@/assets/hero-train.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen vita-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroTrainImage}
          alt="Train Journey"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-soft">
          <Train className="w-8 h-8 text-vita-blue" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-soft">
          <Utensils className="w-8 h-8 text-vita-blue" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-vita-blue-dark animate-text-slide">From Kashmir</span>
              <span className="block text-vita-blue animate-text-slide" style={{ animationDelay: '0.3s' }}>to Kanyakumari</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              A Million Journeys
            </p>
            <p className="text-3xl md:text-4xl font-semibold text-vita-blue-dark mb-8">
              One Bharat, One Emotion
            </p>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Delivering homely, nutritious meals and nutrition boxes directly from cloud kitchens to train passengers across India
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-vita-blue hover:bg-vita-blue-dark text-white font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-hover transition-smooth group"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-vita-blue text-vita-blue hover:bg-vita-blue hover:text-white font-semibold px-8 py-4 rounded-xl transition-smooth"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-vita-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vita-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;