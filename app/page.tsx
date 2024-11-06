import { Challenge } from '@/components/home/Challenge'
import { Causes } from '@/components/home/Causes'
import { Swimmers } from '@/components/home/Swimmers'
import { DonationProgress } from '@/components/home/DonationProgress'
import { Navigation } from '@/components/common/Navigation'
import { Footer } from '@/components/common/Footer'
import { SwimMap } from '@/components/home/SwimMap'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Challenge />
      <SwimMap />
      <Swimmers />
      <Causes />
      <DonationProgress />
      <Footer />
    </main>
  )
}
