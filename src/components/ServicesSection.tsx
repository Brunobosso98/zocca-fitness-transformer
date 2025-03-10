
import React from 'react';
import ServiceCard from './ServiceCard';
import { DumbbellIcon, NutritionIcon, MobileIcon, GroupIcon, CheckmarkIcon } from './Icons';

const ServicesSection = () => {
  const services = [
    {
      title: 'Treino Personalizado',
      description: 'Programas exclusivos para seus objetivos, seja presencial ou online.',
      icon: <DumbbellIcon className="w-8 h-8" />,
      delay: 100
    },
    {
      title: 'Planos Nutricionais',
      description: 'Orientação alimentar personalizada para maximizar seus resultados.',
      icon: <NutritionIcon className="w-8 h-8" />,
      delay: 200
    },
    {
      title: 'Acompanhamento 24h',
      description: 'Suporte contínuo via aplicativo para manter sua motivação.',
      icon: <MobileIcon className="w-8 h-8" />,
      delay: 300
    },
    {
      title: 'Treinos para Grupos',
      description: 'Sessões especiais para casais e amigos com preços diferenciados.',
      icon: <GroupIcon className="w-8 h-8" />,
      delay: 400
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-zocca-gray relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
      
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Como posso te ajudar?</h2>
          <p className="section-subtitle">
            Metodologia exclusiva, focada em resultados duradouros e saudáveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        {/* Selo de diferencial */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-full shadow-lg py-4 px-8 flex items-center gap-3 animate-pulse-subtle">
            <div className="w-10 h-10 rounded-full bg-zocca-orange/10 flex items-center justify-center text-zocca-orange">
              <CheckmarkIcon className="w-6 h-6" />
            </div>
            <p className="text-zocca-blue font-poppins font-bold">100% focado em seus resultados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
