import React from "react";

let count = 0;

function UnexpectedOutput() {
  //Start Rendering Phase
  console.log("Before increment =" + count);
  count++; //updating the count variable as part of rendering this component
  console.log("After increment =" + count);
  return <div>Impure Components {count}</div>; //Shows 2 4 6
  //We are getting an unexpectd output due to the StrictMode
} //End Rendering Phase

export default UnexpectedOutput;
