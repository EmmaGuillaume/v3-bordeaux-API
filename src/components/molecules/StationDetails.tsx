import { Bicycle, BicycleElectric, Parking } from '@v3-bordeaux/akar-icons'

import type { Station } from '@/_types/tbm/ws/station'

export interface StationDetailsProps {
  station: Station
}

export function StationDetails({ station }: StationDetailsProps) {
  return (
    station && (
      <article>
        <h2 className="text-h2 text-left mb-4">{station.name}</h2>

        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Bicycle className="h-8 w-8" />
            <span>{station.nbBikeAvailable}</span>
          </div>

          <div className="flex items-center gap-2">
            <BicycleElectric className="h-8 w-8" />
            <span>{station.nbElectricBikeAvailable}</span>
          </div>

          <div className="flex items-center gap-2">
            <Parking className="h-8 w-8" />
            <span>{station.nbPlaceAvailable}</span>
          </div>
        </div>
      </article>
    )
  )
}
