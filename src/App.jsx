import Extensions from './components/Extensions/Extensions';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Navigation from './components/Navigation/Navigation';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import { featuresData } from './components/Features/featuresData';

const App = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeFeature, setActiveFeature] = useState(featuresData[0].title);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuActive]);

  const handleMouseMove = (event) => {
    if (event.clientY <= 10) {
      setModalOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <Navigation isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      <div className="hero-wrapper">
        <Hero />
        <Introduction />
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        activeFeature={activeFeature}
      />
      <BurgerMenu isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      <Features
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
        setModalOpen={setModalOpen}
      />
      <Extensions />
      <FAQ setModalOpen={setModalOpen} />
      <div className="footer-wrapper">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
