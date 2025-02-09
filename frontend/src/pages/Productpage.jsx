import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/cartslice';
import { useParams } from 'react-router-dom';

const Productpage = () => {
  const { id } = useParams();
  const [size, setSize] = useState("");
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  const handletocart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!size) {
      alert("Select size");
      return;
    }

    const productWithSize = { ...product, size };
    dispatch(addtocart(productWithSize));
  };

  useEffect(() => {
    const newProduct = products.find(p => p.id === Number(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product) return <p className="text-center text-white pt-20">Loading...</p>;

  return (
    <div className="min-h-screen pt-24 bg-gray-900 text-white flex justify-center px-4">
      <main className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Product Image Section */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-yellow-400 mt-2 text-lg">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>

          {/* Size Selector */}
          <div className="mt-4">
            <label htmlFor="size" className="block mb-2 text-sm">Select Size:</label>
            <select
              id="size"
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none"
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handletocart}
            className="mt-6 bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-600 transition w-full"
          >
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
};

export default Productpage;
