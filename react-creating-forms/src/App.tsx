import React from "react";
import Form from "./components/Form";
import FormUseRef from "./components/Form-useRef";
import ControlledComponentsUseStateForm from "./components/Controlled-Component-useState-Form";
import ReactHookFormLibrary from "./components/React-Hook-Form-Library ";
import ValidationReactHookFormLibrary from "./components/Validation-React-Hook-Form-Library  copy";
import ValidationZodReactHookFormLibrary from "./components/Validation-Zod-React-Hook-Form-Library ";

const App = () => {
  return (
    <div>
      <ValidationZodReactHookFormLibrary></ValidationZodReactHookFormLibrary>
      <ValidationReactHookFormLibrary></ValidationReactHookFormLibrary>
      <ReactHookFormLibrary></ReactHookFormLibrary>
      <ControlledComponentsUseStateForm></ControlledComponentsUseStateForm>
      <FormUseRef></FormUseRef>
      <Form></Form>
    </div>
  );
};

export default App;
