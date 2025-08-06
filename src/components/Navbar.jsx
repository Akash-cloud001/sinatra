import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './svgs/Logo.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      
      // 100vh for desktop, 50vh for mobile
      const threshold = isMobile ? windowHeight * 0.5 : windowHeight * 0.6;
      
      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the mobile menu and the hamburger button
      const mobileMenu = document.querySelector('.mobile-menu');
      const hamburgerButton = document.querySelector('.hamburger-button');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target) && 
          hamburgerButton && 
          !hamburgerButton.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Use mousedown for better responsiveness
    document.addEventListener('mousedown', handleClickOutside);
    
    // Also close on escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const handleHamburgerClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-sm bg-dark-bg/80' : ''
    }`}>
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div 
          className="w-12 h-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Logo width={48} height={48} />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="flex items-center space-x-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => {
                const proFirmsSection = document.getElementById('pro-firms');
                if (proFirmsSection) {
                  proFirmsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-outline py-2 px-5 font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <img src="/svgs/receipt.svg" alt="Coupon" className="w-5 h-5" />
              Profirm Coupan
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        {/* <motion.button
          className="md:hidden flex flex-col space-y-1 p-2 hamburger-button"
          onClick={handleHamburgerClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <motion.span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <motion.span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </motion.button> */}
      </div>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mobile-menu absolute top-full left-0 right-0 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from bubbling
          >
            <div className="bg-dark-bg/95 backdrop-blur-sm border-t border-border-color/20">
              <div className="container py-6 space-y-4">
                <motion.a
                  href="#coupons"
                  className="block text-white hover:text-primary-green transition-colors text-lg font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={handleMenuClick}
                >
                  Coupons
                </motion.a>
                <motion.a
                  href="#features"
                  className="block text-white hover:text-primary-green transition-colors text-lg font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={handleMenuClick}
                >
                  Features
                </motion.a>
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleMenuClick}
                >
                  <button
                    onClick={() => {
                      const proFirmsSection = document.getElementById('pro-firms');
                      if (proFirmsSection) {
                        proFirmsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-outline py-3 px-6 font-medium text-white/80 w-full justify-center flex items-center gap-2"
                  >
                    <img src="/svgs/receipt.svg" alt="Coupon" className="w-5 h-5" />
                    Profirm Coupan
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </nav>
  );
};

export default Navbar; 