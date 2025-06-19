import React, { useEffect, useState } from 'react';
import PerformanceOptimizer from '../utils/performanceOptimizations';

interface WebVitalMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

interface PerformanceGrade {
  lcp: 'good' | 'needs-improvement' | 'poor';
  fid: 'good' | 'needs-improvement' | 'poor';
  cls: 'good' | 'needs-improvement' | 'poor';
  overall: 'good' | 'needs-improvement' | 'poor';
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<WebVitalMetrics>({});
  const [grades, setGrades] = useState<PerformanceGrade | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const measureMetrics = async () => {
      try {
        const measuredMetrics = await PerformanceOptimizer.measureWebVitals();
        setMetrics(measuredMetrics);
        setGrades(calculateGrades(measuredMetrics));
      } catch (error) {
        console.error('Error measuring web vitals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Wait for page to stabilize before measuring
    const timer = setTimeout(measureMetrics, 3000);
    return () => clearTimeout(timer);
  }, []);

  const calculateGrades = (metrics: WebVitalMetrics): PerformanceGrade => {
    const lcpGrade = 
      !metrics.lcp ? 'poor' :
      metrics.lcp <= 2500 ? 'good' : 
      metrics.lcp <= 4000 ? 'needs-improvement' : 'poor';

    const fidGrade = 
      !metrics.fid ? 'poor' :
      metrics.fid <= 100 ? 'good' : 
      metrics.fid <= 300 ? 'needs-improvement' : 'poor';

    const clsGrade = 
      metrics.cls === undefined ? 'poor' :
      metrics.cls <= 0.1 ? 'good' : 
      metrics.cls <= 0.25 ? 'needs-improvement' : 'poor';

    const grades = [lcpGrade, fidGrade, clsGrade];
    const goodCount = grades.filter(g => g === 'good').length;
    const overall = 
      goodCount === 3 ? 'good' :
      goodCount >= 2 ? 'needs-improvement' : 'poor';

    return { lcp: lcpGrade, fid: fidGrade, cls: clsGrade, overall };
  };

  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case 'good': return 'bg-green-500';
      case 'needs-improvement': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getGradeTextColor = (grade: string): string => {
    switch (grade) {
      case 'good': return 'text-green-700';
      case 'needs-improvement': return 'text-yellow-700';
      case 'poor': return 'text-red-700';
      default: return 'text-gray-700';
    }
  };

  const formatMetric = (value: number | undefined, unit: string): string => {
    if (value === undefined) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Floating performance button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`px-3 py-2 rounded-lg font-medium text-white shadow-lg transition-all ${
            isLoading 
              ? 'bg-gray-500' 
              : grades 
                ? getGradeColor(grades.overall)
                : 'bg-gray-500'
          }`}
          disabled={isLoading}
        >
          {isLoading ? '⏳' : grades?.overall === 'good' ? '🚀' : grades?.overall === 'needs-improvement' ? '⚡' : '🐌'}
          {isLoading ? ' Loading...' : ' Web Vitals'}
        </button>
      </div>

      {/* Performance panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-2xl w-full shadow-xl">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Core Web Vitals Monitor</h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Real-time performance metrics for development
              </div>
            </div>
            
            <div className="p-6">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Measuring performance...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Overall Score */}
                  {grades && (
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className={`text-2xl font-bold ${getGradeTextColor(grades.overall)}`}>
                        Overall: {grades.overall.replace('-', ' ').toUpperCase()}
                      </div>
                    </div>
                  )}

                  {/* Individual Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">LCP</h3>
                        {grades && (
                          <span className={`w-3 h-3 rounded-full ${getGradeColor(grades.lcp)}`}></span>
                        )}
                      </div>
                      <div className="text-2xl font-bold">{formatMetric(metrics.lcp, 'ms')}</div>
                      <div className="text-xs text-gray-600">Largest Contentful Paint</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Good: ≤2.5s, Poor: &gt;4.0s
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">FID</h3>
                        {grades && (
                          <span className={`w-3 h-3 rounded-full ${getGradeColor(grades.fid)}`}></span>
                        )}
                      </div>
                      <div className="text-2xl font-bold">{formatMetric(metrics.fid, 'ms')}</div>
                      <div className="text-xs text-gray-600">First Input Delay</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Good: ≤100ms, Poor: &gt;300ms
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">CLS</h3>
                        {grades && (
                          <span className={`w-3 h-3 rounded-full ${getGradeColor(grades.cls)}`}></span>
                        )}
                      </div>
                      <div className="text-2xl font-bold">{formatMetric(metrics.cls, '')}</div>
                      <div className="text-xs text-gray-600">Cumulative Layout Shift</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Good: ≤0.1, Poor: &gt;0.25
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Additional Metrics</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>First Contentful Paint:</span>
                          <span className="font-medium">{formatMetric(metrics.fcp, 'ms')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time to First Byte:</span>
                          <span className="font-medium">{formatMetric(metrics.ttfb, 'ms')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Quick Actions</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => window.location.reload()}
                          className="w-full px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                          Remeasure
                        </button>
                        <a
                          href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-3 py-1 bg-green-600 text-white rounded text-sm text-center hover:bg-green-700"
                        >
                          Test in PageSpeed
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Performance Tips */}
                  {grades && grades.overall !== 'good' && (
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold mb-2">💡 Performance Tips</h4>
                      <ul className="text-sm space-y-1">
                        {grades.lcp !== 'good' && (
                          <li>• Optimize largest images and remove render-blocking resources</li>
                        )}
                        {grades.fid !== 'good' && (
                          <li>• Reduce JavaScript execution time and remove unused code</li>
                        )}
                        {grades.cls !== 'good' && (
                          <li>• Add dimensions to images and reserve space for dynamic content</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}