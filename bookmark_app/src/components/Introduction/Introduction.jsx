const Introduction = () => {
  return (
    <div className="introduction" id="home">
      <h1 className="introduction__title">A Simple Bookmark Manager</h1>
      <p className="introduction__description">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="introduction__buttons">
        <a
          className="introduction__button introduction__button--blue"
          href="https://www.google.com/intl/pl_pl/chrome/"
        >
          Get it on Chrome
        </a>
        <a
          className="introduction__button introduction__button--white"
          href="https://www.mozilla.org/pl/firefox/"
        >
          Get it on Firefox
        </a>
      </div>
    </div>
  );
};

export default Introduction;
