import type { Station } from '@/_types/tbm/ws/station'
import AccountButton from '@/components/buttons/account/AccountButton'
import PositionButton from '@/components/buttons/position/PositionButton'
import RentInfoCard from '@/components/cards/rentInfo/RentInfoCard'
import StationSearchBar from '@/components/stationSearchBar/StationSearchBar'

export interface IMapLayout {
  stationsList: Station[]
}

export default function MapLayout({ stationsList }: IMapLayout) {
  return (
    <main className="h-full flex flex-col justify-between">
      <div className="container flex items-start gap-2">
        <StationSearchBar stationsList={stationsList} />
        <AccountButton />
      </div>

      <div className="container flex justify-between items-end gap-2">
        <RentInfoCard isLogged={true} userHasSubscription={false} />

        <div className="flex flex-col gap-2">
          <PositionButton />
        </div>
      </div>
    </main>
  )
}
