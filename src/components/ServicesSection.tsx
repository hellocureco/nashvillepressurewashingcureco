'use client'

import { Home, Building2, Car, Palette, Shield, Zap } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Pressure Washing Nashville',
    description: 'Professional house washing, driveway cleaning, deck restoration, and patio cleaning for Nashville homeowners.',
    features: ['House Siding', 'Driveways', 'Decks & Patios', 'Sidewalks', 'Fences'],
    startingPrice: '$150',
    popular: false
  },
  {
    icon: Building2,
    title: 'Commercial Pressure Washing Nashville',
    description: 'Complete exterior cleaning for businesses, office buildings, retail stores, and industrial facilities in Nashville.',
    features: ['Building Exteriors', 'Parking Lots', 'Loading Docks', 'Storefronts', 'Industrial Equipment'],
    startingPrice: '$300',
    popular: true
  },
  {
    icon: Car,
    title: 'Parking Lot Striping Nashville',
    description: 'Professional parking lot line painting, striping, and ADA compliance services for Nashville businesses.',
    features: ['Line Painting', 'ADA Handicap Spaces', 'Fire Lanes', 'Directional Arrows', 'Numbered Spaces'],
    startingPrice: '$200',
    popular: false
  },
  {
    icon: Palette,
    title: 'Gas Station Pressure Washing',
    description: 'Specialized cleaning for gas stations, convenience stores, and forecourt areas in Nashville.',
    features: ['Gas Pump Areas', 'Forecourt Cleaning', 'Oil Stain Removal', 'Safety Compliance', 'EPA Standards'],
    startingPrice: '$250',
    popular: false
  },
  {
    icon: Shield,
    title: 'ADA Parking Compliance',
    description: 'Professional parking lot striping and ADA compliance services for Nashville businesses.',
    features: ['Handicap Parking', 'Fire Lane Striping', 'Curb Painting', 'Signage Installation', 'Regulatory Compliance'],
    startingPrice: '$180',
    popular: false
  },
  {
    icon: Zap,
    title: 'Emergency Pressure Washing',
    description: '24/7 emergency pressure washing and parking lot striping for urgent needs in Nashville.',
    features: ['24/7 Availability', 'Same Day Service', 'Emergency Response', 'Property Damage', 'Quick Turnaround'],
    startingPrice: '$400',
    popular: false
  }
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nashville Pressure Washing & Parking Lot Striping Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional pressure washing and parking lot striping services in Nashville, TN. From residential homes to commercial buildings, 
            gas stations, and industrial facilities - we deliver exceptional results with ADA compliance and safety standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                service.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                service.popular ? 'bg-blue-500' : 'bg-gray-100 dark:bg-gray-600'
              }`}>
                <service.icon className={`w-8 h-8 ${
                  service.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                }`} />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Starting at</span>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{service.startingPrice}</p>
                </div>
                <button className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  service.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200'
                }`}>
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We specialize in custom pressure washing solutions for unique properties and special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Call (615) 555-0123
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
