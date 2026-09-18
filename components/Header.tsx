'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, Phone, MapPin } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Ship & Deliver', href: '/services' },
    { label: 'Wholesale & Supply', href: '/products' },
    { label: 'Business Solutions', href: '/partner' },
    { label: 'About Us', href: '/about' },
  ]

  return (
    <header className="bg-brand-white sticky top-0 z-50 border-b border-brand-border">
      {/* Utility Top Bar */}
      <div className="bg-brand-dark text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Language: English</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Coverage: The Gambia & West Africa</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+22220000000" className="flex items-center gap-2 hover:text-brand-primary transition">
                <Phone className="w-4 h-4" />
                <span>+220 Need Help?</span>
              </a>
              <Link href="#" className="hover:text-brand-primary transition">
                Partner Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-brand-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center">
                <span className="text-brand-primary font-black text-xl">M</span>
              </div>
              <div>
                <p className="font-black text-lg text-brand-dark leading-none">MAJAAMI</p>
                <p className="text-xs font-bold text-brand-primary">DISTRIBUTION</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-brand-dark font-semibold text-sm hover:text-brand-primary transition-colors duration-300 rounded-md hover:bg-brand-light-gray"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Link
                href="/partner"
                className="btn-primary"
              >
                Open a Business Account
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-brand-light-gray rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brand-dark" />
              ) : (
                <Menu className="w-6 h-6 text-brand-dark" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 space-y-2 border-t border-brand-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-brand-dark font-semibold text-sm hover:bg-brand-light-gray rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/partner"
                className="block w-full px-4 py-3 text-center bg-brand-primary text-brand-dark font-bold rounded-lg hover:bg-brand-primary-dark transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Open a Business Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
