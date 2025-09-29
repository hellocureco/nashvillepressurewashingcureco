import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { Check, Paintbrush, Hammer, Shield, Camera, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marathon Insight Audit Fixes – Gas Station Compliance | The Cure Co.',
  description: 'Failed a Marathon Insight audit? We deliver contractor-level remediation (painting, coatings, structural repairs) and provide compliant before/after documentation. Serving TN, MS, AR.',
  keywords: [
    'Marathon Insight audit',
    'Marathon audit fixes',
    'gas station compliance',
    'cure photos marathon',
    'surface remediation',
    'protective coatings',
    'commercial painting gas station',
  ],
}

export default function MarathonPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are common Marathon Insight audit fails you can fix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Faded/broken dispenser panels, canopy fascia damage, chipped paint, rusted bollards/curbs, stained concrete, and signage appearance issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can you remediate for Marathon audits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We typically assess within 24–48 hours in TN/MS/AR and complete contractor-level repairs with documented before/after photos in days, not weeks.',
        },
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marathon Insight Audit Remediation',
    areaServed: ['Tennessee', 'Mississippi', 'Arkansas'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'The Cure Co.',
      url: 'https://thecurecompany.com',
    },
    serviceType: 'Gas station compliance remediation',
    description:
      'Contractor-level appearance remediation for Marathon Insight audits: dispenser painting/repair, canopy fixes, protective coatings, concrete remediation, and compliant documentation.',
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Script id="marathon-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="marathon-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-5">
                <Image src="/marathonlogo.png" alt="Marathon" width={56} height={56} className="object-contain mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">Marathon Insight Audit Fixes</h1>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Contractor-level repairs and compliance documentation to resolve Marathon Insight findings—fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:info@thecurecompany.com" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Request Audit Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link href="/home" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center">
                  View Services
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
                <p className="text-sm text-gray-300">Dispenser repainting, bollards/curbs, fascia color-matching</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Hammer className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Structural Repairs</h3>
                </div>
                <p className="text-sm text-gray-300">Canopy fascia/panel replacement, minor exterior repairs</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Shield className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Compliance Support</h3>
                </div>
                <p className="text-sm text-gray-300">Map findings to contractor-level fixes and plan timelines</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Camera className="w-6 h-6 mr-2" />
                  <h3 className="font-semibold">Photo Documentation</h3>
                </div>
                <p className="text-sm text-gray-300">Before/after evidence organized for internal review or appeals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marathon Audit Remediation Details */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/marathon-logo-full-color.jpg" 
            alt="" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Fix Marathon Insight Findings with Contractor-Level Work</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We prioritize structural and finish improvements over housekeeping to meet audit standards and protect brand appearance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-neutral-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Common Issues We Address</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Faded/chipped paint at dispensers, bollards, curbs</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Damaged canopy fascia or loose panels</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Stained or cracked concrete requiring remediation</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Appearance of signage, compliance markings, ADA paint refresh</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-neutral-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Documentation & Submission</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Before/after images aligned to findings</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> File naming and organization for internal teams</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Optional appeal support with evidence packet</li>
                <li className="flex"><Check className="w-5 h-5 mr-2 mt-0.5" /> Timelines that meet program expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process & CTAs */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">On-site review of Marathon findings, scope, and schedule.</p>
            </div>
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Remediation</h3>
              <p className="text-gray-600 dark:text-gray-300">Painting, coatings, and structural improvements completed by our crew.</p>
            </div>
            <div className="rounded-lg border border-gray-100 dark:border-neutral-800 p-6">
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-300">Organized before/after photos for internal submission or appeals.</p>
            </div>
          </div>
          <div className="mt-10 flex gap-3">
            <a href="mailto:info@thecurecompany.com" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-100">Request Free Audit Support</a>
            <Link href="/mmp" className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-900">See Shell MMP Fixes</Link>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Regional Coverage: TN • MS • AR</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            We support Marathon-branded retailers in Memphis, Nashville, Jackson, Little Rock, and surrounding markets with appearance remediation and audit compliance support.
          </p>
        </div>
      </section>

      {/* Photo Evidence: Before & After */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Before & After: Marathon Audit Remediation</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Examples of contractor-level improvements appropriate for resolving Marathon Insight findings.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
              <Image src="/dirty1.jpg" alt="Marathon site before remediation with chipped paint and stains" width={800} height={600} className="w-full h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-300">Before: Chipped paint and stained concrete</figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
              <Image src="/dirty2.jpg" alt="Marathon canopy fascia damage prior to contractor repair" width={800} height={600} className="w-full h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-300">Before: Canopy fascia damage</figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
              <Image src="/cure1.jpg" alt="After remediation: fresh paint and repaired fascia suitable for audit documentation" width={800} height={600} className="w-full h-56 object-cover" />
              <figcaption className="p-3 text-sm text-gray-700 dark:text-gray-200 font-medium">After: Fresh paint, repaired fascia, clean surfaces</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Resolve Your Marathon Audit Findings</h2>
          <p className="text-xl text-gray-300 mb-8">Contractor-level fixes and documentation from The Cure Co.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@thecurecompany.com" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Support</a>
            <Link href="/home" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
