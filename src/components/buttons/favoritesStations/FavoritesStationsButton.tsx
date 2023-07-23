import { Star } from '@v3-bordeaux/akar-icons'

export interface IFavoritesStationsButton {}

export default function FavoritesStationsButton({}: IFavoritesStationsButton) {
  return (
    <button className="button-cta p-2">
      <Star />
    </button>
  )
}
