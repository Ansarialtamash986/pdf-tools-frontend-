import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6">
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/about" className="hover:text-primary">About Us</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
        <p className="mt-4">&copy; 2025 PDF Tools. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
