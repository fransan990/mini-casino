import { Link } from "react-router";

export function HomePage() {
  return (
    <main>
      <h1>Mini Casino</h1>

      <p>
        Web casino app with fictitious chips, DDD architecture and separated
        frontend/backend.
      </p>

      <nav>
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link>
        {" | "}
        <Link to="/lobby">Enter Lobby</Link>
      </nav>
    </main>
  );
}
