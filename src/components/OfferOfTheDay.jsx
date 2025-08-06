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
    <section className="py-20 bg-black">
      <div className="container">
        <motion.div 
          className="relative max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Deal of the week tag */}
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-amber-400/60 text-amber-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Deal of the week
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                Unlock the Best Prop Firm
                <br />
                Deals- Trade Smart, Save
                <br />
                <span className="text-amber-400">Smarter</span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-300 text-lg lg:text-xl mt-6">
                Code <span className="text-amber-400 font-semibold">"{activeCode.code || 'Loading...'}"</span> gives the highest discount available on <a href={activeCode.redirectUrl} target='_blank' className='text-amber-400 font-semibold'>ProFirm</a>
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
                className={`px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 border  cursor-pointer ${
                  isLoading || !activeCode
                    ? 'bg-gray-600 text-gray-400 border-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700 hover:border-gray-600'
                }`}
                onClick={handleCopyCode}
                disabled={isLoading || !activeCode}
                whileHover={!isLoading && activeCode ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isLoading && activeCode ? { scale: 0.95 } : {}}
              >
                <span>
                  {isLoading 
                    ? 'Loading...' 
                    : activeCode 
                      ? `Copy Code "${activeCode.code}"`
                      : 'Code Unavailable'
                  }
                </span>
                {!isLoading && activeCode && (
                  <svg 
                    className="w-5 h-5" 
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
                  </svg>
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