"use client";

import { TrendingUp, Award, Users, Shield, Target, Zap } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Mission success rate',
    color: 'text-green-500'
  },
  {
    icon: Users,
    value: '150+',
    label: 'Government Agencies',
    description: 'Served since 2018',
    color: 'text-blue-500'
  },
  {
    icon: Award,
    value: '50+',
    label: 'AI Solutions',
    description: 'Delivered & deployed',
    color: 'text-purple-500'
  },
  {
    icon: Target,
    value: '24/7',
    label: 'Mission Support',
    description: 'Round-the-clock coverage',
    color: 'text-orange-500'
  },
  {
    icon: Shield,
    value: 'TS/SCI',
    label: 'Security Clearance',
    description: 'Cleared consultants',
    color: 'text-teal-500'
  },
  {
    icon: Zap,
    value: '25+',
    label: 'AI Innovations',
    description: 'Delivered solutions',
    color: 'text-indigo-500'
  }
];

const achievements = [
  'Former US Marine Corps & Air Force veterans on staff',
  'Certified FedRAMP, FISMA, and NIST compliance expertise',
  'Strategic partnerships with Google, OpenAI, and Anthropic',
  'Proven track record in defense, intelligence, and civilian sectors',
  'Rapid deployment capability: POC to production in 12-16 weeks',
  'End-to-end AI lifecycle management and optimization'
];

const Metrics = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Static gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full border border-slate-200 mb-8">
            <Award className="h-5 w-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Trust & Performance</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Established Excellence
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 5 years of delivering mission-critical AI solutions with uncompromising quality,
            security, and results that matter
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/80 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 shadow-lg transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-slate-100 mb-4 ${metric.color}`}>
                <metric.icon className="h-6 w-6" />
              </div>

              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent group-hover:from-blue-900 group-hover:to-slate-700 group-hover:scale-105 transition-all duration-300">
                {metric.value}
              </div>

              <div className="text-sm text-gray-900 font-semibold mb-1 group-hover:text-blue-900 transition-colors">
                {metric.label}
              </div>

              <div className="text-xs text-gray-600 group-hover:text-slate-700 transition-colors">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-700 group-hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {achievements.slice(3).map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-slate-600 to-blue-700 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-700 group-hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-xl rounded-full px-8 py-4 border border-slate-200 shadow-lg">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-slate-700" />
              <span className="text-sm text-gray-700">Trusted by Government Leaders</span>
            </div>
            <div className="text-2xl">•</div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-slate-700" />
              <span className="text-sm text-gray-700">Mission-Critical Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
