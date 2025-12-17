import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DonatePage } from './pages/DonatePage';
import { Monero } from './pages/Monero';
import { NotFoundPage } from './pages/NotFoundPage';
import { Page } from './types';
import { routeMap } from './config/routes.config';
import { useSEO } from './hooks/useSEO';

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Get current page from pathname
  const getCurrentPage = (): Page => {
    const pathname = location.pathname;
    if (pathname === '/about') return 'About';
    if (pathname === '/donate') return 'Donate';
    if (pathname === '/monero') return 'Monero';
    return 'Home';
  };

  const currentPage = getCurrentPage();

  // Update SEO metadata based on current page
  useSEO(currentPage);

  // Show spinner only on initial page load (if coming from root)
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/home') {
      setIsInitialLoad(false);
    }
  }, [location.pathname]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (page: Page) => {
    // Only show spinner for navigation between pages, not on initial load
    if (!isInitialLoad) {
      setIsLoading(true);

      const path = routeMap[page];

      // Faster transition: 200-400ms (still smooth but quicker)
      const loadingTime = Math.random() * 200 + 200; // 200-400ms

      setTimeout(() => {
        navigate(path);
        setIsLoading(false);
      }, loadingTime);
    } else {
      // Skip spinner on first navigation
      navigate(routeMap[page]);
      setIsInitialLoad(false);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {isLoading && <LoadingSpinner />}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} onLogoClick={handleLogoClick} />

      <Routes>
        <Route path="/home" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/monero" element={<Monero />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
