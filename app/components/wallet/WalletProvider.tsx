'use client'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import dynamic from 'next/dynamic'
import React from 'react'

require('@solana/wallet-adapter-react-ui/styles.css')

const WalletProviderComponent = ({ children }: { children: React.ReactNode }) => {
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = clusterApiUrl(network)
  
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ]

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  )
}

export const WalletProvider = dynamic(
  () => Promise.resolve(WalletProviderComponent),
  { 
    ssr: false
  }
)