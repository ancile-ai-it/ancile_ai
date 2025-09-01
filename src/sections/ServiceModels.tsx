import React from 'react';
import { Lightbulb, Zap, Cog, GraduationCap, Headphones } from 'lucide-react';

const models = [
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'C-suite AI strategy and digital transformation'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: '4-6 week proof of concept development'
  },
  {
    icon: Cog,
    title: 'Full Implementation',
    description: 'End-to-end solution delivery and deployment'
  },
  {
    icon: Headphones,
    title: 'Managed Services',
    description: 'Ongoing AI operations and optimization'
  },
  {
    icon: GraduationCap,
    title: 'Training & Enablement',
    description: 'Capability building and knowledge transfer'
  }
];

const ServiceModels = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Delivery Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible engagement models tailored to your mission requirements and timeline
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-200">
                <model.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{model.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceModels;