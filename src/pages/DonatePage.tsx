import { Heart, Copy, Check, Shield, Sparkles, TrendingUp, Lock, Eye, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface CryptoAddress {
  name: string;
  symbol: string;
  address: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
}

export function DonatePage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const cryptoAddresses: CryptoAddress[] = [
    {
      name: 'Monero',
      symbol: 'XMR',
      address: '41dLZc3eST1USFwiZgmn8aERCsAakAnMzXj7NWD6QTkjWRBu1JDa4HeD3J1c5G2cfmTFRVMWVjVGTGD15zvHnBLgRfvQhAQ',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      icon: '🔐',
      description: 'The most private and untraceable cryptocurrency',
    },
  ];

  const handleCopy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      // Clipboard access failed - user can manually copy
    }
  };

  const impactAreas = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Professional security audits and penetration testing to ensure platform safety',
    },
    {
      icon: Sparkles,
      title: 'Feature Development',
      description: 'Building innovative features that enhance privacy and user experience',
    },
    {
      icon: TrendingUp,
      title: 'Infrastructure',
      description: 'Maintaining robust, scalable infrastructure for optimal performance',
    },
  ];

  const whyDonate = [
    {
      icon: Eye,
      title: 'Privacy First',
      description: 'Zero unnecessary data collection. No surveillance.',
    },
    {
      icon: Lock,
      title: 'Open & Auditable',
      description: 'Full source code transparency. Community oversight.',
    },
    {
      icon: Zap,
      title: 'Independent',
      description: 'No VC strings attached. Community-funded.',
    },
  ];

  const privacyFeatures = [
    'Zero KYC. No identity verification.',
    'No unnecessary data collection.',
    'End-to-end encrypted messages.',
    'Open source code.',
    'Tor-friendly infrastructure.',
    'No third-party tracking.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(251,146,60,0.04),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-orange-500" />
              <span className="text-xs sm:text-sm text-orange-400 font-medium">Support XMRMatters</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Help Build the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Future of Privacy
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Your support helps us continue developing secure, private, and user-focused cryptocurrency tools that put you back in control.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-orange-500/20 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">Why Donate?</h2>

              <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                <p>
                  XMRMatters is a <span className="text-orange-400 font-semibold">community-driven project</span> committed to building privacy-preserving financial tools. Unlike traditional companies that prioritize profits over user privacy, we put your security first.
                </p>

                <p>
                  Your donations directly fund development, security audits, infrastructure costs, and help us maintain our commitment to never compromise on privacy or security for revenue.
                </p>

                <p className="text-sm md:text-base">
                  XMRMatters exists because we believe <span className="text-orange-400 font-semibold">financial privacy is a fundamental right</span>. Your donation helps us continue this mission independently, without venture capital, surveillance, or compromise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {impactAreas.map((area, index) => (
                  <div
                    key={area.title}
                    className="bg-gray-900/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-700/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <area.icon className="w-5 md:w-6 h-5 md:h-6 text-orange-500" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-10">Built for Privacy</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 px-0 sm:px-2">
              {privacyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-orange-400 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">Why Support Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {whyDonate.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 md:w-6 h-5 md:h-6 text-orange-500" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-10">
              Send Your Donation
            </h2>
            <p className="text-gray-400 text-center text-xs sm:text-sm md:text-base mb-6 md:mb-8 px-2 sm:px-0">
              Only Monero is supported for maximum privacy and security. All donations are documented on our transparent donation ledger.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 max-w-2xl mx-auto">
              {cryptoAddresses.map((crypto, index) => (
                <div
                  key={crypto.symbol}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl mb-3 md:mb-4">{crypto.icon}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">{crypto.name}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">{crypto.description}</p>

                  <div className="bg-gray-900/80 rounded-lg p-3 md:p-4 border border-gray-700 mb-4 md:mb-6">
                    <code className="text-xs md:text-sm text-gray-300 break-all font-mono">
                      {crypto.address}
                    </code>
                  </div>

                  <button
                    onClick={() => handleCopy(crypto.address)}
                    className={`w-full flex items-center justify-center gap-2 py-2 md:py-3 px-4 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${copiedAddress === crypto.address
                        ? 'bg-green-600 text-white focus:ring-green-500'
                        : 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-400'
                      }`}
                    aria-label={`Copy ${crypto.name} address`}
                  >
                    {copiedAddress === crypto.address ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Address
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
              <p className="text-orange-300 text-xs md:text-sm leading-relaxed">
                <strong className="font-semibold">Why Monero Only?</strong> Monero (XMR) is the only cryptocurrency with mandatory privacy built into its protocol. Donations in XMR protect your financial privacy while supporting our mission. Thank you for choosing privacy.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-orange-500/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-6">
                Transparency & Trust
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-300 text-xs md:text-base leading-relaxed">
                <p>
                  We believe in complete transparency about how donations are used. Every contribution goes directly toward:
                </p>

                <ul className="space-y-1 md:space-y-2 ml-6 list-disc list-inside text-gray-300 text-xs md:text-sm">
                  <li>Platform development and maintenance</li>
                  <li>Professional security audits and penetration testing</li>
                  <li>Infrastructure and hosting costs</li>
                  <li>Community support and education</li>
                  <li>Research and development of privacy-enhancing technologies</li>
                </ul>

                <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 md:p-6 rounded-r-xl">
                  <p className="text-orange-300 text-xs md:text-sm font-semibold">
                    We never sell user data, and we never will. Your donations help us maintain that commitment without compromise.
                  </p>
                </div>

                <p className="text-xs md:text-sm text-gray-400">
                  Thank you for supporting privacy-focused cryptocurrency development. Together, we're building a more private and secure financial future.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-orange-500/40 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Your Support Matters
              </h2>

              <p className="text-base md:text-xl text-gray-200 mb-4 md:mb-8 leading-relaxed px-2 sm:px-0">
                Financial privacy is not a luxury—it's a <span className="text-orange-400 font-semibold">fundamental right</span>. Together, we're building the future it deserves.
              </p>

              <p className="text-sm md:text-lg text-gray-300 px-2 sm:px-0">
                Every donation, no matter the size, helps us get one step closer to making private, peer-to-peer Monero trading accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
