import Button from '../Button/Button';

const BrowserCard = ({ browserName, imgSrc, version, index, address }) => {
  return (
    <div className={`card card--${index + 1}`}>
      <img className="card__image" src={imgSrc} alt="opera logo" />
      <h3 className="card__title">Add to {browserName}</h3>
      <p className="card__version-note">Minimum version {version}</p>
      <img
        className="card__dots"
        src="assets/icons/bg-dots.svg"
        alt="small gray dots"
      />
      <Button
        addHref={address}
        text={'Add & Install Extension'}
        color={'blue'}
        addClass={'faq'}
      />
    </div>
  );
};

export default BrowserCard;
