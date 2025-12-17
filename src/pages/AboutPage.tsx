import { Shield, Lock, Eye, Users, Heart, Code, Zap, CheckCircle, Target } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every line of code is written with security in mind. We conduct regular audits and penetration testing to ensure your funds and data remain protected.',
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'We believe privacy is a fundamental right. Our platform is built on Monero principles, ensuring your transactions remain confidential and untraceable.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We operate with complete transparency about our processes, security measures, and development roadmap. No hidden agendas, just honest communication.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'XMRMatters is built by the community, for the community. We listen to feedback and evolve based on the needs of our users.',
    },
  ];

  const features = [
    {
      icon: Code,
      title: 'Open Development',
      description: 'Our commitment to transparency extends to our development process. We believe in open, auditable code.',
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Despite our focus on security, we never compromise on performance. Lightning-fast trades with minimal fees.',
    },
    {
      icon: Heart,
      title: 'User Centric',
      description: 'Every decision we make puts users first. Your experience, security, and privacy guide our development.',
    },
  ];

  const privacyFeatures = [
    { icon: Lock, title: 'End-to-End Encryption', desc: 'Secure communications protected' },
    { icon: Shield, title: 'Non-Custodial Control', desc: 'You control your keys and funds' },
    { icon: Users, title: 'Peer-to-Peer Trading', desc: 'Direct exchanges without intermediaries' },
    { icon: Zap, title: 'No Surveillance', desc: 'Minimal data logging and tracking' },
    { icon: CheckCircle, title: 'Privacy First', desc: 'Built on Monero principles from day one' },
    { icon: Eye, title: 'Your Choice', desc: 'Control what you share and when' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,146,60,0.04),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">About XMRMatters</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Built on
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Privacy & Trust
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              XMRMatters is more than a P2P exchange. We're a movement dedicated to preserving financial privacy and empowering individuals with true ownership of their digital assets.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-orange-500/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  XMRMatters emerged from a critical moment in the Monero community. When LocalMonero—the trusted P2P marketplace—shut down, thousands of traders lost access to a platform built on privacy and decentralization. We stepped in to honor that legacy while building something better for the future.
                </p>

                <p>
                  Rather than letting the community be abandoned, we created a modern, feature-rich alternative dedicated to peer-to-peer Monero trading. We're not just another marketplace—we're a movement to prove that financial privacy, peer-to-peer trading, and community trust can thrive together.
                </p>

                <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-r-xl mt-8">
                  <p className="text-orange-300 font-semibold text-lg italic">
                    "Privacy is the power to selectively reveal oneself to the world. We're here to give you that power back."
                  </p>
                  <p className="text-gray-400 mt-2">— XMRMatters Team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Mission & Vision</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-4">Build a secure ecosystem where financial freedom through peer-to-peer trading is the default.</p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Accessible Monero trading for everyone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>No intermediaries—pure peer-to-peer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Privacy by default, always</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300">Our Vision</h3>
                </div>
                <p className="text-gray-300 mb-4">A global P2P network where Monero trading thrives with privacy and community at its core.</p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>A resilient alternative to centralized exchanges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Security-first engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Sustained by an engaged community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 text-orange-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6">Privacy by Design</h2>
            <p className="text-gray-300 text-center mb-8 md:mb-10 text-base md:text-lg">We don't just promise privacy—we build it into every layer.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {privacyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-4 md:w-5 h-4 md:h-5 text-orange-500" />
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Why Choose XMRMatters
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-orange-500/40 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Promise to You
              </h2>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                At XMRMatters, we defend your <span className="text-orange-400 font-semibold">right to financial privacy</span>. Whether you're a seasoned trader or new to Monero, we ensure you can trade freely, safely, and without compromise.
              </p>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg"><span className="text-orange-400 font-semibold">Your money.</span> Your privacy. <span className="text-orange-400 font-semibold">Your choice.</span></p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-orange-500/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-gray-300 text-sm">Privacy Focused</div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-orange-500/30" />

                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">0</div>
                  <div className="text-gray-300 text-sm">KYC Required</div>
                </div>

                <div className="hidden sm:block w-px h-10 bg-orange-500/30" />

                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">∞</div>
                  <div className="text-gray-300 text-sm">Community Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
