import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <img src="/public/error-404.png" alt="hi" />
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
