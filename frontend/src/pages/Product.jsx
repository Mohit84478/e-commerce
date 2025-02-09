import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setproducts } from '../redux/productSlice';
import { mockdata } from '../assest/mockdata';

import ProductCard from '../component/Productcard';


const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(setproducts(mockdata));
    }
  }, [dispatch, products.length]);

  console.log("Redux Store Products:", products);

  return (
    <div className="bg-black text-white min-h-screen p-4 pt-24">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-semibold mb-4">Shop</h1>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            
          <ProductCard key={product.id} product={product} />
            
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
