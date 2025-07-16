import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NotFound from "../components/404Page";
import Loader from "../components/loader";
import ProductCard from "../components/ui/ProductCard";
import { useCart } from "../context/CartContext";
import { useQueryData } from "../hooks/useQuery";

export default function Home() {
  const { data, isLoading, isError } = useQueryData("/products", "en", "products");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(data?.map(p => p.category))];

  const { addToCart } = useCart();

  if (isLoading) return <Loader />;
  if (isError) return <NotFound />;

  const filteredProducts = data
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="mt-5 container">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 mb-6 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded border ${selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <p>No products found matching "{searchTerm}"</p>
          )}
        </div>
      </section>
    </main>
  );
}
