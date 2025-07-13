import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg';

const Navbar = () => (
  <nav className="bg-white shadow-md w-full sticky top-0 z-50">
    <div className="flex justify-between items-center px-5 lg:px-20 py-4">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-42 h-12" />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-[16px] lg:text-[18px] font-semibold text-gray-700">
        <Link
          to="/"
          className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-500"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-500"
        >
          Exercises
        </a>
        <Link
          to="/blogs"
          className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-500"
        >
          Blogs
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-500"
        >
          About Us
        </Link>
        <Link
          to="/calorie-tracker"
          className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-500"
        >
          Calorie Tracker
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

