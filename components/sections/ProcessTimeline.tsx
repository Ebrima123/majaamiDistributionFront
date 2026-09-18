'use client'

import {
  Search,
  Workflow,
  Send,
  CheckCircle2,
} from 'lucide-react'

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Source',
      description: 'Identify and source quality products from reliable suppliers',
      icon: Search,
    },
    {
      number: '02',
      title: 'Coordinate',
      description: 'Plan and coordinate logistics and supply chain operations',
      icon: Workflow,
    },
    {
      number: '03',
      title: 'Distribute',
      description: 'Move products efficiently to business partners and markets',
      icon: Send,
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Ensure reliable delivery and customer satisfaction',
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="section-padding bg-brand-light">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">
            Distribution Process
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange to-transparent"></div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 text-center border border-brand-gray-100 relative z-10">
                    <div className="w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-brand-orange" />
                    </div>
                    <h3 className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-2">
                      {step.number}
                    </h3>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="space-y-6 relative pl-6">
            {/* Timeline Line */}
            <div className="absolute left-2 top-0 bottom-0 w-1 bg-brand-orange"></div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="absolute -left-6 top-0 w-9 h-9 bg-brand-orange rounded-full flex items-center justify-center border-4 border-white">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-brand-gray-100">
                    <h3 className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-1">
                      Step {step.number}
                    </h3>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
