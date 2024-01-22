import React from "react";
import { useState } from "react";

function UpdatingUseStateArrayOfObjects() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  /*
"When dealing with state objects and arrays in React, you should remember to treat 
them as immutable or read-only."
  */

  const handleClick = () => {
    const mappedBugs = setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
      /*
      By using the map method we are creating a new array and updating property 
      fixed to 'true' where id is 1. By doing this we are only copying the object 
      where id is 1 and then modifying the fixed property. As for the other objects 
      in the array their address in memory is copied. So the other objects are 
      refering to the same location/address as the orignal array.

      You do not always have to create a brand new object for every object. Only
      create brand new object for the objects that need to be modified.
    */
    );
  };

  const bugObjectsAsStrings = bugs.map((bug) => JSON.stringify(bug));

  return (
    <div>
      <p>{JSON.stringify(bugs)}</p>

      {/* {bugs[0].fixed} */}

      {bugObjectsAsStrings.map((bugString, index) => (
        <p key={index}>{bugString}</p>
      ))}

      {bugs.map((bug) => (
        <div key={bug.id}>
          <p>{`ID: ${bug.id} Title: ${bug.title} - Fixed: ${bug.fixed}`}</p>
        </div>
      ))}

      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default UpdatingUseStateArrayOfObjects;
