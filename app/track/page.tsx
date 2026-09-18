'use client'

import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrackingContent from '@/components/TrackingContent'

export default function TrackingPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <TrackingContent />
      </Suspense>
      <Footer />
    </>
  )
}
