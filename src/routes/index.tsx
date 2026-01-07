import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '@/App'
import { Home } from '@/pages/Home'
import { Catalog } from '@/pages/Catalog'
import { WineDetail } from '@/pages/WineDetail'
import { Contact } from '@/pages/Contact'
import { Booking } from '@/pages/Booking'
import { Trade } from '@/pages/Trade'

/**
 * Get basename dynamically from window location or environment
 * Supports both preview proxy and direct deployment
 */
function getBasename(): string {
  // Check if basename is set by preview proxy script
  if (typeof window !== 'undefined') {
    const previewBasename = (window as { __PREVIEW_BASENAME__?: string }).__PREVIEW_BASENAME__
    if (previewBasename) {
      console.log('[Router] Using basename from window.__PREVIEW_BASENAME__:', previewBasename)
      return previewBasename
    }

    // Fallback: detect basename from current URL pathname
    // This handles cases where the script hasn't run yet or for preview proxy URLs
    if (window.location.pathname.startsWith('/api/preview/')) {
      const pathMatch = window.location.pathname.match(/^(\/api\/preview\/[^/]+)/)
      if (pathMatch) {
        const detectedBasename = pathMatch[1]
        console.log('[Router] Detected basename from URL pathname:', detectedBasename)
        // Also set it on window for consistency
        ;(window as { __PREVIEW_BASENAME__?: string }).__PREVIEW_BASENAME__ = detectedBasename
        return detectedBasename
      }
    }
  }

  // Check environment variable (for build-time configuration)
  if (import.meta.env.VITE_BASENAME) {
    return import.meta.env.VITE_BASENAME
  }

  // Default: no basename (root deployment)
  console.log('[Router] No basename detected, using root')
  return ''
}

/**
 * Application routes with localized base paths (/en/, /fr/)
 * Supports nested routing for each language
 */
export const router = createBrowserRouter(
  [
    {
      // Root route - redirect to default language
      path: '/',
      element: <Navigate to="/en" replace />,
    },
    {
      // Localized language routes
      path: '/:lang',
      element: <App />,
      children: [
        {
          // Home page - index route
          index: true,
          element: <Home />,
        },
        {
          // Wine Catalog
          path: 'catalog',
          element: <Catalog />,
        },
        {
          // Wine Detail page with dynamic ID
          path: 'wine/:id',
          element: <WineDetail />,
        },
        {
          // Contact page
          path: 'contact',
          element: <Contact />,
        },
        {
          // Booking/Tasting page
          path: 'booking',
          element: <Booking />,
        },
        {
          // Trade & Wholesale page
          path: 'trade',
          element: <Trade />,
        },
      ],
    },
    {
      // Catch-all - redirect to home
      path: '*',
      element: <Navigate to="/en" replace />,
    },
  ],
  {
    basename: getBasename(),
  }
)
