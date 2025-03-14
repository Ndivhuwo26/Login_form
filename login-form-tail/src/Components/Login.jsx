import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 p-2 bg-gray-800 text-white rounded-full shadow-md"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Login Form Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-[430px] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} p-8 rounded-2xl shadow-lg relative`}
      >
        {/* Header Titles */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLoginMode(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLoginMode(false)}
          >
            Signup
          </button>
          <motion.div
            className="absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-red-700 via-black to-black"
            animate={{ left: isLoginMode ? "0%" : "50%" }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>

        {/* Form Section */}
        <motion.form 
          key={isLoginMode} 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Signup-only Field */}
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-red-500 placeholder-gray-400"
            />
          )}

          {/* Shared Fields */}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-red-500 placeholder-gray-400"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-red-500 placeholder-gray-400"
            />
            <button 
              type="button" 
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-red-500 placeholder-gray-400"
            />
          )}

          {isLoginMode && (
            <div className="text-right">
              <a href="#" className="text-red-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full p-3 bg-gradient-to-r from-red-700 via-black to-black text-white rounded-full text-lg font-medium hover:opacity-90 transition">
            {isLoginMode ? "Login" : "Signup"}
          </button>

          {/* OAuth Buttons */}
          <div className="flex justify-between mt-4">
            <button className="flex items-center gap-2 p-3 border rounded-lg w-1/2 justify-center bg-white shadow hover:shadow-md transition">
              <FaGoogle className="text-red-500" /> Google
            </button>
            <button className="flex items-center gap-2 p-3 border rounded-lg w-1/2 justify-center bg-white shadow hover:shadow-md transition">
              <FaGithub className="text-gray-700" /> GitHub
            </button>
          </div>

          {/* Switch Mode Link */}
          <p className="text-center text-gray-600">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"} 
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-red-600 hover:underline ml-1"
            >
              {isLoginMode ? "Signup now" : "Login"}
            </a>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default LoginForm;

