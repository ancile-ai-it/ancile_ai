import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WhyChooseUs from './sections/WhyChooseUs';
import ServiceModels from './sections/ServiceModels';
import Industries from './sections/Industries';
import CallToAction from './sections/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ServiceModels />
      <Industries />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;