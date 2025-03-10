
import React, { useState } from 'react';
import { WhatsappIcon, PhoneIcon } from './Icons';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', whatsapp: '', message: '' });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-zocca-gray relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-zocca-blue" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Vamos começar sua transformação?</h2>
          <p className="section-subtitle">
            Entre em contato agora mesmo e agende sua avaliação gratuita
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zocca-blue mb-2">Mensagem enviada!</h3>
                <p className="text-gray-600">Em breve entrarei em contato com você.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zocca-blue focus:border-zocca-blue transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zocca-blue focus:border-zocca-blue transition-all duration-300"
                      placeholder="(19) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zocca-blue focus:border-zocca-blue transition-all duration-300"
                      placeholder="Conte-me seu objetivo (ex: perder peso, ganhar massa muscular, melhorar condicionamento)"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full primary-button flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      'Enviar mensagem'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-zocca-blue mb-6">Outros canais de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zocca-orange/10 flex items-center justify-center text-zocca-orange flex-shrink-0">
                    <WhatsappIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-zocca-blue">WhatsApp</p>
                    <a 
                      href="https://wa.me/5519999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-zocca-orange transition-colors"
                    >
                      (19) 99999-9999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zocca-blue/10 flex items-center justify-center text-zocca-blue flex-shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-zocca-blue">Telefone</p>
                    <a 
                      href="tel:+5519999999999"
                      className="text-gray-600 hover:text-zocca-orange transition-colors"
                    >
                      (19) 99999-9999
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-zocca-blue mb-4">Localização</h3>
              <p className="text-gray-600 mb-4">Atendimento em Itapira/SP</p>
              <div className="rounded-lg overflow-hidden h-48 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29536.179577929656!2d-46.83599694263646!3d-22.44184126693741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8fe07424e535f%3A0xfb69dbc98441634c!2sItapira%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1715124149221!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
