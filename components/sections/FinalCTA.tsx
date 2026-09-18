import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Moving a Better Tomorrow
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            Join us in building the future of distribution and logistics across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-all duration-300 group"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
