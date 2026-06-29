import { Link } from "react-router";

export function LobbyPage() {
  return (
    <main>
      <h1>Lobby</h1>
      <p>Choose a game to start playing.</p>

      <nav>
        <Link to="/games/roulette">Roulette</Link>
        {" | "}
        <Link to="/games/slots">Slots</Link>
        {" | "}
        <Link to="/games/blackjack">Blackjack</Link>
      </nav>
    </main>
  );
}
