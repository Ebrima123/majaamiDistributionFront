import Link from 'next/link'
import { ArrowRight, Package, Store } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-20 md:pb-32">
      {/* Background with Gradient & Vector Overlays */}
      <div className="absolute inset-0 bg-brand-primary">
        {/* Animated geometric route vectors */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q400,100 700,300 T1400,250"
            stroke="url(#routeGrad)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M50,500 L1200,480 Q1400,470 1440,550"
            stroke="url(#routeGrad)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <circle cx="200" cy="250" r="3" fill="#FF6B00" opacity="0.4" />
          <circle cx="700" cy="300" r="3" fill="#FF6B00" opacity="0.4" />
          <circle cx="1200" cy="400" r="3" fill="#FF6B00" opacity="0.4" />
        </svg>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(255, 107, 0, 0.05) 25%, rgba(255, 107, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 0, 0.05) 75%, rgba(255, 107, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 107, 0, 0.05) 25%, rgba(255, 107, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 0, 0.05) 75%, rgba(255, 107, 0, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '60px 60px',
          }}
        ></div>

        {/* Dark overlay gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/70 via-brand-primary/80 to-brand-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline Badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-brand-accent/30">
          <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
          <span className="text-sm font-semibold text-white">The Gambia • Modern Distribution & Supply Chain</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white tracking-tight max-w-5xl">
          Connecting Products, Powering Businesses, Moving a Better Tomorrow.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-100 mb-16 max-w-3xl leading-relaxed font-light">
          We build reliable distribution networks and wholesale supply channels that bridge manufacturers, retailers, and communities across The Gambia.
        </p>

        {/* Dual Action Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Card 1: For Manufacturers & Importers */}
          <Link
            href="/partner"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:border-brand-accent/60"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-brand-accent/20 rounded-xl group-hover:bg-brand-accent/30 transition-colors">
                <Package className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">Distribute Your Brand</h3>
            </div>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Access retail shelves, wholesale partners, and structured direct-to-store distribution across The Gambia.
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-accent">For Manufacturers & Importers</span>
              <button className="px-6 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-dark transition-all flex items-center gap-2 group/btn">
                Apply for Distribution
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Link>

          {/* Card 2: For Retailers & Wholesalers */}
          <Link
            href="/products"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:border-white/40"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                <Store className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">Source Wholesale Inventory</h3>
            </div>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Dependable bulk supply, steady inventory flow, and transparent trade terms from trusted suppliers.
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-300">For Retailers & Wholesalers</span>
              <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-primary transition-all flex items-center gap-2 group/btn">
                Open Wholesale Account
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-40"></div>
    </section>
  )
}
