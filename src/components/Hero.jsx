import React from 'react';
import { motion, useInView } from 'framer-motion';
import Logo from './svgs/Logo.jsx';
import Graph from './svgs/Graph.jsx';

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen hero-bg flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          
          {/* Main Content */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* Large Logo with Background Circle */}
            <motion.div 
              className='relative mb-8'
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Background Circle - positioned behind logo */}
              <motion.div 
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-green/10 rounded-full z-0 blur-[72px]'
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />
              {/* Logo on top */}
              <Logo className='w-48 h-48 relative z-1' />
            </motion.div>
            
            {/* SIRA Text with Graphs */}
            <motion.div 
              className="mb-8 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              {/* Left Graph */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              >
                <Graph className='absolute left-[165px] sm:left-[300px] md:left-[340px] top-1/2 -translate-y-1/2 w-16 sm:w-32 h-full' />
              </motion.div>
              
              {/* Main Text */}
              <motion.h1 
                className="text-7xl sm:text-9xl font-bold text-white font-aalto uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              >
                Sinatra
              </motion.h1> 
              
              {/* Right Graph */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              >
                <Graph className='absolute scale-x-[-1] -left-[80px] sm:-left-[180px] md:-left-[200px] top-1/2 -translate-y-1/2 w-16 sm:w-32 h-full' />
              </motion.div>
            </motion.div>
            
            {/* Social Buttons */}
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            >
              <motion.button 
                className="btn-outline py-2 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/svgs/youtube.svg" alt="YouTube" className="w-5 h-5" />
                Youtube
              </motion.button>
              <motion.button 
                className="btn-outline py-2 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/svgs/twitter.svg" alt="Twitter" className="w-5 h-5" />
                Twitter
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 