import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  // Memoized handlers to prevent unnecessary re-renders
  const handleYoutubeClick = useCallback(() => {
    // Add YouTube link functionality
    console.log('YouTube clicked');
  }, []);

  const handleTwitterClick = useCallback(() => {
    // Add Twitter link functionality
    console.log('Twitter clicked');
  }, []);

  return (
    <section className="pb-20 bg-dark-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Image Container */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/svgs/footer.svg" 
                alt="Trading Background" 
                className="w-full h-full object-contain"
              />
              
              {/* Simplified decorative elements */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/5 rounded-full blur-md"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-400 mb-3">
                Join the Future of Trading
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Connect with us on social media to stay updated with the latest trading insights, 
                exclusive offers, and community updates from the world's top prop trading firms.
              </p>
            </div>

            {/* Social Media Buttons */}
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button 
                onClick={handleYoutubeClick}
                className="btn-outline py-2 px-6 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src="/svgs/youtube.svg" alt="YouTube" className="w-5 h-5" />
                Youtube
              </motion.button>
              <motion.button 
                onClick={handleTwitterClick}
                className="btn-outline py-2 px-6 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src="/svgs/twitter.svg" alt="Twitter" className="w-5 h-5" />
                Twitter
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FinalCTA); 