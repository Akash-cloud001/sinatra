import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-0 pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-col justify-between items-center space-y-1">
          <div className="text-5xl text-primary-green font-aalto ">
              Sinatra
            </div>
          <div className="text-white/70 text-xs">
              © 2025 All Rights Reserved
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 