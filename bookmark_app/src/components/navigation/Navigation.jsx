import logo from '../../assets/images/logo-bookmark.svg';
import burger from '../../assets/icons/icon-hamburger.svg';

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="bookmark logo" />
      <img src={burger} alt="menu icon" />
    </div>
  );
};

export default Navigation;
