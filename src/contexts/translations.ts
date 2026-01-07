import { Language } from './LanguageContext'

/**
 * Translation dictionary for supported languages
 */
export const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    catalog: 'Wine Catalog',
    wine_detail: 'Wine Details',
    contact: 'Contact',
    booking: 'Book a Tasting',
    trade: 'Trade Inquiries',
    language: 'Language',
    english: 'English',
    french: 'Français',
    switch_to_english: 'Switch to English',
    switch_to_french: 'Switch to French',
    loading: 'Loading...',
    start_building: 'Start building your app',
    heritage: 'Maison Héritage',
  },
  fr: {
    home: 'Accueil',
    catalog: 'Catalogue de Vins',
    wine_detail: 'Détails du Vin',
    contact: 'Contact',
    booking: 'Réserver une Dégustation',
    trade: 'Enquêtes Commerciales',
    language: 'Langue',
    english: 'English',
    french: 'Français',
    switch_to_english: "Passer à l'anglais",
    switch_to_french: 'Passer au français',
    loading: 'Chargement...',
    start_building: 'Commencez à construire votre application',
    heritage: 'Maison Héritage',
  },
}
