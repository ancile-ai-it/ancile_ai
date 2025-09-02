"use client";

import { Shield, Sparkles, ArrowRight, Calendar, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

const CallToAction = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client-side to avoid hydration mismatches
    const generatedParticles: Particle[] = [...Array(30)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-burnt-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Sparkles className="h-5 w-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Ready to Transform
            <br />
            <span className="relative">
              Your Mission?
              <div className="absolute -inset-2 bg-gradient-to-r from-burnt-orange-600 to-burnt-orange-700 opacity-20 blur-lg rounded-lg" />
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Join leading government agencies in their AI transformation journey. Let's build your roadmap to excellence.
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Primary CTA */}
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 shadow-lg">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange-600/20 to-burnt-orange-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-burnt-orange-600 to-burnt-orange-700 p-4 rounded-xl shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Starting from</div>
                  <div className="text-2xl font-bold text-gray-900">$25K</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Secure Consultation</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Partner with veteran-founded PCRM to secure your agency's AI advantage. Our security-cleared team
                understands your mission's unique requirements and the strategic importance of reliable AI implementation.
              </p>

              <button className="group/btn w-full bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 hover:from-burnt-orange-800 hover:to-burnt-orange-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Your Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="group relative bg-white/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 hover:bg-white/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 shadow-lg">
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-slate-600 to-burnt-orange-700 p-4 rounded-xl shadow-lg">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Resource</div>
                  <div className="text-lg font-bold text-gray-900">Free</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download AI Readiness Assessment</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive white paper on AI readiness for government agencies. Learn about strategic
                considerations, compliance requirements, and proven implementation frameworks.
              </p>

              <button className="group/btn w-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download White Paper</span>
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'AI Solutions Delivered' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Mission Support' },
              { number: '100%', label: 'Security Compliant' }
            ].map((stat, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-xl px-6 py-4 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-700 bg-clip-text text-transparent mb-1 group-hover:from-burnt-orange-900 group-hover:to-burnt-orange-600 group-hover:scale-105 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
