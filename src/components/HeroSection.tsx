
import React, { useEffect, useState } from 'react';
import { WhatsappIcon, PhoneIcon } from './Icons';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-zocca-gray overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-zocca-orange/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 top-1/3 w-72 h-72 bg-zocca-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-padding max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block bg-zocca-orange/10 text-zocca-orange font-poppins font-semibold px-4 py-2 rounded-full text-sm mb-6">
              Personal Trainer em Itapira
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-zocca-blue">
              Transforme seu corpo e sua saúde em <span className="text-gradient">Itapira</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Treinos personalizados, acompanhamento 24h e resultados comprovados. 
              Comece sua transformação hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20treino%20personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button flex items-center justify-center gap-2"
              >
                <WhatsappIcon className="w-5 h-5" />
                <span>Quero meu treino personalizado</span>
              </a>
              <a
                href="tel:+5519999999999"
                className="secondary-button flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Falar com o Zocca</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-zocca-orange rounded-full opacity-20 filter blur-md animate-pulse-subtle"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zocca-blue rounded-full opacity-20 filter blur-md animate-pulse-subtle"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Personal Trainer" 
                  className="w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zocca-blue/80 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="flex-shrink-0 w-3 h-3 bg-zocca-orange rounded-full animate-pulse"></div>
                    <p className="text-sm font-poppins font-medium">Treinos personalizados para qualquer objetivo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm text-zocca-blue/70 mb-2 font-poppins">Role para descobrir</p>
        <div className="w-1 h-10 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-zocca-blue/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full bg-zocca-blue rounded-full animate-bounce h-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
