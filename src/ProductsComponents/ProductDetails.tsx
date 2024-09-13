import { Product } from "../../constants/types";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="p-8">
      <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-4">Price: ${product.price}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Specifications:</h3>
        <p>Dimensions: {product.specifications.dimensions}</p>
        <p>Weight: {product.specifications.weight}</p>
        <p>Materials: {product.specifications.materials}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Customer Reviews:</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{review.user}</p>
            <p>{review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        <button className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Wish List</button>
      </div>
    </div>
  );
};

export default ProductDetails;
