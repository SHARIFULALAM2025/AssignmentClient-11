import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Coverage = () => {
  const [center, setCenter] = useState([])
  // console.log(center)
   const myRef = useRef(null)

  useEffect(() => {
    fetch('/ServiceCenter.json')
      .then((result) => result.json())
      .then((data) => {
        setCenter(data)
      })
  }, [])
  const position = [23.685, 90.3563]
  return (
    <div>
      <h1 className="md:text-2xl font-semibold text-xl md:font-bold text-center dark:text-white">Our Coverage Area</h1>
      <div className="w-full h-[800px]">
        {center.length > 0 && (
          <MapContainer
            ref={myRef}
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="w-full h-[800px] "
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {center.map((item,index) => (
              <Marker position={[item.latitude, item.longitude]} key={index}>
                <Popup>
                  <strong>{item.district}</strong>
                  <br></br>service area:
                  <strong>{item.covered_area.join(', ')}</strong>
                  <br /> Easily customizable.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  )
}

export default Coverage
