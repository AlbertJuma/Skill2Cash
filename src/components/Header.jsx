import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S2C</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Skill2Cash</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#focus" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Focus Areas
              </a>
              <a href="#safety" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Safety
              </a>
              <a href="#impact" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Impact
              </a>
              <a href="#partner" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Partner
              </a>
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm">
                Get Started
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#focus" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Focus Areas
              </a>
              <a href="#safety" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Safety
              </a>
              <a href="#impact" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Impact
              </a>
              <a href="#partner" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Partner
              </a>
              <div className="px-3 py-2">
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full text-center">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;