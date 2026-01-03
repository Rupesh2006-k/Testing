import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import FilterProduct from "./FilterProduct";
import { brands, categories, priceRanges } from "./FilterData";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // FilterProduct state
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    price: "All Prices",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products
  const filteredProducts = products.filter((p) => {
    const brandMatch = filters.brand ? p.brand === filters.brand : true;
    const categoryMatch = filters.category ? p.category === filters.category : true;

    const priceRange = priceRanges.find((pr) => pr.label === filters.price);
    const priceMatch = priceRange ? p.price >= priceRange.min && p.price <= priceRange.max : true;

    return brandMatch && categoryMatch && priceMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto bg-zinc-950 min-h-screen text-zinc-100">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Products</h1>

      <FilterProduct
        brands={brands}
        categories={categories}
        priceRanges={priceRanges}
        filters={filters}
        setFilters={setFilters}
        dark
      />

      {loading ? (
        <div className="text-center mt-20 text-xl text-zinc-300">
          Loading products...
        </div>
      ) : error ? (
        <div className="text-center mt-20 text-red-500">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product._id || product.id} product={product} dark />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage((prev) => prev - 1)}
            onNext={() => setCurrentPage((prev) => prev + 1)}
            dark
          />
        </>
      )}
    </div>
  );
};

export default Products;
