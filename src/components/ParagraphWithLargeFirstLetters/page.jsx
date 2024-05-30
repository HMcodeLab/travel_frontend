import React from 'react';
import './paragraph.css';

const Cap = ({ text }) => {
  return (
    <p className="formatted-paragraph">
      {[...text].map((char, index) => (
        <span key={index}>
          {index === 0 || text[index - 1] === ' ' ? (
            <span className="first-letter">{char}</span>
          ) : (
            char
          )}
        </span>
      ))}
    </p>
  );
};

export default Cap;

                                             