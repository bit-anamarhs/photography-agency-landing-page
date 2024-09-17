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
    templateStyle: "",
    techStack: "",
    layoutType: "",
    features: [] as string[],
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    const filtered = productsData.filter((product) => {
      const inPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const inCategory = filters.category ? product.category === filters.category : true;
      const inTemplateStyle = filters.templateStyle ? product.templateStyle === filters.templateStyle : true;
      const inTechStack = filters.techStack ? product.techStack === filters.techStack : true;
      const inLayoutType = filters.layoutType ? product.layoutType === filters.layoutType : true;
      const hasFeatures = filters.features.length > 0
        ? filters.features.every((feature) => product.features.includes(feature))
        : true;

      return inPriceRange && inCategory && inTemplateStyle && inTechStack && inLayoutType && hasFeatures;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col space-y-6 py-4">
      {/* Filter Section */}
      <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Category Filter */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm text-white font-bold">Category:</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-full bg-[#363733] text-sm text-white hover:bg-[#4e4d4a] hover:text-gray-200 focus:ring-2 focus:ring-gray-500 appearance-none transition-all"
            >
              <option value="">All</option>
              <option value="Business">Business</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Blogs">Blogs</option>
              <option value="News">News</option>
              <option value="Educational">Educational</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Restaurant">Restaurant</option>
            </select>
          </div>

          {/* Template Style Filter */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm text-white font-bold">Template Style:</label>
            <select
              name="templateStyle"
              value={filters.templateStyle}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-full bg-[#363733] text-sm text-white hover:bg-[#4e4d4a] hover:text-gray-200 focus:ring-2 focus:ring-gray-500 appearance-none transition-all"
            >
              <option value="">All</option>
              <option value="Modern">Modern</option>
              <option value="Creative">Creative</option>
              <option value="Corporate">Corporate</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Dynamic">Dynamic</option>
              <option value="Interactive">Interactive</option>
            </select>
          </div>

          {/* Tech Stack Filter */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm text-white font-bold">Tech Stack:</label>
            <select
              name="techStack"
              value={filters.techStack}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-full bg-[#363733] text-sm text-white hover:bg-[#4e4d4a] hover:text-gray-200 focus:ring-2 focus:ring-gray-500 appearance-none transition-all"
            >
              <option value="">All</option>
              <option value="React">React</option>
              <option value="Next.js">Next.js</option>
              <option value="Tailwind CSS">Tailwind CSS</option>
              <option value="Gatsby">Gatsby</option>
              <option value="WordPress">WordPress</option>
              <option value="Angular">Angular</option>
            </select>
          </div>

          {/* Layout Type Filter */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm text-white font-bold">Layout Type:</label>
            <select
              name="layoutType"
              value={filters.layoutType}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-full bg-[#363733] text-sm text-white hover:bg-[#4e4d4a] hover:text-gray-200 focus:ring-2 focus:ring-gray-500 appearance-none transition-all"
            >
              <option value="">All</option>
              <option value="One-page">One-page</option>
              <option value="Multi-page">Multi-page</option>
              <option value="Landing-page">Landing-page</option>
            </select>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center items-center mt-4 md:mt-0">
          <button
            onClick={applyFilters}
            className="p-1.5 border border-gray-300 rounded-full bg-[#363733] text-sm text-white hover:bg-white hover:text-black focus:ring-2 focus:ring-gray-500 transition-all"
            style={{ width: "150px", height: "40px" }} // Adjust these values as necessary
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
