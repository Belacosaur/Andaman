'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WalletProvider } from '@/app/components/wallet/WalletProvider'
import { WalletButton } from '@/app/components/wallet/WalletButton'
import { biggerFont } from '@/app/fonts'

export function Navigation() {
  return (
    <WalletProvider>
      <nav className="bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="The Andaman 50K"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
              <span className={`${biggerFont.className} text-[#38A4B6] text-3xl font-black tracking-tight`}>
                THE ANDAMAN 50K
              </span>
            </Link>

            <div className="flex items-center gap-8">
              <Link href="#challenge" className="text-gray-900 hover:text-[#38A4B6]">
                THE CHALLENGE
              </Link>
              <Link href="#causes" className="text-gray-900 hover:text-[#38A4B6]">
                THE CAUSES
              </Link>
              <WalletButton className="ml-4 bg-[#38A4B6] text-white px-4 py-2 rounded-md" />
            </div>
          </div>
        </div>
      </nav>
    </WalletProvider>
  )
} 