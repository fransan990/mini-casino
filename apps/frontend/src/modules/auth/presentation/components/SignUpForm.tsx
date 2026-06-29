import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { useSignUp } from "../../application/hooks/useSignUp";
import {
  signUpSchema,
  type SignUpFormValues,
} from "../schemas/signUpSchema";

export function SignUpForm() {
  const { signUp, isLoading, authError } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: SignUpFormValues) {
    await signUp(values);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" {...register("username")} />
        {errors.username ? (
          <p className="form-error">{errors.username.message}</p>
        ) : null}
      </div>

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

      <div className="form-field">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword ? (
          <p className="form-error">{errors.confirmPassword.message}</p>
        ) : null}
      </div>

      {authError ? <p className="form-error">{authError}</p> : null}

      <button type="submit" disabled={isSubmitting || isLoading}>
        {isSubmitting || isLoading ? "Creating account..." : "Sign up"}
      </button>

      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}
