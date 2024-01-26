/*
jsonplaceholder.typicode.com

The following website is a fake server or dummy backend. We can use it request 
some data from this dummy server.

To send a request to server we can use fetch() function or the axios library.

npm install axios@1.3.4
*/

import React, { useEffect, useState } from "react";
import axios from "axios";

/*
Objects/Data which is going to be recieved from server do not show 
auto completion in intellesens for that you can create a interface
and specify the properties in the object that you want to use. 
*/

interface User {
  id: number;
  name: string;

  //Only added the first 2 properties of the object getting from the server. Can add more.
}
const UsingAxiosToGetDummyData = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);
  /*
  The second argument in the useEffect hook is very important here without it would result
  in a infinte loop occuring and you will contionus hit the server with requests.
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
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsingAxiosToGetDummyData;
