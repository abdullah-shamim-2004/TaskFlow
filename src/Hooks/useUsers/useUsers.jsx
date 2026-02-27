import React, { useEffect, useState } from "react";
import useAPI from "../useAPI/useAPI";

const useUsers = () => {
  const [users, setUsers] = useState();
  const Api = useAPI();
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await Api.get("/api/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);
  return users;
};

export default useUsers;
