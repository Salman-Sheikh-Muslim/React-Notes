import React from "react";
import { useState } from "react";

function UpdatingUseStateObjects() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  /*
"When dealing with state objects and arrays in React, you should remember to treat 
them as immutable or read-only."
  */
  const handleClick = () => {
    /*
   Do not do this. This will not work.
   drink.price = 6;
   setDrink(drink);
    */
    /*
    React does not become aware if we make or try to make any changes to the 
    exsisting state object instead we should give React a new state object.
    */
    // const newDrink = {
    //   // title: drink.title,
    //   ...drink, // using spread operator to copy all of the drink object properties
    //   price: 6, //Updating Price
    // };
    // setDrink(newDrink);

    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UpdatingUseStateObjects;
