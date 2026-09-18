import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide mb-4">
              About Majaami
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Building Africa's Modern Distribution Network
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Majaami Distribution is more than a logistics company. We're building a modern, efficient, technology-driven distribution network that connects products with businesses and communities.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To create an efficient distribution ecosystem that connects businesses, drives economic growth, and strengthens supply chains across The Gambia and beyond.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading distribution platform that enables businesses to scale, innovate, and compete on a global stage.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-navy opacity-10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-brand-orange to-brand-navy opacity-20 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-brand-navy font-bold text-6xl">M</p>
                <p className="text-brand-navy font-semibold mt-4">Majaami Distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
