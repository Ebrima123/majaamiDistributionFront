import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container section-padding">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-brand-navy font-bold text-lg">M</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none">Majaami</p>
                <p className="text-xs text-brand-orange font-semibold">Distribution</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Modern distribution and logistics solutions connecting businesses, products, and communities across The Gambia and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#distribution" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Distribution
                </Link>
              </li>
              <li>
                <Link href="/services#logistics" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Logistics & Delivery
                </Link>
              </li>
              <li>
                <Link href="/services#wholesale" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Wholesale Supply
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">The Gambia</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@majaami.com" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  hello@majaami.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <a href="tel:+22220000000" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Majaami Distribution. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
