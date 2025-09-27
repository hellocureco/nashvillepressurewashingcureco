import { Metadata } from 'next'
import Image from 'next/image'
import { Check, BarChart3, Users, Smartphone, ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marathon Insight: Advanced Customer Intelligence for Marathon Petroleum | Cure Co.',
  description: 'Transform your Marathon Petroleum locations with Cure Co.&apos;s advanced customer intelligence platform. Real-time insights, loyalty optimization, and growth analytics.',
  keywords: 'Marathon Petroleum customer intelligence, Marathon Insight alternative, fuel retail analytics, customer experience optimization, Marathon loyalty programs',
}

export default function MarathonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/marathonlogo.png"
                  alt="Marathon"
                  width={60}
                  height={60}
                  className="object-contain mr-4"
                />
                <h1 className="text-4xl md:text-5xl font-bold">Marathon Insight</h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-light mb-6">
                Advanced Customer Intelligence for Marathon Petroleum
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Elevate your Marathon locations with real-time customer insights, loyalty optimization, and data-driven growth strategies.
              </p>
              <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Real-time customer behavior analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Loyalty program optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Competitive intelligence insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span>Revenue growth analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What is Marathon Insight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Marathon Insight?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive customer intelligence platform designed specifically for Marathon Petroleum locations, providing deep insights into customer behavior, preferences, and opportunities for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Analytics</h3>
              <p className="text-gray-600">Deep insights into customer behavior patterns, preferences, and journey mapping across all touchpoints.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Loyalty Optimization</h3>
              <p className="text-gray-600">Maximize the effectiveness of your loyalty programs with data-driven insights and personalized engagement strategies.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Intelligence</h3>
              <p className="text-gray-600">Identify opportunities for revenue growth, customer acquisition, and market expansion with predictive analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">Comprehensive intelligence tools designed for Marathon Petroleum success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                  <p className="text-gray-600">Continuous monitoring of customer interactions, satisfaction levels, and operational performance across all Marathon locations.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Experience Analytics</h3>
                  <p className="text-gray-600">Track and optimize digital touchpoints including mobile apps, loyalty programs, and online customer interactions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compliance & Safety</h3>
                  <p className="text-gray-600">Ensure regulatory compliance and safety standards while maintaining exceptional customer service quality.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Customer Satisfaction</span>
                    <span className="text-green-600 font-semibold">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Loyalty Engagement</span>
                    <span className="text-blue-600 font-semibold">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Revenue Growth</span>
                    <span className="text-red-600 font-semibold">+12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits for Marathon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Marathon Petroleum</h2>
            <p className="text-lg text-gray-600">How Marathon Insight transforms your business operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Increased Revenue</h3>
              <p className="text-sm text-gray-600">Average 15-25% revenue increase through optimized customer experiences</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Customer Retention</h3>
              <p className="text-sm text-gray-600">Improve customer loyalty and reduce churn with data-driven insights</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-sm text-gray-600">Streamline operations and reduce costs through intelligent automation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Competitive Advantage</h3>
              <p className="text-sm text-gray-600">Stay ahead of competitors with advanced customer intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-gray-600">Get started with Marathon Insight in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment & Planning</h3>
              <p className="text-gray-600">We analyze your current operations and develop a customized implementation strategy for your Marathon locations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Platform Setup</h3>
              <p className="text-gray-600">Our team configures the Marathon Insight platform and integrates it with your existing systems and processes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Training & Launch</h3>
              <p className="text-gray-600">Comprehensive training for your team and full platform launch with ongoing support and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Marathon Locations?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join leading Marathon Petroleum locations already using Marathon Insight to drive growth, improve customer satisfaction, and optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
