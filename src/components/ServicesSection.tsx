'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Home, Building2, Car } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Commercial Pressure Washing Nashville',
    shortDescription: 'Gas stations, convenience stores, and industrial facilities',
    fullDescription: 'Complete exterior cleaning for businesses, office buildings, retail stores, and industrial facilities in Nashville. Specializing in gas station forecourt cleaning, convenience store pressure washing, and EPA-compliant commercial cleaning. Professional cleaning of commercial buildings, storefronts, and industrial equipment.',
    features: ['Gas Station Forecourts', 'Convenience Store Cleaning', 'Building Exteriors', 'Loading Docks', 'Industrial Equipment'],
    startingPrice: '$300',
    popular: true
  },
  {
    icon: Car,
    title: 'Parking Lot Striping Nashville',
    shortDescription: 'ADA compliance, fire lanes, and line painting',
    fullDescription: 'Professional parking lot line painting, striping, and ADA compliance services for Nashville businesses. We ensure all markings meet local regulations and safety standards. Specializing in handicap parking compliance, fire lane striping, and curb painting for full regulatory compliance.',
    features: ['ADA Handicap Parking', 'Fire Lane Striping', 'Line Painting', 'Curb Painting', 'Directional Arrows'],
    startingPrice: '$200'
  },
  {
    icon: Home,
    title: 'Residential Pressure Washing Nashville',
    shortDescription: 'House washing, driveway cleaning, deck restoration',
    fullDescription: 'Professional house washing, driveway cleaning, deck restoration, and patio cleaning for Nashville homeowners. We use soft wash techniques to safely clean siding, roofs, and gutters while protecting your property. Serving Franklin, Brentwood, Murfreesboro, and Hendersonville.',
    features: ['House Siding', 'Driveway Cleaning', 'Deck & Patio Restoration', 'Sidewalk Cleaning', 'Fence Cleaning'],
    startingPrice: '$150'
  }
]

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nashville Pressure Washing & Parking Lot Striping Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional commercial pressure washing, gas station cleaning, and ADA-compliant parking lot striping in Nashville, Franklin, Brentwood, and surrounding areas
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-700 rounded-lg shadow-sm border-2 ${
                service.popular 
                  ? 'border-blue-500' 
                  : 'border-gray-200 dark:border-gray-600'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <button
                onClick={() => toggleService(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    service.popular ? 'bg-blue-500' : 'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    <service.icon className={`w-6 h-6 ${
                      service.popular ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-blue-600">
                    Starting at {service.startingPrice}
                  </span>
                  {expandedService === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedService === index && (
                <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="pt-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.fullDescription}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          What we clean:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-end">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                          Get Free Estimate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need something else? We also provide gas station forecourt cleaning, convenience store pressure washing, ADA compliance striping, and emergency services throughout Middle Tennessee.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Call (615) 555-0123
          </button>
        </div>
      </div>
    </section>
  )
}
