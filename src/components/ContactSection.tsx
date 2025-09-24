'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Commercial Quote
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to discuss your commercial pressure washing or parking lot striping needs? Contact us for a free consultation and detailed proposal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">(615) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">info@thecurecompany.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Service Area</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Nashville & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Hours</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Mon-Fri: 8AM-6PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Sat: 9AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Need Emergency Commercial Service?</h3>
              <p className="text-blue-100 mb-4">24/7 emergency response for compliance issues and urgent cleaning needs</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Call (615) 555-0123
              </button>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Request Commercial Quote
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  placeholder="(615) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="commercial">Commercial Pressure Washing</option>
                  <option value="gas-station">Gas Station Forecourt Cleaning</option>
                  <option value="parking-lot">Parking Lot Striping & ADA Compliance</option>
                  <option value="convenience">Convenience Store Cleaning</option>
                  <option value="industrial">Industrial Facility Cleaning</option>
                  <option value="residential">Residential Pressure Washing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                  placeholder="Tell us about your commercial property, compliance needs, timeline, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Request Commercial Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
