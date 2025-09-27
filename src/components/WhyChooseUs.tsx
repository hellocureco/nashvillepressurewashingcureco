'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mike T.',
    content: 'Excellent commercial pressure washing service. They cleaned our entire office building and parking lot. EPA compliant and professional.',
    rating: 5
  },
  {
    name: 'Lisa R.',
    content: 'We use them for all our gas station forecourts. Reliable, compliant, and always on time. Great for compliance requirements.',
    rating: 5
  },
  {
    name: 'James K.',
    content: 'Outstanding ADA compliance work. They handled our parking lot striping and made sure we met all regulations. Highly recommend!',
    rating: 5
  }
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose The Cure Company for Commercial Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            EPA compliant, ADA certified, and fully insured for commercial and industrial projects
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-300">Commercial Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Emergency Service</div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            What Our Commercial Clients Say
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 italic text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                - {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
