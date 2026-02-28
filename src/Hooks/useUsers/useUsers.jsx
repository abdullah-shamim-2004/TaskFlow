import React, { useEffect, useState } from "react";
// import useAPI from "../useAPI/useAPI";
import useSecure from "../useSecure/useSecure";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  const api = useSecure();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/api/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [api]);
  return { users, isLoading };
};

export default useUsers;
