import Link from "next/link";
import { Product } from "../../constants/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-60 object-contain mb-4 mt-4 bg-black border-2"
        />
        <p className="text-gray-600 mb-2">{product.description}</p>
        {/* <p className="text-lg font-bold mb-4">${product.price}</p> */}
      </div>
      <div className="mt-4">
        <Link 
          href={product.image} target="_blank"
          className="bg-[#363733] text-white px-4 py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

