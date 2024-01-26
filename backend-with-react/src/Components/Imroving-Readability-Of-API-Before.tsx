import React, { useEffect, useState } from "react";
//import axios, { AxiosError, CanceledError } from "axios";
import apiClient, { CanceledError } from "../services/api-client";

/*
This Component is a little too cincerned with making HTTP Request,
for exmape it know about AbortController (its about cancelling request) 
which is purely about HTTP. Our component also knows about the request methods:
get, post, patch and delete. The component also knows about our end point.

So our component is like a chef whose also Responsible for shooping the ingredients.
Typically at a reaturant a chef is not responsible for shoping the chef priamary responsibiliy
is to make goog food.

Similarly our component should only focus on its Primary Responsibility which is
'returning some markup and handaling user interactions at a high level.

So to improve this code we should extract all the logic around making HTTP requests
into a seperate service.

This allows us to separate concerns and make our code more modular and reusable; potebtially
we can use that service in other components.'
*/

interface User {
  id: number;
  name: string;
}

const ImrovingReadabilityOfAPIBefore = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: "Salman" };
    setUsers([newUser, ...users]);

    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
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
                <div>
                  <button
                    className="btn btn-outline-secondary mx-1"
                    onClick={() => updateUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteUser(user)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImrovingReadabilityOfAPIBefore;
