import type { Station } from '@/_types/tbm/ws/station'
import AccountButton from '@/components/buttons/account/AccountButton'
import StationSearchBar from '@/components/stationSearchBar/StationSearchBar'

export interface IMapLayout {
  stationsList: Station[]
}

export default function MapLayout({ stationsList }: IMapLayout) {
  return (
    <main>
      <div className="container z-40 top-0 left-0 right-0 flex items-start gap-2">
        <StationSearchBar stationsList={stationsList} />
        <AccountButton />
      </div>
    </main>
  )
}
