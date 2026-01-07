/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { translations } from './translations'
import { getStoredLanguage, saveLanguageToStorage, detectLanguageFromPath } from './languageUtils'

export type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
}

/**
 * Language provider component
 * Manages language state and provides language switching functionality
 * Persists language selection in localStorage
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const location = useLocation()
  const navigate = useNavigate()

  // Initialize language from URL, localStorage, or default
  const [language, setLanguageState] = useState<Language>(() => {
    const pathLanguage = detectLanguageFromPath(location.pathname)
    const storedLanguage = getStoredLanguage()

    // Prefer URL language if it matches a supported language
    if (pathLanguage === 'en' || pathLanguage === 'fr') {
      return pathLanguage
    }

    // Fall back to stored language
    return storedLanguage
  })

  // Sync localStorage when language changes
  useEffect(() => {
    saveLanguageToStorage(language)
  }, [language])

  /**
   * Handle language change and navigate to localized path
   */
  const setLanguage = useCallback(
    (newLang: Language) => {
      setLanguageState(newLang)

      // Replace language prefix in current path
      let newPath = location.pathname.replace(/^\/(en|fr)/, `/${newLang}`)

      // If path is just /, ensure we navigate to /en or /fr
      if (newPath === `/${newLang}` || !newPath.startsWith(`/${newLang}`)) {
        newPath = `/${newLang}`
      }

      navigate(newPath, { replace: true })
    },
    [location.pathname, navigate]
  )

  /**
   * Translation function
   */
  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || translations['en'][key] || key
    },
    [language]
  )

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/**
 * Hook to use language context
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
