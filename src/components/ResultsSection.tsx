
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('results');
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

  const testimonials = [
    {
      name: 'Ana Silva',
      age: 28,
      quote: 'Perdi 12kg em 3 meses com o método do Zocca! A abordagem personalizada fez toda diferença.',
      image: {
        before: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&w=600&q=80',
        after: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80'
      },
      results: '-12kg',
      delay: 100
    },
    {
      name: 'Carlos Mendes',
      age: 35,
      quote: 'Depois de anos tentando, finalmente consegui ganhar massa muscular com os treinos do Zocca.',
      image: {
        before: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=600&q=80',
        after: 'https://images.unsplash.com/photo-1583500557349-fb5238f8d946?auto=format&fit=crop&w=600&q=80'
      },
      results: '+8kg',
      delay: 200
    },
    {
      name: 'Mariana Costa',
      age: 42,
      quote: 'O acompanhamento 24h fez toda diferença. Mesmo com minha rotina corrida, consegui atingir meus objetivos.',
      image: {
        before: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
        after: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80'
      },
      results: '-10%G',
      delay: 300
    },
  ];

  return (
    <section id="results" className="py-20 md:py-32 bg-gradient-to-b from-zocca-blue to-zocca-blue/90 text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className={`section-container relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Veja quem já mudou de vida com o Zocca
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Resultados reais de pessoas como você que transformaram seus corpos e suas vidas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              age={testimonial.age}
              quote={testimonial.quote}
              image={testimonial.image}
              results={testimonial.results}
              delay={testimonial.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5519999999999?text=Olá!%20Vi%20os%20resultados%20no%20seu%20site%20e%20quero%20começar%20minha%20transformação."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-zocca-blue font-poppins font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Quero transformar meu corpo também
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
