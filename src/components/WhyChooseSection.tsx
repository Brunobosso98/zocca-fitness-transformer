
import React, { useEffect, useState, useRef } from 'react';
import { 
  CheckIcon, 
  HeartIcon, 
  ClockIcon, 
  AwardIcon, 
  BrainIcon, 
  ZapIcon 
} from './Icons';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay, 
  isVisible 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
  isVisible: boolean;
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 delay-${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center bg-zocca-orange/10 rounded-full text-zocca-orange transform transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-zocca-blue mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AnimatedNumber = ({ 
  value, 
  suffix, 
  label, 
  isVisible 
}: { 
  value: number; 
  suffix?: string; 
  label: string;
  isVisible: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const incrementAmount = value / 50;
      const timer = setInterval(() => {
        start += incrementAmount;
        if (start > value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 30);

      return () => {
        clearInterval(timer);
      };
    }
  }, [value, isVisible]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold text-zocca-orange mb-2 flex items-end">
        {displayValue}
        <span className="text-2xl ml-1">{suffix}</span>
      </div>
      <p className="text-white text-center">{label}</p>
    </div>
  );
};

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTrigger, setActiveTrigger] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveTrigger((prev) => (prev % 3) + 1);
      }, 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isVisible]);

  const features = [
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Atendimento Personalizado",
      description: "Treinos adaptados para seu corpo, objetivos e limitações, garantindo resultados mais rápidos.",
      delay: 100
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Acompanhamento 24h",
      description: "Suporte contínuo via WhatsApp para tirar dúvidas e manter sua motivação em alta.",
      delay: 200
    },
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "Metodologia Exclusiva",
      description: "Combinação única de técnicas baseadas em ciência para maximizar resultados em menos tempo.",
      delay: 300
    },
    {
      icon: <AwardIcon className="w-6 h-6" />,
      title: "Profissional Certificado",
      description: "CREF ativo e diversas especializações em treinamento e nutrição esportiva.",
      delay: 400
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Resultados Garantidos",
      description: "Compromisso com seus objetivos, com planos ajustados constantemente para garantir progresso.",
      delay: 500
    },
    {
      icon: <CheckIcon className="w-6 h-6" />,
      title: "Experiência Comprovada",
      description: "Centenas de alunos transformados em Itapira, com resultados documentados e depoimentos reais.",
      delay: 600
    }
  ];

  return (
    <section id="why-choose" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-zocca-blue via-zocca-blue to-zocca-lightblue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-zocca-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-zocca-orange/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            Por que escolher o <span className="text-zocca-orange">Zocca</span>?
          </h2>
          <p className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto transition-all duration-700 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            Um método exclusivo que combina ciência, experiência e dedicação para transformar seu corpo e sua vida
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* 3D Interactive Element */}
        <div className={`relative h-80 my-16 bg-zocca-blue/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-zocca-blue/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Método Z-Transform
              </h3>
              <p className="text-white/80 mb-6">
                Uma abordagem única desenvolvida ao longo de 10 anos, combinando princípios de treinamento 
                de elite e nutrição precisa para resultados surpreendentes.
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTrigger(1)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTrigger === 1 
                      ? 'bg-zocca-orange text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Treino
                </button>
                <button 
                  onClick={() => setActiveTrigger(2)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTrigger === 2 
                      ? 'bg-zocca-orange text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Nutrição
                </button>
                <button 
                  onClick={() => setActiveTrigger(3)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTrigger === 3 
                      ? 'bg-zocca-orange text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Mindset
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-6 flex items-center justify-center">
              <div className={`transition-all duration-500 transform ${
                activeTrigger === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 absolute'
              }`}>
                {activeTrigger === 1 && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-3">Treinamento Periodizado</h4>
                    <ul className="text-white/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Protocolos exclusivos de alta intensidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Progressão de carga científica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Técnicas avançadas de hipertrofia</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className={`transition-all duration-500 transform ${
                activeTrigger === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 absolute'
              }`}>
                {activeTrigger === 2 && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-3">Nutrição Estratégica</h4>
                    <ul className="text-white/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Planos flexíveis e personalizados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Ajustes baseados em resultados semanais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Suplementação inteligente quando necessária</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className={`transition-all duration-500 transform ${
                activeTrigger === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 absolute'
              }`}>
                {activeTrigger === 3 && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-3">Transformação Mental</h4>
                    <ul className="text-white/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Coaching de hábitos e rotina</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Motivação constante e apoio diário</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-zocca-orange flex-shrink-0 mt-0.5" />
                        <span>Estabelecimento de metas progressivas</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <AnimatedNumber value={500} suffix="+" label="Alunos transformados" isVisible={isVisible} />
          <AnimatedNumber value={10} suffix="+" label="Anos de experiência" isVisible={isVisible} />
          <AnimatedNumber value={96} suffix="%" label="Taxa de satisfação" isVisible={isVisible} />
          <AnimatedNumber value={30} label="Dias para primeiros resultados" isVisible={isVisible} />
        </div>
        
        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <a 
            href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20método%20Z-Transform."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zocca-orange hover:bg-zocca-orange/90 text-white font-poppins font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Quero conhecer o método Z-Transform</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
