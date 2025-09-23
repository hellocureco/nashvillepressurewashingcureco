import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Cure Company - Coming Soon',
  description: 'The Cure Company is currently under construction. Check back soon for updates.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white px-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          The Cure Company
        </h1>
        <p className="text-2xl md:text-3xl text-blue-100 mb-8">
          Under Construction
        </p>
        <p className="text-lg text-blue-200 max-w-md mx-auto">
          We&apos;re working on something amazing. Check back soon for updates.
        </p>
      </div>
    </main>
  )
}
