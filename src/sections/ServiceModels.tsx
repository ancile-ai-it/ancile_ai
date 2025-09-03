"use client";

import {
  Lightbulb,
  Zap,
  Cog,
  GraduationCap,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const models = [
  {
    icon: Lightbulb,
    title: "Strategic AI Consulting",
    subtitle: "Executive-Level Strategy Development",
    description:
      "Executive-level AI strategy development with focus on mission impact and ROI optimization",
    features: [
      "Enterprise Architecture Design",
      "Technology Roadmap Planning",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
    duration: "4-8 weeks",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    subtitle: "Secure Proof-of-Concept Development",
    description:
      "Secure proof-of-concept development in 4-6 weeks with active government stakeholder engagement",
    features: [
      "Security-First Development",
      "Mission Validation Testing",
    ],
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    bgColor: "from-burnt-orange-50 to-amber-50",
    duration: "4-6 weeks",
  },
  {
    icon: Cog,
    title: "Full AI Implementation",
    subtitle: "End-to-End Mission Deployment",
    description:
      "End-to-end mission-critical AI solution deployment with government procurement expertise",
    features: [
      "Secure Infrastructure Deployment",
      "Stakeholder Training Programs",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
    duration: "12-24 weeks",
  },
  {
    icon: Headphones,
    title: "Managed AI Services",
    subtitle: "Ongoing Support & Optimization",
    description:
      "24/7 operational support and continuous optimization for production AI systems",
    features: [
      "Real-time Performance Monitoring",
      "Continuous Model Improvement",
    ],
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    bgColor: "from-burnt-orange-50 to-amber-50",
    duration: "Ongoing",
  },
  {
    icon: GraduationCap,
    title: "Training & Enablement",
    subtitle: "Comprehensive Capability Building",
    description:
      "Comprehensive capability building through workshops, certifications, and knowledge transfer",
    features: [
      "Custom Training Programs",
      "AI Ethics & Bias Mitigation",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
    duration: "8-16 weeks",
  },
];

const ServiceModels = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-burnt-orange-200/20 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-40 left-20 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <CheckCircle className="h-5 w-5 text-burnt-orange-700" />
            <span className="text-sm font-medium text-slate-700">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Choose Your AI Journey Path
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible engagement models tailored to your mission requirements,
            timeline, and strategic objectives
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 flex flex-col ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${model.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content Wrapper for Z-Index */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`relative mb-6 mx-auto w-fit p-4 bg-gradient-to-br ${model.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <model.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title with Subtitle */}
                <div className="mb-4 flex-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                    {model.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors mb-3">
                    {model.subtitle}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full mb-3">
                    <span className="text-xs text-gray-600 font-medium">
                      {model.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 group-hover:text-slate-800 transition-colors">
                    {model.description}
                  </p>
                </div>

                {/* Features - Aligned at bottom */}
                <div className="space-y-3 mt-auto">
                  {model.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${model.gradient} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
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

        {/* Tech Stack Showcases */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "AI/ML Platforms", tech: "OpenAI, Anthropic, Google" },
            { name: "Cloud & Infra", tech: "AWS GovCloud, Azure Govt" },
            { name: "Data Processing", tech: "ML Ops, MLOps, ETL" },
            { name: "Security & Compliance", tech: "FedRAMP, FISMA, NIST" },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300 border border-white/20 hover:border-slate-300 group"
            >
              <div className="text-sm text-slate-700 font-semibold mb-2 group-hover:text-slate-800 transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-gray-600 group-hover:text-slate-700 transition-colors">
                {tech.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceModels;
