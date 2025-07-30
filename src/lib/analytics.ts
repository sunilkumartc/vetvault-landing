import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Event tracking
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom event tracking for veterinary-specific actions
export const trackVetEvent = {
  // Demo requests
  demoRequest: (source: string) => {
    event({
      action: 'demo_request',
      category: 'engagement',
      label: source,
    });
  },

  // Feature exploration
  featureView: (feature: string) => {
    event({
      action: 'feature_view',
      category: 'engagement',
      label: feature,
    });
  },

  // Pricing page views
  pricingView: (plan?: string) => {
    event({
      action: 'pricing_view',
      category: 'engagement',
      label: plan || 'general',
    });
  },

  // Contact form submissions
  contactSubmit: (formType: string) => {
    event({
      action: 'contact_submit',
      category: 'lead_generation',
      label: formType,
    });
  },

  // Newsletter signups
  newsletterSignup: (source: string) => {
    event({
      action: 'newsletter_signup',
      category: 'lead_generation',
      label: source,
    });
  },

  // Download actions
  download: (fileType: string) => {
    event({
      action: 'download',
      category: 'engagement',
      label: fileType,
    });
  },

  // Solution page views
  solutionView: (solution: string) => {
    event({
      action: 'solution_view',
      category: 'engagement',
      label: solution,
    });
  },
};

// Performance monitoring
export const trackPerformance = {
  // Core Web Vitals
  trackLCP: (value: number) => {
    event({
      action: 'lcp',
      category: 'performance',
      value: Math.round(value),
    });
  },

  trackFID: (value: number) => {
    event({
      action: 'fid',
      category: 'performance',
      value: Math.round(value),
    });
  },

  trackCLS: (value: number) => {
    event({
      action: 'cls',
      category: 'performance',
      value: Math.round(value * 1000) / 1000,
    });
  },
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  event({
    action: 'error',
    category: 'error',
    label: `${error.name}: ${error.message}`,
  });

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error tracked:', { error, context });
  }
};

// Analytics Components
export const AnalyticsWrapper = () => (
  <>
    <Analytics />
    <SpeedInsights />
  </>
);

// Initialize analytics
export const initAnalytics = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(trackPerformance.trackCLS);
        getFID(trackPerformance.trackFID);
        getFCP(trackPerformance.trackLCP);
        getLCP(trackPerformance.trackLCP);
        getTTFB((metric) => {
          event({
            action: 'ttfb',
            category: 'performance',
            value: Math.round(metric.value),
          });
        });
      });
    }
  }
};

// Type declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 