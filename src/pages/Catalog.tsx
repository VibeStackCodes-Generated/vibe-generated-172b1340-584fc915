import { useLanguage } from '@/contexts/LanguageContext'
import { Link } from 'react-router-dom'

interface Wine {
  id: string
  name: string
  variety: string
  region: string
  vintage: number
  price: number
}

// Sample wine data
const wines: Wine[] = [
  {
    id: '1',
    name: 'Château Margot 2020',
    variety: 'Cabernet Sauvignon',
    region: 'Bordeaux',
    vintage: 2020,
    price: 45,
  },
  {
    id: '2',
    name: 'Blanc de Blancs 2021',
    variety: 'Chardonnay',
    region: 'Champagne',
    vintage: 2021,
    price: 55,
  },
  {
    id: '3',
    name: 'Rosé Provence 2022',
    variety: 'Grenache',
    region: 'Provence',
    vintage: 2022,
    price: 28,
  },
  {
    id: '4',
    name: 'Sancerre 2021',
    variety: 'Sauvignon Blanc',
    region: 'Loire Valley',
    vintage: 2021,
    price: 32,
  },
]

/**
 * Wine Catalog page component
 * Displays collection of wines with filters
 */
export function Catalog() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
          {t('catalog')}
        </h1>
        <p className="text-lg text-amber-700 mb-12">
          {language === 'en'
            ? 'Explore our curated selection of wines from across France'
            : 'Explorez notre sélection soignée de vins de toute la France'}
        </p>

        {/* Filters Section */}
        <div className="mb-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <h2 className="text-xl font-serif font-bold text-amber-900 mb-4">
            {language === 'en' ? 'Filters' : 'Filtres'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Variety' : 'Variété'}
              </label>
              <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                <option>All</option>
                <option>Red</option>
                <option>White</option>
                <option>Rosé</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Region' : 'Région'}
              </label>
              <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                <option>All</option>
                <option>Bordeaux</option>
                <option>Burgundy</option>
                <option>Champagne</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Price Range' : 'Gamme de Prix'}
              </label>
              <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                <option>All</option>
                <option>$0 - $50</option>
                <option>$50 - $100</option>
                <option>$100+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                {language === 'en' ? 'Vintage' : 'Millésime'}
              </label>
              <select className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500">
                <option>All</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
        </div>

        {/* Wine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wines.map(wine => (
            <Link key={wine.id} to={`/${language}/wine/${wine.id}`} className="block group">
              <div className="bg-white rounded-lg border border-amber-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-950 flex items-center justify-center">
                  <svg className="w-12 h-12 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c.5 0 1 .2 1.4.5l3.7 3.1c.3.3.6.6.8 1v2.8h2c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-2v2h-2v-2H7v2H5v-2H3c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h2V5.6c.2-.4.5-.7.8-1l3.7-3.1c.4-.3.9-.5 1.4-.5zm0 2c-.2 0-.3.1-.5.2l-3 2.5c-.2.2-.4.4-.5.7v2.6h8V7.4c-.1-.3-.3-.5-.5-.7l-3-2.5c-.2-.1-.3-.2-.5-.2z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                    {wine.name}
                  </h3>
                  <p className="text-sm text-amber-700 mt-2">{wine.variety}</p>
                  <p className="text-sm text-amber-600">{wine.region}</p>
                  <p className="text-lg font-semibold text-amber-900 mt-3">${wine.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
