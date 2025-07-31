import { useEffect, useRef, useState } from 'react';
import { Users, Target, Globe, Heart, ChefHat, Shield, Train, Utensils, Clock } from 'lucide-react';
import cloudKitchenImage from '@/assets/cloud-kitchen.jpg';
import familyFoodImage from '@/assets/family-food.jpg';

const AboutSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observers = new Map();

    const createObserver = (sectionId: string) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        },
        { threshold: 0.2 }
      );

      if (sectionRefs.current[sectionId]) {
        observer.observe(sectionRefs.current[sectionId]!);
        observers.set(sectionId, observer);
      }
    };

    ['about', 'mission', 'scope', 'contact'].forEach(createObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="py-20 vita-gradient">
      {/* About Us Section */}
      <section 
        id="about"
        ref={el => sectionRefs.current['about'] = el}
        className="container mx-auto px-4 mb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible('about') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-vita-blue/20 p-3 rounded-xl">
                <Users className="w-8 h-8 text-vita-blue" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-vita-blue-dark">About Us</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Vita Rail bridges the gap between travelers and quality nutrition. We understand that journey food often compromises on health and taste. Our mission is to deliver fresh, homely meals prepared in certified cloud kitchens directly to your train seat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <Heart className="w-6 h-6 text-vita-blue" />
                <span className="font-medium">Homely Taste</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <Shield className="w-6 h-6 text-vita-blue" />
                <span className="font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <ChefHat className="w-6 h-6 text-vita-blue" />
                <span className="font-medium">Expert Chefs</span>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible('about') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <img 
              src={familyFoodImage}
              alt="Family enjoying homely food"
              className="w-full h-96 object-cover rounded-2xl shadow-hover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        id="mission"
        ref={el => sectionRefs.current['mission'] = el}
        className="container mx-auto px-4 mb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible('mission') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <img 
              src={cloudKitchenImage}
              alt="Cloud kitchen operations"
              className="w-full h-96 object-cover rounded-2xl shadow-hover"
            />
          </div>
          <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible('mission') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-vita-blue/20 p-3 rounded-xl">
                <Target className="w-8 h-8 text-vita-blue" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-vita-blue-dark">Our Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To revolutionize train travel dining by providing nutritious, delicious, and affordable meals that remind you of home. We aim to make every journey a celebration of Indian flavors and healthy eating habits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <Target className="w-6 h-6 text-vita-blue" />
                <span className="font-medium">Quality First</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <Globe className="w-6 h-6 text-vita-blue" />
                <span className="font-medium">Pan-India Service</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <Users className="w-6 h-6 text-vita-blue" />
                <span className="font-medium">Customer Centric</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section 
        id="scope"
        ref={el => sectionRefs.current['scope'] = el}
        className="container mx-auto px-4 mb-32"
      >
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center space-x-3 mb-6 transition-all duration-1000 ${isVisible('scope') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="bg-vita-blue/20 p-3 rounded-xl">
              <Globe className="w-8 h-8 text-vita-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-vita-blue-dark">Our Scope</h2>
          </div>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible('scope') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            From Kashmir to Kanyakumari, we serve passengers across major train routes in India. Our extensive network of cloud kitchens ensures fresh meals are prepared and delivered at optimal timing during your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Train, title: 'Major Routes', description: 'Covering all major train routes across India', delay: 0 },
            { icon: Utensils, title: 'Fresh Meals', description: 'Prepared in certified cloud kitchens with quality ingredients', delay: 200 },
            { icon: Clock, title: '24/7 Service', description: 'Round-the-clock availability for all your journey needs', delay: 400 }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-105 ${
                  isVisible('scope') ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className="bg-vita-blue/10 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:bg-vita-blue/20 transition-colors">
                  <IconComponent className="w-12 h-12 text-vita-blue group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-vita-blue-dark mb-4 group-hover:text-vita-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        ref={el => sectionRefs.current['contact'] = el}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-vita-blue-dark mb-8">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Get in touch with us for any queries or to start your culinary journey with Vita Rail
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="mailto:vitarailservices25@gmail.com"
              className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-hover transition-all"
            >
              <div className="bg-vita-blue/20 p-3 rounded-xl">
                <Users className="w-6 h-6 text-vita-blue" />
              </div>
              <span className="font-medium text-lg">vitarailservices25@gmail.com</span>
            </a>
            <a 
              href="tel:+917708576789"
              className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-hover transition-all"
            >
              <div className="bg-vita-blue/20 p-3 rounded-xl">
                <Target className="w-6 h-6 text-vita-blue" />
              </div>
              <span className="font-medium text-lg">+91 7708576789</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;