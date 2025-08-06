import React from 'react';

const CourseStructure = () => {
  const modules = [
    {
      number: 1,
      title: "Introduction to Cryptocurrencies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
      number: 2,
      title: "Security and Wallets",
      description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      number: 3,
      title: "Cryptocurrency Exchanges",
      description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
    },
    {
      number: 4,
      title: "Market Analysis",
      description: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
      number: 5,
      title: "Investment Strategies",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
    },
    {
      number: 6,
      title: "Taxes and Legal Aspects",
      description: "Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste"
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              WHAT AWAITS YOU IN THE COURSE?
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button className="btn-primary">
              Start Learning Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side - Module List */}
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.number} className="module-pill">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">
                        Module {module.number}: {module.title}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure; 