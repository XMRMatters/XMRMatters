import { Heart, Github as GithubIcon, Twitter as TwitterIcon, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'Home' | 'About' | 'Donate' | 'Monero') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Explore XMRMatters: ',
      links: [
        { label: 'Home', action: () => onNavigate('Home') },
        { label: 'Donate', action: () => onNavigate('Donate') },
        { label: 'About Us', action: () => onNavigate('About') },
        { label: 'More about Monero', action: () => onNavigate('Monero') },
      ]
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 border-t border-gray-800/50 pt-6 md:pt-8 pb-3 md:pb-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-52 md:w-72 h-52 md:h-72 bg-orange-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-52 md:w-72 h-52 md:h-72 bg-orange-600/3 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Top Section */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-4 pb-3 md:pb-4 border-b border-gray-800/50">
          {/* Brand - Reduced */}
          <div>
            <button onClick={() => onNavigate('Home')} className="flex items-center space-x-2 group mb-2 hover:opacity-80 transition-opacity" aria-label="XMRMatters - Return to Home">
              <div className="flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/images/HLogo.png" alt="XMRMatters" className="w-8 sm:w-10 h-8 sm:h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">XMRMatters</h3>
                <p className="flex items-left text-xs text-gray-400">Privacy First</p>
              </div>
            </button>
          </div>

          {/* Links Section - Inline */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Navigate:</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {footerLinks[0].links.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-gray-400 text-xs inline-flex items-center hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label={link.label}
                >
                  <span className="text-orange-500 mr-1">›</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Ultra Compact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-xs flex items-center space-x-1 justify-center md:justify-start order-2 md:order-1">
            <span>&copy; {currentYear} XMRMatters. Built with</span>
            <Heart className="w-3 h-3 text-orange-500" />
            <span>for privacy.</span>
          </div>
          
          {/* Social Links - Compact */}
          <div className="flex items-center gap-2 justify-center order-1 md:order-2">
            <a
              href="https://github.com/XMRMatters/XMRMatters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Visit our GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </a>
            <a
              href="https://x.com/XMRMatters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Follow us on Twitter/X"
              title="Twitter/X"
            >
              <TwitterIcon className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </a>
            <a
              href="mailto:xmrmatters@gmail.com.com"
              className="text-gray-400 hover:text-orange-400 transition-colors p-1.5 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Email us"
              title="Email"
            >
              <Mail className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
