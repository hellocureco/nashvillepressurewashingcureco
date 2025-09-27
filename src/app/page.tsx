import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Cure Company - Coming Soon',
  description: 'Professional pressure washing and parking lot striping services coming soon to Nashville, TN',
}

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/CURE COMPANY placeholder LOGO-02.jpg"
            alt="The Cure Company"
            width={400}
            height={133}
            className="mx-auto"
            priority
          />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Professional pressure washing and parking lot striping services for Nashville, TN
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="text-lg">
            <span className="text-gray-400">Phone: </span>
            <span className="font-semibold">(615) 555-0123</span>
          </div>
          <div className="text-lg">
            <span className="text-gray-400">Email: </span>
            <span className="font-semibold">info@thecurecompany.com</span>
          </div>
        </div>

        {/* Services Preview */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Commercial Pressure Washing</h3>
            <p className="text-gray-400 text-sm">Gas stations, convenience stores, and industrial facilities</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Parking Lot Striping</h3>
            <p className="text-gray-400 text-sm">ADA compliance, fire lanes, and line painting</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Residential Services</h3>
            <p className="text-gray-400 text-sm">House washing, driveway cleaning, deck restoration</p>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="space-y-4">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Website Launching Soon
          </div>
          
          {/* Link to full site for testing */}
          <div className="mt-6">
            <a 
              href="/home" 
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full Website (Testing)
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}