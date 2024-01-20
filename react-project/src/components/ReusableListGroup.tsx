import { Fragment, ReactNode, useState } from "react";

/*
In order to make this list resuable and dynamic first we need to
decide the shape of the input to this scomponent.

object: { items: [], heading: 'string'}

TypeScript has a feature called 'interface'.
Using 'interface' we cna define the shape or the interface of an object.
*/
interface Props {
  items: string[]; //Using type anotation to identify the type of properties.
  heading: string;
  //(item: string) => void
  onSelectItem: (item: string) => void;
}

function ReusableListGroup({ items, heading, onSelectItem }: Props) {
  //Destructuring above line

  console.log(
    "Inside Child Component 0, items = " +
      items +
      " onSelectItem = " +
      onSelectItem
  );
  const [selectedIndex, setSelectedIndex] = useState(-1); //Destructuing the array returned by useState()
  //      {props.items.length === 0 && <p>No Item Found</p>}

  return (
    <>
      <h1>{heading}</h1>
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
              console.log(
                "Inside Child Component 1, item = " +
                  item +
                  " onSelectItem = " +
                  onSelectItem
              );
              onSelectItem(item); //Parent Compnent in this case App is notified that an item is selected and something needs to be done.
              console.log(
                "Inside Child Component 2, + onSelectItem = " + onSelectItem
              );
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReusableListGroup;
