import Extensions from './components/Extensions/Extensions';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Navigation from './components/Navigation/Navigation';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Introduction />
      <Features />
      <Extensions />
      <FAQ />
      <Contact />
    </div>
  );
};

export default App;
