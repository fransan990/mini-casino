import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { useSignIn } from "../../application/hooks/useSignIn";
import {
  signInSchema,
  type SignInFormValues,
} from "../schemas/signInSchema";

export function SignInForm() {
  const { signIn, isLoading, authError } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInFormValues) {
    await signIn(values);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email ? <p className="form-error">{errors.email.message}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password ? (
          <p className="form-error">{errors.password.message}</p>
        ) : null}
      </div>

      {authError ? <p className="form-error">{authError}</p> : null}

      <button type="submit" disabled={isSubmitting || isLoading}>
        {isSubmitting || isLoading ? "Signing in..." : "Sign in"}
      </button>

      <p>
        Do not have an account? <Link to="/register">Create one</Link>
      </p>
    </form>
  );
}
