import React from 'react';

const AddItem = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <form className="bg-gray-900 p-6 rounded-2xl w-full max-w-3xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>

        {/* Upload Images */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Upload Pictures</label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <input type="file" name="img1" className="bg-white text-black rounded p-1" />
            <input type="file" name="img2" className="bg-white text-black rounded p-1" />
            <input type="file" name="img3" className="bg-white text-black rounded p-1" />
            <input type="file" name="img4" className="bg-white text-black rounded p-1" />
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Product Name</label>
          <input type="text" className="w-full p-2 text-black rounded" />
        </div>

        {/* Product Details */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Product Details</label>
          <input type="text" className="w-full p-2 text-black rounded" />
        </div>

        {/* Category and Subcategory */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <select className="w-full p-2 text-black rounded">
              <option value="men">Men</option>
              <option value="kid">Kid</option>
              <option value="women">Women</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Sub Category</label>
            <select className="w-full p-2 text-black rounded">
              <option value="top wear">Top Wear</option>
              <option value="bottom wear">Bottom Wear</option>
              <option value="winter wear">Winter Wear</option>
            </select>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Price</label>
          <input type="number" className="w-full p-2 text-black rounded" />
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Available Sizes</label>
          <div className="flex flex-wrap gap-4">
            {['M', 'L', 'XL', 'XXL'].map((size) => (
              <label key={size} className="flex items-center gap-1">
                <input type="checkbox" className="accent-yellow-500" />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Best Seller */}
        <div className="mb-4 flex items-center gap-2">
          <input type="checkbox" id="bestseller" className="accent-yellow-500" />
          <label htmlFor="bestseller" className="font-semibold">Best Seller</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded w-full transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddItem;
