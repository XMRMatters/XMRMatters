import { AlertTriangle, ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_50%)]" />

        <div className="relative max-w-2xl w-full text-center">
          {/* 404 Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-30">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center animate-pulse">
                  <AlertTriangle className="w-12 h-12 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-300 mb-2">
            The page you're looking for doesn't exist
          </p>

          <p className="text-gray-400 mb-10">
            It might have been moved or removed. Let's get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </button>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Suggestion */}
          <div className="mt-12 p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-4">
              Here are the pages you might be looking for:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Monero', path: '/monero' },
                { label: 'Donate', path: '/donate' },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="px-4 py-2 bg-gray-700/50 hover:bg-orange-500/20 text-gray-300 hover:text-orange-300 rounded-lg transition-all duration-200 text-sm font-medium border border-gray-600 hover:border-orange-500/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
