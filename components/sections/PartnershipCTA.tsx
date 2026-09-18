import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PartnershipCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-navy to-blue-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build the Future of Distribution Together
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Partner with Majaami Distribution to expand your reach, connect with businesses, and support a stronger distribution network across The Gambia.
          </p>

          <Link
            href="/partner"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300 group"
          >
            Become a Partner
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
