import Message from "./Message_myfile"; // ./ means current directory.
import ListGroup from "./components/ListGroup";
import ListGroupUseState from "./components/ListGroup_useState";
import ReusableListGroup from "./components/ReusableListGroup";
import Alert_passingChildren from "./components/Alert_passingChildren";
import ButtonListGroup from "./exercise/Buttons";
import ButtonAnother from "./exercise/ButtonsAnother";
import CreateButton from "./exercise/ButtonAlertB";
import CreateAlert from "./exercise/ButtonAlertA";
import CreateButtonCopy from "./exercise/ButtonAlertB copy";
import AnotherButtonAlertA from "./exercise/AnotherButtonAlertA";
import AnotherButtonAlertB from "./exercise/AnotherButtonAlertB";
import { useState } from "react";
import ParentComponent from "./components/ParentComponent";

//imported function are treated/can be used as the same as any other html element.
//Use the imported function name as a tag name. Must close the tag.
//If a react component tag is not closed a completion error will occur.
//We can also use te self-closing syntax for React components.

function App() {
  let items = ["Rawalpindi", "Islamabad", "Kashmir", "Lahore", "Karachi"];

  console.log("inside Parent");
  const bTypeValue = "button";
  const class1Value = "btn";
  let class2Value = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark",
  ];
  let displayValue = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const handleSlectItem = (item: string) => {
    console.log(item);
  };

  const handleAlertClick = () => {
    // Perform actions when the alert is clicked
    console.log("Alert clicked");
  };

  const handleOnClose = () => {
    setAlertVisibility(false);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <ParentComponent></ParentComponent>
        {alertVisible && (
          <AnotherButtonAlertA onClose={handleOnClose}>
            My Alert
          </AnotherButtonAlertA>
        )}
        <AnotherButtonAlertB onClick={() => setAlertVisibility(true)}>
          Button
        </AnotherButtonAlertB>
        <CreateButtonCopy></CreateButtonCopy>
        <CreateButton></CreateButton>
      </div>
      <ButtonAnother color="secondary" onClick={() => console.log("Clicked")}>
        My Button
      </ButtonAnother>
      <ButtonAnother onClick={() => console.log("Clicked")}>
        My Button
      </ButtonAnother>
      <ButtonListGroup
        bType={bTypeValue}
        class1={class1Value}
        class2={class2Value}
        display={displayValue}
      ></ButtonListGroup>
      {/*   <Message></Message>*/}
      {/* <ListGroup></ListGroup>
      <ListGroupUseState></ListGroupUseState>
      <ListGroupUseState></ListGroupUseState> */}
      <ReusableListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSlectItem}
      ></ReusableListGroup>
      <Alert_passingChildren>
        <h1>h1</h1>
        <h2>h2</h2>
      </Alert_passingChildren>
      <Alert_passingChildren children="children"></Alert_passingChildren>
    </>
  );
}

export default App;

/*


function App() {
 
  const handleAlertClick = () => {
  // Perform actions when the alert is clicked
  console.log("Alert clicked");
};

  return (
    <>
      <div>
        <CreateAlert onClick={handleAlertClick}></CreateAlert>
        <CreateButton onClick={() => console.log("clicked")}></CreateButton>
      </div>
    </>
  );
}

export default App;
*/
