import { Linkedin, Instagram, Mail, Phone, MapPin, Train } from 'lucide-react';
import vitaRailLogo from '@/assets/vita-rail-logo.jpg';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    {
      icon: Mail,
      href: 'mailto:contact@vitarail.com',
      label: 'Email',
      color: 'hover:text-vita-blue'
    }
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Mission', href: '#mission' },
        { name: 'Service Scope', href: '#scope' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Train Food Delivery', href: '#' },
        { name: 'Nutrition Boxes', href: '#' },
        { name: 'Bulk Orders', href: '#' },
        { name: 'Special Meals', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Track Order', href: '#' },
        { name: 'Refund Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-vita-blue-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={vitaRailLogo} 
                alt="Vita Rail Logo" 
                className="w-12 h-12 object-contain rounded-lg bg-white/10 p-2"
              />
              <span className="text-3xl font-bold">Vita Rail</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Delivering homely, nutritious meals from cloud kitchens to train passengers across India. 
              Making every journey a delightful culinary experience.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-vita-blue-light" />
                <span className="text-blue-100">+91 1800-VITA-RAIL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-vita-blue-light" />
                <span className="text-blue-100">contact@vitarail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-vita-blue-light" />
                <span className="text-blue-100">Pan-India Service</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`bg-white/10 p-3 rounded-xl transition-all duration-300 ${social.color} hover:bg-white/20 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-blue-100 mb-4 md:mb-0">
              <Train className="w-5 h-5" />
              <span>© 2024 Vita Rail. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;