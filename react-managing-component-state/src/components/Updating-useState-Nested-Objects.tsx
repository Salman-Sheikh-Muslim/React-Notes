import React from "react";
import { useState } from "react";

function UpdatingUseStateNestedObjects() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  /*
Things to focus on will updated a complex state object:

// The ... (spread operator) in JS is shallow meaning when we copy the object customer
with it '...customer' the object definded within it (address object) its address
in-memory wil be copied. Meaning both address object will refrence the same
location in memory.

  const handleClick = () => {
    setCustomer({ ...customer,}); 
  };

When updating state in React applications we should make sure that our new state
object is completely independent of the exsisting state object. They do not
share anything.

In order to make address onject completly independent fron the customer address
object we nned to do the following:
    
 
  const handleClick = () => {
    setCustomer({
      ...customer, address: { ...customer.address, zipCode: 94112 }, });
  };

  //  setCustomer({...customer, address: { ...customer.address, zipCode: 94112 }, });
  First of all the customer object is copied with the help of 
  spread operator '...customer' and the memory address is copied for the object address
  defined inside of the customer object. 

  Next we set the address property to a new object by defing it 
  'address: { ...customer.address, zipCode: 94112 }'. 

  First we copy the exsiting address object using the spread operator
  '...customer.address' this copies all the properties insdie the address object
  including their values.

  Finally we update the zipcode property of the address object to a new value
  'zipCode: 94112'.
*/

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UpdatingUseStateNestedObjects;
