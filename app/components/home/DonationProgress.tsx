'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../wallet/WalletButton'

export function DonationProgress() {
  const { connected } = useWallet()
  const goalAmount = 50000
  const currentAmount = 15000 // This would come from your backend/blockchain
  const progress = (currentAmount / goalAmount) * 100

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Support Our Cause</h2>
        
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span>{currentAmount} / {goalAmount} SOL</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-blue-600 rounded-full h-4"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!connected ? (
            <div className="text-center">
              <p className="mb-4">Connect your wallet to donate</p>
              <WalletButton />
            </div>
          ) : (
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">
                Donate
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 