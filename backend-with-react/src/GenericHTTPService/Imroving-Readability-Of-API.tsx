import React, { useEffect, useState } from "react";
//import axios, { AxiosError, CanceledError } from "axios";
import { CanceledError } from "../services/api-client";
import userService, { User } from "./user-Service";

/*
Moved this interface to services: user-Services.
interface User {
  id: number;
  name: string;
}
*/

const ImrovingReadabilityOfAPIGeneric = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // apiClient
    //   .get<User[]>("/users", {
    //     signal: controller.signal,
    //   })

    // userService.getAllUsers()
    //   .then((response) => {
    //     setUsers(response.data);
    //     setIsLoading(false);
    //   })
    const { request, cancel } = userService.getAll<User>(); //Specifying the type of object we are going to fetch from the server.

    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    //return () => controller.abort();
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.deleteting(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: "Salman" };
    setUsers([newUser, ...users]);

    userService
      .addNew(newUser)
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

    userService.modifyUpdate(updatedUser).catch((err) => {
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

export default ImrovingReadabilityOfAPIGeneric;
