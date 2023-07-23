import { mockProps as stationCardMockProps } from '@/components/cards/station/StationCard.mocks'
import { IStationSearchBar } from './StationSearchBar'

const base: IStationSearchBar = {
  stationsList: [stationCardMockProps.base.station]
}

export const mockProps = {
  base
}
