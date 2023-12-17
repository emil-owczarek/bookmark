import Accordion from '../Accordion/Accordion';
import Button from '../Button/Button';

const FAQ = () => {
  return (
    <div className="questions">
      <h2 className="questions__title">Frequently Asked Questions</h2>
      <p className="questions__description">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <Accordion />
      <Button text={'More info'} color={'blue'} addClass={'faq'} />
    </div>
  );
};

export default FAQ;
