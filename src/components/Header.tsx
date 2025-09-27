'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/CURE COMPANY placeholder LOGO-02.jpg"
              alt="The Cure Company"
              width={300}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-white font-semibold">(615) 555-0123</span>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-700">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              >
                Contact
              </button>
              <div className="px-3 py-2 border-t border-gray-700">
                <div className="flex items-center space-x-2 mb-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-white font-semibold">(615) 555-0123</span>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Free Estimate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
