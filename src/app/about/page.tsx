import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Award, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Aegis AI</h1>
            <p className="text-xl text-gray-600">Leading the way in AI-powered solutions and consulting</p>
          </div>

          {/* Company Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Company</h2>
            <p className="text-lg text-gray-700 mb-4">
              Aegis AI is a premier consulting firm specializing in artificial intelligence solutions for businesses worldwide.
              Founded with the mission to bridge the gap between cutting-edge AI technology and practical business applications,
              we provide comprehensive AI consulting services to help organizations harness the power of machine learning,
              data analytics, and automated decision-making systems.
            </p>
            <p className="text-lg text-gray-700">
              With a team of expert data scientists, AI engineers, and business strategists, Aegis AI delivers tailored
              solutions that drive innovation and operational excellence. Our expertise spans across industries including
              healthcare, finance, manufacturing, and technology, helping companies transform their operations through
              intelligent automation and predictive analytics.
            </p>
          </section>

          {/* Our Purpose */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission & Purpose</h2>
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Aegis AI, our sacred mission is to empower the warfighter and advance national security through
                cutting-edge artificial intelligence solutions. Founded by veterans who understand the critical
                importance of mission success, we specialize in delivering secure, compliant AI systems that enhance
                military readiness, intelligence capabilities, and warfighter protection. Our AI technologies support
                operational commanders with real-time insights, battlefield intelligence, and automated decision support
                that give our warfighters the decisive edge in complex operations. We are committed to bridging the gap
                between emerging AI technologies and the rigorous requirements of defense, intelligence, and federal agencies.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Warfighter Protection</h3>
                  <p className="text-gray-700">
                    Providing warfighters with AI-powered protection systems, force multiplication technologies,
                    and battle-tested solutions that ensure mission success with minimized risk and maximum effectiveness.
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Tactical Intelligence</h3>
                  <p className="text-gray-700">
                    Delivering real-time battlefield intelligence, surveillance automation, and decision support
                    systems that give warfighters unprecedented situational awareness and operational advantage.
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Force Multiplication</h3>
                  <p className="text-gray-700">
                    Amplifying warfighter capabilities through autonomous systems, predictive analytics,
                    and AI-enhanced command and control that extends military effectiveness while preserving human lives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Veteran-Founded Team */}
          <section className="py-20 bg-white mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Meet Our Veteran-Founded Team
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              A team of experienced veterans bringing military precision and mission focus to government AI consulting
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-blue-600 font-bold text-xl">MA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Matthew Pacer</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & CEO</p>
                <p className="text-gray-700 font-medium mb-2">Former US Marine Corps Officer</p>
                <p className="text-gray-600 mb-4">Strategic Operations & Mission Planning</p>
                <p className="text-sm text-gray-500 leading-relaxed">Former Marine with extensive experience in joint operations, intelligence operations, and special programs.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-green-600 font-bold text-xl">BR</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brett Roberts</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & CTO</p>
                <p className="text-gray-700 font-medium mb-2">Former US Air Force Intelligence Analyst</p>
                <p className="text-gray-600 mb-4">Data Analytics & Cyber Operations</p>
                <p className="text-sm text-gray-500 leading-relaxed">Veteran Air Force intelligence officer with deep expertise in signals intelligence and cyber warfare applications.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-orange-600 font-bold text-xl">PM</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Parham Mioni</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & CSO</p>
                <p className="text-gray-700 font-medium mb-2">Former US Army Cybersecurity Specialist</p>
                <p className="text-gray-600 mb-4">Secure Systems Architecture</p>
                <p className="text-sm text-gray-500 leading-relaxed">Army veteran specializing in information security, risk management, and secure software development lifecycle.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">Service in Defense of Freedom</h3>
              <p className="text-blue-100 mb-6">
                Our collective 25+ years of uniformed service provides Aegis AI with unparalleled insight
                into the complexities of government operations, security requirements, and mission success.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="font-bold text-2xl">25+</div>
                  <div className="text-blue-200">Years Combined Service</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">3</div>
                  <div className="text-blue-200">Military Branches</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">100+</div>
                  <div className="text-blue-200">Mission Deployments</div>
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
