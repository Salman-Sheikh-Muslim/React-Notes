import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
const LoadingIndicatorCleanUpFunctionForFetchRequest = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // Indicate that the data fetching is in progress.
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        // Update state with fetched data and hide the loading indicator.
        setUsers(response.data);
        setIsLoading(false);
        //The order of these lines really do not matter beacuse React first applies all these updates and then re-renders our component.
      })

      .catch((err) => {
        // If the request was canceled, ignore the error.
        if (err instanceof CanceledError) return;
        // Set the error state and hide the loading indicator.
        setError(err.message);
        setIsLoading(false);
      });
    /*
    We cannot use this line (setIsLoading(false);) right after the catch method because
    if we do, the loader will be set false immediately (and we do not want that).
    This is because requesting data from the server is an asynchronous operation,
    and it will not block the rest of our code.

 Code written immediately after an asynchronous operation, such as an HTTP request with 
 Axios, will be executed immediately after the asynchronous operation is initiated. It 
 won't wait for the asynchronous operation to complete.

    We want that when we get the response from the server, then the loader should be hidden.
    To do that, we need to set loader to false when data is fetched in the callback function.
  */

    // .finally(() => {
    //   setIsLoading(false);
    // });

    /*
      All Promises have a finally method where we can pass a callback
      function which will always get executed when our Promise is
      settled, wheter it is resolved or rejected.

      The finally method does not work when Strictmode is turned on.
      */
    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default LoadingIndicatorCleanUpFunctionForFetchRequest;
