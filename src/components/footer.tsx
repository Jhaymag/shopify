import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Shop Information</h3>
            <ul>
              <li><a href="/about" className="hover:text-gray-300">About Our Shop</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/returns" className="hover:text-gray-300">Returns & Exchanges</a></li>
              <li><a href="/shipping" className="hover:text-gray-300">Shipping Policy</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul>
              <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="/account" className="hover:text-gray-300">My Account</a></li>
              <li><a href="/orders" className="hover:text-gray-300">Order Tracking</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Add facebook link and create other social links platform*/}
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.664l-.53 2.89h-2.134v6.987C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Shopify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;