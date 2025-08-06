import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OfferOfTheDay = () => {
  const [activeCode, setActiveCode] = useState({
    code: '',
    redirectUrl: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Copy discount code to clipboard function
  const copyDiscountCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      console.log('Code copied to clipboard:', code);
      return true;
    } catch (error) {
      console.error('Failed to copy code:', error);
      return false;
    }
  };

  useEffect(() => {
    const fetchCode = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Fetching discount code from content.json...');
        
        const response = await fetch('/content.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        
        if (data.code) {
          setActiveCode(data);
          console.log('Code set to:', data);
        } else {
          throw new Error('No code found in response');
        }
      } catch (err) {
        console.error('Error fetching discount code:', err);
        setError('Failed to load discount code');
        // Set fallback code
        // setActiveCode({
        //   code: 'ak10',
        //   redirectUrl: 'https://google.com'
        // });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCode();
  }, []);

  const handleCopyCode = async () => {
    if (!activeCode || isLoading) {
      console.log('Cannot copy: code not loaded or still loading');
      return;
    }

    console.log('activeCode', activeCode);
    try {
      console.log('Attempting to copy code:', activeCode);
      const success = await copyDiscountCode(activeCode);
      
      if (success) {
        console.log('Code copied successfully, redirecting...');
        // Add a small delay to ensure clipboard operation completes
        setTimeout(() => {
          window.location.href = activeCode.redirectUrl;
        }, 100);
      } else {
        console.error('Failed to copy code');
        // Fallback: try to copy manually
        const textArea = document.createElement('textarea');
        textArea.value = activeCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Code copied using fallback method');
        setTimeout(() => {
          window.location.href = activeCode.redirectUrl;
        }, 100);
      }
    } catch (error) {
      console.error('Error in handleCopyCode:', error);
      // Fallback: try to copy manually
      const textArea = document.createElement('textarea');
      textArea.value = activeCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      console.log('Code copied using fallback method');
      setTimeout(() => {
        window.location.href = activeCode.redirectUrl;
      }, 100);
    }
  };

  return (
    <section className="pb-10 bg-dark-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-20 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-primary-green/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Particles */}
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-40 w-3 h-3 bg-amber-400/40 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [30, -30, 30],
            x: [15, -15, 15],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-40 w-2 h-2 bg-primary-green/50 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full"
        ></motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="relative max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Card Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-green/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-lg"></div>
          
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-primary-green/5 rounded-2xl"></div>

          {/* Deal of the week tag */}
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-amber-300/60 text-amber-400 text-xs font-medium mb-2 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-sm"></div>
            <span className="relative z-10">Deal of the week</span>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Main Heading */}
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
                Unlock the Best Prop Firm
                Deals- Trade Smart, Save <br />
                <span className="text-amber-400 relative">
                  Smarter

                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-300 text-sm lg:text-base mt-4">
                Code <span className="text-amber-400 font-semibold relative">
                  "{activeCode.code || 'Loading...'}"
                  <motion.div
                    className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-amber-400/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </span> gives the highest discount available on <a href={activeCode.redirectUrl} target='_blank' className='text-amber-400 font-semibold hover:text-amber-300 transition-colors'>ProFirm</a>
              </p>
            </motion.div>

            {/* Right Content - Copy Button */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className={`px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                  isLoading || !activeCode
                    ? 'bg-primary-green/60'
                    : 'btn-primary'
                }`}
                onClick={handleCopyCode}
                disabled={isLoading || !activeCode}
                whileTap={!isLoading && activeCode ? { scale: 0.95 } : {}}
                whileHover={!isLoading && activeCode ? { 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,255,136,0.3)"
                } : {}}
              >
                {/* Button Background Glow */}
                {!isLoading && activeCode && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  ></motion.div>
                )}
                
                <span className="relative z-10">
                  {isLoading 
                    ? 'Loading...' 
                    : activeCode 
                      ? `Copy Code "${activeCode.code}"`
                      : 'Code Unavailable'
                  }
                </span>
                {!isLoading && activeCode && (
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                    />
                  </motion.svg>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferOfTheDay; 