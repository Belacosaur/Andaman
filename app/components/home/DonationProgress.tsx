'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../wallet/WalletButton'
import { biggerFont } from '@/app/fonts'

export function DonationProgress() {
  const { connected } = useWallet()
  const goalAmount = 100000
  const currentAmount = 48000 // This would come from your backend/blockchain
  const progress = (currentAmount / goalAmount) * 100

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#38A4B6] p-8 rounded-lg">
          {/* Title */}
          <h2 className={`${biggerFont.className} text-white text-6xl md:text-7xl font-black tracking-tight text-center mb-12`}>
            DONATION PROGRESS
          </h2>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative h-4 bg-[#262629]/30 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-[#E2C0FF]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-white">
              <span>{progress}%</span>
              <span>{goalAmount.toLocaleString()} USD</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-center max-w-3xl mx-auto text-sm">
            Suspendisse molestie purus vel aliquet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Aenean eu vehicula mi. Suspendisse venenatis congue velit, vel pellentesque sapien varius nec. Sed convallis egestas scelerisque.
          </p>

          {/* Wallet Button - Optional */}
          {!connected && (
            <div className="mt-8 text-center">
              <WalletButton className="bg-white text-[#38A4B6] px-6 py-2 rounded-full hover:bg-white/90 transition-colors" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 