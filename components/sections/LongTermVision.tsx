import { Zap, TrendingUp, Sprout, Globe, ArrowRight } from 'lucide-react'

interface FlywheelStep {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function LongTermVision() {
  const steps: FlywheelStep[] = [
    {
      number: 1,
      title: 'Distribution Engine',
      description: 'Start with disciplined product distribution to generate sustainable commercial cash flow and market presence.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      number: 2,
      title: 'Infrastructure & Logistics',
      description: 'Reinvest operating margins into owned transport, cold storage, and depot assets across The Gambia.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      number: 3,
      title: 'Agriculture & Food Security',
      description: 'Channel distribution profits into commercial agriculture and local production, creating a self-sustaining food supply chain.',
      icon: <Sprout className="w-8 h-8" />,
    },
    {
      number: 4,
      title: 'Digital Platforms & Alfudi',
      description: 'Leverage tech and our e-commerce arm, Alfudi, to connect producers and consumers seamlessly across regions.',
      icon: <Globe className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">
            Building a Resilient, Diversified African Enterprise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our strategic roadmap connects immediate commercial success with long-term ecosystem building—creating sustainable growth across distribution, logistics, agriculture, and digital commerce.
          </p>
        </div>

        {/* Growth Flywheel */}
        <div className="mb-16">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-accent to-transparent"></div>

              {/* Steps Grid */}
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col">
                    {/* Step Card */}
                    <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-brand-accent p-6 transition-all duration-300 hover:shadow-lg mb-8">
                      {/* Icon & Number */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                          {step.icon}
                        </div>
                        <span className="text-sm font-bold text-brand-accent uppercase tracking-wider">Step {step.number}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-brand-primary mb-3">{step.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Arrow (except for last step) */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center mb-4">
                        <div className="text-brand-accent">
                          <ArrowRight className="w-6 h-6 transform rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={step.number}>
                <div className="flex gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent font-bold text-sm flex-shrink-0">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && <div className="w-1 h-12 bg-brand-accent/30 mt-2"></div>}
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-brand-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Callout */}
        <div className="bg-brand-primary border-2 border-brand-accent rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed">
            Our philosophy is patient capital: moving products today to fund productive agriculture, logistics assets, and digital commerce tomorrow.
          </p>
          <div className="h-1 w-16 bg-brand-accent rounded-full mx-auto mb-6"></div>
          <p className="text-gray-100 text-sm md:text-base max-w-2xl mx-auto">
            This approach transforms Majaami from a distribution intermediary into a long-term ecosystem builder—creating durable competitive advantages and shared prosperity across The Gambia's supply chains.
          </p>
        </div>

        {/* Supporting Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
          <div>
            <div className="text-3xl font-black text-brand-accent mb-3">2-5 Years</div>
            <p className="text-sm text-gray-600">
              Establish dominant distribution position and reinvest in logistics infrastructure.
            </p>
          </div>
          <div>
            <div className="text-3xl font-black text-brand-accent mb-3">5-10 Years</div>
            <p className="text-sm text-gray-600">
              Launch commercial agriculture partnerships and food production initiatives.
            </p>
          </div>
          <div>
            <div className="text-3xl font-black text-brand-accent mb-3">10+ Years</div>
            <p className="text-sm text-gray-600">
              Build integrated ecosystem spanning production, logistics, and digital commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
