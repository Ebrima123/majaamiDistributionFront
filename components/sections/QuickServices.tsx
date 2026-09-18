import Link from 'next/link'
import {
  Package,
  Truck,
  Boxes,
  Users,
  ArrowRight,
} from 'lucide-react'

export default function QuickServices() {
  const services = [
    {
      id: 1,
      icon: Package,
      title: 'Product Distribution',
      description: 'Connect your products to businesses and markets across The Gambia',
      href: '/services#distribution',
    },
    {
      id: 2,
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'Reliable and efficient delivery solutions for your supply chain',
      href: '/services#logistics',
    },
    {
      id: 3,
      icon: Boxes,
      title: 'Wholesale Supply',
      description: 'Bulk product availability for retail partners and businesses',
      href: '/services#wholesale',
    },
    {
      id: 4,
      icon: Users,
      title: 'Business Partnerships',
      description: 'Strategic partnerships to grow your reach and capabilities',
      href: '/services#partnerships',
    },
  ]

  return (
    <section className="section-padding bg-brand-light">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-2">
            Quick Service Access
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group card card-hover"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-brand-orange font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
