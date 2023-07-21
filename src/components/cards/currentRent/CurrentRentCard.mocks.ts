import { ICurrentRentCard } from './CurrentRentCard'
import dayjs from 'dayjs'

const freeTimeLeft: ICurrentRentCard = {
  rent: {
    id: 1,
    beginDate: dayjs().subtract(9, 'minutes').toISOString(),
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

const paidTime: ICurrentRentCard = {
  rent: {
    id: 1,
    beginDate: dayjs().subtract(31, 'minutes').toISOString(),
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
  freeTimeLeft,
  paidTime
}
