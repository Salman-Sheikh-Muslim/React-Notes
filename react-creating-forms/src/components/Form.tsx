import React, { useRef } from "react";
import { FormEvent } from "react";

const Form = () => {
  const handleOnSumbit = (event: FormEvent) => {
    event.preventDefault(); //prevents the form from being posted to the server.

    console.log("Submitted");
  };

  return (
    <form onSubmit={handleOnSumbit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
