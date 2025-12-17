import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';
import { navigationItems } from '../config/routes.config';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogoClick?: () => void;
}

export function Navigation({ currentPage, onNavigate, onLogoClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      handleNavigate('Home');
    }
  };

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
            <button onClick={handleLogoClick} className="flex items-center space-x-2 group hover:opacity-80 transition-opacity" aria-label="XMRMatters - Home">
            <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex items-center justify-center overflow-hidden bg-transparent flex-shrink-0">
              <img src="/images/HLogo.png" alt="XMRMatters Logo" title="XMRMatters" loading="lazy" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">XMRMatters</span>
              <span className="flex item-left text-xs text-orange-500 font-medium">Privacy First Trading</span>
            </div>
            </button>

          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isFeatured = item.featured;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`px-3 md:px-4 py-2 rounded-lg transition-all duration-200 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isFeatured
                      ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/40 text-orange-300 hover:from-orange-500/30 hover:to-orange-600/30 hover:border-orange-500/60 hover:text-orange-200'
                      : currentPage === item.page
                        ? 'text-orange-500'
                        : 'text-gray-300 hover:text-white'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  <IconComponent className="w-3.5 md:w-4 h-3.5 md:h-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors p-1"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-orange-500/20 animate-fade-in">
          <div className="px-3 sm:px-4 py-3 space-y-2">{navigationItems.map((item) => {
              const isFeatured = item.featured;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isFeatured
                      ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/40 text-orange-300'
                      : currentPage === item.page
                        ? 'bg-orange-500/20 text-orange-500'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
