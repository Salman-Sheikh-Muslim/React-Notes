import React, { useEffect } from "react";

const CleaningUpEffectHook = () => {
  /*
    Sometimes the code we are passing to the Effect hook does not need anu clean up but
    what if this was a chat component and in useEffect hook we were connecting to the
    chat server than at some point we would need to discconeect from the chat server.
    
    For example if the user navigates awau from the chat page than we have to dissconnect
    from the chat server.
    */
  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnect");

  useEffect(() => {
    /*
    The function that we passed to the effect hook can
    optionally return a function for cleaning up. This is not always necessay but
    if we need to clean up this is the way we do it.
    */
    connect();

    return () => disconnect();

    /*To provide clean up code with return keyword we call a function and in 
    that function we pass the cleanup function that we created.
    */

    /*
    Genreally speaking our clean up function should stop or undo what ever the effect
    was doing.
    */
  });

  return <div>CleaningUpEffectHook</div>;
};

export default CleaningUpEffectHook;

/*
TThe output displayed in the console for this component is as follows:

Connecting
Disconnect
Connecting.

The reason 'Connecting' is shown twice is due to the behavior of StrictMode. As for 
the cleanup function execution, it is triggered during the unmounting phase.

In React, after components are initially rendered, they are mounted on the browser 
screen.

However, when StrictMode is enabled, React needs to re-render the components. In 
this process, before rendering, React unmounts all the components from the browser 
screen. Then, due to StrictMode, it re-renders the components and mounts them again
on the browser screen.

*/
