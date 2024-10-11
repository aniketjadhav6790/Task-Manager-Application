// src/pages/Login.jsx

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  
  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement your login logic here, e.g., API call to authenticate user
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                aria-label={showPassword ? 'Hide password' : 'Show password'} // Accessibility label
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12s2-3 9-3 9 3 9 3-2 3-9 3-9-3-9-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12c0-2.21 4.03-6 9-6s9 3.79 9 6-4.03 6-9 6-9-3.79-9-6z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825a7.983 7.983 0 01-3.075-.47 6.943 6.943 0 003.075.47zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 12c0 2.943 5.25 9 10.5 9s10.5-6.057 10.5-9-5.25-9-10.5-9S2.25 9.057 2.25 12z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-400 text-sm text-center">
            New here?{' '}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </p>
          <p className="text-gray-400 text-sm text-center">
            <a href="/forgot-password" className="text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
