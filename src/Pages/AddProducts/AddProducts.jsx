import React from "react";
import useAPI from "../../Hooks/useAPI/useAPI";
import Swal from "sweetalert2";

const AddProducts = () => {
  const Api = useAPI();
  // add handle submit funtion
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      name: form.name.value,
      category: form.category.value,
      price: Number(form.price.value),
      sales: Number(form.sales.value),
    };
    console.log("New Product:", newProduct);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };

  return (
    <div className="container max-w-[600px] mx-auto p-6 md:p-10">
      <h3 className="text-xl font-bold text-base-content mb-6">Add Product</h3>

      <form
        onSubmit={handleSubmit}
        className="bg-base-200/50 rounded-2xl p-6 space-y-4"
      >
        {/* Name */}
        <div>
          <label className="text-xs font-semibold text-base-content mb-1.5 block">
            Product Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="e.g. Premium Plan"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-xs font-semibold text-base-content mb-1.5 block">
            Category
          </label>
          <select
            name="category"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select a category</option>
            <option value="subscription">Subscription</option>
            <option value="addon">Addon</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="text-xs font-semibold text-base-content mb-1.5 block">
            Price ($)
          </label>
          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 99.99"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Sales */}
        <div>
          <label className="text-xs font-semibold text-base-content mb-1.5 block">
            Sales
          </label>
          <input
            name="sales"
            type="number"
            min="0"
            placeholder="e.g. 234"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-colors mt-2"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
