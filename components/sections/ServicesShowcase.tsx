import Link from 'next/link'
import {
  Package,
  Truck,
  Boxes,
  LineChart,
  Users,
  Zap,
  ArrowRight,
} from 'lucide-react'

export default function ServicesShowcase() {
  const services = [
    {
      id: 1,
      icon: Package,
      title: 'Product Distribution',
      description: 'Move your products efficiently to retail partners and businesses across The Gambia.',
    },
    {
      id: 2,
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'End-to-end delivery solutions with real-time tracking and reliability.',
    },
    {
      id: 3,
      icon: Boxes,
      title: 'Wholesale Supply',
      description: 'Bulk product availability and warehouse management for businesses.',
    },
    {
      id: 4,
      icon: LineChart,
      title: 'Supply Chain Coordination',
      description: 'Optimize your supply chain with our coordination services.',
    },
    {
      id: 5,
      icon: Users,
      title: 'Business Partnerships',
      description: 'Strategic alliances to expand your market reach and capabilities.',
    },
    {
      id: 6,
      icon: Zap,
      title: 'Technology-Driven Distribution',
      description: 'Modern solutions powered by innovative technology and data.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide mb-4">
            Comprehensive Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From distribution to partnerships, we provide complete logistics solutions for modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="card card-hover group">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-brand-orange font-medium text-sm group-hover:gap-2 gap-1 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
