import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferOfTheDay from './components/OfferOfTheDay';
import CourseStructure from './components/CourseStructure';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProFirms from './components/ProFirms';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main>
        <Hero />
        <OfferOfTheDay />
        <ProFirms />
        {/* <CourseStructure />
        <FAQ /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
