import React, { useRef, useState } from "react";
import { FormEvent } from "react";

/*
With this approach evertime the user tupes we update the state so our 
compnent is rerendered.
*/
const ControlledComponentsUseStateForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleOnSumbit = (event: FormEvent) => {
    event.preventDefault(); //prevents the form from being posted to the server.
    console.log("Submitted");
    console.log(person);
  };

  /*
  All input fields have a Change event that triger every time a user types a keystroke.
  
  So we cna handle this event and update our state variable everytime the user types
  something in the input field.
  */

  /*
  To get the current value of an input field from the onChange Event

    onChange={(event) => event.target.value )} 
    //From event.target we access this input field and than we can read the 
    value property.
  */

  /*
    One Single Source of truth for the Input Field:

    All input fields have a value property for maintaining their own state
    but in this situatuin we also have a state variable called person.
    So it is possible that these sources get out of Sync.

    To solve this problem we shpuld make React the single source of truth we 
    can do this easily by:
      value={person.name}

      //By doing this the input field will always rely on the value in our state
      variable. So we have a single source for storing the name of the person.

      This input field will be reffered to as a controlled component because its
      state is entirely controlled by React. This means that the value of the input
      field is not managed by the DOM but instead its stored and updated in the
      components state.
    */
  return (
    <form onSubmit={handleOnSumbit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ControlledComponentsUseStateForm;
