const Navigation = ({ toggleMenu }) => {
  return (
    <div className="navigation">
      <img src="assets/images/logo-bookmark.svg" alt="bookmark logo" />
      <img
        onClick={toggleMenu}
        src="assets/icons/icon-hamburger.svg"
        alt="menu icon"
      />
    </div>
  );
};

export default Navigation;
