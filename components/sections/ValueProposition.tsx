import {
  CheckCircle2,
  Zap,
  Network,
  Rocket,
} from 'lucide-react'

export default function ValueProposition() {
  const benefits = [
    {
      id: 1,
      icon: CheckCircle2,
      title: 'Reliable Operations',
      description: 'Consistent, dependable service you can count on',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Efficient Delivery',
      description: 'Fast and optimized distribution to your destinations',
    },
    {
      id: 3,
      icon: Network,
      title: 'Business Connectivity',
      description: 'Connect seamlessly with partners and markets',
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Modern Solutions',
      description: 'Technology-driven approaches for tomorrow\'s challenges',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Distribution Built for Growth
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide distribution solutions that are as ambitious as your business. Reliable, efficient, and built to scale.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-orange bg-opacity-10">
                    <Icon className="h-6 w-6 text-brand-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
