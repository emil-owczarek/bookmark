import React, { useState } from 'react';
import { faqData } from '../FAQ/faqData';

const Accordion = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const toggleAccordion = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {faqData.map((faq) => (
          <div
            className="accordion-panel"
            key={faq.id}
            onClick={() => toggleAccordion(faq.id)}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <h2>
                <button
                  className="accordion-trigger"
                  aria-expanded={openPanel === faq.id}
                >
                  {faq.question}
                </button>
              </h2>
              <img
                style={{ cursor: 'pointer' }}
                src={
                  openPanel === faq.id
                    ? 'assets/icons/icon-arrow-close.svg'
                    : 'assets/icons/icon-arrow.svg'
                }
                alt=""
              />
            </div>

            <div
              className="accordion-content"
              role="region"
              aria-hidden={openPanel !== faq.id}
            >
              <div>
                <p className="answer">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
