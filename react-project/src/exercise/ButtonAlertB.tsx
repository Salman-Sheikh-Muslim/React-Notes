import React from "react";
import CreateAlert from "./ButtonAlertA";
import { useState } from "react";

function CreateButton() {
  const [alertVisible, setAlertVisible] = useState(true);
  console.log(
    "B alertVisible = " +
      alertVisible +
      " , setAlertVisible = " +
      setAlertVisible
  );

  const handleButtonClick = () => {
    console.log("B - Blue Button Clicked \n Function Called handleButtonClick");
    setAlertVisible(true);
  };

  return (
    <div>
      {/* CreateAlert component is being rendered because it uses alertVisible value as a prop which is a state variable. */}
      <CreateAlert
        visible={alertVisible}
        onClose={() => {
          console.log(
            "B Recieving values from A. \n alertVisible = " +
              alertVisible +
              " setAlertVisible = " +
              setAlertVisible
          );

          setAlertVisible(false);

          console.log(
            "Returned back To B \n alertVisible = " +
              alertVisible +
              " setAlertVisible = " +
              setAlertVisible
          );
        }}
      />
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Button
      </button>
    </div>
  );
}

export default CreateButton;

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
