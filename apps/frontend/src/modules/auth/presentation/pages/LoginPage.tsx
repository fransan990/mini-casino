import { Link } from "react-router";

export function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <p>Access your Mini Casino account.</p>

      <Link to="/">Back to home</Link>
    </main>
  );
}
