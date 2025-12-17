import React, { ReactNode } from 'react';
import { AlertCircle, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-400 text-lg mb-2">
              We encountered an unexpected error
            </p>

            <p className="text-gray-500 text-sm mb-8 break-words">
              {this.state.error?.message || 'An unknown error occurred'}
            </p>

            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = '/home';
              }}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </button>

            <p className="text-gray-600 text-xs mt-8">
              If this problem persists, please contact support for assistance. xmrmatters@gmail.com
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
