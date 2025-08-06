import React from 'react';
import { motion, useInView } from 'framer-motion';

const FinalCTA = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pb-20 bg-dark-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-full blur-sm"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-white/15 rounded-full blur-sm"
              ></motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 