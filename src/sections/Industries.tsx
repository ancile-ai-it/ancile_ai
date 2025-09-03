"use client";

import React from "react";
import {
  Shield,
  Globe,
  Building,
  Search,
  AlertTriangle,
  Target,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const industries = [
  {
    icon: Shield,
    title: "Defense & Intelligence",
    description:
      "Warfighter support and operational intelligence with AI-enhanced situational awareness",
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    hoverColor: "hover:from-burnt-orange-700 hover:to-burnt-orange-900",
    features: [
      "Operational Intelligence",
      "Mission Planning",
      "Risk Assessment",
    ],
  },
  {
    icon: Globe,
    title: "Homeland Security",
    description:
      "Border protection and threat assessment with advanced surveillance capabilities",
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    hoverColor: "hover:from-burnt-orange-800 hover:to-burnt-orange-700",
    features: [
      "Surveillance Systems",
      "Pattern Recognition",
      "Incident Response",
    ],
  },
  {
    icon: Building,
    title: "Federal Civilian",
    description:
      "Citizen services and regulatory compliance with automated processing solutions",
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    hoverColor: "hover:from-burnt-orange-700 hover:to-burnt-orange-800",
    features: ["Process Automation", "Data Analytics", "Compliance Monitoring"],
  },
  {
    icon: Search,
    title: "Law Enforcement",
    description:
      "Investigative support and crime analysis with predictive intelligence tools",
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    hoverColor: "hover:from-burnt-orange-800 hover:to-burnt-orange-700",
    features: ["Crime Prediction", "Evidence Analysis", "Forensic Support"],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Management",
    description:
      "Disaster response and resource coordination with real-time assessment systems",
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    hoverColor: "hover:from-burnt-orange-700 hover:to-burnt-orange-800",
    features: ["Resource Allocation", "Impact Assessment", "Recovery Planning"],
  },
];

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Pulsing orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-burnt-orange-500/10 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute top-40 right-32 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill-opacity=%220.02%22 fill=%22%23ffffff%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Target className="h-5 w-5 text-burnt-orange-700" />
            <span className="text-sm font-medium text-slate-700">
              Mission Areas
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Critical Government Sectors
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized AI solutions for critical government missions and
            operations, delivering mission impact at scale
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/80 hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 min-h-[360px] flex flex-col ${
                hoveredIndex === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}
              />

              {/* Icon */}
              <div
                className={`relative mb-6 mx-auto w-fit p-4 bg-gradient-to-br ${industry.gradient} ${industry.hoverColor} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
              >
                <industry.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 group-hover:text-slate-800 transition-colors">
                {industry.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mt-auto">
                {industry.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-center space-x-2"
                  >
                    <div
                      className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.gradient} rounded-full`}
                    />
                    <span className="text-xs text-gray-600">{feature}</span>
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

export default Industries;
