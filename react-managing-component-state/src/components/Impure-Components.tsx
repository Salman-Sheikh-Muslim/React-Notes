import React from "react";

let count = 0;

/*
To keep components pure we should keep any kind of changes out of the render phase.
We should not change any object that exsisted before rendering. But note that its 
totally fine to updat any variable or object that we created as part of rendering.
*/

/*
StrictMode component is a builtin component of React and it does not have a 
visual representation; its only there to catch potential problems.
One of these potential problems is impure components. So when the StrictMode is
enabled in development React render each component twice. That is why instead o Message
1 ,2 ,3 we get Message 2, 4, 6.

Messages coming from the StrictMode are greyed out in the console. In React18 StrictMode
is turned on by default and as a result React renders each component twice. StrictMode
helps us find ImpureComponents (as we do not see the result we expect).

It only behaves this way in development mode, so when we built our 
application for production the StrictMode checks are not included and our
components will render only once.
*/

function ImpureComponents() {
  //Start Rendering Phase
  console.log("Before increment =" + count);
  count++; //updating the count variable as part of rendering this component
  console.log("After increment =" + count);
  return <div>Impure Components {count}</div>; //Shows 2 4 6
  //We are getting an unexpectd output due to the StrictMode
} //End Rendering Phase

export default ImpureComponents;
