const Safeguards = () => {
  const safeguards = [
    {
      title: "Vetted Apps & Platforms",
      description: "Every opportunity is thoroughly researched and verified. We only recommend legitimate platforms with proven track records and real payouts.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Terms-of-Service Compliance",
      description: "All activities are 100% compliant with platform rules. We teach ethical earning methods that protect your accounts and reputation.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Youth Protection & Data Privacy",
      description: "Your safety is our priority. We provide comprehensive privacy training and ensure all partners meet strict youth protection standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      green: {
        bg: "bg-green-100",
        icon: "text-green-600",
        accent: "bg-green-500"
      },
      blue: {
        bg: "bg-blue-100",
        icon: "text-blue-600",
        accent: "bg-blue-500"
      },
      purple: {
        bg: "bg-purple-100",
        icon: "text-purple-600",
        accent: "bg-purple-500"
      }
    };
    return colorMap[color];
  };

  return (
    <section id="safety" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Safety is{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Non-Negotiable
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built comprehensive safeguards to ensure every opportunity is legitimate, ethical, and age-appropriate.
          </p>
        </div>

        {/* Safeguards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {safeguards.map((safeguard, index) => {
            const colors = getColorClasses(safeguard.color);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-xl mb-6`}>
                  <div className={colors.icon}>
                    {safeguard.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {safeguard.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {safeguard.description}
                </p>

                {/* Trust Indicator */}
                <div className="flex items-center">
                  <div className={`w-2 h-2 ${colors.accent} rounded-full mr-2`}></div>
                  <span className="text-sm font-medium text-gray-700">Verified & Monitored</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Parents & Educators</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our safety standards have been developed in partnership with youth development experts, 
              digital safety advocates, and parent organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safeguards;