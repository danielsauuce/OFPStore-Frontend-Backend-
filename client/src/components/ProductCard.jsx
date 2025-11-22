import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
  return (
    <Link to={'/'}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl relative shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover transition-transform duration-500 "
            />
            <div className="p-6">
              <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">
                {product.category}
              </p>
              <h3 className="font-serif font-semibold text-lg mb-2 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-[#815331] text-2xl font-bold">${product.price.toFixed(2)}</p>
            </div>
            <Link to={'/Shop'}>
              <button className=" w-110 rounded-md h-10 items-center flex justify-center m-4 cursor-pointer bg-[#815331] text-white">
                <span>
                  <ShoppingCart className="mr-4 h-5 w-5" />
                </span>
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default ProductCard;
