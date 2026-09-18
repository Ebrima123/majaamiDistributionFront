import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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

export default function Services() {
  const services = [
    {
      id: 'distribution',
      icon: Package,
      title: 'Product Distribution',
      description: 'Move your products efficiently to retail partners and businesses across The Gambia.',
      details: [
        'Nationwide distribution network',
        'Product pickup and delivery',
        'Retail partner connections',
        'Inventory management support',
        'Real-time tracking capabilities',
      ],
      targetAudience: 'Manufacturers, wholesalers, and brand owners',
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'End-to-end delivery solutions with real-time tracking and reliability.',
      details: [
        'Full-service logistics management',
        'Real-time package tracking',
        'Flexible delivery schedules',
        'Professional courier service',
        'Reliable last-mile delivery',
      ],
      targetAudience: 'Businesses requiring regular shipments and deliveries',
    },
    {
      id: 'wholesale',
      icon: Boxes,
      title: 'Wholesale Supply',
      description: 'Bulk product availability and warehouse management for businesses.',
      details: [
        'Bulk product sourcing',
        'Warehouse storage solutions',
        'Just-in-time delivery',
        'Inventory optimization',
        'Wholesale pricing',
      ],
      targetAudience: 'Retail stores and bulk product buyers',
    },
    {
      id: 'coordination',
      icon: LineChart,
      title: 'Supply Chain Coordination',
      description: 'Optimize your supply chain with our coordination services.',
      details: [
        'Supply chain analysis',
        'Process optimization',
        'Vendor coordination',
        'Demand forecasting support',
        'Performance monitoring',
      ],
      targetAudience: 'Large enterprises with complex supply chains',
    },
    {
      id: 'partnerships',
      icon: Users,
      title: 'Business Partnerships',
      description: 'Strategic alliances to expand your market reach and capabilities.',
      details: [
        'Distribution partnerships',
        'Co-marketing opportunities',
        'Strategic alliances',
        'Revenue sharing models',
        'Joint business development',
      ],
      targetAudience: 'Growing businesses seeking market expansion',
    },
    {
      id: 'technology',
      icon: Zap,
      title: 'Technology-Driven Distribution',
      description: 'Modern solutions powered by innovative technology and data.',
      details: [
        'Digital ordering platform',
        'Analytics and reporting',
        'Automated workflows',
        'API integrations',
        'Data-driven insights',
      ],
      targetAudience: 'Tech-forward businesses modernizing operations',
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Logistics Solutions
              </h1>
              <p className="text-xl text-gray-300">
                From distribution to partnerships, we provide complete logistics solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-20"
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                        !isEven ? 'lg:grid-flow-dense' : ''
                      }`}
                    >
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                            <Icon className="w-7 h-7 text-brand-orange" />
                          </div>
                          <div>
                            <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
                              Service
                            </p>
                            <h2 className="text-3xl font-bold text-brand-navy">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-8">
                          <h3 className="font-semibold text-brand-navy mb-4">
                            What&apos;s Included:
                          </h3>
                          <ul className="space-y-2">
                            {service.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-3 text-gray-700"
                              >
                                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8">
                          <h3 className="font-semibold text-brand-navy mb-2">
                            Target Audience:
                          </h3>
                          <p className="text-gray-600">
                            {service.targetAudience}
                          </p>
                        </div>

                        <Link
                          href="/partner"
                          className="inline-flex items-center gap-2 btn-primary"
                        >
                          Inquire About This Service
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Visual */}
                      <div>
                        <div className="bg-brand-light rounded-2xl h-80 flex items-center justify-center">
                          <div className="text-center">
                            <Icon className="w-24 h-24 text-brand-orange opacity-20 mx-auto mb-4" />
                            <p className="text-brand-navy font-semibold">
                              {service.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {index < services.length - 1 && (
                      <div className="my-16 border-t border-brand-gray-100"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-brand-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Ready to Transform Your Distribution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let&apos;s discuss which service is the best fit for your business and how we can help you scale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
