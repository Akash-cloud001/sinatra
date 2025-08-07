import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {

  return (
    <section className="pb-20 bg-dark-bg relative overflow-hidden">
      {/* Optimized Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Performance-friendly gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-green/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-amber-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        
        {/* Performance-friendly floating elements */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary-green/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-amber-400/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-2">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Image Container with enhanced styling */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
              <img 
                src="/svgs/footer.svg" 
                alt="Trading Background" 
                className="w-full h-full object-contain"
              />
              
              {/* Enhanced decorative elements */}
              <div className="absolute top-8 left-8 w-24 h-24 bg-white/8 rounded-full blur-xl group-hover:bg-white/12 transition-colors duration-300"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/8 rounded-full blur-lg group-hover:bg-white/12 transition-colors duration-300"></div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-primary-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            {/* Header with enhanced styling */}
            <div className="relative">
              {/* Decorative accent behind title */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary-green/10 rounded-full blur-sm"></div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-400 mb-3 relative">
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
              <motion.a 
                href="https://www.youtube.com/"
                target='_blank'
                className="btn-outline py-3 px-8 flex items-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src="/svgs/youtube.svg" alt="YouTube" className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Youtube</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a 
                href="https://x.com/"
                target='_blank'
                className="btn-outline py-3 px-8 flex items-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src="/svgs/twitter.svg" alt="Twitter" className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Twitter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
            
            {/* Additional decorative elements */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-green/60 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-sm">Live Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-white/60 text-sm">Exclusive Offers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FinalCTA); 