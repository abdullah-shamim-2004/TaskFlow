import React, { useEffect, useState } from "react";
// import useAPI from "../useAPI/useAPI";
import useSecure from "../useSecure/useSecure";

const UseAnalytics = () => {
  // const Api = useAPI();
  const api = useSecure();
  const [analyticsData, setAnalyticsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await api.get("/api/analytics");
        setAnalyticsData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalytics();
  }, [api]);
  return { analyticsData, isLoading };
};

export default UseAnalytics;
