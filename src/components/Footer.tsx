"use client";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  ArrowUp,
  Shield,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-gray-50 to-white text-gray-900 relative overflow-hidden border-t border-slate-200">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-burnt-orange-500/10 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="p-1">
                <Image
                  src="/images/logo/ancileai_logo.svg"
                  alt="Ancile AI Logo"
                  width={32}
                  height={32}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-burnt-orange-900 to-burnt-orange-600 bg-clip-text text-transparent">
                  Ancile AI
                </h3>
                <p className="text-sm text-burnt-orange-500 font-medium">
                  Mission-Critical AI Solutions
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed max-w-md text-lg">
              Veteran-founded AI consulting for government agencies.
              Transforming critical missions with cutting-edge AI solutions and
              unparalleled domain expertise.
            </p>

            {/* Secure Communications */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-900 mb-3">Secure Communications Available</h5>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>SIPR: sipr@ancile.ai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>JWICS: jwics@ancile.ai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>Unclass: contact@ancileai.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>Secure Phone: (855) AI-SECURE</span>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-100 p-3 rounded-xl hover:bg-slate-200 border border-slate-300 hover:border-slate-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
              >
                <Linkedin className="h-5 w-5 text-burnt-orange-700 group-hover:text-slate-800 transition-colors" />
              </a>
              <a
                href="#"
                className="bg-slate-100 p-3 rounded-xl hover:bg-slate-200 border border-slate-300 hover:border-slate-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
              >
                <Twitter className="h-5 w-5 text-burnt-orange-700 group-hover:text-slate-800 transition-colors" />
              </a>
              <a
                href="#"
                className="bg-slate-100 p-3 rounded-xl hover:bg-slate-200 border border-slate-300 hover:border-slate-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
              >
                <Mail className="h-5 w-5 text-burnt-orange-700 group-hover:text-slate-800 transition-colors" />
              </a>
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
              Certifications & Compliance
            </h4>
            <ul className="space-y-3">
              {[
                "NIST AI RMF Certified Implementation Partner",
                "FedRAMP High Ready",
                "DoD IL-5 Authorized",
                "SOC 2 Type II Compliant",
                "ISO 27001 Certified",
                "CMMI Level 3 Accredited",
              ].map((cert, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-burnt-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
              Government Resources
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">GSA Contract Vehicle:</p>
                <p className="text-xs text-gray-600">[Contract Number]</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">SEWP V Eligible Vendor</p>
                <p className="text-xs text-gray-600">System Enhancement & Workload Planning</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">CIO-SP3 Prime Contractor</p>
                <p className="text-xs text-gray-600">Cloud Computing Solutions</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">OASIS Small Business Pool 1</p>
                <p className="text-xs text-gray-600">Mission Support Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 mb-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 shadow-lg text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-700 mb-6">
              Get the latest AI insights and government transformation updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-burnt-orange-600 focus:border-burnt-orange-600"
              />
              <button className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 hover:from-burnt-orange-800 hover:to-burnt-orange-900 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 Ancile AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Security",
              "Compliance",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-slate-800 text-sm transition-colors duration-300 hover:scale-110 inline-block"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white p-4 rounded-full border border-slate-300 hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-slate-700 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
