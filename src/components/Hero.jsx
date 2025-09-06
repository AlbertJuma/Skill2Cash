const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Empowering Youth Through Digital Skills
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Turning Skills into{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Skill2Cash connects young people with legitimate earning opportunities through digital literacy, 
            microtasks, and creative skills – all while ensuring safety and building confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-lg group">
              Start Earning Today
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="bg-white hover:bg-gray-50 text-primary-600 font-semibold px-8 py-4 rounded-lg border border-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-lg">
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-8">Trusted by youth development organizations</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 bg-gray-300 rounded w-24 flex items-center justify-center text-xs font-medium">
                ORG 1
              </div>
              <div className="h-8 bg-gray-300 rounded w-24 flex items-center justify-center text-xs font-medium">
                ORG 2
              </div>
              <div className="h-8 bg-gray-300 rounded w-24 flex items-center justify-center text-xs font-medium">
                ORG 3
              </div>
              <div className="h-8 bg-gray-300 rounded w-24 flex items-center justify-center text-xs font-medium">
                ORG 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;