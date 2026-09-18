'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle2, Zap, Users, TrendingUp } from 'lucide-react'

export default function Partner() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const partnershipTypes = [
    'Product Distribution',
    'Logistics Partnership',
    'Wholesale Supply',
    'Business Partnership',
    'Technology Integration',
    'Other',
  ]

  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Reliable Operations',
      description: 'Access to our established distribution network',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunity',
      description: 'Scale your business with our support',
    },
    {
      icon: Users,
      title: 'Strategic Partnership',
      description: 'Collaborative approach to mutual success',
    },
    {
      icon: Zap,
      title: 'Modern Solutions',
      description: 'Technology-driven logistics and systems',
    },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.businessName) {
      alert('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let&apos;s Build Together
              </h1>
              <p className="text-xl text-gray-300">
                Partner with Majaami Distribution to expand your reach, connect with businesses, and support a stronger distribution network across The Gambia.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Partnership Benefits
              </h2>
              <p className="text-lg text-gray-600">
                When you partner with us, you gain access to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="card">
                    <Icon className="w-10 h-10 text-brand-orange mb-4" />
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="section-padding bg-brand-light">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-brand-navy mb-4">
                  Partnership Inquiry
                </h2>
                <p className="text-lg text-gray-600">
                  Tell us about your business and partnership interests
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ve received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-brand-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="Your business name"
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
                        className="w-full px-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
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
                        className="w-full px-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="+220 XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Partnership Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Partnership Type
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="">Select a partnership type</option>
                      {partnershipTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                      placeholder="Tell us about your business and partnership interests..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Submit Partnership Inquiry
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We&apos;ll review your inquiry and get back to you within 2-3 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-brand-navy mb-12 text-center">
                What Happens Next
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      Submission Review
                    </h3>
                    <p className="text-gray-600">
                      We review your partnership inquiry and assess the potential for collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      Initial Contact
                    </h3>
                    <p className="text-gray-600">
                      Our team reaches out to discuss your business needs and partnership goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      Proposal Development
                    </h3>
                    <p className="text-gray-600">
                      We create a customized partnership proposal tailored to your needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      Agreement & Launch
                    </h3>
                    <p className="text-gray-600">
                      Once agreed, we implement the partnership and begin collaboration.
                    </p>
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
