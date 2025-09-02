"use client";

import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-2 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Aegis AI</h1>
              <p className="text-xs text-gray-600">Consulting & Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              About
            </Link>
            <button className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-900 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              Partner With Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              About
            </Link>
            <button className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-900 hover:to-blue-800 transition-all duration-200">
              Partner With Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
