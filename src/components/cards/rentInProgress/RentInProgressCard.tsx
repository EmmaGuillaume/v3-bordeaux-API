import { Bicycle } from '@v3-bordeaux/akar-icons'

import { useRentCostCalculator, useRentTimeCalculator } from '@/lib/hooks'

import type { RentInProgress } from '@/_types/cykleo/rent'
import { Duration } from 'luxon'

export interface IRentInProgressCard {
  rent: RentInProgress
  userHasSubscription: boolean
}

export default function RentInProgressCard({ rent, userHasSubscription }: IRentInProgressCard) {
  const { freeTimeLeftInMinutes, isFreeTimeSpent, paidTimeInMinutes } = useRentTimeCalculator(rent)
  const { rentCost } = useRentCostCalculator(paidTimeInMinutes, userHasSubscription)

  const paidTime = Duration.fromObject({ minutes: paidTimeInMinutes }).shiftTo(
    'days',
    'hours',
    'minutes'
  )

  return (
    <article className="card-primary relative flex flex-col gap-2">
      <h3>Mon vélo</h3>

      <div className="flex space-between items-end gap-4">
        <Bicycle strokeWidth="2" className="w-14 h-14" />

        {isFreeTimeSpent ? (
          <div className="flex flex-col">
            <div className="flex items-end gap-1">
              {paidTime.days ? (
                <>
                  <span className="text-h2 font-bold">{paidTime.days}</span>
                  <span>j</span>
                </>
              ) : (
                ''
              )}
              {paidTime.hours ? (
                <>
                  <span className="text-h2 font-bold">{paidTime.hours}</span>
                  <span>h</span>
                </>
              ) : (
                ''
              )}
              {paidTime.minutes ? (
                <>
                  <span className="text-h2 font-bold">{paidTime.minutes}</span>
                  <span>min</span>
                </>
              ) : (
                ''
              )}
            </div>
            <span>Temps payant ({rentCost}€)</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex items-end gap-1">
              <span className="text-h2 font-bold">{freeTimeLeftInMinutes}</span>
              <span>min</span>
            </div>
            <span>Temps gratuit</span>
          </div>
        )}
      </div>
    </article>
  )
}
