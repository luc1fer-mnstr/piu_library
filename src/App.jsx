import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CreatorsSection from './components/Creators';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-16 px-6">
        <HowItWorks />
        <CreatorsSection />
      </div>
      <Footer />
      
    </div>
  )
}

export default App;