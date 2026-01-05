import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Eye,
  Lock,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  Lightbulb,
  AlertCircle,
  ChevronDown,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { Footer } from '../components/Layout/Footer';

export function Monero() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [privacyView, setPrivacyView] = useState<'bitcoin' | 'monero'>('bitcoin');
  const [expandedMythIndex, setExpandedMythIndex] = useState<number | null>(null);
  const [privacyValue, setPrivacyValue] = useState(50);
  const [deepDiveIndex, setDeepDiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };



  const technicalFeatures = [
    {
      title: 'Ring Signatures',
      description: 'When you send Monero, your transaction is mixed with 10 other transactions from the blockchain. An observer cannot tell which one is actually yours—like hiding in a group of 11 people.',
      icon: Users
    },
    {
      title: 'Stealth Addresses',
      description: 'Each time you receive Monero, a unique one-time address is created automatically. The sender uses your public key to generate a fresh address that only you can spend from.',
      icon: Lock
    },
    {
      title: 'RingCT (Confidential Transactions)',
      description: 'Transaction amounts are mathematically hidden while remaining verifiable. Others can confirm the math is correct without seeing the actual amount.',
      icon: Zap
    },
    {
      title: 'Kovri & Network Privacy',
      description: 'Currently being developed. Will hide your IP address from network observers, adding a privacy layer at the internet connection level.',
      icon: Globe
    }
  ];



  const faqItems = [
    {
      q: 'What is Monero exactly?',
      a: 'Monero is a cryptocurrency focused on privacy. Unlike Bitcoin, where all transactions are visible on the blockchain, Monero hides who sends money (ring signatures), who receives it (stealth addresses), and how much is sent (RingCT). It\'s digital cash that nobody can track.'
    },
    {
      q: 'How is Monero different from Bitcoin?',
      a: 'Bitcoin transactions are publicly visible. Anyone can see all transactions, amounts, and create a permanent record of activity. Monero is designed so that this information is hidden by default, making it impossible to track transactions on the public blockchain.'
    },
    {
      q: 'Is Monero legal?',
      a: 'Monero itself is legal in most countries. However, laws vary by jurisdiction. Some countries have restrictions or regulations around privacy coins. Always check your local laws. Monero is simply a tool—like cash or privacy software—and its legality depends on how it\'s used.'
    },
    {
      q: 'How do I get Monero?',
      a: 'You can buy Monero on peer-to-peer exchanges like XMRMatters (right here!), crypto exchanges like Trocador, Tradeogre, or Bisq, or through in-person trades. You can also earn it by mining with your computer or being paid in XMR for work.'
    },
    {
      q: 'Is my Monero safe?',
      a: 'Yes, if you secure it properly. Use official wallets (CLI, GUI, or mobile like Monero.com). Never share your seed phrase. Store it offline if it\'s a large amount. Monero is as safe as your wallet security practices.'
    },
    {
      q: 'What is "ring size"?',
      a: 'Ring size is the number of signatures mixed together in a transaction (mandatory minimum 11). This means your real transaction is indistinguishable from 10 others. All Monero transactions use the same ring size by default for consistency and security.'
    },
    {
      q: 'Can Monero transactions be traced?',
      a: 'No, not on the blockchain. The cryptographic design makes it computationally infeasible to trace transactions. However, poor operational security (like linking your address to your identity) could compromise privacy at a user level.'
    },
    {
      q: 'How do I use Monero on XMRMatters?',
      a: 'Create an account (no KYC required), browse offers from other traders, initiate a trade, and exchange Monero peer-to-peer. Your transactions remain private, and no account surveillance happens.'
    }
  ];

  // 1. Interactive Privacy Visualizer Data
  const bitcoinTransaction = { sender: 'Alice (0x34f...)', receiver: 'Bob (0x8a2...)', amount: '5.2 BTC' };
  const moneroTransaction = { sender: '?', receiver: '?', amount: '?' };

  // 2. Myths vs Reality
  const myths = [
    {
      myth: 'Monero is used only for illegal activities',
      reality: 'Monero is used by journalists, activists, business owners, and privacy-conscious individuals worldwide. Privacy is a fundamental human right. Legitimate uses far outnumber any illicit uses.'
    },
    {
      myth: 'Monero transactions can be hacked or stolen',
      reality: 'Monero uses battle-tested cryptography as secure as Bitcoin. Funds can only be stolen through wallet compromise or user error—not through transaction hacking.'
    },
    {
      myth: 'Using Monero will get you in legal trouble',
      reality: 'Ownership and use of Monero is legal in most countries. Always check local jurisdiction, but financial privacy itself is not illegal.'
    },
    {
      myth: 'Monero is unstable or abandoned',
      reality: 'Monero has had regular updates since 2014. Active developer community. Regular network upgrades and security improvements. More active than many projects.'
    },
    {
      myth: 'Nobody accepts Monero as payment',
      reality: 'Thousands of merchants accept XMR. Growing adoption in Eastern Europe, Asia. Online stores, VPNs, hosting providers all accept Monero.'
    }
  ];

  // 3. Monero Timeline
  const timeline = [
    { year: '2014', event: 'CryptoNote Protocol', desc: 'Monero (originally BitMonero) launches with ring signatures' },
    { year: '2017', event: 'RingCT Mandatory', desc: 'All transactions hide amounts by default' },
    { year: '2018', event: 'Kovri Development', desc: 'Network-layer privacy project initiated' },
    { year: '2020', event: 'Bulletproofs+', desc: 'Faster, smaller transaction proofs' },
    { year: '2021', event: 'Selective Disclosure', desc: 'View-only wallets for accountants/audits' },
    { year: '2025+', event: 'Full Network Privacy', desc: 'Kovri integration planned for complete privacy layer' }
  ];

  // 4. Security Metrics
  const metrics = [
    { label: 'Active Nodes', value: '2,000+', icon: Globe },
    { label: 'Daily Transactions', value: '60,000+', icon: TrendingUp },
    { label: 'Min Ring Size', value: '11', icon: Users },
    { label: 'Years Active', value: '11+', icon: Calendar }
  ];

  // 5. Use Monero Right Now
  const quickStart = [
    { title: 'Download Wallet', desc: 'Get official Monero wallet (desktop, mobile)', link: 'https://www.monero.cc/get-started/downloads/' },
    { title: 'Mine XMR', desc: 'Start mining on your PC with XMRig', link: 'https://xmrig.com/' },
    { title: 'Buy on XMRMatters', desc: 'Trade peer-to-peer, no KYC required', link: '/browse' },
    { title: 'Earn XMR', desc: 'Freelance, bounties, or work for crypto', link: 'https://www.monero.cc/' }
  ];

  // 6. Real Stories / Community Impact
  const stories = [
    {
      title: '📰 Journalists',
      desc: 'Reporters in restrictive countries safely receive funding and communicate with sources'
    },
    {
      title: '💼 Business Owners',
      desc: 'Companies keep competitive information private; suppliers/contracts remain confidential'
    },
    {
      title: '🌍 Activists',
      desc: 'Activists in oppressive regimes access funds without government surveillance'
    },
    {
      title: '🚀 Tech Professionals',
      desc: 'Developers and engineers value privacy; Monero enables true financial independence'
    },
    {
      title: '👨‍👩‍👧‍👦 Families',
      desc: 'Parents protect their financial information from children, kids from adult expenses'
    },
    {
      title: '🌐 Remitters',
      desc: 'Workers abroad send money home privately without revealing amounts to families/governments'
    }
  ];

  // 7. Deep Dive Common Questions
  const deepDiveQuestions = [
    {
      q: 'What is Ring Size and Why Does It Matter?',
      brief: 'Ring size determines how much your transaction is mixed',
      detailed: 'Ring size is the number of decoys mixed with your real transaction. Monero uses a minimum ring size of 11, meaning your transaction is indistinguishable from 10 others. Higher ring size = more privacy, but larger transactions. Monero chose 11 as the optimal balance.'
    },
    {
      q: 'Is Monero\'s Privacy Truly Unbreakable?',
      brief: 'Yes, mathematically proven',
      detailed: 'Monero\'s privacy is based on well-established cryptographic principles (Diffie-Hellman, elliptic curves). No mathematical breakthrough has been found in 11+ years. The privacy is not dependent on any single unproven assumption. However, user operational security (keeping seed phrases safe, IP hiding) remains important.'
    },
    {
      q: 'Can Law Enforcement De-Anonymize Monero?',
      brief: 'Not through blockchain analysis',
      detailed: 'Law enforcement cannot trace Monero transactions on-chain. They could potentially identify users through exchange KYC, network analysis (IP addresses), or if a user voluntarily reveals their view key. But the money itself cannot be tracked.'
    }
  ];

  // 8. Privacy Tech Comparison (detailed)
  const privacyComparison = [
    { tech: 'Monero', networkPrivacy: '✓ Planned', defaultPrivate: '✓', fungible: '✓', decentralized: '✓', usable: '✓' },
    { tech: 'Zcash', networkPrivacy: '✗', defaultPrivate: '✗ Optional', fungible: '✓', decentralized: '~', usable: '△' },
    { tech: 'Bitcoin+Mixer', networkPrivacy: '✗', defaultPrivate: '✗', fungible: '✗', decentralized: '~', usable: '△' },
    { tech: 'Dash', networkPrivacy: '✗', defaultPrivate: '✗ Partial', fungible: '△', decentralized: '~', usable: '△' }
  ];

  // 10. Community Spotlight
  const spotlights = [
    { name: 'Monero Core Team', role: 'Full-time & volunteer developers', emoji: '👨‍💻' },
    { name: 'Research Lab', role: 'Academic cryptography research', emoji: '🔬' },
    { name: 'Community Donations', role: 'Funds development via Monero fund', emoji: '💰' },
    { name: 'Localization Team', role: '40+ languages supported', emoji: '🌍' }
  ];

  // 11. Security & Auditability
  const securityPoints = [
    { item: 'Open Source', desc: 'All code publicly available on GitHub for audit' },
    { item: 'Peer Reviewed', desc: 'Research papers reviewed by cryptographers' },
    { item: 'Regular Audits', desc: 'Security audits by reputable firms' },
    { item: 'Bug Bounties', desc: 'Active bug bounty program for researchers' },
    { item: 'Decentralized', desc: 'No single point of failure or control' }
  ];

  // 12. Before You Buy Monero - Safety Checklist
  const safetyChecklist = [
    'Understand that all transactions are final (no chargebacks)',
    'Download wallet from official monero.cc only',
    'Write down seed phrase on paper, store offline',
    'Never enable remote nodes unless necessary',
    'Test with small amount first before large transactions',
    'Enable optional 2FA if available in your wallet',
    'Keep your wallet software updated',
    'Never share your private view key or spend key'
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-6"
      >
        <div className="max-w-7xl mx-auto pt-12 space-y-24">
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                  <Eye className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-300">Privacy cannot be negotiated.</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 pb-3 to-orange-600 bg-clip-text text-transparent leading-tight">
                  Understanding Monero's Significance
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  The cryptocurrency built for privacy. Nobody can see what you send, who you send it to, or how much.
                </p>
                <p className="text-gray-400 max-w-2xl leading-relaxed text-base">
                  Monero is a privacy-focused cryptocurrency where all transactions are private by default—not optional. Unlike Bitcoin's transparent ledger, Monero uses advanced cryptography to hide sender, receiver, and amounts. It's money designed for people who value their financial freedom.
                </p>
                <div className="flex gap-4 pt-4 flex-wrap">
                  <a
                    href="https://www.monero.cc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white">
                      Official Monero Site
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <Link to="/browse">
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50 flex items-center gap-2">
                      See Trading Offers
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Visual */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl flex items-center justify-center border border-orange-500/20 shadow-2xl shadow-orange-500/10"
              >
                <Eye className="w-24 h-24 text-orange-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Key Takeaway Box */}
          <motion.div variants={itemVariants}>
            <Card className="p-7 md:p-9 bg-gradient-to-r from-orange-500/15 to-orange-600/10 border border-orange-500/30">
              <div className="flex gap-4 items-start">
                <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1.5" />
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Key Takeaway</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Monero is the only major cryptocurrency where privacy is enabled by default on every single transaction. You don't need special knowledge or extra steps—your privacy is automatic and built into the technology.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 1. Interactive Privacy Visualizer */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">1. See the Privacy Difference</h2>
                <p className="text-gray-400 text-lg font-medium">Compare Bitcoin and Monero transactions side-by-side</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Bitcoin View */}
                <Card className={`p-8 border-2 transition-all duration-300 cursor-pointer ${privacyView === 'bitcoin' ? 'border-blue-500/50 bg-blue-500/10' : 'border-gray-800/50 bg-gray-900/40'}`} onClick={() => setPrivacyView('bitcoin')}>
                  <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-3">
                    <Eye className="w-5 h-5 text-blue-400 flex-shrink-0" /> Bitcoin Transaction
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">SENDER</p>
                      <p className="text-white font-mono text-sm">{bitcoinTransaction.sender}</p>
                      <p className="text-red-400 text-xs mt-2">⚠️ PUBLIC</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">AMOUNT</p>
                      <p className="text-white font-mono text-sm">{bitcoinTransaction.amount}</p>
                      <p className="text-red-400 text-xs mt-2">⚠️ PUBLIC</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">RECEIVER</p>
                      <p className="text-white font-mono text-sm">{bitcoinTransaction.receiver}</p>
                      <p className="text-red-400 text-xs mt-2">⚠️ PUBLIC</p>
                    </div>
                  </div>
                </Card>

                {/* Monero View */}
                <Card className={`p-8 border-2 transition-all duration-300 cursor-pointer ${privacyView === 'monero' ? 'border-orange-500/50 bg-orange-500/10' : 'border-gray-800/50 bg-gray-900/40'}`} onClick={() => setPrivacyView('monero')}>
                  <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-3">
                    <Eye className="w-5 h-5 text-orange-400 flex-shrink-0" /> Monero Transaction
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">SENDER</p>
                      <p className="text-white font-mono text-sm">{moneroTransaction.sender}</p>
                      <p className="text-green-400 text-xs mt-2">✓ HIDDEN</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">AMOUNT</p>
                      <p className="text-white font-mono text-sm">{moneroTransaction.amount}</p>
                      <p className="text-green-400 text-xs mt-2">✓ HIDDEN</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">RECEIVER</p>
                      <p className="text-white font-mono text-sm">{moneroTransaction.receiver}</p>
                      <p className="text-green-400 text-xs mt-2">✓ HIDDEN</p>
                    </div>
                  </div>
                </Card>
              </div>
              <p className="text-gray-400 text-center">Click either view to highlight • Monero hides everything, Bitcoin shows everything</p>
            </div>
          </motion.div>

          {/* 2. Myths vs Reality */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">2. Myths vs Reality</h2>
                <p className="text-gray-400 text-lg font-medium">Common misconceptions debunked</p>
              </div>
              <div className="space-y-4">
                {myths.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setExpandedMythIndex(expandedMythIndex === idx ? null : idx)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="w-full text-left"
                  >
                    <Card className="p-6 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 group">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors mb-2">❌ Myth: {item.myth}</h3>
                          {expandedMythIndex === idx && (
                            <motion.p className="text-green-400 text-sm mt-2">✓ Reality: {item.reality}</motion.p>
                          )}
                        </div>
                        <motion.div animate={{ rotate: expandedMythIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-400 flex-shrink-0" />
                        </motion.div>
                      </div>
                    </Card>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Monero Evolution Timeline */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">3. Monero's Evolution</h2>
                <p className="text-gray-400 text-lg font-medium">11+ years of continuous improvement and innovation</p>
              </div>
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500/20 to-transparent" style={{ top: 0 }}></div>

                <div className="space-y-8">
                  {timeline.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-8 items-center"
                      >
                        {/* Left side (even indices) */}
                        {isEven ? (
                          <>
                            <Card className="flex-1 p-6 border border-orange-500/30 bg-orange-500/10 text-right">
                              <div className="font-bold text-orange-400 text-xs mb-2 uppercase tracking-wide">{item.year}</div>
                              <h3 className="font-semibold text-white text-base mb-3">{item.event}</h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                            <div className="w-12 h-12 rounded-full bg-orange-500 border-4 border-gray-950 flex items-center justify-center z-10 flex-shrink-0">
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 hidden md:block"></div>
                          </>
                        ) : (
                          <>
                            <div className="flex-1 hidden md:block"></div>
                            <div className="w-12 h-12 rounded-full bg-orange-500 border-4 border-gray-950 flex items-center justify-center z-10 flex-shrink-0">
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <Card className="flex-1 p-6 border border-orange-500/30 bg-orange-500/10">
                              <div className="font-bold text-orange-400 text-xs mb-2 uppercase tracking-wide">{item.year}</div>
                              <h3 className="font-semibold text-white text-base mb-3">{item.event}</h3>
                              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Security Metrics */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">4. Monero by the Numbers</h2>
                <p className="text-gray-400 text-lg font-medium">Real-world metrics showing Monero's scale and security</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-7 border border-orange-500/30 bg-orange-500/10 text-center h-full">
                        <Icon className="w-8 h-8 text-orange-400 mx-auto mb-5" />
                        <div className="text-4xl font-extrabold text-white mb-3">{metric.value}</div>
                        <div className="text-gray-400 text-sm font-medium">{metric.label}</div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 5. Use Monero Right Now */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-4xl font-extrabold text-white">5. Start Using Monero Today</h2>
                  <p className="text-gray-300 text-lg font-medium">Immediate actions you can take right now</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {quickStart.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <Card className="p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 h-full cursor-pointer group hover:bg-purple-500/10">
                        <div className="flex items-center gap-3 mb-3">
                          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          <h3 className="font-semibold text-white group-hover:text-purple-300 text-base">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 6. Real Stories / Community Impact */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">6. Who Uses Monero?</h2>
                <p className="text-gray-400 text-lg font-medium">Real communities benefiting from Monero's privacy</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stories.map((story, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 bg-green-500/5 h-full">
                      <h3 className="font-semibold text-white mb-3 text-base">{story.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed text-justify">{story.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>



          {/* How Privacy Works */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">How Does Monero Keep You Private?</h2>
                <p className="text-gray-400 text-lg font-medium">The cryptographic technologies behind Monero's privacy</p>
              </div>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-orange-500/10 via-gray-900/50 to-gray-900/50 border border-orange-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  {technicalFeatures.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-orange-500/20 rounded-lg">
                            <Icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                          </div>
                          <h3 className="font-semibold text-white text-base">{tech.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">{tech.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </motion.div>





          {/* 7. Deep Dive Common Questions */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">7. Deep Dive: Common Questions</h2>
                <p className="text-gray-400 text-lg font-medium">Expanded technical explanations for curious minds</p>
              </div>
              <div className="space-y-4">
                {deepDiveQuestions.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setDeepDiveIndex(deepDiveIndex === idx ? null : idx)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="w-full text-left"
                  >
                    <Card className="p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 bg-blue-500/5 group">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 flex items-center gap-3">
                            <Lightbulb className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{item.q}</span>
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.brief}</p>
                          {deepDiveIndex === idx && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="mt-4 pt-4 border-t border-blue-500/20">
                              <p className="text-gray-300 text-sm leading-relaxed">{item.detailed}</p>
                            </motion.div>
                          )}
                        </div>
                        <motion.div animate={{ rotate: deepDiveIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 flex-shrink-0" />
                        </motion.div>
                      </div>
                    </Card>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 8. Advanced Privacy Tech Comparison */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">8. Privacy Coins Detailed Comparison</h2>
                <p className="text-gray-400 text-lg font-medium">How Monero stacks up against other privacy projects</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-3 text-white font-semibold">Privacy Tech</th>
                      <th className="text-center p-3 text-orange-400 font-semibold bg-orange-500/5">Monero</th>
                      <th className="text-center p-3 text-gray-400 font-semibold">Network Privacy</th>
                      <th className="text-center p-3 text-gray-400 font-semibold">Default Private</th>
                      <th className="text-center p-3 text-gray-400 font-semibold">Decentralized</th>
                      <th className="text-center p-3 text-gray-400 font-semibold">Usable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {privacyComparison.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800">
                        <td className="p-3 text-white font-medium">{row.tech}</td>
                        <td className="text-center p-3 font-bold bg-orange-500/5 text-orange-400">{row.defaultPrivate === '✓' ? '✓ YES' : '△ SOME'}</td>
                        <td className="text-center p-3 text-gray-400">{row.networkPrivacy}</td>
                        <td className="text-center p-3 text-gray-400">{row.defaultPrivate}</td>
                        <td className="text-center p-3 text-gray-400">{row.decentralized}</td>
                        <td className="text-center p-3 text-gray-400">{row.usable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 9. Calculate Your Privacy Value */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/20">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-4xl font-extrabold text-white">9. Your Privacy is Worth Money</h2>
                  <p className="text-gray-300 text-lg font-medium">See how much your monthly privacy is worth</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-300 font-semibold mb-3 block">
                      Monthly Transactions: <span className="text-indigo-400">{privacyValue}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      value={privacyValue}
                      onChange={(e) => setPrivacyValue(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>10</span>
                      <span>500</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-indigo-500/10 border border-indigo-500/30">
                      <div className="text-xs text-gray-400 mb-2 font-medium">Privacy Value</div>
                      <div className="text-3xl font-extrabold text-indigo-400 mb-2">${(privacyValue * 5).toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Annual value of your privacy</div>
                    </Card>
                    <Card className="p-5 bg-indigo-500/10 border border-indigo-500/30">
                      <div className="text-xs text-gray-400 mb-2 font-medium">Data Tracked</div>
                      <div className="text-3xl font-extrabold text-red-400 mb-2">{privacyValue * 10}</div>
                      <div className="text-xs text-gray-500">Transactions exposed on Bitcoin</div>
                    </Card>
                    <Card className="p-5 bg-indigo-500/10 border border-indigo-500/30">
                      <div className="text-xs text-gray-400 mb-2 font-medium">Protected with Monero</div>
                      <div className="text-3xl font-extrabold text-green-400 mb-2">{privacyValue * 10}</div>
                      <div className="text-xs text-gray-500">Transactions completely private</div>
                    </Card>
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Your financial privacy has real value. Monero protects it automatically, on every transaction.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 10. Community Spotlight */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">10. The Monero Community</h2>
                <p className="text-gray-400 text-lg font-medium">The people and teams making Monero happen</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {spotlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border border-gray-800/50 hover:border-orange-500/40 transition-all duration-300 h-full bg-gray-900/40 hover:bg-gray-900/60">
                      <div className="text-5xl mb-5">{item.emoji}</div>
                      <h3 className="font-semibold text-white text-base mb-2">{item.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.role}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 11. Security & Auditability */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-4xl font-extrabold text-white">11. Security & Trust</h2>
                  <p className="text-gray-300 text-lg font-medium">Why Monero is trustworthy</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {securityPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1.5" />
                      <div>
                        <h3 className="font-semibold text-white mb-2 text-base">{point.item}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 12. Before You Buy - Safety Checklist */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">12. Before You Buy Monero - Safety Checklist</h2>
                <p className="text-gray-400 text-lg font-medium">Essential steps to secure your first XMR purchase</p>
              </div>
              <Card className="p-8 border border-yellow-500/30 bg-yellow-500/10">
                <div className="space-y-4">
                  {safetyChecklist.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Getting Started */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-500/20">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-4xl font-extrabold text-white">Getting Started with Monero</h2>
                  <p className="text-gray-300 text-lg font-medium">
                    Using Monero on XMRMatters is simple, private, and doesn't require providing any personal information.
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: '1', title: 'Create Account', desc: 'Sign up with just a username. No email, no verification.' },
                    { step: '2', title: 'Get a Wallet', desc: 'Download an official Monero wallet (mobile, desktop, or web).' },
                    { step: '3', title: 'Trade on XMRMatters', desc: 'Buy Monero on XMRMatters in a P2P privacy oriented environment.' },
                    { step: '4', title: 'Withdraw to your Wallet', desc: 'XMRMatters supports keeping your funds in your own wallet.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg border border-green-500/30 text-center">
                      <div className="text-4xl font-bold text-green-400 mb-4">{item.step}</div>
                      <h3 className="font-semibold text-white mb-3 text-base">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 flex-wrap">
                  <Link to="/register">
                    <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                      Create Free Account
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <a
                    href="https://www.monero.cc/get-started/getting-started/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-green-700 text-gray-300 hover:bg-green-800/20 flex items-center gap-2">
                      Monero Beginner Guide
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-lg font-medium">Answers to common questions about Monero</p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                      className="w-full p-6 bg-gray-900/50 border border-gray-800/50 hover:border-orange-500/30 rounded-lg transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-white text-base group-hover:text-orange-300 transition-colors leading-snug">{item.q}</h3>
                        <motion.div
                          animate={{ rotate: expandedFAQ === idx ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: expandedFAQ === idx ? 1 : 0, height: expandedFAQ === idx ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 mt-5 pt-5 border-t border-gray-700/50 leading-relaxed text-sm">{item.a}</p>
                      </motion.div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Learning Resources */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold text-white">Learn More</h2>
                <p className="text-gray-400 text-lg font-medium">Trusted resources to dive deeper into Monero</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Official Monero Project',
                    desc: 'The official website with documentation, downloads, and community information.',
                    url: 'https://www.monero.cc/',
                    icon: '🌐'
                  },
                  {
                    title: 'Monero Research Lab',
                    desc: 'Academic research and technical papers on Monero\'s cryptography and design.',
                    url: 'https://lab.monero.cc/',
                    icon: '🔬'
                  },
                  {
                    title: 'Mastering Monero',
                    desc: 'A comprehensive free book about Monero technology and usage.',
                    url: 'https://masteringmonero.com/',
                    icon: '📚'
                  },
                  {
                    title: 'Monero Community Forum',
                    desc: 'Discuss with the community, ask questions, and get support.',
                    url: 'https://forum.monero.cc/',
                    icon: '💬'
                  }
                ].map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="p-6 border border-gray-800/50 hover:border-orange-500/40 transition-all duration-300 h-full cursor-pointer group hover:bg-gray-900/60">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="text-4xl">{resource.icon}</div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors flex-shrink-0" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors text-base mb-2">
                            {resource.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-sm">{resource.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-500/30">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h2 className="text-5xl font-extrabold text-white">
                    Ready to Trade Monero Privately?
                  </h2>
                  <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
                    XMRMatters is a peer-to-peer Monero exchange with zero KYC requirements. Trade directly with other users, keep your privacy intact, and control your own money.
                  </p>
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link to="/register">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 px-6 py-3">
                      <span className="text-lg">Get Started</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/browse">
                    <Button variant="outline" className="border-orange-500/40 text-gray-300 hover:bg-orange-500/10 flex items-center gap-2 px-6 py-3">
                      <span className="text-lg">Browse Offers</span>
                      <Globe className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
