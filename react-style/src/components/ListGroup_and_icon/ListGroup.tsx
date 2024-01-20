import React from "react";
import styles from "./ListGroup.module.css";
import { BsFillCalendarFill } from "react-icons/bs"; // BsFillCalendarFill it is essentially a react component.
//react-icons/bs bs means the library we need to import the icon from (first 2 letters of the icon name.)

function ListGroup() {
  return (
    <>
      <div>
        <BsFillCalendarFill color="red" size="40"></BsFillCalendarFill>
        <h1>List</h1>
        <ul className={[styles["list-group"], styles.container].join(" ")}>
          <li>An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
