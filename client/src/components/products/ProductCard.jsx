import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-md overflow-hidden 
                    hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <div className="h-48">
        <img
          src={product.image}
          className="w-full h-full object-cover"
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-zinc-100">
          {product.name}
        </h2>
        <p className="text-zinc-400 mb-1">Price: ${product.price}</p>
        <p className="text-zinc-400 mb-1">Rating: {product.rating} ⭐</p>
        <p
          className={`font-medium ${
            product.inStock ? "text-green-400" : "text-red-400"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
