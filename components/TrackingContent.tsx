'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import TrackingStatus from '@/components/TrackingStatus'
import { Search, AlertCircle } from 'lucide-react'

// Mock tracking data
const mockTrackingDatabase: Record<string, any> = {
  'MAJ-1001': {
    trackingNumber: 'MAJ-1001',
    status: 'delivered',
    origin: 'Banjul Central Depot',
    destination: 'Serekunda Retail Hub',
    estimatedArrival: 'Delivered - 2026-09-15',
    milestones: [
      {
        id: '1',
        title: 'Order Processed',
        description: 'Your shipment has been received and processed',
        timestamp: 'Sept 10, 2026 - 09:30 AM',
        location: 'Banjul Central Depot',
        status: 'completed',
      },
      {
        id: '2',
        title: 'Received at Central Depot',
        description: 'Package sorted and prepared for dispatch',
        timestamp: 'Sept 11, 2026 - 08:00 AM',
        location: 'Banjul Central Depot',
        status: 'completed',
      },
      {
        id: '3',
        title: 'In Transit via Coastal Corridor',
        description: 'Shipment en route to destination',
        timestamp: 'Sept 12, 2026 - 10:30 AM',
        location: 'Coastal Route - Brikama',
        status: 'completed',
      },
      {
        id: '4',
        title: 'Out for Delivery',
        description: 'Package with delivery driver',
        timestamp: 'Sept 15, 2026 - 08:00 AM',
        location: 'Serekunda Retail Hub',
        status: 'completed',
      },
      {
        id: '5',
        title: 'Delivered',
        description: 'Awaiting delivery completion',
        timestamp: '',
        location: 'Basse Santa Su Market',
        status: 'pending',
      },
    ],
  },
  'MAJ-2024': {
    trackingNumber: 'MAJ-2024',
    status: 'in_transit',
    origin: 'Banjul Central Depot',
    destination: 'Kaur Distribution Center',
    estimatedArrival: 'Sept 19, 2026',
    milestones: [
      {
        id: '1',
        title: 'Order Processed',
        description: 'Your shipment has been received and processed',
        timestamp: 'Sept 17, 2026 - 10:00 AM',
        location: 'Banjul Central Depot',
        status: 'completed',
      },
      {
        id: '2',
        title: 'Received at Central Depot',
        description: 'Package sorted and prepared for dispatch',
        timestamp: 'Sept 17, 2026 - 11:30 AM',
        location: 'Banjul Central Depot',
        status: 'completed',
      },
      {
        id: '3',
        title: 'In Transit via Western Route',
        description: 'Shipment en route to destination',
        timestamp: 'Sept 18, 2026 - 07:00 AM',
        location: 'Brikama - Kaur Road',
        status: 'active',
      },
      {
        id: '4',
        title: 'Out for Delivery',
        description: 'Package arriving at destination',
        timestamp: '',
        location: 'Kaur Distribution Center',
        status: 'pending',
      },
      {
        id: '5',
        title: 'Delivered',
        description: 'Awaiting delivery completion',
        timestamp: '',
        location: 'Kaur Distribution Center',
        status: 'pending',
      },
    ],
  },
}

export default function TrackingContent() {
  const searchParams = useSearchParams()
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingData, setTrackingData] = useState<any>(null)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (ref) {
      setTrackingNumber(ref)
      handleTrack(ref)
    }
  }, [searchParams])

  const handleTrack = (ref?: string) => {
    const refToSearch = ref || trackingNumber.toUpperCase().trim()

    if (!refToSearch) {
      setError('Please enter a tracking number')
      return
    }

    setSearched(true)
    setError('')

    const data = mockTrackingDatabase[refToSearch]
    if (data) {
      setTrackingData(data)
    } else {
      setError(
        `No shipment found for "${refToSearch}". Try "MAJ-1001", "MAJ-DEMO", or "MAJ-2024" for demo data.`
      )
      setTrackingData(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleTrack()
  }

  return (
    <main className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Track Your Shipment</h1>
          <p className="text-gray-300 max-w-2xl">
            Enter your tracking number to get real-time updates on your delivery.
          </p>
        </div>
      </section>

      {/* Tracking Form & Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-3">
                Enter Tracking Number or Order Reference
              </label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="e.g. MAJ-1001 or MAJ-DEMO"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-brand-primary text-brand-dark font-bold rounded-lg hover:bg-brand-primary-dark transition-all"
                >
                  Track
                </button>
              </div>
            </div>

            {/* Help Text */}
            <p className="text-xs text-gray-500">
              Demo tracking numbers: <span className="font-mono font-semibold">MAJ-1001</span>,{' '}
              <span className="font-mono font-semibold">MAJ-DEMO</span>,{' '}
              <span className="font-mono font-semibold">MAJ-2024</span>
            </p>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-800">Tracking Not Found</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Tracking Results */}
        {trackingData && <TrackingStatus data={trackingData} />}

        {/* No Search Yet */}
        {!searched && !trackingData && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Track Your Shipment
            </h2>
            <p className="text-gray-600">
              Enter a tracking number above to see real-time delivery status and milestones.
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">Real-Time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications as your shipment moves through our distribution network.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">Full Visibility</h3>
              <p className="text-gray-600">
                Track your package from Banjul to any destination across The Gambia with detailed location updates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">Support</h3>
              <p className="text-gray-600">
                Need help? Contact our support team at +220 or email hello@majaami.com for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
