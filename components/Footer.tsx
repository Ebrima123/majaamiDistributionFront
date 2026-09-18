'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - 4 Columns */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: About Majaami */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-lg">M</span>
                </div>
                <span className="font-black text-lg">MAJAAMI</span>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Moving a Better Tomorrow. Majaami Distribution connects suppliers, retailers, and markets across The Gambia with dependable logistics and wholesale solutions.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Banjul, The Gambia</span>
              </div>
            </div>

            {/* Column 2: Commercial Services */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-accent">COMMERCIAL SERVICES</h4>
              <ul className="space-y-3">
                <li><Link href="/services#distribution" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Product Distribution</Link></li>
                <li><Link href="/services#logistics" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Route Delivery</Link></li>
                <li><Link href="/services#wholesale" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Wholesale Supply</Link></li>
                <li><Link href="/contact" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">B2B Inquiries</Link></li>
              </ul>
            </div>

            {/* Column 3: The Ecosystem */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-accent">THE ECOSYSTEM</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Agriculture Initiatives</Link></li>
                <li><Link href="#" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Alfudi E-commerce</Link></li>
                <li><Link href="#" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Supply Chain Tech</Link></li>
                <li><Link href="/about" className="text-gray-200 hover:text-brand-accent transition-colors text-sm">Sustainability</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & B2B */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-accent">CONTACT & B2B</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+22220000000" className="flex items-center gap-2 text-gray-200 hover:text-brand-accent transition text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+220 B2B Desk</span>
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:b2b@majaami.com" className="flex items-center gap-2 text-gray-200 hover:text-brand-accent transition text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>b2b@majaami.com</span>
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-1">Headquarters</p>
                  <div className="flex items-start gap-2 text-gray-200 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Banjul Central Depot<br />The Gambia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-8 pb-8 border-t border-blue-800">
            <a href="#" className="w-10 h-10 bg-brand-accent hover:bg-brand-accent-dark rounded-lg flex items-center justify-center transition-colors mt-4">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-accent hover:bg-brand-accent-dark rounded-lg flex items-center justify-center transition-colors mt-4">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-accent hover:bg-brand-accent-dark rounded-lg flex items-center justify-center transition-colors mt-4">
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 py-6">
          <p className="text-center text-gray-300 text-sm">
            © {currentYear} Majaami Distribution. Moving a Better Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  )
}
