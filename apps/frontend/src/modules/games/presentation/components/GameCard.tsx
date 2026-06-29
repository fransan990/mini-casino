import { Link } from "react-router";
import type { Game } from "../../domain/models/Game";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article>
      <h2>{game.name}</h2>
      <p>{game.description}</p>

      <Link to={`/games/${game.slug}`}>Play</Link>
    </article>
  );
}
