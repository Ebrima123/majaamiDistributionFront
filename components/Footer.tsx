'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Newsletter Section */}
          <div className="mb-16 pb-16 border-b border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-black text-brand-white mb-2">Stay Updated</h3>
                <p className="text-gray-400">Subscribe to our dispatch newsletter for industry insights and updates.</p>
              </div>
              <form className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-brand-slate text-white rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-primary text-brand-dark font-bold rounded-md hover:bg-brand-primary-dark transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Services */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-primary">SERVICES</h4>
              <ul className="space-y-3">
                <li><Link href="/services#distribution" className="text-gray-300 hover:text-brand-primary transition-colors">Product Distribution</Link></li>
                <li><Link href="/services#logistics" className="text-gray-300 hover:text-brand-primary transition-colors">Logistics & Delivery</Link></li>
                <li><Link href="/services#wholesale" className="text-gray-300 hover:text-brand-primary transition-colors">Wholesale Supply</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-brand-primary transition-colors">Supply Chain</Link></li>
              </ul>
            </div>

            {/* Enterprise Solutions */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-primary">ENTERPRISE</h4>
              <ul className="space-y-3">
                <li><Link href="/partner" className="text-gray-300 hover:text-brand-primary transition-colors">For Brands</Link></li>
                <li><Link href="/products" className="text-gray-300 hover:text-brand-primary transition-colors">For Retailers</Link></li>
                <li><Link href="/partner" className="text-gray-300 hover:text-brand-primary transition-colors">Business Partners</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">API Integration</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-primary">COMPANY</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-brand-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">News</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h4 className="font-black text-lg mb-6 text-brand-primary">LEGAL</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">Compliance</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-brand-primary transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-black text-lg">M</span>
              </div>
              <span className="font-black text-lg">MAJAAMI DISTRIBUTION</span>
            </div>
            <p className="text-xs text-gray-400">© {currentYear} All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+22220000000" className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition">
              <Phone className="w-4 h-4" />
              <span>+220</span>
            </a>
            <a href="mailto:hello@majaami.com" className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition">
              <Mail className="w-4 h-4" />
              <span>hello@majaami.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-brand-slate hover:bg-brand-primary hover:text-brand-dark rounded-lg flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-slate hover:bg-brand-primary hover:text-brand-dark rounded-lg flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-slate hover:bg-brand-primary hover:text-brand-dark rounded-lg flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
