import React, { useEffect, useRef } from "react";

const UseEffectHook = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  /*
    //Side Effect
  if (ref.current) ref.current.focus;

    A piece of code that has nothing to do with returning some JSX markup instead it
is doing some other work such as changimg the state of DOM than we say that piece
of code has a Side Effect.

Components that have a piece of code that result in a side Effect are no longer
oure componenets.

Side Effects can be resolved by using the Effect hook; making the component pure again.
Simply put the code that is producing a side effect inside the effect hook.
    */

  /*
    With Effect Hook we can tell React to execute a piece of code after the component
has been rendered.

When we have a single or multiple Effect hooks React will run them in order after each render.
  */

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default UseEffectHook;
