import React, { useEffect } from 'react';
import loginb from './loginb.jpg';
import mena from './men.jpg';
import { setproducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mockdata } from '../assest/mockdata';
import Productcard from '../component/Productcard';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);  

  useEffect(() => {
    dispatch(setproducts(mockdata)); 
    console.log("Dispatched Data:", mockdata); 
  }, [dispatch]);

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-28 px-4">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between py-10 border-b-2 border-gray-700">
        <div className="text-center md:text-left">
          <p className="text-gray-400 uppercase tracking-wide">---- Our Bestseller</p>
          <h1 className="text-4xl font-bold mt-2">Latest Arrivals</h1>
          <Link to="/Product" className="inline-block mt-4 bg-cyan-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-cyan-600 transition">
            Shop Now
          </Link>
        </div>
        <div className="mt-6 md:mt-0 border-x-2 border-gray-600 p-4">
          <img className="h-80 w-auto object-cover rounded-lg shadow-lg" src={loginb} alt="banner" />
        </div>
      </section>

      {/* Product Categories */}
      <main className="mt-12">
        <h1 className="text-center text-3xl font-semibold mb-6">Product Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <img src={mena} alt="Men" className="w-64 h-64 object-cover rounded-full mx-auto shadow-md" />
            <h6 className="mt-4 text-lg font-semibold">Men</h6>
            <a href="#" className="text-blue-500 hover:underline">See more &gt;&gt;</a>
          </div>
          <div className="text-center">
            <img src={mena} alt="Women" className="w-64 h-64 object-cover rounded-full mx-auto shadow-md" />
            <h6 className="mt-4 text-lg font-semibold">Women</h6>
            <a href="#" className="text-blue-500 hover:underline">See more &gt;&gt;</a>
          </div>
        </div>
      </main>

      {/* Top Products Section */}
      <section className="mt-12">
        <h1 className="text-center text-3xl font-semibold mb-6">Top Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.slice(0, 6).map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
