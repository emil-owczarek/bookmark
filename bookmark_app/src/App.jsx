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

const App = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

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

  return (
    <div>
      <Navigation isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      <Hero />
      <Introduction />
      <BurgerMenu isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      <Features />
      <Extensions />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
