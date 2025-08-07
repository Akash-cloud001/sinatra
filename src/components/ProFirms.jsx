import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';

// Simplified animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced stagger time
      delayChildren: 0.1, // Reduced delay
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced movement
    scale: 0.98, // Reduced scale change
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, // Reduced duration
      ease: "easeOut", // Simplified easing
    },
  },
};

const ProFirms = () => {
  const [firms, setFirms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized copy function to prevent unnecessary re-renders
  const copyDiscountCode = useCallback(async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      return true;
    } catch (error) {
      console.error('Failed to copy code:', error);
      return false;
    }
  }, []);

  // Memoized firms data to prevent unnecessary re-renders
  const memoizedFirms = useMemo(() => firms, [firms]);

  useEffect(() => {
    const fetchFirms = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch('/content.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const mockFirms = data.mockFirms || [];
        
        setFirms(mockFirms);
      } catch (err) {
        console.error('Error fetching firms:', err);
        setFirms([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFirms();
  }, []);

  const handleCopyCode = useCallback(async (code, firmName) => {
    try {
      const success = await copyDiscountCode(code);
      
      if (!success) {
        // Fallback: try to copy manually
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
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
    }
    toast.success('Code copied successfully');
  }, [copyDiscountCode]);

  const handleClaimOffer = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

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
    <section id="pro-firms" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Reduced gradient orbs */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-green/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-amber-400/5 rounded-full blur-xl"></div>
        
        {/* Simplified grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Top Pro Firms
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Discover the best prop trading firms with exclusive discount codes
          </p>
          
          {/* Simplified decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary-green to-transparent mx-auto mt-6"
          ></motion.div>
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
          {memoizedFirms.map((firm, index) => (
            <motion.div
              key={firm.id}
              variants={cardVariants}
              className="relative overflow-hidden rounded-2xl px-6 py-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Simplified decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-green/5 to-transparent rounded-full blur-lg"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-full blur-md"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 w-full">
                  <div className="flex flex-col items-start justify-center gap-6 w-full overflow-hidden">
                    {/* Firm Logo */}
                    <motion.div 
                      className='w-full flex items-center justify-center'
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.1, 
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                    >
                      <img src={firm.logo} alt={firm.name} className="w-20 h-20 object-contain aspect-auto" loading="lazy" />
                    </motion.div>
                    
                    {/* Firm Info */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.15, 
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      className='w-full'
                    >
                      <h3 className="text-amber-400 font-bold text-xl">{firm.name}</h3>
                      <p className="text-white/80 text-sm truncate">{firm.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Code Display */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 shadow-md shadow-black/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.3,
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
                      className="cursor-pointer bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm shadow-black/10"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Copy
                    </motion.button>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-3 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.25, 
                    duration: 0.3,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => handleClaimOffer(firm.url)}
                    className="flex-1 btn-primary px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md shadow-black/15 items-center justify-center gap-2 hover:shadow-lg hover:shadow-black/25"
                    whileTap={{ scale: 0.98 }}
                  >
                    Claim Offer
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default React.memo(ProFirms);