import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Taskify
        </Link>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/tasks"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Tasks
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
