import Link from "next/link";
import { Product } from "../../constants/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-md rounded-2xl p-4 text-center flex flex-col justify-between h-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out border border-white/20">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-white">{product.name}</h2>
        <div className="relative w-full h-40 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className=" object-cover rounded-lg shadow-md transition-all duration-300"
          />
        </div>
        <p className="text-gray-300 mb-3 text-sm line-clamp-2">{product.description}</p>
      </div>
      <div className="mt-2">
        <Link href={product.image} target="_blank">
          <button className="hover:bg-white border-white border-2 md:text-black text-white hover:font-semibold px-4 py-2 rounded-full transition-all hover:border-white hover:border-2 hover:text-black ">
            View Details
          </button>

          {/* add similar to the apply filter button if you want */}
          {/* <button
            className="bg-[#363733] text-white text-sm font-bold p-2 rounded-full border border-white transition-all hover:bg-white hover:text-black"
          >
            View Details
          </button> */}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
