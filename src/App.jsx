import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CreatorsSection from './components/Creators';
import Footer from './components/Footer';
import BookSection from './components/Books'; // Import the Book Section

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Routes will determine which content to show */}
        <Routes>
          {/* Home page content */}
          <Route 
            path="/" 
            element={
              <div>
                <HeroSection />
                <div className="max-w-7xl mx-auto">
                  <section id="how-it-works">
                    <HowItWorks />
                  </section>

                  <section id="creators">
                    <CreatorsSection />
                  </section>
                </div>
                <Footer />
              </div>
            }
          />

          {/* Book section route */}
          <Route path="/books" element={<BookSection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
