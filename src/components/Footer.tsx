
import React from 'react';
import { WhatsappIcon, InstagramIcon, YoutubeIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zocca-blue text-white pt-12 pb-6 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/10">
          {/* Logo and Description */}
          <div>
            <a href="#" className="text-white font-poppins font-bold text-xl inline-block mb-4">
              Zocca <span className="text-zocca-orange">•</span> Personal Trainer
            </a>
            <p className="text-white/70 mb-6">
              Transformando vidas através do treinamento personalizado em Itapira.
              Sua saúde e bem-estar são nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/zocca.personal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-zocca-orange transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://youtube.com/@zoccapersonal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-zocca-orange transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a 
                href="https://wa.me/5519999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-zocca-orange transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#results" className="text-white/70 hover:text-white transition-colors">Resultados</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Comece sua transformação</h3>
            <p className="text-white/70 mb-4">
              Agende uma avaliação gratuita e descubra como posso te ajudar a atingir seus objetivos.
            </p>
            <a
              href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto primary-button inline-flex items-center justify-center gap-2"
            >
              <WhatsappIcon className="w-5 h-5" />
              <span>AGENDAR AVALIAÇÃO GRATUITA</span>
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/10 rounded-full px-4 py-2 inline-block">
              <p className="text-xs text-white/70">Seus dados estão protegidos</p>
            </div>
          </div>
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Zocca Personal Trainer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
