
import React, { useEffect, useState } from 'react';
import { WhatsappIcon } from './Icons';

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', showButton);
    
    // Initial check
    showButton();

    return () => {
      window.removeEventListener('scroll', showButton);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <a
        href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-zocca-orange hover:bg-zocca-orange/90 text-white font-poppins font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
      >
        <WhatsappIcon className="w-5 h-5" />
        <span className="hidden sm:inline">AGENDAR AVALIAÇÃO GRATUITA</span>
        <span className="inline sm:hidden">AGENDAR</span>
      </a>
    </div>
  );
};

export default FloatingButton;
