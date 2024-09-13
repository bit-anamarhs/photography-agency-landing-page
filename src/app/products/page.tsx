import ProductList from "@/ProductsComponents/ProductList";

const ProductsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-white text-center">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
