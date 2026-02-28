import React, { useEffect, useState } from "react";
// import useAPI from "../useAPI/useAPI";
import useSecure from "../useSecure/useSecure";

const useOverview = () => {
  const [overviews, setOverviews] = useState();
  const api = useSecure();
  useEffect(() => {
    const fetchOverview = async () => {
      const res = await api.get("/api/overview");
      setOverviews(res.data);
    };
    fetchOverview();
  }, [api]);
  return overviews;
};

export default useOverview;
