'use client'

import Image from 'next/image'
import { biggerFont } from '../../fonts'
import { SwimMap } from './SwimMap'

export function Challenge() {
  return (
    <section className="relative bg-white">
      {/* Main Title Section with Wave Background */}
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden mx-auto max-w-7xl mt-8 px-4">
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
          <SwimMap />
        </div>
      </div>
    </section>
  )
} 