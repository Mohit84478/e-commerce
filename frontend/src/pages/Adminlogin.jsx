import React, { useState } from 'react'
import loginb from './loginb.jpg';
const Adminlogin = () => {
  const [data, setData] = useState({
    fullname: '',
    password: ''
  });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    // Example of form validation
    if (!data.fullname || !data.password) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Form submitted:', data);
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${loginb})` }}
    >
      <div className="flex justify-center items-center h-full">
        <form onSubmit={onSubmitLogin} className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-96">
          <div>
            <label htmlFor="fullname" className="block text-gray-700">
              Full name:
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Full name"
              value={data.fullname}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        
        </form>
      </div>
    </div>
  );
};

export default Adminlogin