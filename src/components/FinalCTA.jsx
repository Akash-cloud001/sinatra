import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Laptop */}
              <div className="laptop-3d floating-3d w-80 h-60 mb-8">
                <div className="bg-dark-card rounded-lg h-full p-4">
                  {/* Screen with Chart */}
                  <div className="bg-gradient-to-r from-primary-green/20 to-accent-blue/20 rounded h-32 mb-4 p-3">
                    <div className="flex items-end justify-between h-full">
                      {[30, 45, 35, 60, 40, 75, 65, 80].map((height, i) => (
                        <div
                          key={i}
                          className="bg-primary-green rounded-sm"
                          style={{ height: `${height}%`, width: '6px' }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Keyboard with Rocket */}
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-1 mb-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-6 bg-dark-card border border-border-color rounded"></div>
                      ))}
                    </div>
                    
                    {/* Rocket Launching */}
                    <div className="rocket-3d floating-3d w-8 h-8 absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    {/* Rocket Trail */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-primary-green to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Crypto Symbols */}
              <div className="bitcoin-3d floating-3d w-12 h-12 absolute top-20 left-10">
                <span className="text-lg font-bold text-white">₿</span>
              </div>
              
              <div className="ethereum-3d floating-3d w-10 h-10 absolute bottom-20 right-20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-24 h-24 bg-primary-green/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-accent-blue/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              START YOUR JOURNEY INTO CRYPTOCURRENCIES TODAY!
            </h2>
            
            <p className="text-text-secondary leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Enroll in Course
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="btn-secondary">
                Get Free Lesson
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                <span className="text-text-secondary text-sm">1000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                <span className="text-text-secondary text-sm">Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                <span className="text-text-secondary text-sm">Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 