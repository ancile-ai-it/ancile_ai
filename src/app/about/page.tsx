import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About PCRM
            </h1>
            <p className="text-xl text-gray-600">
              Leading the way in AI-powered solutions and consulting
            </p>
          </div>

          {/* Company Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Company
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              PCRM is a premier consulting firm specializing in artificial
              intelligence solutions for businesses worldwide. Founded with the
              mission to bridge the gap between cutting-edge AI technology and
              practical business applications, we provide comprehensive AI
              consulting services to help organizations harness the power of
              machine learning, data analytics, and automated decision-making
              systems.
            </p>
            <p className="text-lg text-gray-700">
              With a team of expert data scientists, AI engineers, and business
              strategists, PCRM delivers tailored solutions that drive
              innovation and operational excellence. Our expertise spans across
              industries including healthcare, finance, manufacturing, and
              technology, helping companies transform their operations through
              intelligent automation and predictive analytics.
            </p>
          </section>

          {/* Our Purpose */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Mission & Purpose
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At PCRM, we are dedicated to advancing national security through
                cutting-edge artificial intelligence solutions. Founded by
                veterans who understand the critical importance of mission
                success, we specialize in delivering secure, compliant AI
                systems that enhance military readiness, intelligence
                capabilities, and personnel protection. Our AI technologies
                provide operational commanders with real-time insights, advanced
                analytics, and automated decision support that give military
                personnel the decisive edge in complex operations. We are
                committed to bridging the gap between emerging AI technologies
                and the rigorous requirements of defense, intelligence, and
                federal agencies.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Personnel Safety & Protection
                  </h3>
                  <p className="text-gray-700">
                    Providing military personnel with AI-powered protection
                    systems, operational enhancement technologies, and proven
                    solutions that ensure mission success with minimized risk
                    and maximum effectiveness.
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    Strategic Intelligence
                  </h3>
                  <p className="text-gray-700">
                    Delivering real-time operational intelligence, advanced
                    surveillance automation, and decision support systems that
                    give military personnel unprecedented situational awareness
                    and operational advantage.
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">
                    Operational Efficiency
                  </h3>
                  <p className="text-gray-700">
                    Enhancing operational capabilities through autonomous
                    systems, predictive analytics, and AI-enhanced command and
                    control that maximizes military effectiveness while
                    safeguarding personnel lives.
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
              A team of experienced veterans bringing military precision and
              mission focus to government AI consulting
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-60 h-60 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-blue-600 font-bold text-4xl">MA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Matthew Pacer
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  Co-Founder & CEO
                </p>
                <div className="text-sm text-gray-500 leading-relaxed text-left">
                  <div className="font-semibold text-gray-700 mb-2">
                    Data Engineering & DevOps Solutions Architect
                  </div>
                  <p className="mb-3">
                    Data engineer and DevOps specialist with 8+ years building
                    scalable data infrastructure and automated deployment
                    pipelines for enterprise and government clients.
                  </p>
                  <div className="mb-2 font-semibold text-gray-700">
                    Core Expertise
                  </div>
                  <ul className="list-disc list-inside mb-3 space-y-1">
                    <li>
                      <strong>Data Engineering:</strong> ETL/ELT pipelines,
                      real-time streaming, and data warehouse optimization
                    </li>
                    <li>
                      <strong>Cloud Infrastructure:</strong> AWS/Azure
                      deployment, containerization, and microservices
                      architecture
                    </li>
                    <li>
                      <strong>DevOps & Automation:</strong> CI/CD pipelines,
                      infrastructure as code, and monitoring systems
                    </li>
                    <li>
                      <strong>Big Data Analytics:</strong> Distributed
                      computing, data lakes, and performance optimization
                    </li>
                    <li>
                      <strong>Security & Compliance:</strong> Data governance,
                      secure deployments, and regulatory frameworks
                    </li>
                  </ul>
                  <div className="mb-2 font-semibold text-gray-700">
                    Military Background
                  </div>
                  <p>
                    Former US Marine with experience in mission-critical
                    operations and high-pressure environments requiring
                    precision and reliability.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-60 h-60 rounded mx-auto mb-4 overflow-hidden relative group-hover:scale-110 transition-transform duration-200">
                  <Image
                    src="/images/members/brett/brett_portrait.png"
                    alt="Brett Roberts"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Brett Roberts
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  Co-Founder & CAIO
                </p>

                <div className="text-sm text-gray-500 leading-relaxed text-left">
                  <div className="font-semibold text-gray-700 mb-2">
                    Data Science & AI Strategy Leader
                  </div>
                  <p className="mb-3">
                    Data scientist and AI strategist with 6+ years architecting
                    AI solutions and generative systems for enterprise and
                    government clients.
                  </p>
                  <div className="mb-2 font-semibold text-gray-700">
                    Core Expertise
                  </div>
                  <ul className="list-disc list-inside mb-3 space-y-1">
                    <li>
                      <strong>Predictive Analytics & AI:</strong> Supply chain
                      optimization, predictive maintenance, demand forecasting
                    </li>
                    <li>
                      <strong>Geospatial Intelligence:</strong> Routing
                      optimization and location analytics
                    </li>
                    <li>
                      <strong>Computer Vision:</strong> Real-time inventory
                      management and quality control
                    </li>
                    <li>
                      <strong>Generative AI:</strong> Strategic planning and
                      decision support systems
                    </li>
                    <li>
                      <strong>Intelligence Analysis:</strong> Data fusion,
                      threat assessment, and operational planning
                    </li>
                  </ul>
                  <div className="mb-2 font-semibold text-gray-700">
                    Military Background
                  </div>
                  <p>
                    Former US Air Force Avionics Technician & Air National Guard
                    Cyber Analyst.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-60 h-60 rounded mx-auto mb-4 overflow-hidden relative group-hover:scale-110 transition-transform duration-200">
                  <Image
                    src="/images/members/par/par_portrait.png"
                    alt="Parham Mioni"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Parham Moini
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  Co-Founder & CTO
                </p>

                <div className="text-sm text-gray-500 leading-relaxed text-left">
                  <div className="font-semibold text-gray-700 mb-2">
                    Software Developer & Cybersecurity Solutions Architect
                  </div>
                  <p className="mb-3">
                    Software developer and cybersecurity specialist with 7+
                    years building secure applications and implementing
                    comprehensive security frameworks for enterprise and
                    government clients.
                  </p>
                  <div className="mb-2 font-semibold text-gray-700">
                    Core Expertise
                  </div>
                  <ul className="list-disc list-inside mb-3 space-y-1">
                    <li>
                      <strong>Software Development:</strong> Full-stack
                      applications, API development, and secure coding practices
                    </li>
                    <li>
                      <strong>Cybersecurity Architecture:</strong> Threat
                      modeling, vulnerability assessment, and security
                      frameworks
                    </li>
                    <li>
                      <strong>Application Security:</strong> SAST/DAST
                      implementation, penetration testing, and code review
                    </li>
                    <li>
                      <strong>Identity & Access Management:</strong>{" "}
                      Authentication systems, zero-trust architecture, and
                      privilege management
                    </li>
                    <li>
                      <strong>Incident Response:</strong> Security monitoring,
                      threat hunting, and breach remediation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Service in Defense of Freedom
              </h3>
              <p className="text-blue-100 mb-6">
                Our collective 15+ years of uniformed service provides PCRM with
                unparalleled insight into the complexities of government
                operations, security requirements, and mission success.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="font-bold text-2xl">25+</div>
                  <div className="text-blue-200">Years Combined Service</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">2</div>
                  <div className="text-blue-200">Military Branches</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">3+</div>
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
