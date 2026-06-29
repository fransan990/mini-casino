import { Link } from "react-router";

import { SignUpForm } from "../components/SignUpForm";

export function RegisterPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/">Back to home</Link>

        <h1>Sign up</h1>
        <p>Create your Mini Casino account.</p>

        <SignUpForm />
      </section>
    </main>
  );
}
