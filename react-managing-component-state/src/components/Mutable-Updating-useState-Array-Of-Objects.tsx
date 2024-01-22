import React from "react";
import { useState } from "react";
import produce from "immer"; //prouce is a function

function MutableUpdatingUseStateArrayOfObjects() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    //const mappedBugs = setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      /*
      draft is a proxy object that records the changes we are gonig to apply to the bugs array.
       So imagine draft is a copy of the bugs array so we are free to mutate or modify just like
      a regular JavaScript object. So we do not need to map anything or creat copies
      we can go in this object and can make any changes. Behind the scens immer keeps
      track of the changes then it will create a copy of the bugs array with our changes
      applied.
      */
      produce((draft) => {
        //Imaginge draft is the array of 'bugs'
        // draft.map((bug) => (bug.id === 1 ? (bug.fixed = true) : bug));
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <div key={bug.id}>
          <p>{`ID: ${bug.id} Title: ${bug.title} - Fixed: ${
            bug.fixed ? "Fixed" : "New"
          }`}</p>
        </div>
      ))}

      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default MutableUpdatingUseStateArrayOfObjects;
