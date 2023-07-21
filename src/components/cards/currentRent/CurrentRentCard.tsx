import { H2 } from '@/components/atoms'
import { Bicycle } from '@v3-bordeaux/akar-icons'
import dayjs from 'dayjs'

import type { RentInProgress } from '@/_types/cykleo/rent'
import type { Station } from '@/_types/tbm/ws/station'

export interface ICurrentRentCard {
  rent: RentInProgress
  stationStart: Station
}

const freeTimeInMinutes = 30

function CurrentRentCard({ rent, stationStart }: ICurrentRentCard) {
  const beginDateParsed = dayjs(rent.beginDate)
  const nowDateParsed = dayjs()
  const durationInMinutes = nowDateParsed.diff(beginDateParsed, 'm')
  const timeLeftInMinutes = freeTimeInMinutes - durationInMinutes
  const isFreeTimeSpent = timeLeftInMinutes <= 0
  const paidTime = -timeLeftInMinutes

  return (
    <article className="relative rounded-3xl text-text-1 bg-secondary-1 font-sans shadow-brut px-5 py-4 border-2 border-text-1">
      <article className="flex flex-col">
        <span>Mon vélo</span>
        <div className="flex space-between items-end gap-4">
          <Bicycle strokeWidth="2" className="w-14 h-14" />
          <div className="flex flex-col">
            {isFreeTimeSpent ? (
              <>
                <hgroup className="flex items-end gap-1">
                  <H2 className="font-bold">{paidTime}</H2>
                  <span>min</span>
                </hgroup>
                <span>Temps payant</span>
              </>
            ) : (
              <>
                <span>{timeLeftInMinutes} minute(s)</span>
                <span>Temps gratuit</span>
              </>
            )}
          </div>
        </div>
      </article>

      <article className="hidden absolute bottom-0 left-0 right-0 w-full h-44">
        <span>Durée: {durationInMinutes} minute(s)</span>
        <span>
          Du {beginDateParsed.format('DD/MM/YYYY à HH[h]mm')} au{' '}
          {nowDateParsed.format('DD/MM/YYYY à HH[h]mm')}
        </span>
        <span>Parti de {stationStart?.name}</span>
      </article>
    </article>
  )
}

export default CurrentRentCard
