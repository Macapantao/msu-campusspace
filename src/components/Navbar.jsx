import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-maroon text-white p-4">
      <div className="flex justify-between items-center">
        {/* MSU CampusSpace Branding */}
        <div className="text-xl font-bold">
          <Link to="/" className="text-white">
            MSU CampusSpace
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-10">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="#about-us" className="text-white hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
