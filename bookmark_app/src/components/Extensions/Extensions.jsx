import BrowserCard from '../BrowserCard/BrowserCard';
import { extensionData } from './extensionsData';

const Extensions = () => {
  return (
    <section className="extensions" id="extensions">
      <h2 className="extensions__title">Download the extension</h2>
      <p className="extensions__description">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="cards-container">
        {extensionData.map((extension) => (
          <BrowserCard
            key={extension.id}
            browserName={extension.browserName}
            imgSrc={extension.imgSrc}
            version={extension.version}
          />
        ))}
      </div>
    </section>
  );
};

export default Extensions;
