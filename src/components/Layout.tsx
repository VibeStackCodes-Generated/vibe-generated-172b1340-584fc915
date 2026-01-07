import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { SiteHeader } from './SiteHeader'

interface LayoutProps {
  children: ReactNode
}

/**
 * Main layout component with header, navigation, and footer
 */
export function Layout({ children }: LayoutProps) {
  const { t, language } = useLanguage()
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Navigation */}
      <SiteHeader />


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
