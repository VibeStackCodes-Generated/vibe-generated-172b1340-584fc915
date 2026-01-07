import { useLanguage } from '@/contexts/LanguageContext'
import { Link } from 'react-router-dom'

/**
 * Home page component
 * Displays hero and quick links to catalog, experiences, and contact
 */
export function Home() {
  const { t, language } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-pattern" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-amber-50 mb-4">
            {t('heritage')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-100">
            {language === 'en'
              ? 'Discover the Essence of French Winemaking'
              : "Découvrez l'Essence de la Vinification Française"}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-12 text-center">
            {language === 'en' ? 'Explore' : 'Explorer'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to={`/${language}/catalog`}
              className="block p-8 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">{t('catalog')}</h3>
              <p className="text-amber-700">
                {language === 'en'
                  ? 'Browse our collection of wines by variety, region, and vintage'
                  : 'Parcourez notre collection de vins par variété, région et millésime'}
              </p>
            </Link>

            <Link
              to={`/${language}/booking`}
              className="block p-8 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">{t('booking')}</h3>
              <p className="text-amber-700">
                {language === 'en'
                  ? 'Schedule a tasting experience with our expert sommelier'
                  : 'Planifiez une expérience de dégustation avec notre sommelier expert'}
              </p>
            </Link>

            <Link
              to={`/${language}/contact`}
              className="block p-8 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">{t('contact')}</h3>
              <p className="text-amber-700">
                {language === 'en'
                  ? 'Get in touch with us for any inquiries'
                  : 'Contactez-nous pour toute question'}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
