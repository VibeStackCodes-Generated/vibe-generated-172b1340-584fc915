import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Booking page component
 * Allows users to book tasting experiences
 */
export function Booking() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
          {language === 'en' ? 'Book a Tasting' : 'Réserver une Dégustation'}
        </h1>
        <p className="text-lg text-amber-700 mb-12">
          {language === 'en'
            ? 'Experience our wines with our expert sommelier. Choose from several tasting experiences.'
            : 'Découvrez nos vins avec notre sommelier expert. Choisissez parmi plusieurs expériences de dégustation.'}
        </p>

        {/* Tasting Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Premium Tasting */}
          <div className="bg-white border-2 border-amber-200 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-2">
              {language === 'en' ? 'Premium Tasting' : 'Dégustation Premium'}
            </h2>
            <p className="text-3xl font-bold text-amber-900 mb-6">
              €89 {language === 'en' ? 'per person' : 'par personne'}
            </p>
            <ul className="space-y-2 mb-8 text-amber-700">
              <li>✓ {language === 'en' ? '5 wine selections' : '5 sélections de vins'}</li>
              <li>
                ✓ {language === 'en' ? 'Expert sommelier guidance' : 'Conseil du sommelier expert'}
              </li>
              <li>✓ {language === 'en' ? '90 minutes' : '90 minutes'}</li>
              <li>✓ {language === 'en' ? 'Cheese pairing' : 'Accompagnement fromager'}</li>
              <li>
                ✓ {language === 'en' ? 'Tasting notes booklet' : 'Livret de notes de dégustation'}
              </li>
            </ul>
            <button className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold">
              {language === 'en' ? 'Book Now' : 'Réserver Maintenant'}
            </button>
          </div>

          {/* Collector Edition */}
          <div className="bg-amber-50 border-2 border-amber-900 rounded-lg p-8 relative">
            <div className="absolute top--2 left-4 bg-amber-900 text-amber-50 px-3 py-1 rounded-full text-sm font-semibold">
              {language === 'en' ? 'Most Popular' : 'Plus Populaire'}
            </div>
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-2 mt-4">
              {language === 'en' ? 'Collector Edition' : 'Édition Collecteur'}
            </h2>
            <p className="text-3xl font-bold text-amber-900 mb-6">
              €149 {language === 'en' ? 'per person' : 'par personne'}
            </p>
            <ul className="space-y-2 mb-8 text-amber-700">
              <li>✓ {language === 'en' ? '7 wine selections' : '7 sélections de vins'}</li>
              <li>✓ {language === 'en' ? 'Master sommelier' : 'Maître sommelier'}</li>
              <li>✓ {language === 'en' ? '2 hours' : '2 heures'}</li>
              <li>
                ✓ {language === 'en' ? 'Gourmet food pairing' : 'Accompagnement gastronomique'}
              </li>
              <li>
                ✓{' '}
                {language === 'en'
                  ? 'Detailed tasting materials'
                  : 'Matériels de dégustation détaillés'}
              </li>
              <li>✓ {language === 'en' ? 'Private cellar access' : 'Accès privé à la cave'}</li>
            </ul>
            <button className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold">
              {language === 'en' ? 'Book Now' : 'Réserver Maintenant'}
            </button>
          </div>

          {/* Heritage Immersion */}
          <div className="bg-white border-2 border-amber-200 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-2">
              {language === 'en' ? 'Heritage Immersion' : 'Immersion Patrimoine'}
            </h2>
            <p className="text-3xl font-bold text-amber-900 mb-6">
              €249 {language === 'en' ? 'per person' : 'par personne'}
            </p>
            <ul className="space-y-2 mb-8 text-amber-700">
              <li>✓ {language === 'en' ? '10 wine selections' : '10 sélections de vins'}</li>
              <li>✓ {language === 'en' ? 'Private sommelier' : 'Sommelier privé'}</li>
              <li>✓ {language === 'en' ? 'Full day experience' : "Expérience d'une journée"}</li>
              <li>✓ {language === 'en' ? 'Vineyard tour' : 'Visite du vignoble'}</li>
              <li>✓ {language === 'en' ? 'Gourmet lunch' : 'Déjeuner gastronomique'}</li>
              <li>✓ {language === 'en' ? 'Exclusive gifts' : 'Cadeaux exclusifs'}</li>
            </ul>
            <button className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold">
              {language === 'en' ? 'Book Now' : 'Réserver Maintenant'}
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Booking Details' : 'Détails de Réservation'}
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'First Name' : 'Prénom'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Last Name' : 'Nom'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Email' : 'E-mail'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Phone' : 'Téléphone'}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Preferred Date' : 'Date Préférée'}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Time' : 'Heure'}
                </label>
                <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>6:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Number of Guests' : 'Nombre de Convives'}
              </label>
              <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Special Requests' : 'Demandes Spéciales'}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              {language === 'en' ? 'Complete Booking' : 'Finaliser la Réservation'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
