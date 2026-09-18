import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle2, Target, Eye } from 'lucide-react'

export default function About() {
  const values = [
    {
      title: 'Reliability',
      description: 'Consistent and dependable service every time',
      icon: CheckCircle2,
    },
    {
      title: 'Integrity',
      description: 'Honest and transparent in all our dealings',
      icon: CheckCircle2,
    },
    {
      title: 'Innovation',
      description: 'Continuously improving with modern solutions',
      icon: CheckCircle2,
    },
    {
      title: 'Efficiency',
      description: 'Optimized operations for maximum impact',
      icon: CheckCircle2,
    },
    {
      title: 'Partnership',
      description: 'Growing together with our business partners',
      icon: CheckCircle2,
    },
    {
      title: 'Sustainable Growth',
      description: 'Building long-term value for all stakeholders',
      icon: CheckCircle2,
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Majaami Distribution</h1>
              <p className="text-xl text-gray-300">
                We&apos;re building Africa&apos;s modern distribution network, connecting businesses, products, and communities with innovative logistics solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Majaami Distribution was founded with a clear vision: to create a modern, efficient, technology-driven distribution network that transforms how businesses access products and manage supply chains across The Gambia.
                </p>
                <p>
                  We recognized the need for a distribution platform that combines operational excellence with innovation. A company that doesn&apos;t just move products, but enables business growth and strengthens entire ecosystems.
                </p>
                <p>
                  Today, we&apos;re committed to building the infrastructure and capabilities that will position The Gambia as a hub for modern logistics and distribution across West Africa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-brand-light">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Target className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To create an efficient distribution ecosystem that connects businesses, drives economic growth, and strengthens supply chains across The Gambia and beyond. We enable businesses to scale, compete, and thrive in a connected marketplace.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <Eye className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To become the leading distribution platform that enables businesses to scale, innovate, and compete on a global stage. We aspire to build Africa&apos;s most trusted and modern logistics network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from daily operations to strategic decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="card">
                    <Icon className="w-10 h-10 text-brand-orange mb-4" />
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Long-term Vision */}
        <section className="section-padding bg-brand-light">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Long-Term Ambition</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We&apos;re building an interconnected ecosystem:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Distribution</h4>
                    <p className="text-gray-700">Create efficient product distribution networks</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Agriculture</h4>
                    <p className="text-gray-700">Support and enhance agricultural productivity</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Logistics</h4>
                    <p className="text-gray-700">Build world-class logistics infrastructure</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Technology</h4>
                    <p className="text-gray-700">Leverage innovation for operational excellence</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Reinvestment</h4>
                    <p className="text-gray-700">Create sustainable growth and economic value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
