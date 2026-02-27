import React, { useEffect, useState } from "react";
import useAPI from "../useAPI/useAPI";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  const Api = useAPI();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await Api.get("/api/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [Api]);
  return { users, isLoading };
};

export default useUsers;
