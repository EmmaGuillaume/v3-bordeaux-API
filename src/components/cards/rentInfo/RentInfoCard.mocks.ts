import { mockProps as rentInProgressMockProps } from '../rentInProgress/RentInProgressCard.mocks'
import { IRentInfoCard } from './RentInfoCard'

const noRentInProgress: IRentInfoCard = {
  isLogged: true,
  userHasSubscription: true
}

const rentInProgress: IRentInfoCard = {
  isLogged: true,
  rent: rentInProgressMockProps.hoursPaidTime.rent,
  userHasSubscription: true
}

export const mockProps = {
  noRentInProgress,
  rentInProgress
}
