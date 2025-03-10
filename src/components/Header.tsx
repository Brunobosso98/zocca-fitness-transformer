
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Resultados', href: '#results' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-blur-effect' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-zocca-blue font-poppins font-bold text-xl md:text-2xl animate-fade-in">
            Zocca <span className="text-zocca-orange">•</span> Personal Trainer
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-zocca-blue font-poppins font-medium hover:text-zocca-orange transition-all duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-zocca-orange after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita."
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-button flex items-center"
            >
              AGENDAR AVALIAÇÃO
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-zocca-blue hover:text-zocca-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 pt-20 px-4 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
        >
          <div className="flex flex-col space-y-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-zocca-blue font-poppins font-medium hover:text-zocca-orange transition-all duration-300 text-lg"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita."
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="primary-button inline-block text-center"
            >
              AGENDAR AVALIAÇÃO GRATUITA
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
