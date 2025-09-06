const Impact = () => {
  const impactPoints = [
    {
      title: "First Earnings Within Weeks",
      description: "Most participants start earning within their first month, with many seeing income in just 2-3 weeks.",
      stat: "87%",
      statLabel: "Earn within 30 days",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Confidence & Independence",
      description: "Beyond money, participants develop self-reliance, professional skills, and the confidence to pursue bigger goals.",
      stat: "94%",
      statLabel: "Report increased confidence",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Stronger Communities",
      description: "Financially empowered youth contribute more to their families and communities, creating positive ripple effects.",
      stat: "76%",
      statLabel: "Help support family",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="impact" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Impact,{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Skill2Cash transforms lives, builds confidence, and strengthens communities one young person at a time.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {impactPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stat Circle */}
              <div className="relative mb-8">
                <div className={`w-24 h-24 bg-gradient-to-r ${point.gradient} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {point.icon}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                    <span className="text-2xl font-bold text-gray-900">{point.stat}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {point.description}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {point.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from young people who've transformed their financial futures through Skill2Cash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Maya, 17</h4>
                  <p className="text-sm text-gray-500">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "I started with simple data entry tasks and now I'm creating social media content for small businesses. I've earned over $800 in 4 months!"
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Jordan, 19</h4>
                  <p className="text-sm text-gray-500">Digital Assistant</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "The skills I learned helped me land a part-time remote job while in college. Skill2Cash changed my entire financial situation."
              </p>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Alex, 16</h4>
                  <p className="text-sm text-gray-500">Micro-tasker</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "I'm saving for college and already have $1,200 saved from working just 1-2 hours after school. It's amazing what you can achieve!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;