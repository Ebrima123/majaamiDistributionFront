'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Partner With Us', href: '/partner' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-brand-gray-100 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
              <span className="text-brand-orange font-bold text-lg">M</span>
            </div>
            <div>
              <p className="font-bold text-brand-navy text-lg leading-none">Majaami</p>
              <p className="text-xs text-brand-orange font-semibold">Distribution</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-brand-dark font-medium text-sm hover:text-brand-orange transition-colors duration-300 rounded-lg hover:bg-brand-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-brand-light rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-brand-navy" />
            ) : (
              <Menu className="w-6 h-6 text-brand-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-brand-dark font-medium text-sm hover:bg-brand-light rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-4 py-3 text-center bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
