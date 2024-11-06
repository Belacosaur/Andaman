'use client'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import { LatLngTuple } from 'leaflet'
import { GiWaterDrop, GiWaves, GiShipWheel, GiShrimp } from 'react-icons/gi' // Different ocean icons
import { IoEarth } from 'react-icons/io5' // Import earth icon

// Updated waypoints based on the image
const waypoints = [
  { 
    id: 1, 
    position: [7.746598519892269, 98.76933835940949] as LatLngTuple,
    description: 'Phi Phi Islands',
    location: 'Starting Point',
    day: 'Day 1 Start',
    image: '/Koi Phi Phi.jpg'
  },
  { 
    id: 2, 
    position: [7.745868494373943, 98.61387494321093] as LatLngTuple,
    description: 'Koi Zone',
    location: 'First Rest Stop',
    day: 'End of Day 1 - 18km'
  },
  { 
    id: 3, 
    position: [7.763570144941255, 98.47883356652684] as LatLngTuple,
    description: 'Ko MaiThon',
    location: 'Checkpoint',
    day: 'Day 2 - 15km',
    image: '/Koi Mai Thon.jpg'
  },
  { 
    id: 4, 
    position: [7.788382629629947, 98.40286495874568] as LatLngTuple,
    description: 'Route Bend',
    location: 'Checkpoint',
    day: 'Day 2 Progress'
  },
  { 
    id: 5, 
    position: [7.814370, 98.394861] as LatLngTuple,
    description: 'AoYon Beach',
    location: 'Finish Line',
    day: 'Day 3 - 11.5km',
    image: '/Ao Yon Beach.jpg'
  }
]
// Route line for the swim path
const swimRoute = waypoints.map(wp => wp.position)
// Custom marker icon
const swimmerIcon = L.icon({
  iconUrl: '/swimmer-marker.png', // You'll need to add this icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

// Add swimmer offsets for spacing
const swimmerOffsets = [
  [0, 0],        // Swimmer 1 - center
  [0.006, 0],    // Swimmer 2 - right
  [-0.006, 0]    // Swimmer 3 - left
] as const

const swimmers = [
  {
    name: "Swimmer 1",
    image: "/images/swimmer1.jpg",
    description: "Professional swimmer with multiple channel crossings."
  },
  {
    name: "Swimmer 2",
    image: "/images/swimmer2.jpg",
    description: "Endurance athlete and ocean conservation advocate."
  },
  {
    name: "Swimmer 3",
    image: "/images/swimmer3.jpg",
    description: "Record-holding long-distance swimmer."
  }
]

// Helper function to interpolate between two points
const interpolatePosition = (start: LatLngTuple, end: LatLngTuple, fraction: number): LatLngTuple => {
  return [
    start[0] + (end[0] - start[0]) * fraction,
    start[1] + (end[1] - start[1]) * fraction
  ]
}

export function SwimMap() {
  const mapRef = useRef<L.Map>(null)
  
  // Initialize swimmer positions with data from your Swimmers component
  const [swimmerPositions, setSwimmerPositions] = useState(
    swimmers.map((swimmer, index) => ({
      id: index + 1,
      position: waypoints[0].position,
      segment: 0,
      progress: 0,
      name: swimmer.name,
      image: swimmer.image,
      description: swimmer.description
    }))
  )

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSwimmerPositions(prevPositions => {
        return prevPositions.map((swimmer, index) => {
          let { segment, progress } = swimmer
          progress += 0.003

          if (progress >= 1) {
            progress = 0
            segment = segment + 1 >= waypoints.length - 1 ? 0 : segment + 1
          }

          const start = waypoints[segment].position
          const end = waypoints[segment + 1].position
          const basePosition = interpolatePosition(start, end, progress)
          
          // Add offset based on swimmer index
          const offset = index === 0 ? 0 : index === 1 ? 0.006 : -0.006
          const newPosition: LatLngTuple = [
            basePosition[0],
            basePosition[1] + offset
          ]

          return {
            ...swimmer,
            position: newPosition,
            segment,
            progress
          }
        })
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Fix for SSR
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/marker-icon-2x.png',
      iconUrl: '/marker-icon.png',
      shadowUrl: '/marker-shadow.png',
    })

    // Add click handler to ensure map is focusable
    const mapContainer = document.querySelector('.leaflet-container') as HTMLElement
    if (mapContainer) {
      mapContainer.tabIndex = 0 // Make the container focusable
      mapContainer.addEventListener('click', () => {
        mapContainer.focus()
      })
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Large Earth icon in background */}
      <div className="absolute -z-10 -top-20 -right-20 text-[#38A4B6] opacity-10">
        <IoEarth className="w-96 h-96 transform rotate-12" />
      </div>

      {/* Decorative ocean elements */}
      <div className="absolute -z-10 left-0 bottom-0 text-[#38A4B6] opacity-20">
        <GiWaves className="w-32 h-32 transform -rotate-12" />
      </div>
      <div className="absolute -z-10 right-0 bottom-0 text-[#38A4B6] opacity-20">
        <GiShipWheel className="w-40 h-40 transform rotate-12" />
      </div>
      <div className="absolute -z-10 left-1/4 top-0 text-[#38A4B6] opacity-10">
        <GiWaterDrop className="w-24 h-24 transform rotate-45" />
      </div>
      <div className="absolute -z-10 right-1/4 top-0 text-[#38A4B6] opacity-10">
        <GiShrimp className="w-28 h-28 transform -rotate-45" />
      </div>

      <div className="h-[600px] w-full map-container">
        <MapContainer 
          ref={mapRef}
          center={[7.7807, 98.5784]}
          zoom={11} 
          className="h-full w-full"
          attributionControl={false}
          zoomControl={false}
          minZoom={9}
          maxZoom={13}
          maxBounds={[
            [7.5, 98.2],
            [8.0, 98.9]
          ]}
          maxBoundsViscosity={1.0}
        >
          {/* Base map layers */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution=""
            className="map-tiles-satellite"
          />
          
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
            attribution=""
            className="map-tiles-overlay"
          />
          
          {/* Route line */}
          <Polyline 
            positions={swimRoute}
            color="#38A4B6"
            weight={4}
            opacity={0.9}
          />

          {/* Waypoint markers - rendered last (higher z-index) */}
          {waypoints.map((waypoint) => (
            <Marker 
              key={waypoint.id} 
              position={waypoint.position}
              icon={L.divIcon({
                className: 'custom-div-icon',
                html: `<div class="marker-pin bg-[#38A4B6] w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">${waypoint.id}</div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
              })}
            >
              <Popup>
                <div className="p-3 min-w-[250px]">
                  <h3 className="font-bold text-[#38A4B6] text-lg mb-2">{waypoint.description}</h3>
                  {waypoint.image && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <img 
                        src={waypoint.image} 
                        alt={waypoint.description}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}
                  <p className="text-sm text-gray-700 mb-1">{waypoint.location}</p>
                  <p className="text-sm text-gray-600 font-medium">{waypoint.day}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Swimmer markers - rendered last (higher z-index) */}
          {swimmerPositions.map((swimmer) => (
            <Marker 
              key={`swimmer-${swimmer.id}`}
              position={swimmer.position}
              icon={L.divIcon({
                className: 'swimmer-marker',
                html: `<div class="swimmer-dot bg-[#38A4B6] w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">${swimmer.id}</div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
              })}
            >
              <Popup>
                <div className="p-3 min-w-[250px]">
                  <h3 className="font-bold text-[#38A4B6] text-lg mb-2">{swimmer.name}</h3>
                  <p className="text-sm text-gray-700 mb-1">{swimmer.description}</p>
                  <p className="text-sm text-gray-600">Currently at: {waypoints[swimmer.segment].description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
} 