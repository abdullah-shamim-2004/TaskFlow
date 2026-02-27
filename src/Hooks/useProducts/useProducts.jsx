import React, { useEffect, useState } from "react";
import useAPI from "../useAPI/useAPI";

const useProducts = () => {
  const Api = useAPI();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await Api.get("/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [Api]);
  return { products, isLoading };
};

export default useProducts;
