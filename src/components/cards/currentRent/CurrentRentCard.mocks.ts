import { ICurrentRentCard } from './CurrentRentCard'

const base: ICurrentRentCard = {
  rent: {
    id: 1,
    beginDate: '',
    status: '',
    organization: 0,
    stationStart: 0,
    subscription: 0,
    bike: 0,
    cardNumber: ''
  },
  stationStart: {
    id: 0,
    name: '',
    address: '',
    insee: '',
    latitude: '',
    longitude: '',
    connexionState: '',
    nbPlaceAvailable: 0,
    nbBikeAvailable: 0,
    nbElectricBikeAvailable: 0,
    typeVlsPlus: '',
    updatedAt: ''
  }
}

export const mockProps = {
  base
}
