
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ResultsSection from '../components/ResultsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulating loading state for smoother animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    // Optional: Implement scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
