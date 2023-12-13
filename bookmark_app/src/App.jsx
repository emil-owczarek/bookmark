import Extensions from './components/extensions/Extensions';
import Features from './components/features/Features';
import Hero from './components/hero/Hero';
import Introduction from './components/introduction/Introduction';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Introduction />
      <Features />
      <Extensions />
    </div>
  );
};

export default App;
