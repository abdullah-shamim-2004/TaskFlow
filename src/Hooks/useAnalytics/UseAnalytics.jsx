import React, { useEffect, useState } from "react";
import useAPI from "../useAPI/useAPI";

const UseAnalytics = () => {
  const Api = useAPI();
  const [analyticsData, setAnalyticsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await Api.get("/api/analytics");
        setAnalyticsData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalytics();
  }, [Api]);
  return { analyticsData, isLoading };
};

export default UseAnalytics;
