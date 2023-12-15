const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__options">
        <a href="#home">
          <img src="assets/images/logo-bookmark-white-text.svg" alt="" />
        </a>
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
        <div className="footer__icons--facebook"></div>
        <div className="footer__icons--twitter"></div>
      </div>
    </footer>
  );
};

export default Footer;
