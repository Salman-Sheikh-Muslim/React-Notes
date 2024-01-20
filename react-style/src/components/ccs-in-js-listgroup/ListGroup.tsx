import React from "react";
import styles from "./ListGroup.css";
import styled from "styled-components";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
`; //The return value of this is going to be a react componet that has all these styles applied to it.

interface ListItemsProps {
  //Defiing interface for props that need to be attached to a styled React component
  active: boolean;
}

const ListItems = styled.li<ListItemsProps>`
  //In angle brackets adding/attacing the interface with the styled React component.
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  //onSelectItem: (item: string) => void;
}

function ListGroupStyled({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <List>
        {/* Styled React Component 'List'  */}
        {/* Styled React Component 'ListItems' and 'active' is a prop  */}

        {items.map((item, index) => (
          <ListItems
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItems>
        ))}
      </List>
    </>
  );
}

export default ListGroupStyled;
