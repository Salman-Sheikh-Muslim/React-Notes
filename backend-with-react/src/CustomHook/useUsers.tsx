import { useEffect, useState } from "react";
import userService, { User } from "../GenericHTTPService/user-Service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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

  return { users, error, isLoading, setUsers, setError }; //returning state variables so that they can be used in other components.
};

export default useUsers;
