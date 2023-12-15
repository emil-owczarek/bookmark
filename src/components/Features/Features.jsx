import { featuresData } from './featuresData';

const Features = ({ activeFeature, setActiveFeature, setModalOpen }) => {
  const handleFeatureClick = (featureName) => {
    setActiveFeature(featureName);
  };

  const activeFeatureData = featuresData.find(
    (feature) => feature.title === activeFeature
  );

  return (
    <section className="features" id="features">
      <h2 className="features__title">Features</h2>
      <p className="features__description">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="features__options">
        {featuresData.map((feature) => (
          <button
            key={feature.id}
            className={`features__option ${
              activeFeature === feature.title ? 'active' : ''
            }`}
            onClick={() => handleFeatureClick(feature.title)}
          >
            {feature.title}
          </button>
        ))}
      </div>
      <div className="features-container">
        <div className="hero">
          <div className="features__image-container">
            <div>
              {activeFeatureData && (
                <img
                  className="features__image"
                  src={activeFeatureData.imgUrl}
                  alt={activeFeatureData.title}
                />
              )}
            </div>

            <div className="features__bubble"></div>
          </div>
        </div>

        {activeFeatureData && (
          <div className="feature__container">
            <h2 className="features__title">{activeFeatureData.subTitle}</h2>
            <p className="features__description">
              {activeFeatureData.description}
            </p>
            <button className="features__button" onClick={setModalOpen}>
              More Info
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
