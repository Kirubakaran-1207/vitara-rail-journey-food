import { useEffect, useRef, useState } from 'react';
import { Users, Target, Globe, Heart, ChefHat, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import cloudKitchenImage from '@/assets/cloud-kitchen.jpg';
import familyFoodImage from '@/assets/family-food.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 'about',
      icon: Users,
      title: 'About Us',
      description: 'Vita Rail bridges the gap between travelers and quality nutrition. We understand that journey food often compromises on health and taste. Our mission is to deliver fresh, homely meals prepared in certified cloud kitchens directly to your train seat.',
      image: familyFoodImage,
      highlights: [
        { icon: Heart, text: 'Homely Taste' },
        { icon: Shield, text: 'Quality Assured' },
        { icon: ChefHat, text: 'Expert Chefs' }
      ]
    },
    {
      id: 'mission',
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize train travel dining by providing nutritious, delicious, and affordable meals that remind you of home. We aim to make every journey a celebration of Indian flavors and healthy eating habits.',
      image: cloudKitchenImage,
      highlights: [
        { icon: Target, text: 'Quality First' },
        { icon: Globe, text: 'Pan-India Service' },
        { icon: Users, text: 'Customer Centric' }
      ]
    },
    {
      id: 'scope',
      icon: Globe,
      title: 'Our Scope',
      description: 'From Kashmir to Kanyakumari, we serve passengers across major train routes in India. Our extensive network of cloud kitchens ensures fresh meals are prepared and delivered at optimal timing during your journey.',
      image: familyFoodImage,
      highlights: [
        { icon: Globe, text: '500+ Routes' },
        { icon: Users, text: '1M+ Served' },
        { icon: Heart, text: '24/7 Service' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 vita-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-vita-blue-dark mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Redefining Train Travel Dining
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Experience the perfect blend of convenience, nutrition, and taste with our innovative food delivery service for train passengers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={card.id}
                className={`group hover:shadow-hover transition-all duration-500 bg-white/70 backdrop-blur-sm border-0 shadow-soft overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-vita-blue/90 backdrop-blur-sm p-3 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-vita-blue-dark mb-4 group-hover:text-vita-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <div className="space-y-3">
                    {card.highlights.map((highlight, idx) => {
                      const HighlightIcon = highlight.icon;
                      return (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="bg-vita-blue/10 p-2 rounded-lg">
                            <HighlightIcon className="w-4 h-4 text-vita-blue" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {highlight.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;