const Button = ({ text, color, addClass, addOnClick, addHref }) => {
  if (addHref) {
    return (
      <a
        href={addHref}
        onClick={addOnClick}
        className={`button button--${addClass} button--${color}`}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        onClick={addOnClick}
        className={`button button--${addClass} button--${color}`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
