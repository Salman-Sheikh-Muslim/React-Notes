import { useState } from "react";
import reactLogo from "./assets/react.svg";

function StateExp() {
  //[false,true]
  /*
  The next time react re-render the componets it takes the first value (false)
  from the array and assings it to the (first useState hook defined inside
    the function) 'isVisbile' variable.
    
  So react relies on the order of these elements so it can map these values
  properly to the local variables in this function.
  
  So that means we cannot use hooks inside if statement. for loops 
  and nested functions because the constructs can impact the order in which the
  state hooks are called.
  
  So to ensurse a consistent order we can only call hooks at the top level of our
  component.
  
  calling hook:   const [isVisible, setVisibility] = useState(false);
*/
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  /*
These names [isVisible, setVisibility],[isApproved, setApproved] 
are just local identifiers in this function. React is not aware of them.

Somwehere React id oging to store (useState(false), useState(true)) the
2 boolean values most likely inside an array.
*/

  /*
  We use the State hook to store the state outside of the component instead
  of doing it inside beacuse if we do that once the function execution gets completed
  the state variable will be removed from the memory and we do not want that.

  Somwhere React will store all of the state variables for this component and it will
  automatically remove those varables when this component is no longer visible on
  the screen.
  */
  let count = 0; //This local variable is removed from the memory When this function/component finishes its execution.

  const handleClick = () => {
    //setName('Salman');
    setVisibility(true);
    console.log(isVisible); // Shows False.
    count++;
  };

  /*
    Thre reason this (console.log(isVisible)) showed false is beaucse it does not
    update immediately its updated asyncronously and this is done for
    performance reasons.

    As part of handling an event we could set multiple state variables so instead of 
    re-rending the component again and again for each state variable instead react takes
    all of theses updates batches them and perfomr them at a latter time to achieve better
    perfomance. It updates after the event handler finishes execution. At that point
    react applies all the updates at once than it will rerender our component with the 
    updated state.
    */

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default StateExp;
