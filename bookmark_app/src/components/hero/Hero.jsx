import hero from '../../assets/images/illustration-hero.svg';

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero__image" src={hero} alt="user interface example" />
      <div className="hero__bubble"></div>
    </div>
  );
};

export default Hero;
