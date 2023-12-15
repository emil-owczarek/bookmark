import { useEffect } from 'react';
import { featuresData } from '../Features/featuresData';

const Modal = ({ isModalOpen, setModalOpen, activeFeature }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [setModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const activeFeatureData = featuresData.find(
    (feature) => feature.title === activeFeature
  );

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="modal__close-button"
          onClick={() => setModalOpen(false)}
        >
          X
        </button>
        <div className="modal-container">
          <div className="modal-hero">
            <div className="modal__image-container">
              <div>
                {activeFeatureData && (
                  <img
                    className="modal__image"
                    src={activeFeatureData.imgUrl}
                    alt={activeFeatureData.title}
                  />
                )}
              </div>

              <div className="modal__bubble"></div>
            </div>
          </div>

          {activeFeatureData && (
            <div className="modal__container">
              <h2 className="features__title">{activeFeatureData.subTitle}</h2>
              <p className="features__description">
                {activeFeatureData.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
