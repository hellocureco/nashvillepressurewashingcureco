'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What areas do you serve for pressure washing in Nashville?",
    answer: "We serve the greater Nashville metropolitan area including Davidson County and surrounding counties within a 50-mile radius. This includes Franklin, Brentwood, Murfreesboro, Hendersonville, Gallatin, Clarksville, Antioch, Madison, Spring Hill, Smyrna, and Columbia. We're Nashville's most trusted pressure washing company with service throughout Middle Tennessee."
  },
  {
    question: "How much does commercial pressure washing cost in Nashville?",
    answer: "Our commercial pressure washing pricing varies based on the size of the area, type of surface, and level of cleaning required. We offer free estimates and competitive pricing starting at $300 for commercial services, $200 for parking lot striping, and $150 for residential services. Gas station forecourt cleaning typically ranges from $400-800 depending on size and complexity."
  },
  {
    question: "Do you provide gas station pressure washing services?",
    answer: "Yes, we specialize in gas station forecourt cleaning and convenience store pressure washing in Nashville. Our EPA-compliant services include pump area cleaning, oil stain removal, safety compliance, and environmental standards. We use reclaim systems to prevent wastewater runoff and ensure full regulatory compliance for fuel station clients."
  },
  {
    question: "What's included in your parking lot striping Nashville service?",
    answer: "Our parking lot striping service includes ADA handicap parking compliance, fire lane striping, line painting, curb painting (red/yellow), directional arrows, numbered spaces, and regulatory compliance. We ensure all markings meet local Nashville regulations and safety standards for full ADA compliance and fire code requirements."
  },
  {
    question: "Are you licensed and insured for commercial pressure washing?",
    answer: "Yes, we are fully licensed, bonded, and insured for all commercial pressure washing and parking lot striping services. We carry comprehensive liability insurance to protect our clients and their property. We are also BBB accredited, EPA certified, and OSHA compliant for commercial work."
  },
  {
    question: "How long does driveway cleaning take in Nashville?",
    answer: "Driveway cleaning typically takes 2-4 hours for residential properties and 4-8 hours for commercial driveways. Our concrete cleaning services include oil stain removal, pressure washing, and surface restoration. We provide time estimates during our free consultation and can work around your schedule."
  },
  {
    question: "Do you offer ADA parking compliance services?",
    answer: "Yes, we specialize in ADA parking compliance and handicap parking striping in Nashville. Our services include proper handicap space markings, fire lane compliance, curb painting, and signage installation. We ensure all markings meet ADA guidelines and local regulations to keep your business compliant."
  },
  {
    question: "Can you work around business hours for commercial properties?",
    answer: "Absolutely! We offer flexible scheduling including evenings and weekends for commercial properties. We work around your business hours to minimize disruption and can accommodate urgent needs. Same-day service is available for emergency situations and compliance requirements."
  },
  {
    question: "What surfaces can you pressure wash for commercial properties?",
    answer: "We clean all types of commercial surfaces including concrete, brick, vinyl siding, metal buildings, loading docks, storefronts, and industrial equipment. We specialize in gas station forecourts, convenience store cleaning, warehouse facilities, and parking lot surfaces throughout Nashville and surrounding areas."
  },
  {
    question: "Do you provide before and after photos for commercial work?",
    answer: "Yes, we document all commercial pressure washing and parking lot striping work with before and after photos for quality assurance and your records. These photos are useful for insurance claims, property management records, compliance documentation, and showcasing the transformation to stakeholders."
  }
]

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nashville Pressure Washing & Parking Lot Striping FAQ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Common questions about our commercial pressure washing, gas station cleaning, and ADA-compliant parking lot striping services in Nashville
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {expandedFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {expandedFAQ === index && (
                <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="pt-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
