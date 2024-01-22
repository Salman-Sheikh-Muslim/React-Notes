import React from "react";
import { useState } from "react";

function AssigningObjectToUseState() {
  //Sometimes our state variables are related and its better to group them inside an object.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + +lastName;

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  /*
  When using objects in useState hook do not go for deeply nested structures
  avoid them if possible.

  The below object is not good we canavoid it by creating a differnt object for address
  itself.
  
   const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    contact:{
        address:{
            street: ''
        }
    }
  });
  */

  const fullNamePer = person.firstName + person.lastName;

  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      {firstName} {lastName}
      {fullName}
    </div>
  );
}

export default AssigningObjectToUseState;
