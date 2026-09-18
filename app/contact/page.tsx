'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-300">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-brand-navy mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Location */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-navy mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600">The Gambia</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-navy mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:hello@majaami.com"
                          className="text-brand-orange hover:underline"
                        >
                          hello@majaami.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-navy mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+22220000000"
                          className="text-brand-orange hover:underline"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-navy mb-1">
                          WhatsApp
                        </h3>
                        <a
                          href="https://wa.me/220XXXXXXXXX"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-orange hover:underline"
                        >
                          Message us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-semibold text-brand-navy mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-brand-orange text-white rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-brand-orange text-white rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-brand-orange text-white rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-brand-navy mb-8">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700 mb-2">
                      We've received your message and will be in touch shortly.
                    </p>
                    <p className="text-green-600 text-sm">
                      Check your email for further communication.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="+220 XXX XXXX"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="What is this about?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={8}
                        className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary text-lg py-4"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-brand-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Interested in Partnership?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Head over to our partnership page to learn more about opportunities to grow with us.
              </p>
              <a
                href="/partner"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                Explore Partnerships
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
