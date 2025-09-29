import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Paintbrush, Hammer, Shield, Camera, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gas Station Compliance Remediation – Shell MMP & Marathon Insight | The Cure Co.',
  description: 'We fix Shell MMP and Marathon Insight audit findings with contractor-level work: dispenser painting/repair, canopy fixes, protective coatings, surface remediation, and compliant cure photos. Serving TN, MS, AR.',
  keywords: [
    'Shell MMP',
    'Marathon Insight',
    'gas station compliance',
    'cure photos',
    'gas station remediation',
    'protective coatings',
    'commercial painting gas station',
  ],
  openGraph: {
    title: 'Gas Station Compliance Remediation – Shell MMP & Marathon Insight | The Cure Co.',
    description: 'Contractor-level remediation and compliant cure photos for Shell MMP and Marathon Insight. Serving Tennessee, Mississippi, and Arkansas.',
    type: 'website',
    locale: 'en_US',
    url: 'https://thecurecompany.com',
  },
}

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do housekeeping fixes qualify for Shell MMP cure photos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Generally no—Shell prioritizes structural or contractor-level fixes like dispenser painting or canopy repairs.",
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can you help with audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically assess within 24–48 hours across TN/MS/AR and complete eligible repairs with compliant documentation inside your window.',
        },
      },
    ],
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gas Station Compliance Remediation',
    serviceType: 'Contractor-level appearance remediation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'The Cure Co.',
      url: 'https://thecurecompany.com',
    },
    areaServed: ['Tennessee', 'Mississippi', 'Arkansas'],
    description:
      'Remediation for Shell MMP and Marathon Insight audits: dispenser painting/repair, canopy fascia fixes, protective coatings, concrete remediation, and compliant cure photo documentation.',
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Script id="home-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="home-services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">Shell MMP & Marathon Insight Audit Fixes</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">Contractor-level remediation and compliant cure photos—not just cleaning. We repair, repaint, coat, document, and help you restore your points.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/mmp" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center w-full sm:w-auto justify-center">
                  Shell MMP Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/marathon" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center w-full sm:w-auto justify-center">
                  Marathon Audit Fixes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-gray-400 mt-3">Serving Tennessee • Mississippi • Arkansas</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-2"><Paintbrush className="w-6 h-6 mr-2" /><h3 className="font-semibold">Painting & Coatings</h3></div>
                <p className="text-sm text-gray-300">Dispenser repainting, fascia color-matching, bollards/curbs</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-2"><Hammer className="w-6 h-6 mr-2" /><h3 className="font-semibold">Structural Repairs</h3></div>
                <p className="text-sm text-gray-300">Canopy fascia patch, panel replacement, minor exterior repair</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-2"><Shield className="w-6 h-6 mr-2" /><h3 className="font-semibold">Compliance Support</h3></div>
                <p className="text-sm text-gray-300">Map findings to fixes, plan timelines, meet cure windows</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-2"><Camera className="w-6 h-6 mr-2" /><h3 className="font-semibold">Cure Photos</h3></div>
                <p className="text-sm text-gray-300">Before/after angles and labeling for compliant documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Contractor-Level Remediation, Done Fast</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Surface remediation, protective coatings, painting, structural touch-ups, and compliant documentation designed for Shell MMP and Marathon Insight programs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Shell MMP Cure Photos</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Qualifying fixes and photo submission support to restore points.</p>
              <Link href="/mmp" className="text-black dark:text-white font-semibold inline-flex items-center hover:underline">Explore Shell MMP <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </div>
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Marathon Insight Fixes</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Contractor-level remediation and organized documentation.</p>
              <Link href="/marathon" className="text-black dark:text-white font-semibold inline-flex items-center hover:underline">Explore Marathon <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </div>
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Compliance Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Assessment, scope, timelines, and appeal assistance if needed.</p>
              <a href="mailto:info@thecurecompany.com" className="text-black dark:text-white font-semibold inline-flex items-center hover:underline">Request Help <ArrowRight className="ml-1 w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-14 sm:py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Before & After</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">Examples of contractor-level improvements suitable for audit cures.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-white dark:bg-black">
              <Image src="/dirty1.jpg" alt="Before remediation: chipped paint and stains near dispenser" width={800} height={600} className="w-full h-48 sm:h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-300">Before: Faded paint and stains</figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-white dark:bg-black">
              <Image src="/dirty2.jpg" alt="Before remediation: canopy fascia damage prior to repair" width={800} height={600} className="w-full h-48 sm:h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-300">Before: Canopy fascia damage</figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-white dark:bg-black">
              <Image src="/cure1.jpg" alt="After remediation: repainting and repaired fascia suitable for cure photos" width={800} height={600} className="w-full h-48 sm:h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-700 dark:text-gray-200 font-medium">After: Repainted, repaired, coated</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-200">
            <div>
              <h3 className="font-semibold mb-2">Do you service outside TN/MS/AR?</h3>
              <p>Primary coverage is TN, MS, AR. Multi-site projects in adjacent states by request.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do you document cures?</h3>
              <p>We capture standardized before/after angles, label by line item, and organize files for submission.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is a typical turnaround?</h3>
              <p>Assessment in 24–48 hours; remediation and documentation commonly within a few days depending on scope.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can you help with appeals?</h3>
              <p>Yes—when appropriate, we prepare evidence packets to support an appeal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Regional Coverage</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Memphis • Nashville • Jackson • Little Rock and surrounding markets in Tennessee, Mississippi, and Arkansas.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/mmp" className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-900">Shell MMP Cure Photos</Link>
            <Link href="/marathon" className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-900">Marathon Insight Fixes</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">Need Cure Photos That Get Approved?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">Contractor-level remediation and compliant documentation from The Cure Co.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="mailto:info@thecurecompany.com" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">Request Support</a>
            <Link href="/mmp" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors w-full sm:w-auto">Explore Shell MMP</Link>
          </div>
          <div className="mt-6 text-sm text-gray-400 inline-flex items-center justify-center"><Check className="w-4 h-4 mr-2" /> Typical assessment within 24–48 hours in TN/MS/AR</div>
        </div>
      </section>
    </main>
  )
}
