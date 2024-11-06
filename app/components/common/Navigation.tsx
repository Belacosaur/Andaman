'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WalletButton } from '@/app/components/wallet/WalletButton'

export function Navigation() {
  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="The Andaman 50K"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link href="#challenge" className="text-gray-900 hover:text-[#38A4B6]">
              THE CHALLENGE
            </Link>
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
  )
} 