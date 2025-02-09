import React, { useState } from "react";
import loginb from "./loginb.jpg";

const SignIn = () => {
  const [data, setData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    mail: "",
  });

  const [error, setError] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!data.fullname || !data.username || !data.password || !data.confirmPassword || !data.mail) {
      setError("All fields are required!");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Form Submitted:", data);
    setError("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 pt-24"
      style={{ backgroundImage: `url(${loginb})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}

        <form onSubmit={onSubmitLogin} className="mt-4">
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullname" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              value={data.fullname}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username Input */}
          <div className="mt-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label htmlFor="mail" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="mail"
              placeholder="Enter your email"
              value={data.mail}
              onChange={(e) => setData({ ...data, mail: e.target.value })}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={data.confirmPassword}
              onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-gray-700">Already have an account?</span>
            <a href="/Login" className="text-blue-600 hover:text-blue-700">
              {" "}Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
