'use client'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet'
import { LatLngTuple } from 'leaflet'

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

export function SwimMap() {
  useEffect(() => {
    // Fix for SSR
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/marker-icon-2x.png',
      iconUrl: '/marker-icon.png',
      shadowUrl: '/marker-shadow.png',
    })
  }, [])

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border-4 border-[#38A4B6]">
      <MapContainer 
        center={[7.7807, 98.5784]} // Centered between Phi Phi and Phuket
        zoom={11} 
        className="h-full w-full"
        attributionControl={false}
        minZoom={9}  // Prevent zooming out too far
        maxZoom={13} // Prevent zooming in too far
        maxBounds={[
          [7.5, 98.2],  // Southwest coordinates
          [8.0, 98.9]   // Northeast coordinates
        ]}
        maxBoundsViscosity={1.0} // Makes the bounds "solid" - no panning outside
      >
        {/* Base map layer */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution=""
          className="map-tiles-satellite"
        />
        
        {/* Overlay layer for clarity */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
          attribution=""
          className="map-tiles-overlay"
        />
        
        {/* Route line - made it more visible against satellite imagery */}
        <Polyline 
          positions={swimRoute}
          color="#38A4B6"
          weight={4}
          opacity={0.9}
        />

        {/* Waypoint markers */}
        {waypoints.map((waypoint) => (
          <Marker 
            key={waypoint.id} 
            position={waypoint.position as [number, number]}
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

        {/* Swimmer markers at start position */}
        {[1, 2, 3].map((swimmer) => (
          <Marker 
            key={`swimmer-${swimmer}`}
            position={waypoints[0].position as [number, number]}
            icon={swimmerIcon}
          >
            <Popup>
              Swimmer {swimmer}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
} 