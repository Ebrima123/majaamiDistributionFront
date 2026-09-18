import { Package, Boxes, Truck, Users, Zap } from 'lucide-react'

interface Pillar {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function StrategicPillars() {
  const pillars: Pillar[] = [
    {
      id: 1,
      title: 'Product Distribution',
      description:
        'Supplying quality FMCG and commercial products to retailers, stores, and regional markets across The Gambia.',
      icon: <Package className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Wholesale Supply',
      description:
        'Reliable, bulk-volume supply chains for businesses, institutions, and resale partners with consistent quality.',
      icon: <Boxes className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Logistics & Fleet',
      description:
        'Developing specialized transport, warehousing, and route optimization across The Gambia and beyond.',
      icon: <Truck className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Strategic Partnerships',
      description:
        'Long-term commercial alliances with manufacturers, local producers, and retail chains for mutual growth.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 5,
      title: 'Technology & Systems',
      description:
        'Digital inventory tracking, data-driven route planning, and operational automation for efficiency.',
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-accent/10 rounded-full mb-6">
            <span className="text-sm font-bold text-brand-accent uppercase tracking-wider">Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            Integrated Solutions for Modern Commerce
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A phased, disciplined approach to moving goods and building long-term commercial assets across The Gambia.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-white rounded-xl border-2 border-gray-100 hover:border-brand-accent/30 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/10"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-xl group-hover:bg-brand-accent/20 transition-colors">
                <div className="text-brand-accent">{pillar.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-primary mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Integration Message */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Integrated & Scalable
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our five pillars work together as an integrated ecosystem. Whether you&apos;re a manufacturer looking for distribution, a retailer seeking wholesale supply, or a business needing logistics support—Majaami delivers coordinated solutions backed by technology and commercial discipline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">100+</div>
                <p className="text-sm text-gray-600">Active Distribution Partners</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">15+</div>
                <p className="text-sm text-gray-600">Strategic Locations & Hubs</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">24/7</div>
                <p className="text-sm text-gray-600">Operational Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
