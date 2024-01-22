import React from "react";
import { useState } from "react";

function UpdatingUseStateArrays() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  /*
"When dealing with state objects and arrays in React, you should remember to treat 
them as immutable or read-only."
  */

  const handleClickAdd = () => {
    /*
   Do not do this. This will work. However we do not want to do this. This is a bad practice.
      tags.push('hello');
    */

    //ADD
    setTags([...tags, "exciting"]);
  };

  const handleClickRemove = () => {
    //REMOVE
    setTags(tags.filter((tag) => tag !== "happy"));
  };

  const handleClickUpdate = () => {
    //REMOVE
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {tags}
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickRemove}>Remove</button>
      <button onClick={handleClickUpdate}>Update</button>
    </div>
  );
}

export default UpdatingUseStateArrays;
