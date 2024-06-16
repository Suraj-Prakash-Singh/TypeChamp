import React, { useState, useEffect, useRef } from 'react';

const Test = () => {
  const targetText = 'form system aroundd wouldd or should person they keep after no day under';
  const [userInput, setUserInput] = useState('');
  const [caretPosition, setCaretPosition] = useState(-1);
  const divRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;
      console.log("presed: ", key);
      const newInput = userInput + key;
      const expectedChar = targetText[caretPosition+1];

      if (key === expectedChar) {
        setUserInput(newInput);
        setCaretPosition(caretPosition + 1);
      } else {
        // Handle incorrect input if needed
      }
    };

    const div = divRef.current;
    div.addEventListener('keydown', handleKeyDown);

    return () => {
      div.removeEventListener('keydown', handleKeyDown);
    };
  }, [userInput, caretPosition]);

  useEffect(() => {
    const div = divRef.current;
    div.focus();
  }, []);

  const renderText = () => {
    const textElements = targetText.split('').map((char, index) => {
      let charStyle = { color: 'white' };

      if (index < caretPosition) {
        charStyle.color = userInput[index] === char ? 'green' : 'red';
      } else if (index === caretPosition) {
        charStyle.color = 'blue'; // Caret color
      }

      return <span key={index} style={charStyle}>{char}</span>;
    });

    return textElements;
  };

  return (
    <div className='font-jetbrains flex items-center justify-center absolute top-[500%] left-[3%] text-justify'>
      <div
        className='text-3xl'
        ref={divRef}
        tabIndex={0}
        onKeyDown={(e) => e.preventDefault()}
        style={{ outline: 'none' }}
      >
        {renderText()}
      </div>
    </div>
  );
};

export default Test;