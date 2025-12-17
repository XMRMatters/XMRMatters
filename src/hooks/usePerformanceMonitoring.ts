import { useEffect } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
}

interface PerformanceEntryWithValue extends PerformanceEntry {
  value: number;
  hadRecentInput?: boolean;
}

export function usePerformanceMonitoring(pageName: string) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const startTime = performance.now();
    const metrics: PerformanceMetrics = {
      pageLoadTime: 0,
    };

    // Measure page load time
    const handleLoadComplete = () => {
      metrics.pageLoadTime = performance.now() - startTime;
      
      // Log metrics (you can replace this with actual analytics)
      if (process.env.VITE_ENABLE_ANALYTICS === 'true') {
        console.debug(`Performance Metrics for ${pageName}:`, metrics);
      }
    };

    window.addEventListener('load', handleLoadComplete);

    // Try to measure Web Vitals
    try {
      // Measure First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Observer for Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntryWithValue;
        metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observer for Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntryWithValue;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            metrics.cumulativeLayoutShift = clsValue;
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        window.removeEventListener('load', handleLoadComplete);
        lcpObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance monitoring not available:', error);
      return () => {
        window.removeEventListener('load', handleLoadComplete);
      };
    }
  }, [pageName]);
}
