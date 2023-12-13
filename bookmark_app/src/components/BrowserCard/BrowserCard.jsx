const BrowserCard = ({ browserName, imgSrc, version }) => {
  return (
    <div className="cards">
      <div className="card">
        <img className="card__image" src={imgSrc} alt="opera logo" />
        <h3 className="card__title">Add to {browserName}</h3>
        <p className="card__version-note">Minimum version {version}</p>
        <img className="card__dots" src="assets/icons/bg-dots.svg" alt="" />
        <a className="card__button" href="www">
          Add & Install Extension
        </a>
      </div>
    </div>
  );
};

export default BrowserCard;
