import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferOfTheDay from './components/OfferOfTheDay';

// Lazy load heavy components for better performance
const ProFirms = lazy(() => import('./components/ProFirms'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for lazy loaded components
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-green"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <OfferOfTheDay />
              <Suspense fallback={<LoadingFallback />}>
                <ProFirms />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <FinalCTA />
              </Suspense>
            </>
          } />
        </Routes>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default React.memo(App);
