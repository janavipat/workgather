import { useState } from 'react';
import './style.css'; // Import CSS file for styling

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" >
        <button
          className={`accordion-button ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={onClick}
        >
          {title}
        </button>
      </h2>
      {isOpen && (
        <div className="accordion-collapse">
          <div className="accordion-body">{content}</div>
        </div>
      )}
    </div>
  );
};
export default AccordionItem;