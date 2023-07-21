import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { useGetStationQuery } from '@/redux/services/cykleoApi'
import { useGetVcubsQuery } from '@/redux/services/tbmWSApi'

import type { Rent } from '@/_types/cykleo/rent'
import type { Station } from '@/_types/tbm/ws/station'
import { Alarm, Money } from '@v3-bordeaux/akar-icons'
import RentInProgressMap from './Maps/RentInProgressMap'

const freeTimeInMinutes = 30

interface RentInProgressResumeProps {
  rent: Rent
}

export default function RentInProgressResume({ rent }: RentInProgressResumeProps) {
  const [stationStart, setStationStart]: [Station, Function] = useState(null)

  const vcubsQuery = useGetVcubsQuery()
  const stationStartQuery = useGetStationQuery({
    stationId: rent.stationStart
  })

  useEffect(() => {
    if (!vcubsQuery.data || !stationStartQuery.data) {
      return
    }

    let stationName = stationStartQuery.data.assetStation.commercialName.toLowerCase()
    let stationFound = vcubsQuery.data.lists.find((station) => {
      return station.name.toLowerCase() === stationName
    })

    if (stationFound) {
      setStationStart(stationFound)
    }
  }, [vcubsQuery, stationStartQuery])

  const beginDateParsed = dayjs(rent.beginDate)
  const nowDateParsed = dayjs()
  const durationInMinutes = nowDateParsed.diff(beginDateParsed, 'm')
  const timeLeftInMinutes = freeTimeInMinutes - durationInMinutes
  const isFreeTimeSpent = timeLeftInMinutes <= 0
  const paidTime = -timeLeftInMinutes

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-h2">Mon trajet</h2>

      {stationStart && (
        <article className="rounded-2xl border-2 border-text-1 overflow-hidden">
          <RentInProgressMap stationStart={stationStart} />
        </article>
      )}

      <div className="grid grid-cols-4 gap-x-4">
        <article className="col-span-3 flex items-center gap-4 text-sm md:text-md rounded-2xl border-2 border-text-1 bg-primary-1 px-4 py-2">
          <Alarm />
          <div>
            <p>{durationInMinutes} min d&apos;emprunt</p>
            {isFreeTimeSpent ? (
              <p>{paidTime} min payantes</p>
            ) : (
              <p>Encore {timeLeftInMinutes} min gratuites</p>
            )}
          </div>
        </article>

        <button className="col-span-1 flex flex-col items-center gap-1 text-sm md:text-md rounded-2xl border-2 border-text-1 bg-cta-1 px-4 py-2">
          <Money />
          <span>Tarifs</span>
        </button>
      </div>
    </section>
  )
}
