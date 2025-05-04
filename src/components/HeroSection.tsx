import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Academic Project Files Writing Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl">
              Get your academic projects/files completed by our best writers who understand your field and delivers you the best quality on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#writers" 
                className="btn btn-primary text-sm px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-center sm:justify-start gap-2"
              >
                Meet our Writers <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform md:scale-110">
              <img 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMzE1MzB8MHwxfHNlYXJjaHwxfHxzdHVkeWluZ3xlbnwwfHx8fDE3MTM4MTM2MTN8MA&ixlib=rb-4.0.3&q=80&w=800" 
                alt="Student studying with laptop" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-300 opacity-50 blur-lg"></div>
            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 rounded-full bg-secondary-300 opacity-50 blur-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="container mx-auto px-4 pb-12 md:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              title: "Fast Work & Delivery",
              description: "Get your projects completed quickly to meet your deadlines",
              icon: "⚡"
            },
            {
              title: "Best Writers",
              description: "Experienced academics with expertise in various fields",
              icon: "👨‍🎓"
            },
            {
              title: "Affordable Rates",
              description: "Budget-friendly pricing for students",
              icon: "💰"
            },
            {
              title: "100% Original",
              description: "Properly hand written by our Best writers",
              icon: "✅"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
