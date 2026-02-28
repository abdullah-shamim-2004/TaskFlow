import React, { useEffect, useState } from "react";
import useSecure from "../useSecure/useSecure";
// import useAPI from "../useAPI/useAPI";

const useProducts = () => {
  const api = useSecure();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [api]);
  return { products, isLoading };
};

export default useProducts;
