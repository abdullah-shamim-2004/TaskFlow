import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Card/ProductCard/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("../../../public/allproducts.json");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-28 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 flex items-center justify-center md:justify-between">
          <div className=" hidden md:block lg:block">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Premium Collection
            </h1>
            <div className="flex items-center gap-2">
              <span className="h-1 w-12 bg-indigo-600 rounded-full"></span>
              <p className="text-slate-500 font-medium">
                Showing {products?.length} exclusive items
              </p>
            </div>
          </div>
          {/* Search and filter section */}
          <div>{/* <SearchBar /> */}</div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProducts;
