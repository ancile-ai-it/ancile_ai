"use client";

import React, { useState } from 'react';
import { ArrowRight, Brain, Rocket, Target, CheckCircle, Clock, Users, Code, Settings } from 'lucide-react';

const processSteps = [
  {
    icon: Brain,
    title: 'Discovery & Assessment',
    subtitle: 'Understand Your Mission',
    description: 'Deep dive analysis of your current operations, pain points, and AI opportunities. We conduct comprehensive stakeholder interviews and data assessment to identify high-impact use cases.',
    duration: '1-2 weeks',
    deliverables: ['Mission Analysis Report', 'AI Readiness Assessment', 'Risk Assessment']
  },
  {
    icon: Target,
    title: 'Strategy & Planning',
    subtitle: 'Define Your AI Roadmap',
    description: 'Develop comprehensive AI strategy aligned with your mission objectives. We create detailed implementation plans, resource requirements, and success metrics tailored to government procurement.',
    duration: '2-4 weeks',
    deliverables: ['AI Strategy Roadmap', 'Technical Architecture', 'Procurement Guidance']
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    subtitle: 'Build & Validate Solutions',
    description: 'Create secure proof-of-concept implementations with real data in 4-6 weeks. Active stakeholder engagement ensures solutions meet mission requirements and team buy-in.',
    duration: '4-6 weeks',
    deliverables: ['Functional Prototype', 'Performance Validation', 'Security Review']
  },
  {
    icon: CheckCircle,
    title: 'Deployment & Scale',
    subtitle: 'Production Implementation',
    description: 'Full-scale deployment with comprehensive training, documentation, and transition to operations. We handle compliance, security clearances, and knowledge transfer.',
    duration: '8-16 weeks',
    deliverables: ['Production Deployment', 'Training Program', 'Operational Handoff']
  },
  {
    icon: Settings,
    title: 'Optimization & Support',
    subtitle: 'Continuous Improvement',
    description: 'Ongoing monitoring, performance optimization, and evolution of your AI solutions. 24/7 support with regular updates to maintain mission effectiveness.',
    duration: 'Ongoing',
    deliverables: ['Performance Monitoring', 'Regular Updates', 'Continuous Support']
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-burnt-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-8">
            <Clock className="h-5 w-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Our Proven Process</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            From Vision to Mission Impact
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our battle-tested methodology ensures secure, compliant, and effective AI deployments
            that deliver real mission value from day one
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-burnt-orange-400 via-burnt-orange-500 to-burnt-orange-600" />

              <div className="flex justify-between items-start px-4">
                {processSteps.map((step, index) => {
                  const isActive = index <= activeStep;
                  return (
                    <div
                      key={index}
                      className={`flex-1 relative ${index !== processSteps.length - 1 ? 'mr-8' : ''}`}
                    >
                      {/* Step Circle */}
                      <div
                        className={`relative w-16 h-16 mx-auto mb-4 rounded-full border-2 cursor-pointer transition-all duration-500 flex items-center justify-center ${
                          isActive
                            ? 'bg-gradient-to-br from-burnt-orange-700 to-burnt-orange-900 border-white shadow-lg shadow-burnt-orange-500/25'
                            : 'bg-white border-slate-300'
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <step.icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </div>

                      {/* Step Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">{step.title}</h3>
                        <p className="text-sm text-gray-600 mb-2 group-hover:text-slate-700 transition-colors">{step.subtitle}</p>
                        <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Step Selector */}
          <div className="lg:hidden">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {processSteps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-burnt-orange-700 to-burnt-orange-900 shadow-lg'
                        : 'bg-white border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <step.icon className={`h-5 w-5 mx-auto ${isActive ? 'text-white' : 'text-gray-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Detail */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {React.createElement(processSteps[activeStep].icon, { className: "h-8 w-8 text-slate-700" })}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{processSteps[activeStep].title}</h3>
                  <p className="text-slate-700 font-medium">{processSteps[activeStep].subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {processSteps[activeStep].description}
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600 font-medium">
                  Duration: {processSteps[activeStep].duration}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                {processSteps[activeStep].deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-900 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{deliverable}</span>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4 mt-8">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Previous
                </button>

                <div className="flex-1">
                  <div className="flex space-x-2">
                    {processSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                          index <= activeStep ? 'bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-center text-gray-600 mt-2">
                    Step {activeStep + 1} of {processSteps.length}
                  </p>
                </div>

                <button
                  onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  className="px-4 py-2 bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white rounded-lg hover:from-burnt-orange-800 hover:to-burnt-orange-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-burnt-orange-50 to-amber-50 rounded-2xl flex items-center justify-center shadow-2xl">
                {React.createElement(processSteps[activeStep].icon, { className: "h-24 w-24 text-slate-700" })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h3>
            <p className="text-gray-600 mb-8">
              Our proven process ensures secure, compliant, and successful AI implementation
              tailored to your unique mission requirements.
            </p>
            <button className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 hover:from-burnt-orange-800 hover:to-burnt-orange-900 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
              Schedule Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
