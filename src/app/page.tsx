import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import CompetitivePositioning from '../sections/CompetitivePositioning';
import WhyChooseUs from '../sections/WhyChooseUs';
import Process from '../sections/Process';
import Metrics from '../sections/Metrics';
import ServiceModels from '../sections/ServiceModels';
import CaseStudies from '../sections/CaseStudies';
import Industries from '../sections/Industries';
import CallToAction from '../sections/CallToAction';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <Hero />
//       <CompetitivePositioning />
//       <WhyChooseUs />
//       <Process />
//       <Metrics />
//       <ServiceModels />
//       <Industries />
//       <CallToAction />
//       <Footer />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Process />
      <Metrics />
      <ServiceModels />
      <CaseStudies />
      <Industries />
      <CallToAction />
      <Footer />
    </div>
  );
}
