import React from "react";

interface ButtonsProp {
  bType: string;
  class1: string;
  class2: string[];
  display: string[];
}

function ButtonListGroup({ bType, class1, class2, display }: ButtonsProp) {
  const generateButtons = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <button
        key={index}
        type={
          bType === "submit" ||
          bType === "button" ||
          bType === "reset" ||
          bType === undefined
            ? bType
            : undefined
        }
        className={class1 + " " + class2[index] + " me-2 mt-3"}
      >
        {display[index]}
      </button>
    ));
  };

  const buttonCount = 5; // Adjust this to the desired number of buttons
  const buttons = generateButtons(buttonCount);

  return <>{buttons}</>;
}

export default ButtonListGroup;
