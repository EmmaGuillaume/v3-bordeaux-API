import { Location } from '@v3-bordeaux/akar-icons'

export interface IPositionButton {}

export default function PositionButton({}: IPositionButton) {
  return (
    <button className="button-cta p-2">
      <Location />
    </button>
  )
}
