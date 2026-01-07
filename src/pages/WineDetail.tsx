import { useLanguage } from '@/contexts/LanguageContext'
import { useParams, Link } from 'react-router-dom'

interface WineDetailData {
  id: string
  name: string
  variety: string
  region: string
  appellation: string
  vintage: number
  abv: number
  price: number
  shortTasting: string
  longTasting: string
  foodPairings: string[]
  bottleSizes: string[]
  sku: string
  productionNotes: string
  cellarPotential: string
}

// Sample wine details data
const wineDetails: Record<string, WineDetailData> = {
  '1': {
    id: '1',
    name: 'Château Margot 2020',
    variety: 'Cabernet Sauvignon',
    region: 'Bordeaux',
    appellation: 'Pauillac',
    vintage: 2020,
    abv: 13.5,
    price: 45,
    shortTasting: 'A classic Bordeaux with rich plum and blackcurrant notes',
    longTasting:
      "This exceptional Cabernet Sauvignon displays a deep garnet color. On the nose, you'll find aromas of ripe plums, blackcurrants, and hints of cedar. The palate is full-bodied with elegant tannins and a long, lingering finish.",
    foodPairings: ['Beef Steak', 'Lamb', 'Duck', 'Hard Cheeses'],
    bottleSizes: ['750ml', '1.5L', '3L'],
    sku: 'CM2020-750',
    productionNotes:
      'Produced from grapes grown in the clay-limestone soils of Pauillac, aged for 18 months in French oak.',
    cellarPotential: '10-20 years',
  },
  '2': {
    id: '2',
    name: 'Blanc de Blancs 2021',
    variety: 'Chardonnay',
    region: 'Champagne',
    appellation: 'Champagne AOC',
    vintage: 2021,
    abv: 12.0,
    price: 55,
    shortTasting: 'Elegant and refined with citrus and floral notes',
    longTasting:
      'This prestigious Champagne showcases the pure expression of Chardonnay. Fine bubbles create a persistent mousse. Aromas of white flowers, citrus, and brioche characterize the bouquet. The palate is crisp and elegant with excellent balance.',
    foodPairings: ['Oysters', 'Shellfish', 'Light Appetizers', 'Desserts'],
    bottleSizes: ['750ml', '1.5L'],
    sku: 'BDB2021-750',
    productionNotes:
      'Produced exclusively from Chardonnay grapes, aged for 3 years in chalk cellars before release.',
    cellarPotential: '5-10 years',
  },
  '3': {
    id: '3',
    name: 'Rosé Provence 2022',
    variety: 'Grenache',
    region: 'Provence',
    appellation: 'Côtes de Provence',
    vintage: 2022,
    abv: 12.5,
    price: 28,
    shortTasting: 'Dry, refreshing with strawberry and citrus notes',
    longTasting:
      'A quintessential Provence rosé displaying a beautiful salmon-pink color. On the nose, fresh strawberries, citrus zest, and hints of minerals. The palate is dry, crisp, and refreshingly mineral-driven with a clean finish.',
    foodPairings: ['Seafood', 'Salads', 'Light Fish', 'Mediterranean Cuisine'],
    bottleSizes: ['750ml'],
    sku: 'RP2022-750',
    productionNotes:
      'Produced using the saignée method, macerated for just 6-8 hours on the skins to preserve the delicate color.',
    cellarPotential: '1-2 years',
  },
  '4': {
    id: '4',
    name: 'Sancerre 2021',
    variety: 'Sauvignon Blanc',
    region: 'Loire Valley',
    appellation: 'Sancerre',
    vintage: 2021,
    abv: 13.0,
    price: 32,
    shortTasting: 'Crisp white with herbaceous and tropical fruit character',
    longTasting:
      'This brilliant expression of Sauvignon Blanc comes from the chalky soils of Sancerre. Intense aromas of citrus, green apple, and herbs. The palate is vibrant and focused with beautiful minerality and a lasting finish.',
    foodPairings: ['Goat Cheese', 'Grilled Fish', 'Asparagus', 'Soft Cheeses'],
    bottleSizes: ['750ml'],
    sku: 'SNCR2021-750',
    productionNotes:
      "Harvested from low-yielding vines in clay-limestone terroirs, fermented in stainless steel to preserve the wine's fresh character.",
    cellarPotential: '3-5 years',
  },
}

/**
 * Wine Detail page component
 * Displays comprehensive information about a specific wine
 */
export function WineDetail() {
  const { id } = useParams<{ id: string }>()
  const { language } = useLanguage()

  const wine = id ? wineDetails[id] : null

  if (!wine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-amber-900 mb-4">
            {language === 'en' ? 'Wine not found' : 'Vin non trouvé'}
          </h1>
          <Link
            to={`/${language}/catalog`}
            className="text-amber-700 hover:text-amber-900 underline"
          >
            {language === 'en' ? 'Back to Catalog' : 'Retour au Catalogue'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wine Image */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-950 h-96 flex items-center justify-center">
        <svg className="w-32 h-32 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c.5 0 1 .2 1.4.5l3.7 3.1c.3.3.6.6.8 1v2.8h2c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-2v2h-2v-2H7v2H5v-2H3c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h2V5.6c.2-.4.5-.7.8-1l3.7-3.1c.4-.3.9-.5 1.4-.5zm0 2c-.2 0-.3.1-.5.2l-3 2.5c-.2.2-.4.4-.5.7v2.6h8V7.4c-.1-.3-.3-.5-.5-.7l-3-2.5c-.2-.1-.3-.2-.5-.2z" />
        </svg>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header and Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
              {wine.name}
            </h1>
            <p className="text-2xl font-serif text-amber-700 mb-4">{wine.vintage}</p>
            <p className="text-lg text-amber-700 mb-6">{wine.shortTasting}</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 h-fit">
            <p className="text-3xl font-bold text-amber-900 mb-4">${wine.price}</p>
            <button className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg hover:bg-amber-800 transition-colors mb-2 font-semibold">
              {language === 'en' ? 'Book Tasting' : 'Réserver une Dégustation'}
            </button>
            <button className="w-full bg-amber-100 text-amber-900 py-3 rounded-lg hover:bg-amber-200 transition-colors mb-2 font-semibold">
              {language === 'en' ? 'Inquire' : 'Demander'}
            </button>
            <button className="w-full bg-amber-100 text-amber-900 py-3 rounded-lg hover:bg-amber-200 transition-colors font-semibold">
              {language === 'en' ? 'Trade' : 'Commerce'}
            </button>
          </div>
        </div>

        {/* Wine Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Basic Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
              {language === 'en' ? 'Wine Details' : 'Détails du Vin'}
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">
                  {language === 'en' ? 'Variety' : 'Variété'}
                </p>
                <p className="text-amber-900">{wine.variety}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">
                  {language === 'en' ? 'Region' : 'Région'}
                </p>
                <p className="text-amber-900">{wine.region}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">
                  {language === 'en' ? 'Appellation' : 'Appellation'}
                </p>
                <p className="text-amber-900">{wine.appellation}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">ABV</p>
                <p className="text-amber-900">{wine.abv}%</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">SKU</p>
                <p className="text-amber-900">{wine.sku}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
              {language === 'en' ? 'Cellaring & Sizes' : 'Vieillissement et Tailles'}
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">
                  {language === 'en' ? 'Cellar Potential' : 'Potentiel de Vieillissement'}
                </p>
                <p className="text-amber-900">{wine.cellarPotential}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-600 uppercase">
                  {language === 'en' ? 'Bottle Sizes' : 'Tailles de Bouteille'}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {wine.bottleSizes.map(size => (
                    <span
                      key={size}
                      className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            {language === 'en' ? 'Tasting Notes' : 'Notes de Dégustation'}
          </h2>
          <p className="text-lg text-amber-800 leading-relaxed">{wine.longTasting}</p>
        </div>

        {/* Production Notes */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            {language === 'en' ? 'Production Notes' : 'Notes de Production'}
          </h2>
          <p className="text-lg text-amber-800 leading-relaxed">{wine.productionNotes}</p>
        </div>

        {/* Food Pairings */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            {language === 'en' ? 'Food Pairings' : 'Accords Mets-Vins'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wine.foodPairings.map(pairing => (
              <div
                key={pairing}
                className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center"
              >
                <p className="font-serif font-bold text-amber-900">{pairing}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Catalog */}
        <div className="text-center">
          <Link
            to={`/${language}/catalog`}
            className="inline-block bg-amber-900 text-amber-50 px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
          >
            {language === 'en' ? 'Back to Catalog' : 'Retour au Catalogue'}
          </Link>
        </div>
      </div>
    </div>
  )
}
