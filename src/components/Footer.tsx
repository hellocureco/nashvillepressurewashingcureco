'use client'

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Nashville Pressure Washing</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional pressure washing and exterior cleaning services in Nashville, Tennessee. 
              We specialize in residential and commercial pressure washing, parking lot striping, 
              and surface restoration. Licensed, insured, and committed to customer satisfaction.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(615) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@nashvillepressurewashing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">123 Main Street, Nashville, TN 37201</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-5PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#residential" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Residential Pressure Washing
                </a>
              </li>
              <li>
                <a href="#commercial" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Commercial Pressure Washing
                </a>
              </li>
              <li>
                <a href="#parking-lot" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Parking Lot Striping
                </a>
              </li>
              <li>
                <a href="#surface-restoration" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Surface Restoration
                </a>
              </li>
              <li>
                <a href="#soft-wash" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Soft Wash Services
                </a>
              </li>
              <li>
                <a href="#emergency" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#estimate" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Free Estimate
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 Nashville Pressure Washing. All rights reserved. | 
              <a href="#privacy" className="hover:text-white transition-colors duration-200 ml-1">
                Privacy Policy
              </a> | 
              <a href="#terms" className="hover:text-white transition-colors duration-200 ml-1">
                Terms of Service
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Certifications & Memberships</h4>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
              <span>✓ Licensed & Bonded</span>
              <span>✓ Fully Insured</span>
              <span>✓ BBB Accredited</span>
              <span>✓ EPA Certified</span>
              <span>✓ OSHA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
