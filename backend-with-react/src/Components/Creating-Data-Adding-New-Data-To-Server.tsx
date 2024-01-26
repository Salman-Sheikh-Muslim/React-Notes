import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
const CreatingDataAddingNewDataToServer = () => {
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

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    //There is nothing we want to do when the promise is resolved so we do not call then method and simply call catch method only.
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  //JSONPlaceholder is a fake backend so everytime we send a request to add new user it will have the id:11 this is beacuse it it a fake backend; this will not be an issue in a real backend.
  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: "Salman" }; //id: 0 means this user is not saved in the users array.
    setUsers([newUser, ...users]);

    //Adding the new User in the body of the request
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      //.then((res) => setUsers([res.data, ...users])); //if the call to the server is successful we should refresh our list with the saved user beacause the new user has an id that is going to be generated on the server.
      //  .then(({ data }) => setUsers([data, ...users])); //destructuring data property
      .then(({ data: savedUser }) => setUsers([savedUser, ...users])) //assigning alias to data property to make it more readable.
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      <div className="container">
        <div className="col-md-6 col-lg-4">
          {error && <p className="text-danger">{error}</p>}
          {isLoading && <div className="spinner-border"></div>}
          <button className="btn btn-primary mb-3" onClick={addUser}>
            Add
          </button>
          <ul className="list-group">
            {users.map((user) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={user.id}
              >
                {user.name}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreatingDataAddingNewDataToServer;
