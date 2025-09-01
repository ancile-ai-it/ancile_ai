import React from 'react';
import { Shield, Users, Award, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Deep Government Expertise',
    features: [
      'Security Cleared Team: TS/SCI cleared consultants and engineers',
      'Regulatory Mastery: FedRAMP, FISMA, NIST compliance specialists',
      'Mission Understanding: Former military and government professionals',
      'Procurement Experience: SEWP, CIO-SP3, GSA schedule holders'
    ]
  },
  {
    icon: Award,
    title: 'Proven Methodology',
    features: [
      'Agile AI Delivery: 6-week sprint cycles with continuous stakeholder engagement',
      'Risk-First Approach: Security and compliance integrated from day one',
      'Measurable Outcomes: KPI-driven implementations with clear success metrics',
      'Knowledge Transfer: Comprehensive training and capability development'
    ]
  },
  {
    icon: Handshake,
    title: 'Technology Partnerships',
    features: [
      'Cloud Providers: AWS GovCloud, Azure Government certified partners',
      'AI Platforms: Strategic relationships with OpenAI, Anthropic, Google',
      'Defense Contractors: Established integration channels with prime contractors',
      'Academic Network: Research partnerships for cutting-edge capabilities'
    ]
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Aegis Consulting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unmatched expertise, proven results, and deep government mission understanding
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-3 rounded-lg mr-4">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
              </div>
              
              <div className="space-y-4">
                {reason.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;