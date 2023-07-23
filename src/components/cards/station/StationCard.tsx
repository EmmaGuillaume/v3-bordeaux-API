import { Bicycle, BicycleElectric, Parking } from '@v3-bordeaux/akar-icons'

import type { Station } from '@/_types/tbm/ws/station'

export interface IStationCard {
  station: Station
}

export default function StationCard({ station }: IStationCard) {
  return (
    <article className="p-2 bg-primary-1 border-2 border-text-1 rounded-2xl w-full">
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
}
