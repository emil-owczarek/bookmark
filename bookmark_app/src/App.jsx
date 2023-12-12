import Hero from './components/hero/Hero';
import Introduction from './components/introduction/introduction';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Introduction />
    </div>
  );
};

export default App;
