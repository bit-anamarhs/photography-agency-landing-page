"use client";
import { useState } from "react";
import { Product } from "../../constants/types";
import ProductCard from "../ProductsComponents/ProductCard";
import productsData from "../ProductsData/products.json";

const FilterPage = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [0, 1000],
        brand: "",
        size: "",
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: [+value, prevFilters.priceRange[1]],
        }));
    };

    const applyFilters = () => {
        const filtered = productsData.filter((product) => {
            const inPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
            const inCategory = filters.category ? product.category === filters.category : true;
            const inBrand = filters.brand ? product.brand === filters.brand : true;
            const inSize = filters.size ? product.size === filters.size : true;
            return inPriceRange && inCategory && inBrand && inSize;
        });
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mx-auto p-6 flex gap-8">
            <div className="w-1/4 bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg space-y-6">
                <h2 className="text-lg font-semibold text-white mb-4">Filter Products</h2>
                <div className="mb-4">
                    <label className="block text-sm text-white mb-2">Category</label>
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white/20 backdrop-blur-lg text-white focus:ring-blue-500 focus:ring-2"
                    >
                        <option value="">All</option>
                        <option value="Category A">Category A</option>
                        <option value="Category B">Category B</option>
                        <option value="Category C">Category C</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-white mb-2">Price Range</label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={filters.priceRange[0]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                    <p className="text-sm text-gray-300 mt-1">Up to ₹{filters.priceRange[0]}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-white mb-2">Brand</label>
                    <select
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white/20 backdrop-blur-lg text-white focus:ring-blue-500 focus:ring-2"
                    >
                        <option value="">All Brands</option>
                        <option value="Brand A">Brand A</option>
                        <option value="Brand B">Brand B</option>
                        <option value="Brand C">Brand C</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-white mb-2">Size</label>
                    <select
                        name="size"
                        value={filters.size}
                        onChange={handleFilterChange}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white/20 backdrop-blur-lg text-white focus:ring-blue-500 focus:ring-2"
                    >
                        <option value="">All Sizes</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                </div>
                <button
                    onClick={applyFilters}
                    className="bg-white/20 text-white w-full p-2 rounded-full transition-all hover:bg-white hover:text-black"
                >
                    Apply Filters
                </button>
            </div>
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FilterPage;
