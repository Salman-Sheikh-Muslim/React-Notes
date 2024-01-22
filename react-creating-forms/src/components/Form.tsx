import React from "react";

const Form = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" className="form-control" />
      </div>
    </form>
  );
};

export default Form;
