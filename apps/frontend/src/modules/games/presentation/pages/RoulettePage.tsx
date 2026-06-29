import { Link } from "react-router";

export function RoulettePage() {
  return (
    <main>
      <h1>Roulette</h1>
      <p>Roulette game screen.</p>

      <Link to="/lobby">Back to lobby</Link>
    </main>
  );
}
