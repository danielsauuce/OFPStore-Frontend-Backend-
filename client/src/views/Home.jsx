import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
