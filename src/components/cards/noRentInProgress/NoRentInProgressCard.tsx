export interface INoRentInProgressCard {}

export default function NoRentInProgressCard({}: INoRentInProgressCard) {
  return (
    <article className="card-primary relative flex flex-col gap-2">
      <h3>Pas de location en cours</h3>
    </article>
  )
}
