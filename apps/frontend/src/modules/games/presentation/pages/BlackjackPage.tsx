import { Link } from "react-router";

export function BlackjackPage() {
  return (
    <main>
      <h1>Blackjack</h1>
      <p>Blackjack game screen.</p>

      <Link to="/lobby">Back to lobby</Link>
    </main>
  );
}
