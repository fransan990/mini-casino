import { Link } from "react-router";

export function SlotsPage() {
  return (
    <main>
      <h1>Slots</h1>
      <p>Slots game screen.</p>

      <Link to="/lobby">Back to lobby</Link>
    </main>
  );
}
