import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
const CleanUpFunctionForFetchRequest = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //Creating Onject
    const controller = new AbortController();

    /*
    AbortController() is a built-in class in modren browsers that allows us to
    cancel or abort asynchronus operations.

    Like fetch request , DOM Manipulation or any opertaion that might
    take a long time to complete.
    */
    axios

      //In the get method passing a configuration object as the second argument  {signal: controller.signal,}.
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => setUsers(response.data))

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CleanUpFunctionForFetchRequest;

/*
Due to strictMode React renders each component twice so when unmouting the
componets for the first time it cancells the fetch request and than when re-rendering
the components again it sends the fetch request.

With StrictMode enabled we do not have to worry about sending a server

*/
