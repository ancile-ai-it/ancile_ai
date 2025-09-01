import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-teal-200 font-medium text-lg tracking-wide">
            Strategic AI Implementation for Government Excellence
          </p>
        </div>

        {/* Main Headlines */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Government
            <span className="bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text text-transparent block">
              Through Expert AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We architect, implement, and optimize AI solutions that enhance mission capability 
            while ensuring security, compliance, and measurable ROI
          </p>
        </div>

        {/* Value Props */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {[
            'Proven Implementation Expertise',
            'End-to-End AI Strategy',
            'Government-Focused Delivery'
          ].map((prop, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-300" />
              <span className="text-lg font-medium">{prop}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center space-x-2">
            <span>Start Your AI Journey</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;