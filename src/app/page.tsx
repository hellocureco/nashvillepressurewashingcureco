import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Cure Company - Store Compliance & Upkeep',
  description: 'Your Partner in Store Compliance & Upkeep - Mystery Motorist Program and Marathon Insight services',
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="border-b border-white mb-12 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Company Name */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold">THE CURE COMPANY™</h1>
            </div>
            
            {/* Partner Logos */}
            <div className="flex items-center space-x-8">
              {/* Shell Logo */}
              <div className="flex flex-col items-center">
                <Image
                  src="/ShellLogo.png"
                  alt="Shell"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              
              {/* Marathon Logo */}
              <div className="flex flex-col items-center">
                <Image
                  src="/marathonlogo.png"
                  alt="Marathon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              
              {/* ExxonMobil Logo */}
              <div className="flex flex-col items-center">
                <Image
                  src="/exxonlogo.png"
                  alt="ExxonMobil"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-light mb-12">
            Your Partner in Store Compliance & Upkeep
          </h2>

          {/* Service Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mystery Motorist Program Box */}
            <div className="relative border border-white rounded-lg p-8 bg-black min-h-[300px] flex flex-col justify-between">
              <div className="absolute bottom-0 right-0 opacity-20">
                {/* Shell logo background element */}
                <Image
                  src="/Shell-logo-full-color.jpg"
                  alt="Shell"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Mystery Motorist Program (MMP)</h3>
              </div>
              
              <div className="text-center">
                <a href="/mmp" className="text-lg hover:text-gray-300 transition-colors">Learn More &gt;&gt;</a>
              </div>
            </div>

            {/* Marathon Insight Box */}
            <div className="relative border border-white rounded-lg p-8 bg-black min-h-[300px] flex flex-col justify-between">
              <div className="absolute bottom-0 right-0 opacity-20">
                {/* Marathon logo background element */}
                <Image
                  src="/marathon-logo-full-color.jpg"
                  alt="Marathon"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Marathon Insight</h3>
              </div>
              
              <div className="text-center">
                <a href="/marathon" className="text-lg hover:text-gray-300 transition-colors">Learn More &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}