'use client'

import { useState } from 'react'
import { Search, Zap, MapPin, Package } from 'lucide-react'

type TabType = 'track' | 'quote' | 'pickup' | 'hubs'

export default function QuickActionWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('track')
  const [trackingRef, setTrackingRef] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [packageType, setPackageType] = useState('')
  const [weight, setWeight] = useState('')
  const [pickupType, setPickupType] = useState('')
  const [address, setAddress] = useState('')
  const [hubSearch, setHubSearch] = useState('')

  const gambiaCities = [
    'Banjul',
    'Serekunda',
    'Brikama',
    'Farafenni',
    'Basse',
    'Kaur',
    'Lamin',
    'Soma',
  ]

  const packageTypes = ['Carton', 'Pallet', 'Bulk FMCG', 'Parcel', 'Mixed Goods']

  const tabs = [
    { id: 'track', label: 'Track Shipment', icon: Search },
    { id: 'quote', label: 'Get a Quote', icon: Zap },
    { id: 'pickup', label: 'Book Pickup', icon: Package },
    { id: 'hubs', label: 'Find Hub', icon: MapPin },
  ] as const

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission based on active tab
    console.log(`Submitted ${activeTab}`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-1 py-4 px-4 font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'border-b-2 border-brand-primary bg-white text-brand-dark'
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Track Shipment Tab */}
          {activeTab === 'track' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Tracking or Order Reference
                </label>
                <input
                  type="text"
                  value={trackingRef}
                  onChange={(e) => setTrackingRef(e.target.value)}
                  placeholder="e.g. MAJ-88204"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-primary-dark transition-all"
              >
                Track Now
              </button>
            </div>
          )}

          {/* Get a Quote Tab */}
          {activeTab === 'quote' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Origin
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select origin city</option>
                    {gambiaCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select destination</option>
                    {gambiaCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Package Type
                  </label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select package type</option>
                    {packageTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-primary-dark transition-all"
              >
                Estimate Rate
              </button>
            </div>
          )}

          {/* Book Pickup Tab */}
          {activeTab === 'pickup' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Pickup Type
                </label>
                <select
                  value={pickupType}
                  onChange={(e) => setPickupType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option value="">Select pickup type</option>
                  <option value="merchant">Merchant / Business</option>
                  <option value="individual">Individual Parcel</option>
                  <option value="bulk">Bulk Collection</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Pickup Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your pickup address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-primary-dark transition-all"
              >
                Schedule Pickup
              </button>
            </div>
          )}

          {/* Drop-off & Hubs Tab */}
          {activeTab === 'hubs' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Search Nearby Hub
                </label>
                <input
                  type="text"
                  value={hubSearch}
                  onChange={(e) => setHubSearch(e.target.value)}
                  placeholder="Enter your location or city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-primary-dark transition-all"
              >
                Find Nearest Hub
              </button>

              {/* Sample Hub Results */}
              <div className="mt-6 space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Banjul Hub</h4>
                    <p className="text-sm text-gray-600">
                      Independence Avenue, Banjul • +220 4223456
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Serekunda Hub</h4>
                    <p className="text-sm text-gray-600">
                      Kotu Junction, Serekunda • +220 4367890
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
