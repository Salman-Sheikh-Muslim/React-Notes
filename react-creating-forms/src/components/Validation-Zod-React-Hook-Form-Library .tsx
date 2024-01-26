import React, { useRef } from "react";
import { FormEvent } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//The value property of input field always retuns a string.
//using zod to define the schema of our form.
const schema = z.object({
  // name: z.string().min(3),
  name: z.string().min(3, { message: "Name must be atleast 3 charachters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be atleast 18." }),
}); //retuns an object
//zod has a method that allows us to extract type from a schema object.
// z.infer<typeof schema>; //returns typescript type which is similar to interface.
//Using the type we can define the shape of an object.
//A typescript type is very similar to typescript interface.
type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }
const ValidationZodReactHookFormLibrary = () => {
  //const form = useForm(); //Returns an object with a bunch of properties and methods.
  //console.log(form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //When calling the Form Hook passing a configuration object

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
          {...register("name")}
          /*
          In the second argument we can pass an object that can contain all
          yhe standard HTML elements for Data Validation.
          */
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* zod will take care of generating error mesages 
        based on the schema that we defined. */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })} //Telling react-hook-form-to-interpret this value asa a number.
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ValidationZodReactHookFormLibrary;
