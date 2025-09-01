import React from 'react';
import { Calendar, Download, Mail, Phone, Shield } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Mission with AI?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's build your roadmap to AI-powered government excellence
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <Calendar className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Schedule Strategic AI Consultation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get personalized guidance on your AI transformation journey from our security-cleared experts
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;