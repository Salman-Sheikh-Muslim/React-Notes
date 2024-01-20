import React from "react";

interface ButtonsProp {
  bType: "submit" | "button" | "reset" | undefined;
  class1: string;
  class2: string[];
  display: string[];
}

function ButtonListGroup({
  bType,
  class1,
  class2 = ["Default"],
  display = ["Default"],
}: ButtonsProp) {
  return (
    <>
      {/* <button type="button" className={class1 + " " + class2}>
        {display}
      </button> */}
      {class2.map((class2Val, index) => (
        <button
          key={index}
          type={
            // bType === "submit" ||
            // bType === "button" ||
            // bType === "reset" ||
            // bType === undefined
            // ?
            bType
            // : undefined
          }
          className={class1 + " " + class2Val + " me-2 mt-3"}
        >
          {display[index]}
        </button>
      ))}
    </>
  );
}

export default ButtonListGroup;

/*
function App() {
  
    const bTypeValue = "button";
    const class1Value = "btn";
    let class2Value = [
      "btn-primary",
      "btn-secondary",
      "btn-success",
      "btn-danger",
      "btn-warning",
      "btn-info",
      "btn-light",
      "btn-dark",
    ];
    let displayValue = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];

    return (
      <div>
        <ButtonListGroup
          bType={bTypeValue}
          class1={class1Value}
          class2={class2Value}
          display={displayValue}
        ></ButtonListGroup>
      </div>
    );
  }
  
  export default App;
  */
