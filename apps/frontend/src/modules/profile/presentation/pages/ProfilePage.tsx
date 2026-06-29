import { Link } from "react-router";

export function ProfilePage() {
  return (
    <main>
      <h1>Profile</h1>
      <p>User stats, chips and game history will appear here.</p>

      <Link to="/">Back to home</Link>
    </main>
  );
}
