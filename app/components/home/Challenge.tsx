'use client'

import Image from 'next/image'
import { biggerFont } from '../../fonts'
import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
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
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapInstanceRef.current && mapRef.current) {
      const defaultView = {
        center: [7.7807, 98.5784] as [number, number],
        zoom: 11
      }

      // Define boundaries (slightly larger than the route area)
      const southWest = L.latLng(7.70, 98.35)  // Bottom left corner
      const northEast = L.latLng(7.85, 98.80)  // Top right corner
      const bounds = L.latLngBounds(southWest, northEast)

      const map = L.map(mapRef.current, {
        zoomControl: false,  // Remove default zoom buttons
        center: defaultView.center,
        zoom: defaultView.zoom,
        maxBounds: bounds,         // Set the boundaries
        maxBoundsViscosity: 1.0,   // How hard the boundaries resist being crossed
        minZoom: 10,              // Prevent zooming out too far
        maxZoom: 14               // Prevent zooming in too far
      })
      
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(map)

      // Define waypoints
      const waypoints = [
        { 
          id: 1, 
          position: [7.746598519892269, 98.76933835940949] as [number, number],
          description: 'Phi Phi Islands',
          location: 'Starting Point',
          day: 'Day 1 Start',
          image: '/Koi Phi Phi.jpg'
        },
        { 
          id: 2, 
          position: [7.745868494373943, 98.61387494321093] as [number, number],
          description: 'Koi Zone',
          location: 'First Rest Stop',
          day: 'End of Day 1 - 18km'
        },
        { 
          id: 3, 
          position: [7.763570144941255, 98.47883356652684] as [number, number],
          description: 'Ko MaiThon',
          location: 'Checkpoint',
          day: 'Day 2 - 15km',
          image: '/Koi Mai Thon.jpg'
        },
        { 
          id: 4, 
          position: [7.788382629629947, 98.40286495874568] as [number, number],
          description: 'Route Bend',
          location: 'Checkpoint',
          day: 'Day 2 Progress'
        },
        { 
          id: 5, 
          position: [7.814370, 98.394861] as [number, number],
          description: 'AoYon Beach',
          location: 'Finish Line',
          day: 'Day 3 - 11.5km',
          image: '/Ao Yon Beach.jpg'
        }
      ]

      // Create route line from waypoint positions
      const routeCoordinates = waypoints.map(point => point.position)
      L.polyline(routeCoordinates, {
        color: '#38A4B6',
        weight: 3,
        dashArray: '10, 10',
        opacity: 0.7
      }).addTo(map)

      // Add markers with custom green dot style
      waypoints.forEach(point => {
        const marker = L.divIcon({
          className: 'custom-marker',
          html: `<div class="w-4 h-4 bg-[#4CAF50] rounded-full border-2 border-white shadow-lg"></div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        })

        L.marker(point.position, { icon: marker })
          .bindPopup(`
            <div class="p-3 min-w-[250px]">
              <h3 class="font-bold text-[#38A4B6] text-lg mb-2">${point.description}</h3>
              ${point.image ? `
                <div class="mb-3 rounded-lg overflow-hidden">
                  <img 
                    src="${point.image}" 
                    alt="${point.description}"
                    class="w-full h-32 object-cover"
                  />
                </div>
              ` : ''}
              <p class="text-sm text-gray-700 mb-1">${point.location}</p>
              <p class="text-sm text-gray-600 font-medium">${point.day}</p>
            </div>
          `)
          .addTo(map)
      })

      mapInstanceRef.current = map
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

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
      <div className="relative mt-16 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={mapRef}
            className="h-[800px] w-full rounded-[400px_400px_400px_400px] overflow-hidden"
          />
        </div>
      </div>
    </section>
  )
} 