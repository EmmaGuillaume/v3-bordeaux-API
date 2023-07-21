export interface INotLoggedCard {}

export default function NotLoggedCard({}: INotLoggedCard) {
  return (
    <article className="card-primary relative flex flex-col gap-2">
      <h3 className="font-bold">Vous n&apos;êtes pas connecté</h3>
      <p>Lier votre compte TBM vous permet d&apos;afficher la location en cours et plus encore !</p>
    </article>
  )
}
