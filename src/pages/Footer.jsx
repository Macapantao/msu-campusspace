// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white py-1 mt-10">
      <div className="text-center">
        <p>&copy; 2024 MSU CampusSpace | All rights reserved</p>
        <div className="mt-2">
          <Link to="/terms" className="text-white mx-2">Terms of Service</Link>
          <Link to="/privacy" className="text-white mx-2">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
