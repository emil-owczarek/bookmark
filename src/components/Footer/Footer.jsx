const Footer = () => {
  return (
    //   "homepage": "https://emil-owczarek.github.io/bookmark",
    <footer className="footer">
      <ul className="footer__options">
        <li>
          <a href="#home">
            <img
              src="assets/images/logo-bookmark-white-text.svg"
              alt="Bookmark Home"
            />
          </a>
        </li>

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
        <a href="https://www.confilogiteam.com/" aria-label="facebook icon">
          <div className="footer__icons--facebook"></div>
        </a>
        <a href="https://www.confilogiteam.com/" aria-label="twitter icon">
          <div className="footer__icons--twitter"></div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
