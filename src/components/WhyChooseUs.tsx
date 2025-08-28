'use client'

import { Award, Clock, Shield, Users, Star, CheckCircle } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized for excellence in pressure washing and customer satisfaction across Nashville.',
    stats: '5+ Industry Awards'
  },
  {
    icon: Clock,
    title: 'Fast & Reliable',
    description: 'Same-day service available for urgent cleaning needs. We respect your time and schedule.',
    stats: 'Same Day Service'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete liability coverage and worker\'s compensation for your peace of mind.',
    stats: '100% Protected'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified technicians with years of experience in professional pressure washing.',
    stats: 'Certified Technicians'
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: 'Consistently rated 5 stars by our satisfied customers across Nashville.',
    stats: '4.8/5 Rating'
  },
  {
    icon: CheckCircle,
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction guarantee on all our pressure washing services.',
    stats: '100% Guarantee'
  }
]

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Homeowner',
    location: 'Belle Meade, Nashville',
    content: 'Nashville Pressure Washing transformed our home! The siding looks brand new and they were incredibly professional.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Property Manager',
    location: 'Downtown Nashville',
    content: 'We use them for all our commercial properties. Reliable, thorough, and always on time.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Restaurant Owner',
    location: 'East Nashville',
    content: 'They cleaned our parking lot and storefront perfectly. Great service and fair pricing!',
    rating: 5
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Nashville Pressure Washing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We&apos;re Nashville&apos;s trusted partner for pressure washing and parking lot striping. Serving the greater Nashville area 
            including Franklin, Brentwood, Murfreesboro, and Hendersonville with professional, compliant services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {reason.description}
              </p>
              <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                {reason.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Don&apos;t just take our word for it - hear from our satisfied customers across Nashville
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-green-100 mb-6">
              Join hundreds of satisfied customers who trust Nashville Pressure Washing for their exterior cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Get Free Estimate
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
