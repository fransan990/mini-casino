import { useState } from "react";
import { useNavigate } from "react-router";

import type { SignInDTO } from "../dto/SignInDTO";
import type { AuthSession } from "../../domain/models/AuthSession";
import { signIn as signInUseCase } from "../use-cases/signIn";

export function useSignIn() {
  const navigate = useNavigate();

  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  async function signIn(dto: SignInDTO) {
    try {
      setIsLoading(true);
      setAuthError(null);

      const authSession = await signInUseCase(dto);

      setSession(authSession);
      localStorage.setItem("mini-casino-session", JSON.stringify(authSession));

      navigate("/profile");
    } catch {
      setAuthError("Could not sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    session,
    isLoading,
    authError,
    signIn,
  };
}
