import { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Nashville Pressure Washing Company | The Cure Company | Free Estimates',
  description: 'Professional pressure washing services in Nashville, TN. House washing, driveway cleaning, parking lot striping, commercial cleaning. Licensed, insured, same-day service available. Call (615) 555-0123 for free estimate!',
  keywords: 'Nashville pressure washing, pressure washing Nashville TN, house washing Nashville, driveway cleaning Nashville, parking lot striping Nashville, commercial pressure washing Nashville, exterior cleaning Nashville, soft wash Nashville, deck cleaning Nashville, sidewalk cleaning Nashville, gas station cleaning Nashville, ADA compliance Nashville, pressure washing near me, best pressure washing Nashville',
  openGraph: {
    title: 'Nashville Pressure Washing Company | The Cure Company | Free Estimates',
    description: 'Professional pressure washing services in Nashville, TN. House washing, driveway cleaning, parking lot striping, commercial cleaning. Licensed, insured, same-day service available.',
    type: 'website',
    locale: 'en_US',
    url: 'https://thecurecompany.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StructuredData />
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
