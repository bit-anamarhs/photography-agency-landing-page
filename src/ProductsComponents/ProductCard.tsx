import Link from "next/link";
import { Product } from "../../constants/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center flex flex-col justify-between h-full">
      <div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-contain mb-4 bg-black" 
        />
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-lg font-bold mb-4">${product.price}</p>
      </div>
      <div className="mt-auto">
        <Link 
          href={`/products/${product.id}`} 
          className="bg-[#363733] text-white px-4 py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;


//products card with same size
// import Link from "next/link";
// import { Product } from "../../constants/types";

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 text-center flex flex-col justify-between h-[400px] w-[300px]">
//       <img 
//         src={product.image} 
//         alt={product.name} 
//         className="w-full h-32 object-cover mb-4 bg-black" 
//       />
//       <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//       <p className="text-gray-600 mb-2">{product.category}</p>
//       <p className="text-lg font-bold mb-4">${product.price}</p>
//       <Link 
//         href={`/products/${product.id}`} 
//         className="bg-[#363733] text-white px-4 py-2 rounded-lg"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;
