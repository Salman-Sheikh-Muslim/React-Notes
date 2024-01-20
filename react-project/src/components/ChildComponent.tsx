// ChildComponent.js
import React, { Dispatch, SetStateAction } from "react";

interface ChildComponentProps {
  setAlertVisibility: Dispatch<SetStateAction<boolean>>;
}

function ChildComponent({ setAlertVisibility }: ChildComponentProps) {
  const handleClick = () => {
    console.log("Button clicked");
    setAlertVisibility((prevValue) => !prevValue);
    //setAlertVisibility(true);
  };

  return (
    <button onClick={handleClick}>
      Click me to show alert in parent component
    </button>
  );
}

export default ChildComponent;
