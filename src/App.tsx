import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Layout } from '@/components/Layout'

/**
 * Main App component with routing and localization
 * Wraps the entire app with LanguageProvider and Layout
 * Uses React Router for SPA navigation with language-based routing
 */
function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Layout>
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <p className="text-amber-700">Loading...</p>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Layout>
      </LanguageProvider>
      <VibeStackBadge />
    </ErrorBoundary>
  )
}

export default App
