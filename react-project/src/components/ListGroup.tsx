import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Rawalpindi", "Islamabad", "Kashmir", "Lahore", "Karachi"];
  //items = [];

  //   let selectedIndex = -1; //-1 means no item is selected
  //The above variable is local to this function component so React is not aware
  //of it. Its like a little secret insiide this Component.
  //To solve this problem we should tell React that this component is going to have
  //data or state that might change over time.
  //To do that we have to use one of the built-in functions of React called 'useState'.

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //useState; //Hook
  //A Hook is a function that allows us to tap into the built-in features in React.

  //EventHandler
  const handleClick = (event: MouseEvent) => console.log(event); // The following (event: MouseEvent) is called Type amitation in TypeScript
  //With Type amitation we can specify the type of our variables, parameters and so on.

  //const messageExpression = items.length === 0 ? <p>No Item Found</p> : null;
  //We can also move this logic inside a function.

  // const getMessage = () => {
  //   // The benefit of using function is that our function can have parameters
  //   return items.length === 0 ? <p>No Item Found</p> : null;
  // };

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

  // <div>
  //   <h1>List</h1>
  // <ul className="list-group">
  //   <li className="list-group-item">An item</li>
  //   <li className="list-group-item">A second item</li>
  //   <li className="list-group-item">A third item</li>
  //   <li className="list-group-item">A fourth item</li>
  //   <li className="list-group-item">And a fifth one</li>
  // </ul>
  // </div>

  // <Fragment>
  //   <h1>List</h1>
  //   <ul className="list-group">
  //     <li className="list-group-item">An item</li>
  //     <li className="list-group-item">A second item</li>
  //     <li className="list-group-item">A third item</li>
  //     <li className="list-group-item">A fourth item</li>
  //     <li className="list-group-item">And a fifth one</li>
  //   </ul>
  // </Fragment>

  //Empty <> angle brackets tell React to use a Fragment to wrap all the children (other elements).
  // <>
  //   <h1>List</h1>
  //   <ul className="list-group">
  //     <li className="list-group-item">An item</li>
  //     <li className="list-group-item">A second item</li>
  //     <li className="list-group-item">A third item</li>
  //     <li className="list-group-item">A fourth item</li>
  //     <li className="list-group-item">And a fifth one</li>
  //   </ul>
  // </>

  //In JSX we can only use HTML elements or other React components.
  //       {items.length === 0 ? <p>No Item Found</p> : null}
  // In the above line null means nothing will be rendered

  //----------------Conditional Rendering----------------------

  // <>
  //   <h1>List</h1>
  //   {items.length === 0 ? <p>No Item Found</p> : null}
  //   <ul className="list-group">
  //     {/* React needs each item in a list to have a unique key so that it can keep track of each item. So later when we add or remove items dynamically react knows what part of the page should be updated*/}
  //     {items.map((item) => (
  //       <li key={item}>{item}</li>
  //     ))}
  //   </ul>
  // </>
  // <>
  //   <h1>List</h1>
  //   {items.length === 0 && <p>No Item Found</p>}
  //   <ul className="list-group">
  //     {/* React needs each item in a list to have a unique key so that it can keep track of each item. So later when we add or remove items dynamically react knows what part of the page should be updated*/}
  //     {/* In the line below parameter 'index' is optional in map method. */}
  //     {items.map((item, index) => (
  //       <li
  //         className="list-group-item"
  //         key={item}
  //         onClick={() => console.log(item, index)}
  //       >
  //         {item}
  //       </li>
  //     ))}
  //   </ul>
  // </>

  //----------------Handlng Events----------------------

  // <>
  //   {/*This arrow function can optionally have a parameter that represents
  //  the browser event. We can call it e or event.
  //  onClick={() => console.log(item, index)} */}

  //   <h1>List</h1>
  //   {items.length === 0 && <p>No Item Found</p>}
  //   <ul className="list-group">
  //     {items.map((item, index) => (
  //       <li
  //         className="list-group-item"
  //         key={item}
  //         onClick={(event) => console.log(event)}
  //       >
  //         {item}
  //       </li>
  //     ))}
  //   </ul>
  // </>
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

export default ListGroup;
