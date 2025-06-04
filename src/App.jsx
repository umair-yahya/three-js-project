// App.jsx
import React, { useRef, useEffect, useState } from 'react';
import animationData3d from './assets/3d-icon.json';
import animationDataVFX from './assets/vfx-icon.json';
import CustomCursor from '../src/components/CustomCursor';
import Navbar from '../src/components/Navbar';
import LandingSection from '../src/components/LandingSection';
import AboutSection from '../src/components/AboutSection';
import ServicesSection from '../src/components/ServicesSection';
import PortfolioSection from '../src/components/PortfolioSection';
import './App.css'; 
import ContactsSection from './components/ContactsSection';

const App = () => {
  const canvasRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lottieOptions3d = {
    loop: true,
    autoplay: true,
    animationData: animationData3d,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieOptionsVFX = {
    loop: true,
    autoplay: true,
    animationData: animationDataVFX,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar scrollProgress={scrollProgress} />

      <LandingSection canvasRef={canvasRef} sectionRef={homeRef} />
      <AboutSection sectionRef={aboutRef} />
      <ServicesSection
        sectionRef={servicesRef}
        lottieOptions3d={lottieOptions3d}
        lottieOptionsVFX={lottieOptionsVFX}
      />
      <PortfolioSection sectionRef={portfolioRef} />
      <ContactsSection sectionRef={contactRef} />
    </>
  );
};

export default App;