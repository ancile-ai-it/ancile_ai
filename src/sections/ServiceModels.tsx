"use client";

import { Lightbulb, Zap, Cog, GraduationCap, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const models = [
  {
    icon: Lightbulb,
    title: 'Strategic AI Consulting',
    description: 'Executive-level AI strategy development with focus on mission impact and ROI optimization',
    features: ['Enterprise Architecture Design', 'Technology Roadmap Planning', 'Regulatory Compliance Mapping'],
    gradient: 'from-burnt-orange-600 to-burnt-orange-700',
    bgColor: 'from-burnt-orange-50 to-amber-50',
    duration: '4-8 weeks'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: 'Secure proof-of-concept development in 4-6 weeks with active government stakeholder engagement',
    features: ['Security-First Development', 'Mission Validation Testing', 'Resource Impact Assessment'],
    gradient: 'from-burnt-orange-700 to-burnt-orange-600',
    bgColor: 'from-burnt-orange-50 to-amber-50',
    duration: '4-6 weeks'
  },
  {
    icon: Cog,
    title: 'Full AI Implementation',
    description: 'End-to-end mission-critical AI solution deployment with government procurement expertise',
    features: ['Secure Infrastructure Deployment', 'Stakeholder Training Programs', 'Operational Handoff Support'],
    gradient: 'from-burnt-orange-600 to-burnt-orange-700',
    bgColor: 'from-burnt-orange-50 to-amber-50',
    duration: '12-24 weeks'
  },
  {
    icon: Headphones,
    title: 'Managed AI Services',
    description: '24/7 operational support and continuous optimization for production AI systems',
    features: ['Real-time Performance Monitoring', 'Continuous Model Improvement', 'Security Updates & Patching'],
    gradient: 'from-burnt-orange-700 to-burnt-orange-600',
    bgColor: 'from-burnt-orange-50 to-amber-50',
    duration: 'Ongoing'
  },
  {
    icon: GraduationCap,
    title: 'Training & Enablement',
    description: 'Comprehensive capability building through workshops, certifications, and knowledge transfer',
    features: ['Custom Training Programs', 'AI Ethics & Bias Mitigation', 'Operational Best Practices'],
    gradient: 'from-burnt-orange-600 to-burnt-orange-700',
    bgColor: 'from-burnt-orange-50 to-amber-50',
    duration: '8-16 weeks'
  }
];

const ServiceModels = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-burnt-orange-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <CheckCircle className="h-5 w-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Choose Your AI Journey Path
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible engagement models tailored to your mission requirements, timeline, and strategic objectives
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${model.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-lg px-3 py-1 rounded-full border border-white/20 shadow-lg">
                <div className={`w-3 h-3 bg-gradient-to-r ${model.gradient} rounded-full`}></div>
              </div>

              {/* Icon */}
              <div className={`relative mb-4 mx-auto w-fit p-4 bg-gradient-to-br ${model.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <model.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                {model.title}
              </h3>

              {/* Duration Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full mb-3">
                <span className="text-xs text-gray-600 font-medium">{model.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 group-hover:text-slate-800 transition-colors">
                {model.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {model.features.slice(0, 2).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center space-x-2">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${model.gradient} rounded-full`} />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center space-x-2 bg-white/60 hover:bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-slate-800 transition-all duration-300 group-hover:translate-x-1 transform border border-white/30">
                <span>Learn More</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcases */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'AI/ML Platforms', tech: 'OpenAI, Anthropic, Google' },
            { name: 'Cloud & Infra', tech: 'AWS GovCloud, Azure Govt' },
            { name: 'Data Processing', tech: 'ML Ops, MLOps, ETL' },
            { name: 'Security & Compliance', tech: 'FedRAMP, FISMA, NIST' }
          ].map((tech, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300 border border-white/20 hover:border-slate-300 group">
              <div className="text-sm text-slate-700 font-semibold mb-2 group-hover:text-slate-800 transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-gray-600 group-hover:text-slate-700 transition-colors">
                {tech.tech}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 inline-block shadow-lg">
            <div className="flex items-center space-x-3 mb-4 justify-center">
              <span className="text-2xl">💡</span>
              <h3 className="text-2xl font-bold text-gray-900">Have Unique Requirements?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">Let's explore your specific mission needs and develop a tailored AI strategy that delivers measurable results</p>
            <button className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center space-x-2 mx-auto">
              <span>Get Started Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceModels;
