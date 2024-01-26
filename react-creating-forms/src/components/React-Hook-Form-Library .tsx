import React, { useRef } from "react";
import { FormEvent } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const ReactHookFormLibrary = () => {
  //const form = useForm(); //Returns an object with a bunch of properties and methods.
  //console.log(form);

  const { register, handleSubmit } = useForm(); //grabbing the object and destructuring it.

  //register and handleSubmit are methods defined in useForm object

  //console.log(register("name")); //giving register function an argument which is the name of the input field.

  /*
  To handle form submition we call the handleSubmit function. As an argument
  we give it a submitHandler.

  A submitHandler is just a function that recieves the data in this form.
*/
  //React Hook Form uses refrence object to get the value from input fields. So their is no rerendering involved here.

  const onSubmit = (data: FieldValues) => {
    //Defining the typeof data parameter in the parenthesis
    console.log(data);
    console.log("hi");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //In brackets of register function you enter the name you want the property to have against which the value for this input element will be Stored
          {...register("name")} //The register function returns an object
          // All of the properties within the object that is returned from
          //register function will be added to this input field.
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
          {...register("age")}
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

export default ReactHookFormLibrary;
