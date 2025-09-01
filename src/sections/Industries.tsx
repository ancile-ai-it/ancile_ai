import React from 'react';
import { Shield, Globe, Building, Search, AlertTriangle } from 'lucide-react';

const industries = [
  {
    icon: Shield,
    title: 'Defense & Intelligence',
    description: 'Warfighter support and operational intelligence'
  },
  {
    icon: Globe,
    title: 'Homeland Security',
    description: 'Border protection and threat assessment'
  },
  {
    icon: Building,
    title: 'Federal Civilian',
    description: 'Citizen services and regulatory compliance'
  },
  {
    icon: Search,
    title: 'Law Enforcement',
    description: 'Investigative support and crime analysis'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Management',
    description: 'Disaster response and resource coordination'
  }
];

const Industries = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Industries & Mission Areas
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Specialized AI solutions for critical government missions and operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg mb-4 mx-auto w-fit">
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{industry.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;