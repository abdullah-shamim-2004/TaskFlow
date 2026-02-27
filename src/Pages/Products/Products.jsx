import React from "react";
import useProducts from "../../Hooks/useProducts/useProducts";
import Loader from "../../Components/Loader/Loader";
import NormalBtn from "../../Components/Button/NormalBtn/NormalBtn";
import { IoMdAdd } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Products = () => {
  const { products, isLoading } = useProducts();
  console.log(products);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-base-content tracking-tight">
            Products
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">
            Manage your product catalog and pricing.
          </p>
        </div>
        <NormalBtn
          icon={<IoMdAdd />}
          name="Add product"
          className="bg-primary"
        />
      </div>
      {/* Table */}
      <div>
        {/* Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b ">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">
              <BiSearch />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-8 pr-4 py-2 text-sm rounded-xl border  w-56 transition"
            />
          </div>
          <span className="text-xs text-base-content font-medium">
            {products.length} of {products.length} products
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Revenue</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.sales}</td>
                  <td className="flex items-center gap-2.5">
                    <button className="btn btn-accent">
                      <BsArrowsFullscreen size={20} />
                    </button>
                    <button className="btn btn-warning">
                      <FaRegEdit size={20} />
                    </button>

                    <button className="btn btn-error">
                      <MdDeleteForever size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
