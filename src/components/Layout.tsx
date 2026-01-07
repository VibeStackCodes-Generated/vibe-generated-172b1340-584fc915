import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'

interface LayoutProps {
  children: ReactNode
}

/**
 * Main layout component with header, navigation, and footer
 */
export function Layout({ children }: LayoutProps) {
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  /**
   * Check if a route is active
   */
  const isActive = (path: string): boolean => {
    return location.pathname === `/${language}${path}` || location.pathname === `/${language}`
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-amber-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link
              to={`/${language}`}
              className="text-2xl font-serif font-bold text-amber-900 hover:text-amber-700 transition-colors"
            >
              {t('heritage')}
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to={`/${language}`}
                className={`font-semibold transition-colors ${
                  isActive('') ? 'text-amber-900' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                {t('home')}
              </Link>
              <Link
                to={`/${language}/catalog`}
                className={`font-semibold transition-colors ${
                  isActive('/catalog') ? 'text-amber-900' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                {t('catalog')}
              </Link>
              <Link
                to={`/${language}/booking`}
                className={`font-semibold transition-colors ${
                  isActive('/booking') ? 'text-amber-900' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                {t('booking')}
              </Link>
              <Link
                to={`/${language}/trade`}
                className={`font-semibold transition-colors ${
                  isActive('/trade') ? 'text-amber-900' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                {t('trade')}
              </Link>
              <Link
                to={`/${language}/contact`}
                className={`font-semibold transition-colors ${
                  isActive('/contact') ? 'text-amber-900' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                {t('contact')}
              </Link>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-amber-900 text-amber-50'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                  language === 'fr'
                    ? 'bg-amber-900 text-amber-50'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex flex-wrap gap-2">
            <Link
              to={`/${language}`}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                isActive('') ? 'bg-amber-900 text-amber-50' : 'bg-amber-100 text-amber-900'
              }`}
            >
              {t('home')}
            </Link>
            <Link
              to={`/${language}/catalog`}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                isActive('/catalog') ? 'bg-amber-900 text-amber-50' : 'bg-amber-100 text-amber-900'
              }`}
            >
              {t('catalog')}
            </Link>
            <Link
              to={`/${language}/booking`}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                isActive('/booking') ? 'bg-amber-900 text-amber-50' : 'bg-amber-100 text-amber-900'
              }`}
            >
              {t('booking')}
            </Link>
            <Link
              to={`/${language}/trade`}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                isActive('/trade') ? 'bg-amber-900 text-amber-50' : 'bg-amber-100 text-amber-900'
              }`}
            >
              {t('trade')}
            </Link>
            <Link
              to={`/${language}/contact`}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'bg-amber-900 text-amber-50' : 'bg-amber-100 text-amber-900'
              }`}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">{t('heritage')}</h3>
              <p className="text-amber-100">
                {language === 'en'
                  ? 'A celebration of French winemaking heritage'
                  : 'Une célébration du patrimoine viticole français'}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold mb-4">
                {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
              </h4>
              <ul className="space-y-2 text-amber-100">
                <li>
                  <Link to={`/${language}`} className="hover:text-amber-50 transition-colors">
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${language}/catalog`}
                    className="hover:text-amber-50 transition-colors"
                  >
                    {t('catalog')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${language}/booking`}
                    className="hover:text-amber-50 transition-colors"
                  >
                    {t('booking')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-bold mb-4">
                {language === 'en' ? 'Contact' : 'Contact'}
              </h4>
              <ul className="space-y-2 text-amber-100">
                <li>123 Rue du Vin</li>
                <li>75001 Paris, France</li>
                <li>
                  <a href="tel:+33123456789" className="hover:text-amber-50 transition-colors">
                    +33 (0) 1 23 45 67 89
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@maisonheritage.fr"
                    className="hover:text-amber-50 transition-colors"
                  >
                    contact@maisonheritage.fr
                  </a>
                </li>
              </ul>
            </div>

            {/* Business */}
            <div>
              <h4 className="font-serif font-bold mb-4">
                {language === 'en' ? 'Business' : 'Commerce'}
              </h4>
              <ul className="space-y-2 text-amber-100">
                <li>
                  <Link to={`/${language}/trade`} className="hover:text-amber-50 transition-colors">
                    {t('trade')}
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-50 transition-colors">
                    {language === 'en' ? 'Terms of Service' : "Conditions d'Utilisation"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-50 transition-colors">
                    {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-900 pt-8 text-center text-amber-100">
            <p>
              &copy; {new Date().getFullYear()} Maison Héritage.{' '}
              {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
