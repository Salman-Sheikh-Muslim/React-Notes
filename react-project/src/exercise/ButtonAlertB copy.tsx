import React from "react";
import CreateAlertCopy from "./ButtonAlertA copy";
import { useState } from "react";

function CreateButtonCopy() {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleButtonClick = () => {
    setAlertVisible(true);
  };
  return (
    <>
      <div>
        {/* CreateAlert component is being rendered because it uses alertVisible value as a prop which is a state variable. */}
        <CreateAlertCopy
          visible={alertVisible}
          setAlertVisible={setAlertVisible}
        ></CreateAlertCopy>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Button
        </button>
      </div>
    </>
  );
}

export default CreateButtonCopy;

/*
interface Clicked {
  onClick: () => void;
}

function CreateButton({ onClick }: Clicked) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Button
    </button>
  );
}

export default CreateButton;
*/
