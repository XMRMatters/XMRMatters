import { Calendar, Shield, Lock } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';

interface HomePageProps {
  onNavigate: (page: 'Home' | 'About' | 'Donate' | 'Monero') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetDate = new Date(currentYear, 0, 25);

  if (targetDate < now) {
    targetDate.setFullYear(currentYear + 1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.04),transparent_70%)]" />

        <div className="relative text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">Launch Delayed for Your Security</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy-First
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                P2P Exchange
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Coming January 25th, {targetDate.getFullYear()}
            </p>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We've made the difficult decision to delay our launch to January 25th to ensure our platform meets the highest standards of security and privacy. This delay allows us to thoroughly test every aspect of the platform and address any privacy concerns.
            </p>
          </div>

          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CountdownTimer targetDate={targetDate} />
          </div>
          {/* Info Sections */}
          <div className="max-w-5xl mx-auto mb-16 md:mb-20 animate-fade-in-up px-0 sm:px-2" style={{ animationDelay: '400ms' }}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-12 border border-orange-500/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Over Speed
              </h2>
              {/* Info Content - */}
              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  At XMRMatters, we believe that <span className="text-orange-400 font-semibold">your privacy and security are non-negotiable</span>. While we're excited to launch our peer-to-peer exchange platform, we've chosen to take additional time to ensure every aspect of our system is thoroughly tested and audited.
                </p>

                <p>
                  This delay allows us to:
                </p>

                <ul className="space-y-3 ml-4 md:ml-6">
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 md:w-6 h-5 md:h-6 text-orange-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <span className="text-sm md:text-base">Conduct comprehensive security audits of our entire infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Lock className="w-5 md:w-6 h-5 md:h-6 text-orange-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <span className="text-sm md:text-base">Implement additional encryption layers for maximum privacy protection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 md:w-6 h-5 md:h-6 text-orange-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <span className="text-sm md:text-base">Perform extensive penetration testing to identify any vulnerabilities</span>
                  </li>
                </ul>

                <p className="pt-4 text-lg md:text-xl font-semibold text-orange-400">
                  We'd rather launch late and secure than on-time and vulnerable.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 px-0 sm:px-2 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <button
              onClick={() => onNavigate('About')}
              className="group relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-400 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Learn more about XMRMatters"
            >
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Learn More</h3>
                <p className="text-orange-100 mb-4 text-sm md:text-base">Discover our mission and values</p>
                <div className="relative items-center space-x-2 text-white font-semibold text-sm md:text-base">
                  <span>About XMRMatters</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => onNavigate('Donate')}
              className="group relative overflow-hidden bg-gray-800/90 hover:bg-gray-800 border-2 border-orange-500/50 hover:border-orange-500 text-white rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Support XMRMatters with a donation"
            >
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Support Development</h3>
                <p className="text-gray-300 mb-4 text-sm md:text-base">Help us build a better platform</p>
                <div className="relative items-center text-orange-400 font-semibold text-sm md:text-base">
                  <span>Make a Donation</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
