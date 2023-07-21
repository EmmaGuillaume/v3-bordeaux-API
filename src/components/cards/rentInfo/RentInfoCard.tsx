import { RentInProgress } from '@/_types/cykleo/rent'
import NoRentInProgressCard from '../noRentInProgress/NoRentInProgressCard'
import NotLoggedCard from '../notLogged/NotLoggedCard'
import RentInProgressCard from '../rentInProgress/RentInProgressCard'

export interface IRentInfoCard {
  isLogged: boolean
  rent?: RentInProgress
  userHasSubscription: boolean
}

export default function RentInfoCard({ isLogged, rent, userHasSubscription }: IRentInfoCard) {
  if (!isLogged) {
    return <NotLoggedCard />
  }
  if (!rent) {
    return <NoRentInProgressCard />
  }

  return <RentInProgressCard rent={rent} userHasSubscription={userHasSubscription} />
}
