import { DateTime } from 'luxon'
import { IRentInProgressCard } from './RentInProgressCard'

const freeTimeLeft: IRentInProgressCard = {
  rent: {
    id: 1,
    beginDate: DateTime.now().minus({ minutes: 11 }).toISO(),
    status: '',
    organization: 0,
    stationStart: 0,
    subscription: 0,
    bike: 0,
    cardNumber: ''
  },
  userHasSubscription: true
}

const minutesPaidTime: IRentInProgressCard = {
  rent: {
    id: 1,
    beginDate: DateTime.now().minus({ minutes: 33 }).toISO(),
    status: '',
    organization: 0,
    stationStart: 0,
    subscription: 0,
    bike: 0,
    cardNumber: ''
  },
  userHasSubscription: true
}

const hoursPaidTime: IRentInProgressCard = {
  rent: {
    id: 1,
    beginDate: DateTime.now().minus({ hours: 2 }).toISO(),
    status: '',
    organization: 0,
    stationStart: 0,
    subscription: 0,
    bike: 0,
    cardNumber: ''
  },
  userHasSubscription: true
}

const daysPaidTime: IRentInProgressCard = {
  rent: {
    id: 1,
    beginDate: DateTime.now().minus({ days: 1, minutes: 31 }).toISO(),
    status: '',
    organization: 0,
    stationStart: 0,
    subscription: 0,
    bike: 0,
    cardNumber: ''
  },
  userHasSubscription: true
}

export const mockProps = {
  freeTimeLeft,
  minutesPaidTime,
  hoursPaidTime,
  daysPaidTime
}
