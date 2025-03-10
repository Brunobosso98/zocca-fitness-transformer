
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-zocca-blue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-zocca-orange/10 rounded-full"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80" 
                  alt="Luis Fernando Zocca" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zocca-blue/10 flex items-center justify-center text-zocca-blue font-bold">
                  10+
                </div>
                <div>
                  <p className="text-xs text-gray-500">Anos de experiência</p>
                  <p className="text-sm font-bold text-zocca-blue">Certificado CREF</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-zocca-blue mb-6">
              Prazer, Luis Fernando <span className="text-gradient">(Zocca)</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Há mais de 10 anos transformando vidas através do treinamento personalizado em Itapira. 
              Minha missão é ajudar você a conquistar o corpo e a saúde que sempre desejou, 
              com uma metodologia que une ciência e experiência prática.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Especialista em emagrecimento, hipertrofia e qualidade de vida, 
              desenvolvi uma abordagem exclusiva que garante resultados rápidos e duradouros, 
              adaptada para cada perfil de aluno.
            </p>
            
            {/* Certificações */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-zocca-blue/5 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-zocca-blue">CREF 123456-P/SP</p>
              </div>
              <div className="bg-zocca-blue/5 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-zocca-blue">Especialista em Nutrição Esportiva</p>
              </div>
              <div className="bg-zocca-blue/5 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-zocca-blue">Treinamento Funcional</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5519999999999?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button inline-block"
            >
              Converse comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
