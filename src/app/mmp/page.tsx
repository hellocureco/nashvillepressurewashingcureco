import { Metadata } from 'next'
import { Check, X, Clock, BarChart3, Users, Smartphone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beyond Mystery Motorists: Cure Co. vs Shell MMP | Experience Intelligence',
  description: 'Where Shell&apos;s MMP measures yesterday&apos;s basics, Cure Co. delivers real-time, data-rich insights that fuel growth and loyalty in fuel & convenience retail.',
  keywords: 'Mystery Motorist Program alternative, fuel retail customer experience, loyalty program insights, Cure Co. customer intelligence, Shell MMP competitor',
}

export default function MMPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Beyond Mystery Motorists: Cure Co. Brings Experience Intelligence to Fuel & Convenience
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Where Shell&apos;s MMP measures yesterday&apos;s basics, Cure Co. delivers real-time, data-rich insights that fuel growth and loyalty.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center">
                Talk to Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-semibold mb-2">Shell MMP</h3>
                  <p className="text-sm text-gray-400">Traditional mystery shopping</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Cure Co.</h3>
                  <p className="text-sm text-gray-400">Real-time intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Legacy Approach - MMP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Legacy Approach – Shell MMP</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mystery shoppers, checklist scoring, and awards have been the industry standard. But the world has changed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                MMP Strengths
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Established industry standard</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance-focused approach</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Forecourt & store coverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <X className="w-6 h-6 text-red-500 mr-2" />
                MMP Limitations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Slow feedback (weeks later)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Narrow scope & compliance focus</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited growth insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Cure Co. Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Cure Co. Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Data-driven, AI-powered, customer-centric intelligence that transforms how you understand and serve your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Always-On Monitoring</h3>
              <p className="text-sm text-gray-600">Continuous real-time insights, not periodic snapshots</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Omnichannel Coverage</h3>
              <p className="text-sm text-gray-600">Store, pumps, restrooms, loyalty apps - complete view</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Real-Time Dashboards</h3>
              <p className="text-sm text-gray-600">Instant insights and actionable intelligence</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Growth + Loyalty</h3>
              <p className="text-sm text-gray-600">Focus on customer experience and business growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shell MMP vs Cure Co.</h2>
            <p className="text-lg text-gray-600">See the difference between traditional mystery shopping and modern experience intelligence</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Shell MMP</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Cure Co.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Method</td>
                    <td className="px-6 py-4 text-center text-gray-600">Mystery shoppers</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-medium">Continuous monitoring + AI</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Reporting</td>
                    <td className="px-6 py-4 text-center text-gray-600">Weeks later</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-medium">Real-time dashboards</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Scope</td>
                    <td className="px-6 py-4 text-center text-gray-600">Forecourt & store</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-medium">End-to-end, incl. loyalty & digital</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Focus</td>
                    <td className="px-6 py-4 text-center text-gray-600">Compliance</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-medium">Growth + brand loyalty</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Data Depth</td>
                    <td className="px-6 py-4 text-center text-gray-600">Checklist scores</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-medium">Rich behavioral insights</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Actionability</td>
                    <td className="px-6 py-4 text-center text-gray-600">Historical reports</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-medium">Immediate action triggers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Now? */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Now?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fuel & convenience industry is evolving rapidly. Customer expectations have changed, and so should your approach to understanding them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalization Expected</h3>
              <p className="text-gray-600">Customers expect personalized experiences across all touchpoints</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Integration</h3>
              <p className="text-gray-600">Loyalty programs and digital experiences are expanding rapidly</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Influence</h3>
              <p className="text-gray-600">Online reviews and digital experience directly influence traffic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Graduate from Mystery Shops to Experience Intelligence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform how you understand and serve your customers? Let&apos;s discuss how Cure Co. can revolutionize your customer experience strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Schedule a Strategy Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
              See Cure Co. in Action
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
