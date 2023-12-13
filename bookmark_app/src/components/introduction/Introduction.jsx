const Introduction = () => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">A Simple Bookmark Manager</h1>
      <p className="introduction__description">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="introduction__buttons">
        <a
          className="introduction__button introduction__button--blue"
          href="www"
        >
          Get it on Chrome
        </a>
        <a
          className="introduction__button introduction__button--white"
          href="www"
        >
          Get it on Firefox
        </a>
      </div>
    </div>
  );
};

export default Introduction;
