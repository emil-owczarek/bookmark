const Navigation = ({ toggleMenu }) => {
  return (
    <div className="navigation" id="home">
      <a href=".">
        <img src="assets/images/logo-bookmark.svg" alt="bookmark logo" />
      </a>

      <div>
        <ul className="navigation__options">
          <li>
            <a href="#features" className="navigation__option">
              Features
            </a>
          </li>
          <li>
            <a href="#extensions" className="navigation__option">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="navigation__option">
              Contact
            </a>
          </li>
          <li>
            <button className="navigation__button">Login</button>
          </li>
        </ul>
      </div>
      <img
        className="navigation__burger-icon"
        onClick={toggleMenu}
        src="assets/icons/icon-hamburger.svg"
        alt="menu icon"
      />
    </div>
  );
};

export default Navigation;
