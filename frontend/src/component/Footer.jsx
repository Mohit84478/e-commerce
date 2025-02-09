import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-red-500">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Jovin Section */}
        <div>
          <h2 className="underline text-lg font-semibold">Jovin</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            iusto ea! Deserunt aliquid eligendi animi optio itaque rem assumenda
            quos.
          </p>
        </div>

        {/* Quick Search Section */}
        <div>
          <h2 className="underline text-lg font-semibold">Quick Search</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="/" className="text-sm hover:text-gray-400">Home</a></li>
            <li><a href="/Product" className="text-sm hover:text-gray-400">Product</a></li>
            <li><a href="/Blog" className="text-sm hover:text-gray-400">Blog</a></li>
            <li><a href="/About" className="text-sm hover:text-gray-400">About</a></li>
          </ul>
        </div>

        {/* Shop Now Section */}
        <div>
          <h2 className="underline text-lg font-semibold">Shop Now</h2>
          <ul className="mt-2 space-y-1">
            <li className="text-sm hover:text-gray-400">Latest Collection</li>
            <li className="text-sm hover:text-gray-400">New Arrival</li>
            <li className="text-sm hover:text-gray-400">Shoes</li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div>
          <h2 className="underline text-lg font-semibold">Reach Us</h2>
          <p className="text-sm mt-2">
            Address: idhvcjsbdkvn kjc sndknkmvn hvwhvosdknv l
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 py-5 flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-2">
          <img src="1.jpg" alt="Logo" className="h-8 bg-white p-1 rounded" />
          <p className="text-sm">Copyright © 2024</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/facebook" className="hover:text-gray-400">
            <FaFacebookF size="1.5em" />
          </a>
          <a href="/instagram" className="hover:text-gray-400">
            <CiInstagram size="1.8em" />
          </a>
          <a href="/twitter" className="hover:text-gray-400">
            <FaTwitter size="1.5em" />
          </a>
        </div>
      </div>
    </footer>
  );
};
