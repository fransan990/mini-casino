import { Link } from "react-router";

import { SignInForm } from "../components/SignInForm";

export function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/">Back to home</Link>

        <h1>Sign in</h1>
        <p>Access your Mini Casino account.</p>

        <SignInForm />
      </section>
    </main>
  );
}
