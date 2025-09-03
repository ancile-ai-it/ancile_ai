"use client";

import {
  Shield,
  Award,
  Handshake,
  CheckCircle,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    icon: Shield,
    title: "Built for Government, Not Adapted",
    subtitle: "Purpose-built solutions from day one",
    features: [
      "Security and compliance integrated from design, not retrofitted",
      "Government operations as primary use case, not secondary consideration",
      "Zero-trust architecture as foundational, not bolted-on",
      "Regulatory compliance embedded, not workarounds",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
  {
    icon: Users,
    title: "Mission Operators, Not Just Consultants",
    subtitle: "Veteran-led understanding of real requirements",
    features: [
      "Operator-founded team with firsthand mission experience",
      "Requirements capture from battlefield realities, not theoretical models",
      "Operational constraints understood innately, not learned secondhand",
      "Mission success prioritized above all other metrics",
    ],
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
  {
    icon: Target,
    title: "Tactical Edge Specialists",
    subtitle: "Edge AI that works in contested environments",
    features: [
      "AI that operates in disconnected, contested environments",
      "Off-grid capability with minimal bandwidth requirements",
      "Multi-domain battle management and ISR optimization",
      "Forward-operating units as our primary focus",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
];

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[100px]" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-32 left-20 w-40 h-40 bg-orange-200/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <CheckCircle className="h-5 w-5 text-burnt-orange-700" />
            <span className="text-sm font-medium text-slate-700">
              Why Ancile?
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Why Ancile?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't adapt commercial solutions for government—we build AI
            specifically for mission-critical environments where others can't operate
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content Wrapper for Z-Index */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`relative mb-6 inline-flex p-4 bg-gradient-to-br ${reason.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <reason.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">
                    {reason.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${reason.gradient} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                      ></div>
                      <p className="text-gray-700 leading-relaxed text-sm group-hover/item:text-slate-800 transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "60%", label: "Faster Deployment vs. Traditional IT" },
              { number: "0", label: "Security Incidents in Classified Work" },
              { number: "100%", label: "Client Mission Success Rate" },
              { number: "24/7", label: "Mission Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/80 hover:shadow-2xl transition-all duration-500 border border-white/20 shadow-lg transform hover:-translate-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-700 bg-clip-text text-transparent mb-2 group-hover:from-burnt-orange-900 group-hover:to-burnt-orange-600 group-hover:scale-105 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
