'use client'

import Image from 'next/image'
import { biggerFont } from '../../fonts'
import dynamic from 'next/dynamic'
import { 
  GiWaterDrop, 
  GiWaves, 
  GiShipWheel, 
  GiShrimp, 
  GiSeahorse, 
  GiCoral, 
  GiSharkFin, 
  GiSeaStar 
} from 'react-icons/gi'

export function Challenge() {
  return (
    <section className="relative bg-white">
      {/* Ocean-themed decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top section decorations */}
        <div className="absolute top-20 left-10 text-[#38A4B6] opacity-10">
          <GiSeahorse className="w-32 h-32 transform -rotate-12" />
        </div>
        <div className="absolute top-40 right-20 text-[#38A4B6] opacity-10">
          <GiSharkFin className="w-40 h-40 transform rotate-45" />
        </div>

        {/* Middle section decorations */}
        <div className="absolute top-1/2 left-20 text-[#38A4B6] opacity-10">
          <GiCoral className="w-36 h-36" />
        </div>
        <div className="absolute top-1/2 right-10 text-[#38A4B6] opacity-10">
          <GiSeaStar className="w-28 h-28 transform rotate-45" />
        </div>

        {/* Bottom section decorations */}
        <div className="absolute bottom-40 left-40 text-[#38A4B6] opacity-10">
          <GiWaves className="w-32 h-32 transform -rotate-12" />
        </div>
        <div className="absolute bottom-20 right-32 text-[#38A4B6] opacity-10">
          <GiShipWheel className="w-40 h-40 transform rotate-12" />
        </div>
      </div>

      {/* Wrapper for first view content */}
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
        {/* Main Title Section with Wave Background */}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mx-auto max-w-7xl px-4">
          <div className="absolute inset-0">
            <Image
              src="/wave.gif"
              alt="Wave animation"
              fill
              className="object-cover grayscale"
              priority
            />
            {/* Black gradient overlay - increased opacity on left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          
          {/* Text Overlay - Centered */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
            <h1 className={`${biggerFont.className} text-[#38A4B6] leading-none text-[85px] md:text-[110px] font-black tracking-tight`}>
              THE ANDAMAN 50K
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <h2 className="text-white text-3xl font-bold whitespace-nowrap">
                PHUKET
              </h2>
              <p className="text-white text-lg max-w-xl text-left">
                Join 3 Phuket expats as they attempt to swim from Koh Phi Phi to 
                Phuket (~50km) this December, all in the name of charity!
              </p>
            </div>
          </div>
        </div>

        {/* Challenge Section with Image */}
        <div className="relative mt-12">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-[180px] w-full rounded-lg overflow-hidden">
              <Image
                src="/challenge.png"
                alt="The Challenge"
                fill
                className="object-cover"
                priority
              />
              <div className="relative z-10 h-full px-8 flex justify-between items-center">
                <h2 className={`${biggerFont.className} text-white text-5xl font-black`}>
                  THE CHALLENGE
                </h2>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Donate Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative mt-16 px-4">
        {/* Blue circles - updated gradient colors */}
        <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#8FD8F4] to-[#38A4B6] opacity-100" />
        <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#8FD8F4] to-[#38A4B6] opacity-100" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Coin Image */}
          <div className="relative w-[450px] h-[450px] mx-auto mb-8">
            <Image
              src="/coin.png"
              alt="Challenge coin"
              fill
              className="object-contain"
            />
          </div>

          {/* Description Text */}
          <p className="text-[#262629] text-xl leading-relaxed">
            The goal is to swim from Koh Phi Phi to Phuket, covering approximately 50km of open ocean 
            in the Andaman Sea. Our goal is to finish the swim in 2 days, battling heat exposure, 
            changing currents, jellyfish, heavy boat traffic, and so many more unknowns. Join us on this 
            endurance quest as we aim to raise money for the 2 causes listed below.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative mt-16 px-4">
        <div className="mx-auto max-w-7xl">
        </div>
      </div>
    </section>
  )
} 