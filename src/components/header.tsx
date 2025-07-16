import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/your-logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="font-semibold text-xl">Your Brand</span>
        </div>

        <nav className="hidden md:flex space-x-4">
          <a onClick={() => {navigate("/Home")}} className="text-gray-700 hover:text-blue-500">
            Home 
          </a>
          <a onClick={() => {navigate("/About")}} className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a onClick={() => {navigate("/Contact")}} className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <a onClick={() => {navigate("/Signup")}} className="text-gray-700 hover:text-blue-500">
            Sign Up
          </a>
          <a onClick={() => {navigate("/Login")}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a onClick={() => {navigate("/Home")}} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Home
          </a>
          <a onClick={() => {navigate("About")}} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            About
          </a>
          <a onClick={() => {navigate("/Contact")}} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;