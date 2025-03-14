import React, { useState } from "react";

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(isLoginMode ? "Logged in!" : "Signed up!");
    }, 2000); // Simulated API response
  };

  return (
    <div className={`flex justify-center items-center min-h-screen transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      <div className={`relative w-[430px] p-8 rounded-2xl shadow-lg transition-all duration-500 ${darkMode ? "bg-black bg-opacity-50 backdrop-blur-lg" : "bg-white"}`}>

        {/* Dark Mode Toggle */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Header Titles */}
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl font-semibold text-center transition-all duration-500">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="relative flex h-12 mb-6 border border-red-600 rounded-full overflow-hidden">
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}
            onClick={() => setIsLoginMode(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}
            onClick={() => setIsLoginMode(false)}
          >
            Signup
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-red-700 to-red-500 transition-all duration-500 ${isLoginMode ? "left-0" : "left-1/2"}`}
          ></div>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Signup-only Field */}
          {!isLoginMode && (
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-red-500 placeholder-transparent"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-red-500"
              >
                Name
              </label>
            </div>
          )}

          {/* Shared Fields */}
          <div className="relative">
            <input
              type="email"
              id="email"
              required
              className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-red-500 placeholder-transparent"
              placeholder="Email Address"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-red-500"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              required
              className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-red-500 placeholder-transparent"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-red-500"
            >
              Password
            </label>
          </div>

          {/* Signup-only Field */}
          {!isLoginMode && (
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                required
                className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 outline-none focus:border-red-500 placeholder-transparent"
                placeholder="Confirm Password"
              />
              <label
                htmlFor="confirm-password"
                className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-red-500"
              >
                Confirm Password
              </label>
            </div>
          )}

          {/* Forgot Password (Only for Login) */}
          {isLoginMode && (
            <div className="text-right">
              <a href="#" className="text-red-500 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button with Loader */}
          <button
            className="w-full p-3 bg-red-600 text-white rounded-full text-lg font-medium hover:bg-red-700 transition flex justify-center items-center"
          >
            {isLoading ? <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span> : isLoginMode ? "Login" : "Signup"}
          </button>

          {/* Social Logins */}
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6"/>
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6"/>
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="w-6 h-6"/>
            </button>
          </div>

          {/* Switch Mode Link */}
          <p className="text-center text-gray-600">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-red-500 hover:underline"
            >
              {isLoginMode ? "Signup now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
