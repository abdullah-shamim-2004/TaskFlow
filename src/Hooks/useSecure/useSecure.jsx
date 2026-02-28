import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router";
import useAuth from "../useAuth/useAuth";

//axios instance.
export const api = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
  // baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

const useSecure = () => {
  const { user, UserSignOut } = useAuth();
  const token = user?.accessToken;
  const navigate = useNavigate();
  //   console.log(token);

  // request interceptor
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    // Response Interceptor
    const resInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const statusCode = error.response?.status;

        if (statusCode === 401 || statusCode === 403) {
          await UserSignOut();
          navigate("/auth/login");
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(resInterceptor);
    };
  }, [token, UserSignOut, navigate]);

  return api;
};

export default useSecure;
