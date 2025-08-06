import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation variants for better control
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic for smooth motion
    },
  },
};

const ProFirms = () => {
  const [firms, setFirms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    const fetchFirms = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching firms data...');
        
        const response = await fetch('/content.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched firms data:', data);
        
        // Mock firms data - you can replace this with actual API data
        const mockFirms = data.mockFirms || []
          
        
        setFirms(mockFirms);
      } catch (err) {
        console.error('Error fetching firms:', err);
        // Set fallback data
        setFirms([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFirms();
  }, []);

  const handleCopyCode = async (code, firmName) => {
    try {
      console.log('Attempting to copy code:', code);
      const success = await copyDiscountCode(code);
      
      if (success) {
        console.log(`Code ${code} copied successfully for ${firmName}`);
        // You can add a toast notification here
      } else {
        console.error('Failed to copy code');
        // Fallback: try to copy manually
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Code copied using fallback method');
      }
    } catch (error) {
      console.error('Error in handleCopyCode:', error);
      // Fallback: try to copy manually
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      console.log('Code copied using fallback method');
    }
  };

  const handleClaimOffer = (url) => {
    window.open(url, '_blank');
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-dark-bg">
        <div className="container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto"></div>
            <p className="text-white mt-4">Loading Pro Firms...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Top Pro Firms
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Discover the best prop trading firms with exclusive discount codes
          </p>
        </motion.div>

        {/* Firms Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
            margin: "-50px",
          }}
        >
          {firms.map((firm, index) => (
            <motion.div
              key={firm.id}
              variants={cardVariants}
              className="relative overflow-hidden rounded-2xl px-6 py-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg shadow-black/20 transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/10"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 w-full">
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    {/* Firm Logo */}
                    <motion.div 
                      className='w-full flex items-center justify-center'
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.1, 
                        duration: 0.4,
                        ease: [0.215, 0.61, 0.355, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <img src={firm.logo} alt={firm.name} className="w-20 h-20 object-contain aspect-auto" />
                    </motion.div>
                    
                    {/* Firm Info */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.2, 
                        duration: 0.4,
                        ease: [0.215, 0.61, 0.355, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-amber-400 font-bold text-lg">{firm.name}</h3>
                      <p className="text-white/80 text-xs">{firm.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Code Display */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 shadow-md shadow-black/10"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.4,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-xs">Discount Code</p>
                      <p className="text-amber-400 font-mono font-bold text-base">{firm.code}</p>
                    </div>
                    <motion.button
                      onClick={() => handleCopyCode(firm.code, firm.name)}
                      className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm shadow-black/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Copy
                    </motion.button>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4, 
                    duration: 0.4,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => handleClaimOffer(firm.url)}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md shadow-black/15"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Claim Offer
                  </motion.button>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProFirms;