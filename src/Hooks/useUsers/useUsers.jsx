import React, { useEffect, useState } from "react";
import useAPI from "../useAPI/useAPI";

const useUsers = () => {
  const [users, setUsers] = useState();
  const Api = useAPI();
  useEffect(() => {}, []);
  return <div></div>;
};

export default useUsers;
