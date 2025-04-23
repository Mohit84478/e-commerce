import React, { useState } from "react";


import { Link } from "react-router-dom";

const Adminnav = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to ="/Adminp">
        <div className="flex items-center gap-2">
          
          <img src="1.jpg" alt="Logo" className="h-10 w-10 object-cover rounded-full" />
          <span className="text-2xl font-semibold">Jovin</span>
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg">
          {/* <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/Product" className="hover:text-gray-400">Product</Link>
          <Link to="/Blog" className="hover:text-gray-400">Blog</Link>
          <Link to="/About" className="hover:text-gray-400">About</Link> */}
          <button className="hover:text-gray-400"> logout</button>
        </div>

        {/* Cart & Auth Links
        <div className="flex items-center gap-5">
          <Link to="/Cart" className="relative">
            <FaCartShopping className="text-white text-2xl" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1 rounded-full">
                {products.length}
              </span>
            )}
          </Link> */}
          {/* <Link to="/SignIn" className="hover:text-gray-400 max-[500px]:hidden">Sign In</Link>
          <Link to="/Login" className="hover:text-gray-400 max-[500px]:hidden ">Login</Link>
           */}
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      {/* </div> */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-black w-full py-4 space-y-3 text-center">
          {/* <Link to="/" className="hover:text-gray-400 hover:underline">Home</Link>
          <Link to="/Product" className="hover:text-gray-400 hover:underline">Product</Link>
          <Link to="/Blog" className="hover:text-gray-400 hover:underline">Blog</Link>
          <Link to="/About" className="hover:text-gray-400 hover:underline">About</Link>
          <Link to="/SignIn" className="hover:text-gray-400 hover:underline">Sign In</Link>
          <Link to="/Login" className="hover:text-gray-400 hover:underline">Login</Link> */}
          <button type="button" className="hover:text-gray-400">logout</button>
          <p className="text-3xl">Jovin</p>
        </div>
      )}
    </nav>
  );
};

export default Adminnav