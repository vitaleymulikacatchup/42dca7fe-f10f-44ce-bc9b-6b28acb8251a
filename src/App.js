import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Locations from './components/Locations';
import Stats from './components/Stats';
import VideoSection from './components/VideoSection';
import ValueProposition from './components/ValueProposition';
import FAQ from './components/FAQ';
import LeaseChart from './components/LeaseChart';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Locations />
      <Stats />
      <VideoSection />
      <ValueProposition />
      <FAQ />
      <LeaseChart />
      <Testimonials />
      <VideoTestimonials />
      <WhyChooseUs />
      <CTA />
      <Footer />
      {showCookieBanner && (
        <CookieBanner onClose={() => setShowCookieBanner(false)} />
      )}
    </div>
  );
}

export default App;