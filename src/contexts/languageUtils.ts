import { Language } from './LanguageContext'

export const STORAGE_KEY = 'maison-heritage-language'

/**
 * Get language from localStorage
 * Returns stored language or 'en' as default
 */
export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'fr') {
      return stored as Language
    }
  } catch {
    // localStorage might be unavailable
  }

  return 'en'
}

/**
 * Save language to localStorage
 */
export function saveLanguageToStorage(language: Language): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // localStorage might be unavailable
  }
}

/**
 * Extract language from current pathname
 * Expects URLs like /en/... or /fr/...
 */
export function detectLanguageFromPath(pathname: string): Language {
  const match = pathname.match(/^\/(en|fr)(?:\/|$)/)
  return match ? (match[1] as Language) : 'en'
}
