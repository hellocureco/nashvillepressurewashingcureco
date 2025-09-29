import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { Check, Paintbrush, Hammer, Shield, Camera, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shell MMP Cure Photos – Gas Station Compliance Solutions | The Cure Co.',
  description: 'Failed Shell Mystery Shop? We provide certified contractor-level fixes (painting, coatings, structural repairs) and submit cure photos that meet Shell MMP guidelines. Serving TN, MS, AR.',
  keywords: [
    'Shell MMP',
    'Shell MMP cure photos',
    'Shell Mystery Motorist Program compliance',
    'cure photo fixes',
    'gas station compliance services',
    'mystery shop audit fixes',
    'gas station surface remediation',
    'protective coatings',
    'commercial painting gas station',
  ],
}

export default function MMPPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What qualifies as a Shell MMP cure photo fix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Shell requires structural or contractor-level fixes (e.g., dispenser painting/repair, canopy repairs, protective coatings). Basic housekeeping typically doesn't qualify.",
        },
      },
      {
        '@type': 'Question',
        name: 'How fast can The Cure Co. help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We schedule an assessment within 24–48 hours in TN/MS/AR, complete eligible repairs, and document with compliant cure photos within your 25–30 day window.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you submit cure photos for us?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. We capture, label, and organize cure photos and can assist with submission and appeal documentation.',
        },
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Shell MMP Cure Photo Solutions',
    areaServed: ['Tennessee', 'Mississippi', 'Arkansas'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'The Cure Co.',
      url: 'https://thecurecompany.com',
    },
    serviceType: 'Gas station compliance remediation',
    description:
      'Certified contractor-level remediation for Shell Mystery Motorist Program violations: dispenser painting/repair, canopy fixes, protective coatings, surface remediation, and compliant cure photo documentation.',
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Script id="mmp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="mmp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Shell MMP Cure Photos & Compliance Support</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Yes—we fix Shell MMP violations. Contractor-level repairs, protective coatings, and compliant cure photos that restore your points fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:info@thecurecompany.com" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Get Help Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link href="/home" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center">
                  See Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-gray-400 mt-3">Serving Tennessee, Mississippi, and Arkansas</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Paintbrush className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Painting & Coatings</h3>
                </div>
                <p className="text-sm text-gray-300">Dispenser repainting, color-matching, canopy fascia, bollards, curbs</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Hammer className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Structural Repairs</h3>
                </div>
                <p className="text-sm text-gray-300">Canopy patch/repair, panel replacement, minor surface remediation</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Shield className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Compliance Support</h3>
                </div>
                <p className="text-sm text-gray-300">Cure photo guidance, documentation, and appeal assistance</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Camera className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Photo Documentation</h3>
                </div>
                <p className="text-sm text-gray-300">Before/after angles per Shell criteria, organized for submission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What qualifies as a cure photo fix */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image 
            src="/Shell-logo-full-color.jpg" 
            alt="" 
            fill 
            className="object-contain object-center mix-blend-overlay" 
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Shell Mystery Motorist Program: Cure Photo Eligibility</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Shell guidelines emphasize contractor-level improvements over housekeeping. Our team delivers fixes that qualify for photo cure and stand up to review.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-neutral-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Eligible Fixes We Provide</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Dispenser painting, decal replacement, panel repair</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Canopy fascia patching, structural panel replacement</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Protective and anti-graffiti coatings on surfaces</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Concrete surface remediation and appearance enhancements</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-neutral-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Submission Support</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Within the 25–30 day cure window</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Standardized before/after framing per Shell requirements</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> File naming and labels aligned to failed line items</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Optional appeal packet preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">Site walk, list failed items, confirm eligible fixes, timeline planning.</p>
            </div>
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Remediation</h3>
              <p className="text-gray-600 dark:text-gray-300">Painting, coatings, structural repairs, and surface remediation completed.</p>
            </div>
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Cure Photos</h3>
              <p className="text-gray-600 dark:text-gray-300">Document before/after, package files, and submit or assist with submission.</p>
            </div>
          </div>
          <div className="mt-10 flex gap-3">
            <a href="mailto:info@thecurecompany.com" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-100">Request Free Compliance Consultation</a>
            <Link href="/marathon" className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-900">See Marathon Insight Fixes</Link>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Regional Coverage: TN • MS • AR</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            The Cure Co. supports gas stations in Memphis, Nashville, Jackson, Little Rock, and across Tennessee, Mississippi, and Arkansas with appearance enhancement and compliance remediation tailored for Shell MMP.
          </p>
        </div>
      </section>

      {/* Photo Evidence: Before & After */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Before & After: Cure Photo Example</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Representative images showing contractor-level remediation that typically qualifies for Shell MMP cure photos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
              <Image src="/dirty1.jpg" alt="Gas station dispenser area with chipped paint and stains before Shell MMP cure" width={800} height={600} className="w-full h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-300">Before: Faded paint and stains at dispenser island</figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
              <Image src="/dirty2.jpg" alt="Canopy fascia damage and rust before contractor-level remediation for Shell MMP" width={800} height={600} className="w-full h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-300">Before: Canopy fascia damage and surface rust</figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
              <Image src="/cure1.jpg" alt="Completed Shell MMP cure photo after dispenser repainting and protective coating" width={800} height={600} className="w-full h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-700 dark:text-gray-200 font-medium">After: Repainted dispensers, repaired fascia, protective coatings</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Shell MMP Cure Photo FAQs</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-200">
            <div>
              <h3 className="font-semibold mb-2">What fixes qualify for cure photos?</h3>
              <p>Painting/repairing dispensers, canopy fascia/panels, protective coatings, and surface remediation typically qualify.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you help with appeals?</h3>
              <p>Yes. We can assemble photo evidence and a brief for appeal when appropriate.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How soon can work start?</h3>
              <p>Often within 2–5 business days depending on scope and materials.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you cover housekeeping items?</h3>
              <p>We focus on contractor-level fixes; housekeeping alone generally doesn’t meet Shell cure criteria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Resolve Your Shell Audit Issues Fast</h2>
          <p className="text-xl text-gray-300 mb-8">Certified contractor-level fixes and compliant cure photos from The Cure Co.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@thecurecompany.com" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Help Now</a>
            <Link href="/home" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
