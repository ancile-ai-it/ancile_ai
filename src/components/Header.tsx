"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your email service
    const emailSubject = 'Partnership Inquiry from ' + formData.name;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}
    `.trim();

    // For now, we'll just log it and show an alert
    console.log('Email Subject:', emailSubject);
    console.log('Email Body:', emailBody);

    alert('Thank you for your inquiry! We will contact you soon.');
    setIsContactModalOpen(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-burnt-orange-700 to-burnt-orange-900 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image src="/images/logo/ancileai_logo.png" alt="Ancile AI Logo" width={40} height={40} className="group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-burnt-orange-900 to-burnt-orange-600 bg-clip-text text-transparent">Ancile AI</h1>
              <p className="text-xs text-burnt-orange-500 font-medium tracking-wide">Consulting & Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="relative text-gray-700 hover:text-burnt-orange-600 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-burnt-orange-600 before:to-slate-700 before:transition-all before:duration-300 hover:before:w-full"
            >
              About
            </Link>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white px-6 py-3 rounded-lg font-semibold hover:from-burnt-orange-800 hover:to-burnt-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Partner With Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-slate-700 focus:outline-none p-2 hover:bg-slate-100 rounded-lg transition-all duration-200"
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
          <div className="md:hidden bg-white border-t border-slate-200 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-burnt-orange-600 font-medium transition-all duration-200 px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              About
            </Link>
            <button
              onClick={openModal}
              className="w-full bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white px-6 py-3 rounded-lg font-semibold hover:from-burnt-orange-800 hover:to-burnt-orange-900 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </button>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-300">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <Image src="/images/logo/ancileai_logo.png" alt="Logo" width={24} height={24} />
                  </div>
                  <h3 className="text-xl font-bold">Partner With Us</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="mt-3 text-white/90 text-sm leading-relaxed">
                Let's discuss how Ancile AI can help transform your organization with AI solutions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                  Organization/Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Describe your AI initiative, timelines, and any specific requirements..."
                />
              </div>

              <div className="pt-4 flex space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white py-3 px-6 rounded-xl hover:from-burnt-orange-800 hover:to-burnt-orange-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
