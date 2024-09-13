"use client";
import { useState } from "react";
import { Product } from "../../constants/types";
import ProductCard from "./ProductCard";
import productsData from "../ProductsData/products.json";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);

  // Sorting products
  const sortProducts = (option: string) => {
    const sorted = [...filteredProducts];
    if (option === "price") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    }
    setFilteredProducts(sorted);
  };

  // Filtering products by search query
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg w-2/3"
        />
        <select
          onChange={(e) => sortProducts(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-1/3"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
