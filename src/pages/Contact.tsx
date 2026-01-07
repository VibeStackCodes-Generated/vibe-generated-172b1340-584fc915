import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Contact page component
 * Displays contact form and information
 */
export function Contact() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
          {language === 'en' ? 'Contact Us' : 'Nous Contacter'}
        </h1>
        <p className="text-lg text-amber-700 mb-12">
          {language === 'en'
            ? 'Get in touch with us for any inquiries about our wines or services'
            : 'Contactez-nous pour toute question sur nos vins ou services'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Name' : 'Nom'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder={language === 'en' ? 'Your name' : 'Votre nom'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Email' : 'E-mail'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder={language === 'en' ? 'your@email.com' : 'votre@email.com'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Subject' : 'Sujet'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder={
                    language === 'en' ? 'How can we help?' : 'Comment pouvons-nous vous aider?'
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  {language === 'en' ? 'Message' : 'Message'}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder={language === 'en' ? 'Your message...' : 'Votre message...'}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
              >
                {language === 'en' ? 'Send Message' : 'Envoyer le Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
              </h2>
            </div>

            <div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">
                {language === 'en' ? 'Address' : 'Adresse'}
              </h3>
              <p className="text-amber-700">
                123 Rue du Vin
                <br />
                75001 Paris, France
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">
                {language === 'en' ? 'Phone' : 'Téléphone'}
              </h3>
              <p className="text-amber-700">+33 (0) 1 23 45 67 89</p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">
                {language === 'en' ? 'Email' : 'E-mail'}
              </h3>
              <p className="text-amber-700">contact@maisonheritage.fr</p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">
                {language === 'en' ? 'Hours' : 'Horaires'}
              </h3>
              <p className="text-amber-700">
                {language === 'en'
                  ? 'Monday - Friday: 10am - 6pm\nSaturday: 2pm - 6pm\nSunday: Closed'
                  : 'Lundi - Vendredi: 10h - 18h\nSamedi: 14h - 18h\nDimanche: Fermé'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
