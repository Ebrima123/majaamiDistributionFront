'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle2, MessageCircle, Phone, Mail, MapPin, Package, Store } from 'lucide-react'

type StakeholderType = 'supplier' | 'merchant'

export default function Partner() {
  const [activeTab, setActiveTab] = useState<StakeholderType>('supplier')
  const [supplierForm, setSupplierForm] = useState({
    companyName: '',
    countryOfOrigin: '',
    productCategory: '',
    distributionReach: '',
    monthlyVolume: '',
    contactName: '',
    email: '',
    phone: '',
  })
  const [merchantForm, setMerchantForm] = useState({
    businessName: '',
    location: '',
    businessType: '',
    monthlyVolume: '',
    contactName: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const productCategories = [
    'FMCG & Groceries',
    'Household Products',
    'Personal Care',
    'Food & Beverages',
    'Pharmaceuticals',
    'Agricultural Products',
    'Electronics',
    'Other',
  ]

  const businessTypes = [
    'Wholesaler',
    'Supermarket',
    'Pharmacy',
    'Corner Retail',
    'Restaurant',
    'Institution',
  ]

  const handleSupplierChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setSupplierForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleMerchantChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setMerchantForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!supplierForm.companyName || !supplierForm.email || !supplierForm.productCategory) {
      alert('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSupplierForm({
        companyName: '',
        countryOfOrigin: '',
        productCategory: '',
        distributionReach: '',
        monthlyVolume: '',
        contactName: '',
        email: '',
        phone: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleMerchantSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!merchantForm.businessName || !merchantForm.email || !merchantForm.businessType) {
      alert('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setMerchantForm({
        businessName: '',
        location: '',
        businessType: '',
        monthlyVolume: '',
        contactName: '',
        email: '',
        phone: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                B2B Partner Portal
              </h1>
              <p className="text-lg md:text-xl text-gray-100">
                Join Majaami&apos;s integrated ecosystem. Whether you supply products or operate retail, we streamline your onboarding and business relationship.
              </p>
            </div>
          </div>
        </section>

        {/* Segmented Intake Portal */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Switcher */}
            <div className="flex gap-4 mb-12 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('supplier')}
                className={`pb-4 px-2 font-bold text-lg transition-all ${
                  activeTab === 'supplier'
                    ? 'text-brand-accent border-b-2 border-brand-accent'
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                <Package className="w-5 h-5 inline mr-2" />
                Brand & Supplier Onboarding
              </button>
              <button
                onClick={() => setActiveTab('merchant')}
                className={`pb-4 px-2 font-bold text-lg transition-all ${
                  activeTab === 'merchant'
                    ? 'text-brand-accent border-b-2 border-brand-accent'
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                <Store className="w-5 h-5 inline mr-2" />
                Merchant & Retailer Application
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Section */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-green-50 border border-green-300 rounded-2xl p-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Application Received!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for your interest. Our B2B team will contact you within 1-2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-green-600 hover:text-green-800 font-semibold underline"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : activeTab === 'supplier' ? (
                  /* Supplier Form */
                  <form onSubmit={handleSupplierSubmit} className="space-y-6">
                    <h2 className="text-3xl font-bold text-brand-primary mb-8">
                      Distribute Your Brand with Majaami
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Company/Brand Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={supplierForm.companyName}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Country of Origin
                        </label>
                        <input
                          type="text"
                          name="countryOfOrigin"
                          value={supplierForm.countryOfOrigin}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="e.g., Senegal, Morocco"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Product Category *
                        </label>
                        <select
                          name="productCategory"
                          value={supplierForm.productCategory}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          required
                        >
                          <option value="">Select category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Current Distribution Reach
                        </label>
                        <input
                          type="text"
                          name="distributionReach"
                          value={supplierForm.distributionReach}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="e.g., West Africa, Senegal & Mali"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Estimated Monthly Volume (units)
                        </label>
                        <input
                          type="text"
                          name="monthlyVolume"
                          value={supplierForm.monthlyVolume}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="e.g., 5,000 - 10,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={supplierForm.contactName}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={supplierForm.email}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="your@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={supplierForm.phone}
                          onChange={handleSupplierChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="+220 XXXX XXXX"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-dark transition-all"
                    >
                      Submit Supplier Application
                    </button>
                  </form>
                ) : (
                  /* Merchant Form */
                  <form onSubmit={handleMerchantSubmit} className="space-y-6">
                    <h2 className="text-3xl font-bold text-brand-primary mb-8">
                      Open Your Wholesale Account
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={merchantForm.businessName}
                          onChange={handleMerchantChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="Your business name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Shop/Depot Location in The Gambia *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={merchantForm.location}
                          onChange={handleMerchantChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="e.g., Serekunda, Banjul"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Business Type *
                        </label>
                        <select
                          name="businessType"
                          value={merchantForm.businessType}
                          onChange={handleMerchantChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          required
                        >
                          <option value="">Select business type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Monthly Purchase Volume (GMD or units)
                        </label>
                        <input
                          type="text"
                          name="monthlyVolume"
                          value={merchantForm.monthlyVolume}
                          onChange={handleMerchantChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="e.g., 100,000 GMD or 2,000 units"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={merchantForm.contactName}
                          onChange={handleMerchantChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={merchantForm.email}
                          onChange={handleMerchantChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                          placeholder="your@business.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-brand-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={merchantForm.phone}
                        onChange={handleMerchantChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        placeholder="+220 XXXX XXXX"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-dark transition-all"
                    >
                      Submit Retailer Application
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Card */}
              <div className="lg:col-span-1">
                <div className="bg-brand-primary text-white rounded-2xl p-8 sticky top-20">
                  <h3 className="text-2xl font-black mb-2">Prefer Direct Contact?</h3>
                  <p className="text-gray-100 mb-8 text-sm">
                    Reach our B2B sales desk for immediate conversations about your partnership.
                  </p>

                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/22020000000"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl transition-all group"
                    >
                      <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-200">WhatsApp B2B Desk</p>
                        <p className="font-bold text-lg">+220 2000 0000</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+22020000000"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl transition-all group"
                    >
                      <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-200">Direct Line</p>
                        <p className="font-bold text-lg">+220 2000 0000</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:b2b@majaami.com"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl transition-all group"
                    >
                      <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-200">Email</p>
                        <p className="font-bold text-lg">b2b@majaami.com</p>
                      </div>
                    </a>

                    {/* Business Hours */}
                    <div className="p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                      <p className="text-sm text-gray-200 mb-2">Business Hours</p>
                      <p className="font-bold">Monday - Friday</p>
                      <p className="text-sm text-gray-100">8:00 AM - 6:00 PM GMT</p>
                      <p className="text-sm text-gray-100 mt-2">Saturday: 9:00 AM - 1:00 PM GMT</p>
                    </div>
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
