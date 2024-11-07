'use client'

import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { cn } from '../../lib/utils'
import React from 'react'

export function WalletButton({ className }: { className?: string }) {
  const { connected } = useWallet()

  return (
    <WalletMultiButton 
      className={cn(
        'wallet-adapter-button-trigger',
        connected ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700',
        className
      )}
    />
  )
} 