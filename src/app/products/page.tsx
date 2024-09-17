import Navbar from "@/components/Navbar";
import FilterPage from "@/ProductsComponents/FilterPage";


const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Featured Products</h1>
        <FilterPage />
      </div>
    </>
  );
};

export default ProductsPage;
