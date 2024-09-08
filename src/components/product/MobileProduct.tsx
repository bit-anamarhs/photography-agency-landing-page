import React, { useState } from 'react';
import { ProductProps } from '../../../constants/types';

const MobileProduct: React.FC<ProductProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleProductClick = () => {
    if (product.subProducts) {
      setIsExpanded((prev) => !prev);
    } else {
      window.location.href = product.links;
    }
  };

  return (
    <div className="bg-[#1C1A1F] rounded-lg hover:bg-[#363733] transition-all cursor-pointer">
      <div 
        onClick={handleProductClick}
        className="flex flex-col items-center text-center p-2"
      >
        <div className="text-2xl mb-2">
          {product.icon}
        </div>
        <h3 className="text-sm font-semibold text-white">{product.title}</h3>
        <p className="text-xs text-gray-400">{product.description}</p>
        {product.subProducts && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`text-white h-4 w-4 mt-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {isExpanded && product.subProducts && (
        <div className="mt-2 space-y-2 p-4 bg-[#1C1A1F] rounded-lg shadow-lg">
          {product.subProducts.map((subProduct, index) => (
            <a
              key={index}
              href={subProduct.links}
              className="block bg-[#363733] p-2 rounded-lg hover:bg-[#494A4D] transition-all no-underline"
            >
              <h4 className="text-sm text-white font-semibold">{subProduct.title}</h4>
              <p className="text-xs text-gray-400">{subProduct.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileProduct;
