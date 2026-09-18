'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Search, Filter, ShoppingCart, ArrowRight } from 'lucide-react'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fmcg', name: 'FMCG' },
    { id: 'household', name: 'Household Products' },
    { id: 'personal', name: 'Personal Care' },
    { id: 'food', name: 'Food Products' },
    { id: 'agricultural', name: 'Agricultural Products' },
  ]

  const mockProducts = [
    {
      id: 1,
      name: 'Sample FMCG Product',
      category: 'fmcg',
      price: 'Bulk pricing available',
      description: 'Quality fast-moving consumer goods',
      supplier: 'TBD',
    },
    {
      id: 2,
      name: 'Household Essentials Bundle',
      category: 'household',
      price: 'Custom quotes',
      description: 'Essential household products',
      supplier: 'TBD',
    },
    {
      id: 3,
      name: 'Personal Care Range',
      category: 'personal',
      price: 'Wholesale pricing',
      description: 'Premium personal care products',
      supplier: 'TBD',
    },
    {
      id: 4,
      name: 'Quality Food Products',
      category: 'food',
      price: 'Volume discounts',
      description: 'Sourced quality food items',
      supplier: 'TBD',
    },
    {
      id: 5,
      name: 'Agricultural Supplies',
      category: 'agricultural',
      price: 'Seasonal pricing',
      description: 'Supporting local agriculture',
      supplier: 'TBD',
    },
    {
      id: 6,
      name: 'Consumer Goods Mix',
      category: 'fmcg',
      price: 'Bulk pricing available',
      description: 'Diverse consumer products',
      supplier: 'TBD',
    },
  ]

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-brand-navy text-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Distribution Catalog
              </h1>
              <p className="text-xl text-gray-300">
                Browse available products and connect with our wholesale suppliers.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding bg-white">
          <div className="container">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-5 h-5 text-brand-orange" />
                <h3 className="font-semibold text-brand-navy">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-brand-orange text-white'
                        : 'bg-brand-light text-brand-navy hover:bg-brand-orange hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="card card-hover group">
                    <div className="flex flex-col h-full">
                      {/* Product Image Placeholder */}
                      <div className="w-full h-48 bg-brand-light rounded-lg mb-4 flex items-center justify-center group-hover:bg-opacity-75 transition-colors">
                        <ShoppingCart className="w-12 h-12 text-brand-orange opacity-20" />
                      </div>

                      {/* Product Info */}
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Category:{' '}
                        <span className="font-medium text-brand-navy">
                          {categories.find((c) => c.id === product.category)?.name}
                        </span>
                      </p>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-4 pb-4 border-t border-brand-gray-100">
                        <p className="text-brand-orange font-semibold">
                          {product.price}
                        </p>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/partner"
                        className="inline-flex items-center text-brand-orange font-medium text-sm group-hover:gap-2 gap-1 transition-all"
                      >
                        Wholesale Inquiry
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No products found matching your search.
                </p>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-brand-light">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                About Our Catalog
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This catalog showcases the types of products available through our distribution network. Our inventory is continuously updated with new suppliers and product categories.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                For specific product availability, pricing, and wholesale inquiries, please{' '}
                <Link href="/partner" className="text-brand-orange font-semibold hover:underline">
                  contact our partnership team
                </Link>
                .
              </p>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Request Wholesale Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
