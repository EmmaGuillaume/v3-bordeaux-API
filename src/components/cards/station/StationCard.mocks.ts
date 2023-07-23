import { IStationCard } from './StationCard'

const base: IStationCard = {
  station: {
    id: 0,
    name: 'St michel',
    address: '',
    insee: '',
    latitude: '',
    longitude: '',
    connexionState: '',
    nbPlaceAvailable: 10,
    nbBikeAvailable: 10,
    nbElectricBikeAvailable: 10,
    typeVlsPlus: '',
    updatedAt: ''
  }
}

export const mockProps = {
  base
}
