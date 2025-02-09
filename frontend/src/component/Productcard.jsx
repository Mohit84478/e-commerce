import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { addtocart } from '../redux/cartslice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const handleToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!size) {
      alert("Please select a size");
      return; // Prevent function execution if size is not selected
    }

    const productWithSize = { ...product, size };
    dispatch(addtocart(productWithSize));
  };

  return (
    <div className="group border-2 transform transition-transform duration-300 hover:scale-105 p-4 rounded-md shadow-md">
      {/* Product Image */}
      <Link to={`/Productpage/${product.id}`}>
        <img
          src={product.image || 'https://via.placeholder.com/150'}
          alt={product.name}
          className="w-full h-60 object-cover rounded-md"
        />
      </Link>

      {/* Product Name and Price */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">${product.price} USD</p>

        {/* Size Selector */}
        <select
          onChange={(e) => setSize(e.target.value)}
          className="mt-2 block w-full p-2 border rounded bg-gray-100 text-black"
        >
          <option value="">Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Ratings and Add to Cart Button */}
      <div className="flex justify-between items-center mt-4">
        {/* Ratings */}
        <div className="flex text-yellow-400">
          {Array.from({ length: product.rating || 4 }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
