const CallToAction = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Financial Future{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Starts Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed">
              Join thousands of young people who've taken control of their financial destiny. 
              No experience needed – just the drive to learn and earn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="bg-white text-primary-600 font-bold px-10 py-5 rounded-xl text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-xl group">
                Join Skill2Cash Today
                <svg className="ml-3 w-6 h-6 inline group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="border-2 border-white text-white font-semibold px-10 py-5 rounded-xl text-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
                Watch Success Stories
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-primary-200 text-sm">Active Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$250K+</div>
                <div className="text-primary-200 text-sm">Total Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-primary-200 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 pt-12 border-t border-primary-500/30">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Don't Wait – Your Peers Are Already Earning
              </h3>
              <p className="text-primary-100 leading-relaxed">
                While others are just scrolling social media, you could be building skills, earning money, 
                and creating opportunities for your future. The sooner you start, the more you'll earn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;