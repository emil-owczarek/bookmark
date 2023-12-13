import { useId, useState } from 'react';

const Contact = () => {
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
        <p className="contact__description">35.000+ ALREADY JOINED</p>
        <h3 className="contact__title">
          Stay up-to-date with what we're doing
        </h3>
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

        <div className={errorClassName}>Whoops, make sure it's an email</div>

        <button className="contact__button">Contact Us</button>
      </form>
    </section>
  );
};

export default Contact;
