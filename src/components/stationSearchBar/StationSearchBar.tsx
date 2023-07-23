import { Backdrop, Input } from '@/components/atoms'
import StationCard from '@/components/cards/station/StationCard'
import { ArrowLeft, Search } from '@v3-bordeaux/akar-icons'
import { useState } from 'react'

import type { Station } from '@/_types/tbm/ws/station'

export interface IStationSearchBar {
  stationsList: Station[]
}

export default function StationSearchBar({ stationsList }: IStationSearchBar) {
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>(null)

  const stationsMatch =
    searchText === ''
      ? []
      : stationsList
          .filter((station) => station.name.toLowerCase().includes(searchText?.toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className="pointer-events-none w-full h-full">
      {isSearching && <Backdrop onClick={() => setIsSearching(false)} />}

      <section className="flex flex-col h-full">
        <div className="pointer-events-auto relative bg-background-2 border-2 border-text-1 rounded-full flex items-center">
          {isSearching ? (
            <button
              onClick={() => setIsSearching(false)}
              className="absolute left-0 top-0 px-3 h-full flex items-center"
              aria-label="Fermer la recherche"
            >
              <ArrowLeft className="h-6 w-6 text-text-3" />
            </button>
          ) : (
            <div className="pointer-events-none absolute left-0 top-0 px-3 h-full flex items-center">
              <Search className="h-6 w-6 text-text-3" />
            </div>
          )}

          <Input
            value={searchText || ''}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setIsSearching(true)}
            className="pl-12 !bg-transparent !border-0 w-full"
            placeholder="Rechercher une station"
          />
        </div>

        {isSearching && (
          <ul className="relative flex flex-col gap-2 overflow-scroll pt-6 pb-32">
            {stationsMatch.map((station) => (
              <li key={station.id}>
                <StationCard station={station} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  )
}
