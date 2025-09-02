import { Shield, Award, Users } from 'lucide-react';

const founders = [
  {
    name: 'Marcus Reynolds',
    title: 'Co-Founder & CEO',
    background: 'Former US Marine Corps Officer',
    expertise: 'Strategic Operations & Mission Planning',
    bio: 'Former Marine with extensive experience in joint operations, intelligence operations, and special programs.',
    icon: Shield
  },
  {
    name: 'Sarah Chen',
    title: 'Co-Founder & CTO',
    background: 'Former US Air Force Intelligence Analyst',
    expertise: 'Data Analytics & Cyber Operations',
    bio: 'Veteran Air Force intelligence officer with deep expertise in signals intelligence and cyber warfare applications.',
    icon: Award
  },
  {
    name: 'David Mitchell',
    title: 'Co-Founder & CSO',
    background: 'Former US Army Cybersecurity Specialist',
    expertise: 'Secure Systems Architecture',
    bio: 'Army veteran specializing in information security, risk management, and secure software development lifecycle.',
    icon: Users
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Veteran-Founded Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A team of experienced veterans bringing military precision and mission focus to government AI consulting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-4 rounded-full mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-200">
                <founder.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{founder.title}</p>
              <p className="text-gray-700 font-medium mb-2">{founder.background}</p>
              <p className="text-gray-600 mb-4">{founder.expertise}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white p-8 rounded-xl">
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
        </div>
      </div>
    </section>
  );
};

export default Team;
