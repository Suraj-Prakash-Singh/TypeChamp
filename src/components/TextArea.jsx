import React, { useState, useEffect, useRef } from "react";

const TextArea = () => {
  const targetText = "The quick brown fox jumps over the lazy dog.";
  const [userInput, setUserInput] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);
  const [accuracy, setAccuracy] = useState(1);
  const divRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;
      const newInput = userInput + key;
      if(key === targetText[caretPosition]){
        setAccuracy(accuracy + 1);
      }
      setUserInput(newInput);
      setCaretPosition(caretPosition + 1);
    };

    const div = divRef.current;
    div.addEventListener("keydown", handleKeyDown);

    return () => {
      div.removeEventListener("keydown", handleKeyDown);
    };
  }, [userInput, caretPosition]);

  useEffect(() => {
    const div = divRef.current;
    div.focus();
  }, []);

  const renderText = () => {
    const textElements = targetText
      .toLowerCase()
      .split("")
      .map((char, index) => {
        let charStyle = { color: "gray" };

        if (index < caretPosition) {
          charStyle.color =
            userInput[index].toLowerCase() === char ? "#90EE90" : " #FF5733 ";
        }

        return (
          <span key={index} style={charStyle}>
            {char}
          </span>
        );
      });

    return textElements;
  };

  const handleReset = () => {
    setUserInput("");
    setCaretPosition(0);
    divRef.current.focus();
  }

  console.log("total chars: ", targetText.length);
  console.log("correctly typed texts: ", accuracy);
  console.log("accuracy percentage: ", (accuracy / targetText.length) * 100);
  return (
    <div className="font-jetbrains flex-row justify-center items-center mt-14 w-full">
      <div
        className="text-xl font-bold w-full text-center"
        ref={divRef}
        tabIndex={0}
        onKeyDown={(e) => e.preventDefault()}
        style={{ outline: "none" }}
      >
        {renderText()}
      </div>
      <div className="w-full h-max flex items-center justify-center mt-40">
        <button className="bg-[#854091] text-white px-4 py-2 rounded-sm text-sm"
                onClick={handleReset}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default TextArea;
