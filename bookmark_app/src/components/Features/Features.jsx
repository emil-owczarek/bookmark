import { useState } from 'react';
import { featuresData } from './featuresData';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0].title);

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

      <div className="features__image-container">
        <div className="features__bubble"></div>
        {activeFeatureData && (
          <img
            className="features__image"
            src={activeFeatureData.imgUrl}
            alt={activeFeatureData.title}
          />
        )}
      </div>

      {activeFeatureData && (
        <>
          <h2 className="features__title">{activeFeatureData.subTitle}</h2>
          <p className="features__description">
            {activeFeatureData.description}
          </p>
        </>
      )}
    </section>
  );
};

export default Features;
