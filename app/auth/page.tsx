import React from "react";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Logo Section */}
      <div className="absolute lg:w-[50%] md:px-12 top-8 w flex justify-between items-center w-full max-w-6xl mb-16">
        <div>
          <img alt="Logo icon" src="./gslogo.svg" className="h-10 w-auto" />
        </div>

        {/* Sign In Section */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm sm:text-base">
              Already have an account?
            </span>
            <button className="px-8 bg-gray-900 py-2 border border-gray-500 rounded-md hover:bg-gray-700 text-sm sm:text-base">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Authentication Form */}
      <div className="w-full max-w-md  p-8 pb-32 rounded-3xl shadow-lg border border-gray-700">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Welcome to Gigsol
        </h1>
        <form>
          <label htmlFor="email" className="block text-sm mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g. ethgde@yahoo.ca"
            className="w-full px-4 py-2 mb-4 bg-transparent border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl hover:opacity-90"
          >
            Join with email
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;