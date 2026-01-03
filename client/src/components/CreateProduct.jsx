import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    rating: "",
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const create = await axios.post("http://localhost:3000/api/product/create", product, {
        withCredentials: true,
      });
      console.log("Product Created:", create);
      alert("Product created successfully!");
    } catch (err) {
      console.error("Failed to create product", err);
      alert("Failed to create product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-zinc-950 text-zinc-100">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-md border border-zinc-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-100">
          Create Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Product Name", name: "name", type: "text" },
            { label: "Brand", name: "brand", type: "text" },
            { label: "Price", name: "price", type: "number" },
            { label: "Image URL", name: "image", type: "text" },
            { label: "Rating", name: "rating", type: "number", step: "0.1" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                step={field.step}
                value={product[field.name]}
                onChange={handleChange}
                className="w-full border border-zinc-700 p-2 rounded 
                           bg-zinc-800 text-zinc-100 
                           focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-zinc-700 p-2 rounded 
                         bg-zinc-800 text-zinc-100 
                         focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            >
              <option value="">Select Category</option>
              <option value="MEN">MEN</option>
              <option value="WOMEN">WOMEN</option>
              <option value="KIDS">KIDS</option>
            </select>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inStock"
              checked={product.inStock}
              onChange={handleChange}
              className="w-4 h-4 accent-amber-400"
            />
            In Stock
          </label>

          <button
            type="submit"
            className="w-full bg-amber-400 text-zinc-900 py-2 rounded 
                       hover:bg-amber-500 transition-colors font-medium"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
