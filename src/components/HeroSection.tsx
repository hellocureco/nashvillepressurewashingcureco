'use client'

import { Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/CureCoHeader.jpg)'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Nashville&apos;s #1 Commercial Pressure Washing Company
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8">
          Professional commercial pressure washing, gas station forecourt cleaning, and ADA-compliant parking lot striping for businesses in Nashville, TN
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-gray-400" />
            <span className="text-2xl font-semibold">(615) 555-0123</span>
          </div>
          <div className="text-gray-200">
            Serving Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville & surrounding areas
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-300 mb-2">EPA</div>
            <div className="text-gray-200">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-300 mb-2">ADA</div>
            <div className="text-gray-200">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-300 mb-2">24/7</div>
            <div className="text-gray-200">Emergency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-300 mb-2">Free</div>
            <div className="text-gray-200">Estimates</div>
          </div>
        </div>
      </div>
    </section>
  )
}
