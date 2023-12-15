import { useEffect, useId, useState } from 'react';

const Contact = () => {
  const [number, setNumber] = useState(35000);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber > 0) {
          return prevNumber - 7;
        }
        clearInterval(interval);
        return 0;
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    email: '',
  });

  const [isValid, setIsValid] = useState(true);

  const id = useId();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    setIsValid(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.email.includes('@') && formData.email !== '') {
      setIsValid(true);
      console.log(formData);
      setFormData({ email: '' });
    } else {
      setIsValid(false);
    }
  }

  const inputClassName = `contact__input ${
    !isValid ? 'contact__input--invalid' : ''
  }`;

  const errorClassName = `contact__error ${
    isValid ? 'contact__error--hidden' : ''
  }`;

  return (
    <section className="contact" id="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        <p className="contact__description">
          {number ? `${number}+ ALREADY JOINED` : 'No one has joined yet!'}
        </p>
        <h3 className="contact__title">
          Stay up-to-date with what we're doing
        </h3>
        <div className="contact__form-container">
          <div className="contact__input-container">
            {/* <label htmlFor={id}>Email</label> */}
            <input
              className={inputClassName}
              onChange={handleChange}
              //   type="email"
              placeholder="owczarekemil@gmail.com"
              name="email"
              value={formData.email}
              id={id}
              autoComplete="true"
              //   required
            />

            <div className={errorClassName}>
              Whoops, make sure it's an email
            </div>
          </div>

          <button className="contact__button">Contact Us</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
