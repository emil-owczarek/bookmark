import Accordion from '../Accordion/Accordion';

const FAQ = ({ setModalOpen }) => {
  return (
    <div className="questions">
      <h2 className="questions__title">Frequently Asked Questions</h2>
      <p className="questions__description">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <Accordion />
      <button className="questions__button" onClick={setModalOpen}>
        More Info
      </button>
    </div>
  );
};

export default FAQ;
