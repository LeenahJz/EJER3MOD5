
import React from 'react';
import DOMPurify from 'dompurify';

const SomeComponent = ({ userInput }) => {
  const sanitizedInput = DOMPurify.sanitize(userInput); // Sanitize user input

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedInput }} />
  );
};

export default SomeComponent;