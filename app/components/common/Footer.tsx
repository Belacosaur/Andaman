'use client'

import Link from 'next/link'
import Image from 'next/image'
import { biggerFont } from '../../fonts'
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import React from 'react'

export function Footer() {
  return (
    <footer className="bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
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

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://twitter.com/andaman50k" 
              target="_blank"
              className="text-gray-600 hover:text-[#38A4B6] transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </Link>
            <Link 
              href="https://instagram.com/andaman50k" 
              target="_blank"
              className="text-gray-600 hover:text-[#38A4B6] transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com/company/andaman50k" 
              target="_blank"
              className="text-gray-600 hover:text-[#38A4B6] transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-gray-500">
          © 2024 The Andaman 50K. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 