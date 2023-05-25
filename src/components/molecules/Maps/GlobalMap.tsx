'use client'
import { useEffect, useState } from 'react'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'
import { Circle, Fill, Stroke, Style, Text } from 'ol/style'
import { useGetVcubsQuery } from '@/redux/services/tbmWSApi'

import Map from '@/components/molecules/Maps/Map/Map'
import { osm, vector } from '@/components/molecules/Maps/Source'
import PositionLayer from '@/components/molecules/Maps/Layers/PositionLayer'
import { Layers, TileLayer, VectorLayer } from '@/components/molecules/Maps/Layers'

import type { Station } from '@/_types/tbm/ws/station'

//TODO(Louis): Never import things from the pages here, in order to avoid circular imports
// bien vu : j'ai inversé l'import, la page import le component et les types associés
export type bikesOrPlaces = 'bikes' | 'places'

const stationPlacesStyle = (station: Station) => {
  const nbPlaces = station.nbPlaceAvailable
  let bgColor = '#a3c5fe'
  if (nbPlaces === 0) {
    bgColor = '#ffa1a1'
  } else if (nbPlaces < 5) {
    bgColor = '#ffd0a1'
  }
  return new Style({
    text: new Text({
      font: 'bold 12px sans-serif',
      text: nbPlaces.toString()
    }),
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: bgColor
      }),
      stroke: new Stroke({
        color: '#000'
      })
    })
  })
}

const stationBikesStyle = (station: Station) => {
  const nbBikes = station.nbBikeAvailable + station.nbElectricBikeAvailable

  let bgColor = '#a3c5fe'
  if (nbBikes === 0) {
    bgColor = '#ffa1a1'
  } else if (nbBikes < 5) {
    bgColor = '#ffd0a1'
  }
  return new Style({
    text: new Text({
      font: 'bold 12px sans-serif',
      text: nbBikes.toString()
    }),
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: bgColor
      }),
      stroke: new Stroke({
        color: '#000'
      })
    })
  })
}

type GlobalMapProps = {
  showBikesOrPlaces: bikesOrPlaces
}

const bordeauxCoord = fromLonLat([-0.5795, 44.83])

export default function GlobalMap({ showBikesOrPlaces }: GlobalMapProps) {
  const vcubsQuery = useGetVcubsQuery()

  const [center, setCenter] = useState(bordeauxCoord)
  const [zoom, setZoom] = useState(12)
  const [stationsFeatures, setStationsFeatures] = useState(null)

  useEffect(() => {
    if (vcubsQuery.data) {
      const stationsList = vcubsQuery.data.lists
      setStationsFeatures(
        stationsList.map((station: Station) => {
          const stationCoord = fromLonLat([
            parseFloat(station.longitude),
            parseFloat(station.latitude)
          ])

          let stationFeature = new Feature({
            geometry: new Point(stationCoord)
          })

          if (showBikesOrPlaces === 'bikes') {
            stationFeature.setStyle(stationBikesStyle(station))
          } else {
            stationFeature.setStyle(stationPlacesStyle(station))
          }

          return stationFeature
        })
      )
    }
  }, [vcubsQuery, showBikesOrPlaces])

  return (
    <Map
      center={center}
      zoom={zoom}
      className="!aspect-auto"
      style={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <Layers>
        <TileLayer source={osm()} zIndex={0} />
        <VectorLayer source={vector({ features: stationsFeatures })} />
        <PositionLayer />
      </Layers>
    </Map>
  )
}