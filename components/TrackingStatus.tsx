'use client'

import { CheckCircle, Circle, Truck, MapPin, Clock } from 'lucide-react'

interface TrackingMilestone {
  id: string
  title: string
  description: string
  timestamp?: string
  status: 'completed' | 'active' | 'pending'
  location?: string
}

interface TrackingData {
  trackingNumber: string
  status: 'processing' | 'in_transit' | 'out_for_delivery' | 'delivered'
  origin: string
  destination: string
  estimatedArrival: string
  milestones: TrackingMilestone[]
}

interface TrackingStatusProps {
  data: TrackingData
}

export default function TrackingStatus({ data }: TrackingStatusProps) {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'in_transit':
        return 'bg-amber-100 text-amber-800 border-amber-300'
      case 'out_for_delivery':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Processing'
      case 'in_transit':
        return 'In Transit'
      case 'out_for_delivery':
        return 'Out for Delivery'
      case 'delivered':
        return 'Delivered'
      default:
        return 'Unknown'
    }
  }

  const completedCount = data.milestones.filter((m) => m.status === 'completed').length

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <div className="bg-white rounded-lg border-2 border-brand-primary shadow-lg p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Tracking Number
            </h2>
            <p className="text-3xl font-black text-brand-dark">{data.trackingNumber}</p>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-sm ${getStatusBadgeColor(
                data.status
              )}`}
            >
              <CheckCircle className="w-5 h-5" />
              {getStatusLabel(data.status)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
          {/* Origin */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Origin
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <p className="text-lg font-semibold text-brand-dark">{data.origin}</p>
            </div>
          </div>

          {/* Destination */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Destination
            </p>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <p className="text-lg font-semibold text-brand-dark">{data.destination}</p>
            </div>
          </div>

          {/* Estimated Arrival */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Estimated Arrival
            </p>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <p className="text-lg font-semibold text-brand-dark">{data.estimatedArrival}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <h3 className="text-xl font-bold text-brand-dark mb-8">Shipment Journey</h3>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
            <div
              className="absolute top-1/2 left-0 h-1 bg-brand-primary -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${(completedCount / data.milestones.length) * 100}%`,
              }}
            ></div>
            <div className="relative flex justify-between">
              {data.milestones.map((milestone, index) => (
                <div
                  key={milestone.id}
                  className="flex flex-col items-center"
                  style={{
                    width: `${100 / data.milestones.length}%`,
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-4 transition-all ${
                      milestone.status === 'completed'
                        ? 'bg-brand-primary border-brand-primary'
                        : milestone.status === 'active'
                        ? 'bg-white border-brand-primary animate-pulse'
                        : 'bg-white border-gray-300'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-6">
          {data.milestones.map((milestone, index) => (
            <div key={milestone.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                {milestone.status === 'completed' ? (
                  <CheckCircle className="w-8 h-8 text-brand-primary flex-shrink-0" />
                ) : milestone.status === 'active' ? (
                  <Circle className="w-8 h-8 text-brand-primary border-2 border-brand-primary flex-shrink-0 animate-pulse" />
                ) : (
                  <Circle className="w-8 h-8 text-gray-300 border-2 border-gray-300 flex-shrink-0" />
                )}
                {index < data.milestones.length - 1 && (
                  <div
                    className={`w-1 h-12 my-2 ${
                      milestone.status === 'completed' ? 'bg-brand-primary' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>

              <div className="flex-1 pt-1">
                <h4
                  className={`font-semibold mb-1 ${
                    milestone.status === 'pending' ? 'text-gray-500' : 'text-brand-dark'
                  }`}
                >
                  {milestone.title}
                </h4>
                <p className="text-sm text-gray-600">{milestone.description}</p>
                {milestone.location && (
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {milestone.location}
                  </p>
                )}
                {milestone.timestamp && (
                  <p className="text-xs text-gray-500 mt-1">{milestone.timestamp}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
