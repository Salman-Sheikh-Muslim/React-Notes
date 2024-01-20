import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//import ListGroup from "./components/ListGroup/ListGroup";
import ListGroup from "./components/ListGroup_and_icon"; //When we only provide the folder and not the file name than the compiler looks for a file named 'index'.
import "./App.css";
import ListGroupStyled from "./components/ccs-in-js-listgroup/ListGroup";
import Button from "./exercise/Button";
import LikeIcon from "./exercise/LikeIcon";
import AnotherLike from "./exercise/AnotherLike";

function App() {
  let items = ["Rawalpindi", "Islamabad", "Kashmir", "Lahore", "Karachi"];

  return (
    <div className="App">
      <AnotherLike onClick={() => console.log("clicked")}></AnotherLike>
      <LikeIcon onClick={() => console.log("clicked")}></LikeIcon>

      <Button></Button>
      {/* <ListGroupStyled items={items} heading="Cities"></ListGroupStyled> */}
      {/* ListGroupStyled is giving a warning in the console. */}
      <ListGroup></ListGroup>
    </div>
  );
}

export default App;
