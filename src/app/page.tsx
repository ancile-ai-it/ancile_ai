import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import WhyChooseUs from '../sections/WhyChooseUs';
import Process from '../sections/Process';
import Metrics from '../sections/Metrics';
import ServiceModels from '../sections/ServiceModels';
import Industries from '../sections/Industries';
import CallToAction from '../sections/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Process />
      <Metrics />
      <ServiceModels />
      <Industries />
      <CallToAction />
      <Footer />
    </div>
  );
}
