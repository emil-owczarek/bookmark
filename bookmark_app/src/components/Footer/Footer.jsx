const Footer = () => {
  return (
    <footer className="footer">
      <a href="#home">
        <img src="assets/images/logo-bookmark-white-text.svg" alt="" />
      </a>
      <ul className="footer__options">
        <li>
          <a href="#features" className="footer__option">
            Features
          </a>
        </li>
        <li>
          <a href="#extensions" className="footer__option">
            Pricing
          </a>
        </li>
        <li>
          <a href="#contact" className="footer__option">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__icons">
        <img src="assets/icons/icon-facebook.svg" alt="" />
        <img src="assets/icons/icon-twitter.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
