import { Person } from '@v3-bordeaux/akar-icons'

export interface IAccountButton {}

export default function AccountButton({}: IAccountButton) {
  return (
    <button className="button-cta p-2">
      <Person />
    </button>
  )
}
