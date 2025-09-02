"use client";

import { ArrowRight, CheckCircle, Shield, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-white text-gray-900 overflow-hidden mb-8 min-h-screen flex items-center">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23111111%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        {/* Professional gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-burnt-orange-100/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-slate-200/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-100/20 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        {/* Badge */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-full border border-slate-300 shadow-lg">
            <Shield className="h-5 w-5 text-slate-700" />
            <span className="text-sm font-medium text-slate-800">Military-Veteran Led • AI Specialists • Mission-Focused</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className={`text-center mb-20 relative transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Government-Grade
            <br />
            <span className="relative bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            We deliver enterprise-grade AI capabilities that transform government operations,
            enhance decision-making, and accelerate mission success with uncompromising security and compliance.
          </p>
        </div>


        {/* Professional CTA Buttons */}
        <div className={`text-center flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 hover:from-burnt-orange-800 hover:to-burnt-orange-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center space-x-2">
            <span>Partner with Us Today</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-slate-300 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
