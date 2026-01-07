import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Trade page component
 * Handles B2B inquiries and trade partnerships
 */
export function Trade() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
          {language === 'en' ? 'Trade & Wholesale' : 'Commerce et Gros'}
        </h1>
        <p className="text-lg text-amber-700 mb-12">
          {language === 'en'
            ? 'Partnership opportunities for restaurants, retailers, and distributors'
            : 'Opportunités de partenariat pour les restaurants, détaillants et distributeurs'}
        </p>

        {/* Trade Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border-2 border-amber-200 rounded-lg p-8">
            <h2 className="text-xl font-serif font-bold text-amber-900 mb-4">
              {language === 'en' ? 'Why Partner With Us' : 'Pourquoi Partenaire Avec Nous'}
            </h2>
            <ul className="space-y-3 text-amber-700">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  {language === 'en'
                    ? 'Authentic French heritage wines'
                    : 'Vins authentiques du patrimoine français'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  {language === 'en'
                    ? 'Competitive wholesale pricing'
                    : 'Tarification de gros concurrentielle'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  {language === 'en' ? 'Marketing & sales support' : 'Soutien marketing et ventes'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  {language === 'en'
                    ? 'Flexible volume commitments'
                    : 'Engagements en volume flexibles'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  {language === 'en'
                    ? 'Direct sommelier consultation'
                    : 'Consultation directe du sommelier'}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8">
            <h2 className="text-xl font-serif font-bold text-amber-900 mb-4">
              {language === 'en' ? 'Minimum Orders' : 'Commandes Minimales'}
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-amber-900">
                  {language === 'en' ? 'Case Orders' : 'Commandes par Caisse'}
                </p>
                <p className="text-amber-700">
                  {language === 'en'
                    ? '12 bottles minimum per order'
                    : 'Minimum 12 bouteilles par commande'}
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-900">
                  {language === 'en' ? 'Volume Discounts' : 'Réductions de Volume'}
                </p>
                <p className="text-amber-700">
                  {language === 'en'
                    ? '5% for 10+ cases, 10% for 25+ cases'
                    : '5% pour 10+ caisses, 10% pour 25+ caisses'}
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-900">
                  {language === 'en' ? 'Delivery' : 'Livraison'}
                </p>
                <p className="text-amber-700">
                  {language === 'en'
                    ? 'Free delivery for 50+ case orders'
                    : 'Livraison gratuite pour les commandes 50+ caisses'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Form */}
        <div className="bg-white border-2 border-amber-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Trade Inquiry Form' : 'Formulaire de Demande Commerciale'}
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Business Name' : "Nom de l'Entreprise"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Business Type' : "Type d'Entreprise"}
                </label>
                <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                  <option>{language === 'en' ? 'Select...' : 'Sélectionner...'}</option>
                  <option>{language === 'en' ? 'Restaurant' : 'Restaurant'}</option>
                  <option>{language === 'en' ? 'Wine Retailer' : 'Détaillant de Vin'}</option>
                  <option>{language === 'en' ? 'Distributor' : 'Distributeur'}</option>
                  <option>{language === 'en' ? 'Hotel/Hospitality' : 'Hôtel/Hôtellerie'}</option>
                  <option>{language === 'en' ? 'Event Venue' : "Salle d'Événements"}</option>
                  <option>{language === 'en' ? 'Other' : 'Autre'}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Contact Name' : 'Nom du Contact'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Title' : 'Titre'}
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

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Country/Region' : 'Pays/Région'}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en'
                  ? 'Tell us about your business and interest'
                  : 'Parlez-nous de votre entreprise et de votre intérêt'}
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <label className="text-sm text-amber-700">
                {language === 'en'
                  ? 'I agree to receive communications about trade opportunities'
                  : "J'accepte de recevoir des communications sur les opportunités commerciales"}
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              {language === 'en' ? 'Submit Inquiry' : 'Soumettre une Demande'}
            </button>
          </form>
        </div>

        {/* FAQ */}
        <div className="bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            {language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">
                {language === 'en'
                  ? 'What territories are you currently serving?'
                  : 'Quels territoires servez-vous actuellement?'}
              </h3>
              <p className="text-amber-700">
                {language === 'en'
                  ? 'We currently serve France, EU countries, and select international markets. Contact us for availability in your region.'
                  : "Nous servons actuellement la France, les pays de l'UE et certains marchés internationaux. Contactez-nous pour la disponibilité dans votre région."}
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">
                {language === 'en'
                  ? 'Do you provide marketing materials?'
                  : 'Fournissez-vous des matériels de marketing?'}
              </h3>
              <p className="text-amber-700">
                {language === 'en'
                  ? 'Yes, we provide tasting guides, product sheets, and promotional materials to support your sales efforts.'
                  : 'Oui, nous fournissons des guides de dégustation, des fiches produit et des matériels promotionnels pour soutenir vos efforts de vente.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
