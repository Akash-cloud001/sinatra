import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseBenefits from './components/CourseBenefits';
import CourseStructure from './components/CourseStructure';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main>
        <Hero />
        <CourseBenefits />
        <CourseStructure />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
