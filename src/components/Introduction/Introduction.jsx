import Button from '../Button/Button';

const Introduction = () => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">A Simple Bookmark Manager</h1>
      <p className="introduction__description">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="introduction__buttons">
        <Button
          addHref={'https://www.google.com/intl/pl_pl/chrome/'}
          text={'Get it on Chrome'}
          color={'blue'}
          addClass={'introduction'}
        />
        <Button
          addHref={'https://www.mozilla.org/pl/firefox/'}
          text={'Get it on Firefox'}
          color={'gray'}
          addClass={'introduction'}
        />
      </div>
    </div>
  );
};

export default Introduction;
