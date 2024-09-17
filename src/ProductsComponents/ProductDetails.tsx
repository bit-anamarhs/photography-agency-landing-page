import { Product } from "../../constants/types";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h2>
      <p className="text-sm text-gray-700 mb-3">{product.description}</p>
      <p className="text-base font-bold text-gray-800 mb-3">Price: ${product.price}</p>
      <div className="mt-2 flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 text-xs rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 text-xs rounded-md hover:bg-yellow-600">
          Wish List
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
