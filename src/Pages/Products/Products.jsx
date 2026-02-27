import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts/useProducts";
import Loader from "../../Components/Loader/Loader";
import NormalBtn from "../../Components/Button/NormalBtn/NormalBtn";
import { IoMdAdd } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Products = () => {
  const { products, isLoading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // console.log(products);
  // handle delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  // handle edit
  const handleEdit = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
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
                <tr key={product.id}>
                  <th>{i + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.sales}</td>
                  <td className="flex items-center gap-2.5">
                    {/* Details btn */}
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowDetailModal(true);
                      }}
                      className="btn btn-accent"
                    >
                      <BsArrowsFullscreen size={20} />
                    </button>
                    {/* Edit btn */}
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowEditModal(true);
                      }}
                      className="btn btn-warning"
                    >
                      <FaRegEdit size={20} />
                    </button>
                    {/* Delete btn */}
                    <button
                      onClick={() => handleDelete()}
                      className="btn btn-error"
                    >
                      <MdDeleteForever size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Details Mondal */}
      {showDetailModal && (
        <dialog open className="modal">
          <div className="modal-box max-w-lg">
            <h3 className="text-xl font-bold mb-2">Product Details</h3>

            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <span className="text-sm text-base-content">Name</span>
              <span className="text-sm font-semibold text-base-content">
                {selectedProduct.name}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <span className="text-sm text-base-content">Category</span>
              <span className="text-sm font-semibold text-base-content">
                {selectedProduct.category}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <span className="text-sm text-base-content">Price</span>
              <span className="text-sm font-semibold text-base-content">
                {selectedProduct.price}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <span className="text-sm text-base-content">Sales</span>
              <span className="text-sm font-semibold text-base-content">
                {selectedProduct.sales}
              </span>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowDetailModal(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
      {/* Edit Mondal */}
      {showEditModal && (
        <dialog open className="modal">
          <div className="modal-box max-w-lg">
            <h3 className="text-xl font-bold mb-2">Edit Product</h3>
            <div className="space-y-3">
              {/* name */}
              <div>
                <label className="text-xs font-semibold text-base-content mb-1.5 block">
                  Product Name
                </label>
                <input
                  name="name"
                  value={selectedProduct.name}
                  defaultValue={selectedProduct.name}
                  className="w-full px-3.5 py-2.5 rounded-xl border bg-base-200 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              {/* Category */}
              <div>
                <label className="text-xs font-semibold text-base-content mb-1.5 block">
                  Product Category
                </label>
                <input
                  name="category"
                  // value={selectedProduct.name}
                  defaultValue={selectedProduct.category}
                  className="w-full px-3.5 py-2.5 rounded-xl border bg-base-200 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              {/* Price */}
              <div>
                <label className="text-xs font-semibold text-base-content mb-1.5 block">
                  Product Price
                </label>
                <input
                  name="category"
                  defaultValue={selectedProduct.category}
                  className="w-full px-3.5 py-2.5 rounded-xl border bg-base-200 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              {/* Sales */}
              <div>
                <label className="text-xs font-semibold text-base-content mb-1.5 block">
                  Product Sales
                </label>
                <input
                  name="sales"
                  defaultValue={selectedProduct.sales}
                  className="w-full px-3.5 py-2.5 rounded-xl border bg-base-200 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
            </div>
            <div className="modal-action">
              <button
                className="btn flex-1"
                onClick={() => setShowEditModal(false)}
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleEdit();
                  setShowEditModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-base-content text-sm font-semibold transition-colors "
              >
                Save Changes
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Products;
