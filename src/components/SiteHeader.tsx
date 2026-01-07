import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

/**
 * Accessible Site Header with mobile-first navigation
 * Features:
 * - Mobile hamburger menu with toggle
 * - Responsive desktop navigation
 * - Search input
 * - Language switcher
 * - Comprehensive ARIA attributes for accessibility
 * - Focus management and keyboard navigation
 */
export function SiteHeader() {
  const { language, t } = useLanguage()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  /**
   * Check if a route is active
   */
  const isActive = (path: string): boolean => {
    return location.pathname === `/${language}${path}` || location.pathname === `/${language}`
  }

  /**
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  /**
   * Close menu when pressing Escape key
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  /**
   * Close menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  /**
   * Handle search submission
   */
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to catalog with search query
      window.location.href = `/${language}/catalog?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const navigationLinks = [
    { path: '', label: t('home') },
    { path: '/catalog', label: t('catalog') },
    { path: '/booking', label: t('booking') },
    { path: '/trade', label: t('trade') },
    { path: '/contact', label: t('contact') },
  ]

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b-2 border-amber-200 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header Top: Logo, Menu Button, Search, Language */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <Link
            to={`/${language}`}
            className="text-xl md:text-2xl font-serif font-bold text-amber-900 hover:text-amber-700 transition-colors flex-shrink-0"
            aria-label={`${t('heritage')} - Home`}
          >
            {t('heritage')}
          </Link>

          {/* Search Input - Hidden on mobile, visible on md+ */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-sm mx-4"
            role="search"
            aria-label={language === 'en' ? 'Search wines' : 'Rechercher des vins'}
          >
            <div className="flex w-full">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search wines...' : 'Rechercher des vins...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-amber-200 rounded-l text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                aria-label={language === 'en' ? 'Search wine catalog' : 'Rechercher dans le catalogue'}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-900 text-white rounded-r hover:bg-amber-800 transition-colors font-semibold text-sm"
                aria-label={language === 'en' ? 'Search' : 'Rechercher'}
              >
                {language === 'en' ? '🔍' : '🔍'}
              </button>
            </div>
          </form>

          {/* Right Section: Mobile Menu Button, Language Switcher */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-amber-100 rounded transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-haspopup="true"
            >
              <svg
                className="w-6 h-6 text-amber-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 mt-4 border-t border-amber-100 pt-4"
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={`/${language}${path}`}
              className={`font-semibold text-sm transition-colors ${
                isActive(path) ? 'text-amber-900 border-b-2 border-amber-900 pb-1' : 'text-amber-700 hover:text-amber-900'
              }`}
              aria-current={isActive(path) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Search - Visible only on mobile */}
        <form
          onSubmit={handleSearchSubmit}
          className="md:hidden mt-4 border-t border-amber-100 pt-4"
          role="search"
          aria-label={language === 'en' ? 'Search wines' : 'Rechercher des vins'}
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder={language === 'en' ? 'Search wines...' : 'Rechercher des vins...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 border border-amber-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              aria-label={language === 'en' ? 'Search wine catalog' : 'Rechercher dans le catalogue'}
            />
            <button
              type="submit"
              className="px-3 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition-colors font-semibold text-sm"
              aria-label={language === 'en' ? 'Search' : 'Rechercher'}
            >
              {language === 'en' ? '🔍' : '🔍'}
            </button>
          </div>
        </form>

        {/* Mobile Menu - Toggled on mobile */}
        {isMobileMenuOpen && (
          <nav
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden mt-4 border-t border-amber-100 pt-4"
            aria-label="Mobile navigation"
            role="navigation"
          >
            <ul className="space-y-2">
              {navigationLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={`/${language}${path}`}
                    className={`block px-4 py-2 rounded font-semibold text-sm transition-colors ${
                      isActive(path)
                        ? 'bg-amber-900 text-amber-50'
                        : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                    }`}
                    aria-current={isActive(path) ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
