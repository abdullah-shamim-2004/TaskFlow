import React, { useEffect, useState } from "react";
import useAPI from "../useAPI/useAPI";

const useOverview = () => {
  const [overviews, setOverviews] = useState();
  const Api = useAPI();
  useEffect(() => {
    const fetchOverview = async () => {
      const res = await Api.get("/api/overview");
      setOverviews(res.data);
    };
    fetchOverview();
  }, []);
  return overviews;
};

export default useOverview;
