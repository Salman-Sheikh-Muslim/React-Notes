import React, { useRef } from "react";
import { FormEvent } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

/*
  Currently if we type errors. we cannot see the name of our input fileds in the
  intellesense because the typescript compiler is not aware of our input fields.

  To improve this and provide a better development experience as well as type safety
  we can use an interface to define the shape of this form. 

  Now when calling the for hook in angle brackets <> we pass our interface.
  useForm<FormData>()
  */

interface FormData {
  name: string;
  age: number;
}
const ValidationReactHookFormLibrary = () => {
  //const form = useForm(); //Returns an object with a bunch of properties and methods.
  //console.log(form);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>(); //grabbing the object and destructuring it.
  //destructuring the formState property and grabbing errors property/object from it.

  //isValid lets us know if the form is valid.
  /*
  React Hook Form only call our handler function (onSubmit) if the
  form is valid.
  */

  const onSubmit = (data: FieldValues) => {
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
          {...register("name", { required: true, minLength: 3 })}
          /*
          In the second argument we can pass an object that can contain all
          yhe standard HTML elements for Data Validation.
          */
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 charachters.</p>
        )}
        {/* errors.name?.type  Optional Chaining ?. means if errors.name 
        exsist than check for errors.name?.type
        
        The reason we need ?. is beacuse our errors object can be empty so
        if we do not have a name property and then we try to access the
        type property we are going to get a runtime error, To prevent
        this we use optional chainig
        
        So this expression errors.name?.type is evaluated only if we have a 
        property called name in the errors object otherwise its ignored.*/}
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
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ValidationReactHookFormLibrary;
