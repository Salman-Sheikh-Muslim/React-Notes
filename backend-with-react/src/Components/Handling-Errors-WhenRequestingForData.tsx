import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;

  //Only added the first 2 properties of the object getting from the server. Can add more.
}
const HandlingErrorsWhenRequestingForData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // Promise then and catch method
  useEffect(() => {
    //get -> Promise -> res / err
    axios
      //To simulate an error we can give a invalid endpoint in the get request
      .get<User[]>("https://jsonplaceholder.typicode.com/users/err")
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message));
  }, []);

  //async and await method
  useEffect(
    //Reat does not allow us to pass an async function to the useEffect Hook
    () => {
      const fetchingData = async () => {
        try {
          const res = await axios.get<User[]>(
            "https://jsonplaceholder.typicode.com/users/"
          );
          setUsers(res.data);
        } catch (
          err //type annotation is not allowed in catch block
        ) {
          setError((err as AxiosError).message); //using type assertion.
        }
      };

      fetchingData();
    },
    []
  );

  /*
  As a good developer when ever trying to esatablish a connection a with
  the server you need to anticipate the prblems that may occcur and prepare
  for them.
  
  errors such as: network time out, server offline etc.

  In JavaScript all Promises (object) have a method called 'catch' that
  we can use for handling errors.

  We provide the catch method with a callback function and it will be executed if 
  something goes wrong while fetching the data from the server.

  */

  //.then((response) => console.log(response.data[0].name));
  // This method returs a Promise.

  /*
    A Promise is an object that holds the eventual result ot failure of an
    asyncrohnous operation.

    All promises have a method called then.

    the function in then is executed when our promise is resolved and the 
    resolved is ready.
    */
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

export default HandlingErrorsWhenRequestingForData;
