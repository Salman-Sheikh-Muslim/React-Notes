import React, { useRef } from "react";
import { FormEvent } from "react";

const FormUseRef = () => {
  //useRef is a built-in Hook in React. That we can use to Reference a DOM Element.

  //useRef(null); //returns a reference object.
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  /*
  Why we have to initailize ever useRef object with null?
  
  The current property of thr Ref object refrences a DOM node

  The intial value that we pass useRef(null) here will be used to set the
  current property.

  Initially when we create a Ref object we dont have access to a DOM node
  because the DOM is created after React renders our components. So we
  really have no intial value to provide here.

  When React renders our components and create the DOM it will set the current 
  property to a DOM node and it will set it back to null when the node is removed 
  from the screen.

  So the current property should either be null or refrencing a current DOM node.

  Always initialize useRef objects with null otherwise you can have unknwon problems.
  */

  // nameRef.current // This object has a single property known as current and this
  //returns the DOM element we are refrencing.

  //Using useRef to reference an input field and read its value when the form is submitted.
  const handleOnSumbit = (event: FormEvent) => {
    event.preventDefault(); //prevents the form from being posted to the server.
    if (nameRef.current !== null) console.log(nameRef.current.value);
    if (ageRef.current !== null) console.log(ageRef.current.value);
    //Typically when submitting a form we need to send an object to the server to be saved.

    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
    // ageRef.current.value // returns a string
  };
  /*
  Error:    Property 'value' does not exist on type 'never'.ts(2339)

  The reason we get this error is because the typescript compiler does not
  know that we are refrencing an HTML input element. Beacuse using the Ref Hook
  we can refrence any kind of element in the DOM.such as button, list, heading etc.

  So solve this we do the following:
   useRef<HTMLInputElement>(null);

    */

  //In HTML all input fields have a 'value' property.

  return (
    <form onSubmit={handleOnSumbit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUseRef;
