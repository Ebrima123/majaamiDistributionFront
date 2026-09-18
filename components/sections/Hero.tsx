import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="container section-padding">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Products.{' '}
            <span className="text-brand-orange">Our Distribution Network.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Majaami Distribution connects your products to brands, retailers, and business partners across The Gambia with modern logistics solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300 group"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-300 group"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-brand-orange opacity-3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
