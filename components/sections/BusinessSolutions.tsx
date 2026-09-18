import Link from 'next/link'
import { Package, Store, Handshake, ArrowRight } from 'lucide-react'

export default function BusinessSolutions() {
  const solutions = [
    {
      icon: Package,
      title: 'For Brands',
      description: 'Expand your reach with our nationwide distribution network and retail partnerships.',
      href: '/services#distribution',
    },
    {
      icon: Store,
      title: 'For Retailers',
      description: 'Access diverse products and wholesale suppliers through our integrated platform.',
      href: '/products',
    },
    {
      icon: Handshake,
      title: 'For Business Partners',
      description: 'Strategic partnerships to grow your business and scale your operations.',
      href: '/partner',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
            Business Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-2">
            We Work With Everyone
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Link
                key={index}
                href={solution.href}
                className="group card card-hover"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-navy mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-brand-orange font-medium group-hover:gap-2 gap-1 transition-all">
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
