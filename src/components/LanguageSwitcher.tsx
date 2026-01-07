import { useLanguage, Language } from '@/contexts/LanguageContext'

/**
 * Language Switcher Component
 *
 * Provides a button interface for switching between supported languages (EN/FR)
 * Updates the UI language and navigates to the localized URL
 * Persists the selected language in localStorage
 *
 * Features:
 * - Toggle between English and French
 * - Visual feedback for currently selected language
 * - Smooth transitions and hover effects
 * - Responsive design that works on mobile and desktop
 * - Accessibility-friendly button styling
 */
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {/* English Button */}
      <button
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
        aria-current={language === 'en' ? 'page' : undefined}
        className={`px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-amber-900 text-amber-50 shadow-md'
            : 'bg-amber-100 text-amber-900 hover:bg-amber-200 active:scale-95'
        }`}
      >
        EN
      </button>

      {/* French Button */}
      <button
        onClick={() => handleLanguageChange('fr')}
        aria-label="Switch to French (Français)"
        aria-current={language === 'fr' ? 'page' : undefined}
        className={`px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
          language === 'fr'
            ? 'bg-amber-900 text-amber-50 shadow-md'
            : 'bg-amber-100 text-amber-900 hover:bg-amber-200 active:scale-95'
        }`}
      >
        FR
      </button>
    </div>
  )
}
