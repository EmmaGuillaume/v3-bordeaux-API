import { Bicycle, Parking } from '@v3-bordeaux/akar-icons'
import { useState } from 'react'

export interface IBikesOrPlacesButton {}

export default function BikesOrPlacesButton({}: IBikesOrPlacesButton) {
  const [showBikes, setShowBikes] = useState<boolean>(true)

  return (
    <button
      className="button-cta bg-background-3 p-2 flex flex-col gap-4 relative"
      onClick={() => setShowBikes(!showBikes)}
    >
      <div
        className={
          'absolute left-0 top-0 rounded-full w-full aspect-square bg-cta-1 ring-2 ring-text-1 transition-transform delay-300 ' +
          (showBikes ? '' : 'translate-y-full')
        }
      ></div>
      <Bicycle className="z-10" />
      <Parking className="z-10" />
    </button>
  )
}
