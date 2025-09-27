'use client'

import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">The Cure Company</h3>
          <p className="text-gray-300 mb-6">
            Professional pressure washing and parking lot striping services in Nashville, TN
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">(615) 555-0123</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">info@thecurecompany.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 The Cure Company. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>BBB Accredited</span>
              <span>•</span>
              <span>EPA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
