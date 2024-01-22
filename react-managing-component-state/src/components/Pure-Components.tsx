import React from "react";

let count = 0;

/*
To keep components pure we should keep any kind of changes out of the render phase.
We should not change any object that exsisted before rendering. But note that its 
totally fine to updat any variable or object that we created as part of rendering.
*/
function PureComponents() {
  //Start Rendering Phase
  let count1 = 0;
  count1++;
  return (
    <div>
      Pure Components {count} Pure Components {count1}
    </div>
  );
} //End Rendering Phase

export default PureComponents;
