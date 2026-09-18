import QuickActionWidget from '@/components/QuickActionWidget'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-32 md:pb-48">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        {/* Warehouse/Logistics Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>

        {/* Dark Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/60 to-brand-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-1">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white tracking-tight">
            Reliable Distribution & Logistics Across The Gambia
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-light">
            Connecting suppliers, local retailers, and regional markets with fast,
            dependable freight and wholesale distribution.
          </p>
        </div>
      </div>

      {/* Quick Action Widget - Floating Card */}
      <div className="relative z-10 -mb-24 md:-mb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuickActionWidget />
        </div>
      </div>
    </section>
  )
}
