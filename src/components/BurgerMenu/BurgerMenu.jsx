const BurgerMenu = ({ isMenuActive, toggleMenu }) => {
  return (
    <>
      <menu className={`menu ${isMenuActive ? 'visible' : ''}`}>
        <div className="menu__logo-container">
          <img
            src="assets/images/logo-bookmark-white-icon.svg"
            alt="bookmark logo"
          />
          <img
            onClick={toggleMenu}
            src="assets/icons/icon-close.svg"
            alt="menu icon"
          />
        </div>
        <nav className="menu__navigation">
          <ul className="menu__navigation-list">
            <li onClick={toggleMenu} className="menu__navigation-element">
              <a className="menu__navigation-link" href="#features">
                Features
              </a>
            </li>
            <li onClick={toggleMenu} className="menu__navigation-element">
              <a className="menu__navigation-link" href="#extensions">
                Pricing
              </a>
            </li>
            <li onClick={toggleMenu} className="menu__navigation-element">
              <a className="menu__navigation-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleMenu} className="menu__button">
          Login
        </button>
        <div className="menu__icons">
          <a href="https://www.confilogiteam.com/">
            <img src="assets/icons/icon-facebook.svg" alt="facebook logo" />
          </a>
          <a href="https://www.confilogiteam.com/">
            <img src="assets/icons/icon-twitter.svg" alt="twitter logo" />
          </a>
        </div>
      </menu>
    </>
  );
};

export default BurgerMenu;
