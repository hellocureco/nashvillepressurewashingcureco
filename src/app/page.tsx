import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Nashville Pressure Washing | Professional Exterior Cleaning Services',
  description: 'Professional pressure washing services in Nashville, TN. Residential & commercial exterior cleaning, parking lot striping, and surface restoration. Free estimates!',
  keywords: 'Nashville pressure washing, exterior cleaning, commercial pressure washing, residential pressure washing, parking lot striping, Nashville TN',
  openGraph: {
    title: 'Nashville Pressure Washing | Professional Exterior Cleaning Services',
    description: 'Professional pressure washing services in Nashville, TN. Residential & commercial exterior cleaning, parking lot striping, and surface restoration.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nashvillepressurewashing.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StructuredData />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
