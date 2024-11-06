import { Challenge } from '@/app/components/home/Challenge'
import { Causes } from '@/app/components/home/Causes'
import { Swimmers } from '@/app/components/home/Swimmers'
import { DonationProgress } from '@/app/components/home/DonationProgress'
import { Navigation } from '@/app/components/common/Navigation'
import { Footer } from '@/app/components/common/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Challenge />
      <Causes />
      <Swimmers />
      <DonationProgress />
      <Footer />
    </main>
  )
}
