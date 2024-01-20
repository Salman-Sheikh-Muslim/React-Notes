import { Fragment, useState } from "react";

function ListGroupUseState() {
  let items = ["Rawalpindi", "Islamabad", "Kashmir", "Lahore", "Karachi"];

  //   let selectedIndex = -1; //-1 means no item is selected
  //The above variable is local to this function component so React is not aware
  //of it. Its like a little secret insiide this Component.
  //To solve this problem we should tell React that this component is going to have
  //data or state that might change over time.
  //To do that we have to use one of the built-in functions of React called 'useState'.

  const [selectedIndex, setSelectedIndex] = useState(-1); //Destructuing the array returned by useState()

  // useState(-1) returns an array containing 2 elements
  //The first element is a variable.
  //The second element is going to be an updater function.

  /*
  The updater function helps in updating the value of the first element 
  (which is a variable) in the array; which in turn allows React to be notified 
  that the state of our component has changed and then it will re-render the 
  component which causes the DOM to be updated under the hood.
  */

  // const arr = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  //useState; //Hook
  //A Hook is a function that allows us to tap into the built-in features in React.

  return (
    <>
      {/* <li className="list-group-item" key={item} onClick={handleClick}> 
    In this line we are refrencing the  'handleClick' function we are not handleClick() calling it. 
    So we are telling React that when ever the user clicks on this event the following
    function (handleClick()) should be called. So calling the function is 
    done later at runtime.*/}
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupUseState;
