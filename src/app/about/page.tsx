import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Page Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-burnt-orange-600 to-burnt-orange-700 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">
                About Us
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
                SDVO Small Business
              <br />
              <span className="relative bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-900 bg-clip-text text-transparent">
                Government Experts
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ancile AI is a veteran-founded AI consulting firm specializing in
              advanced solutions for critical government missions and
              operational excellence
            </p>
          </div>

          {/* Mission Statement */}
          <section className="mb-24">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Ancile AI is dedicated to advancing national security through
                  innovative artificial intelligence solutions. As
                  veteran-founded experts, we bridge the gap between emerging AI
                  technologies and the rigorous requirements of defense,
                  intelligence, and federal agencies. Our mission is to deliver
                  secure, compliant AI systems that enhance operational
                  capabilities while safeguarding personnel and mission success.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-burnt-orange-600 to-burnt-orange-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Security First
                </h3>
                <p className="text-gray-700">
                  Everything we build starts with security, compliance, and
                  mission integrity as foundational principles.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-burnt-orange-700 to-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We embrace cutting-edge technologies while maintaining the
                  reliability required for critical operations.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-burnt-orange-600 to-burnt-orange-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zm-8 6a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Team Excellence
                </h3>
                <p className="text-gray-700">
                  Our veteran-founded team brings unmatched operational
                  experience and mission-focused expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Meet the Team */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
              Meet Our Veteran-Founded Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-xl border-2 border-slate-300 bg-slate-50 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Founder & CEO
                </h3>
                <p className="text-slate-700 font-medium mb-4">
                  Leadership Team Member
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Senior leadership with extensive experience in defense
                  operations and strategic AI implementation.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-xl border-2 border-slate-300 bg-slate-50 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Co-Founder & CDAIO
                </h3>
                <p className="text-slate-700 font-medium mb-4">
                  Technical Executive
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technical leadership with deep expertise in AI systems
                  architecture and enterprise deployment.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-xl border-2 border-slate-300 bg-slate-50 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Co-Founder & CTO
                </h3>
                <p className="text-slate-700 font-medium mb-4">
                  Security Expert
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cybersecurity specialist with proven track record in secure
                  system development and compliance frameworks.
                </p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Service in Defense of Freedom
                </h3>
                <p className="text-gray-600 mb-8">
                  Our combined 25+ years of uniformed service brings
                  unparalleled insight into government operations and
                  mission-critical requirements.
                </p>
                <div className="flex justify-center items-center space-x-8 text-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-burnt-orange-800 mb-1">
                      25+
                    </div>
                    <div className="text-slate-700">Years Combined Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-burnt-orange-800 mb-1">
                      2
                    </div>
                    <div className="text-slate-700">Military Branches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-burnt-orange-800 mb-1">
                      3+
                    </div>
                    <div className="text-slate-700">Mission Deployments</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
