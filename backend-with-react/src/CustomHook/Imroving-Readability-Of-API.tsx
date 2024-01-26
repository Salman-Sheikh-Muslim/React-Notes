import React, { useEffect, useState } from "react";
//import axios, { AxiosError, CanceledError } from "axios";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../GenericHTTPService/user-Service";
import useUsers from "./useUsers";

/*
Moved this interface to services: user-Services.
interface User {
  id: number;
  name: string;
}
*/

const ImrovingReadabilityOfAPIGenericCustomHook = () => {
  //Using Custom Hook to fetch the List of Users.
  const { users, error, isLoading, setUsers, setError } = useUsers();

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

export default ImrovingReadabilityOfAPIGenericCustomHook;
